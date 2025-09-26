function add(a , b) {
    return a + b;
}

function subtract(a , b) {
    return a - b;
}

function multiply(a , b) {
    return a * b;
}

function divide(a , b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

function normalizeOp(op) {
    const map = { '×': '*', '÷': '/', '−': '-', '+': '+', '-': '-', '*': '*', '/': '/' };
    const n = map[op];
    if (!n) throw new Error(`Unknown operator: ${op}`);
    return n;
}

function operate(op, a, b) {
    const nOp = normalizeOp(op);

    if (typeof a !== 'number' || typeof b !== 'number' || Number.isNaN(a) || Number.isNaN(b)) {
        throw new TypeError('operate() expects numeric a and b');
    }

    const fns = {
        '+': add,
        '-': subtract,
        '*': multiply,
        '/': divide,
    };

    return fns[nOp](a, b);
}

const state = {
    current: '0',
    lhs: null,
    operator: null,
    awaitingRhs: false,
    justEvaluated: false,
};

function updateDisplay() {
    const display = document.querySelector('#display');
    display.textContent = state.current;
}

function handleDigit(d) {
    if (state.justEvaluated || state.current === 'Error') {
        state.current = d;
        state.justEvaluated = false;
        state.awaitingRhs = false;
    }
    else {
        if (state.current==='0') state.current = d;
        else if (state.current==='-0') state.current = '-' + d;
        else state.current += d;
        state.awaitingRhs = false;
    }
    updateDisplay();
}

function setupUI() {
    const btns = document.querySelectorAll('button');

    btns.forEach(btn=>{
        btn.addEventListener('click', ()=>{
            const d = btn.getAttribute('data-digit');
            if (d) handleDigit(d);

            const decimal = btn.getAttribute('data-decimal');
            if (decimal) handleDecimal();

            const action = btn.getAttribute('data-action');
            if (action==="clear") handleClear();
            if (action==='sign') handleSign();
            if (action==='percent') handlePercent();
            if (action==='equals') handleEquals();

            const op = btn.getAttribute('data-op');
            if (op) handleOperator(op);
        });
    });
}

setupUI();

function handleDecimal() {
    state.awaitingRhs = false;
    
    if (state.current.includes('.')) return;
    else if (state.current === '0') state.current = '0.'; 
    else state.current += '.';
    
    updateDisplay();
}

function handleClear() {
    state.current = '0';
    state.lhs = null;
    state.operator = null;
    state.awaitingRhs = false;
    state.justEvaluated = false;
    updateDisplay();
}

function handleSign() {
    if (state.current==='0') return;

    state.current = state.current.startsWith('-') ? state.current.slice(1) : '-' + state.current;

    updateDisplay();
}

function handlePercent() {
    const n = Number(state.current);

    state.current = String(n/100);

    updateDisplay();
}

function handleOperator(op) {

    if (state.current === 'Error') return;

    const rhs = Number(state.current);

    if (state.operator == null) {
        state.lhs = rhs;
        state.operator = op;
        state.awaitingRhs = true;
        state.justEvaluated = false;
        state.current = '0';
        return;
    }
    else if (state.awaitingRhs) {
        state.operator = op;
        return;
    }

    try {
        const result = operate(state.operator, state.lhs, rhs);
        state.lhs = result;
        state.operator = op;
        state.awaitingRhs = true;
        state.current = ''

        const display = document.querySelector('#display');
        if (display) display.textContent = String(result);
    } catch (error) {
        state.current = 'Error';
        state.lhs = null;
        state.operator = null;
        state.awaitingRhs = false;
        state.justEvaluated = true;

        const display = document.querySelector('#display');
        if (display) display.textContent = 'Error';
    }
}

function handleEquals() {
    if (state.current === 'Error') return ;

    if (state.operator == null || state.lhs == null) {
        state.justEvaluated = true;
        return;
    }

    if (state.awaitingRhs) {
        state.justEvaluated = true;
        return;
    }

    const rhs = Number(state.current);
    try {
        const result = operate(state.operator, state.lhs, rhs);
        state.current = String(result);
        state.lhs = null;
        state.operator = null;
        state.awaitingRhs = false;
        state.justEvaluated = true;
        updateDisplay();
    } catch (error) {
        state.current = 'Error';
        state.lhs = null;
        state.operator = null;
        state.awaitingRhs = false;
        state.justEvaluated = true;
        updateDisplay();
    }
}

function handleBackspace() {
    if (state.current.length==1) {
        state.current = '0';
    }
    else {
        state.current = state.current.slice(0,-1);
    }

    updateDisplay();
}

window.addEventListener('keydown', (e)=>{
    if (e.key==='Backspace') {
        e.preventDefault();
        handleBackspace();
    }
});


window.Calc = { add, subtract, multiply, divide, operate };