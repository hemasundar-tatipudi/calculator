# 🔢 Calculator

A modern **on-screen calculator** built with **HTML, CSS, and JavaScript**.
Supports immediate-execution operations (like classic handheld calculators), keyboard input, and a polished UI.

---

## ✨ Live Demo

👉 [Try Calculator](https://hemasundar-tatipudi.github.io/calculator/)

---

## 🎮 How to Use

1. **Enter numbers** → Click digit buttons or type on your keyboard.
2. **Operators** → Supports `+`, `−`, `×`, `÷`.

   * Chaining works like: `12 + 7 − 1 =` → `18`.
3. **Special Keys**:

   * `C` → Clear all.
   * `⌫` → Backspace (delete last digit).
   * `±` → Toggle sign.
   * `%` → Percentage.
   * `=` or `Enter` → Evaluate.
4. **Keyboard Support** → Digits, operators, decimal, Enter, Esc, and Backspace.
5. **Error Handling** → Division by zero shows a snarky error, calculator resets safely.

---

## 🛠 Built With

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5\&logoColor=fff\&style=for-the-badge)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3\&logoColor=fff\&style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript\&logoColor=000\&style=for-the-badge)

---

## 📂 Project Structure

```
calculator/
│
├── index.html    # Main HTML file (display + buttons)
├── script.js     # Calculator logic & event handling
├── styles.css    # Styling and layout
└── README.md     # Project documentation
```

---

## 🛠 Features

* Four basic operations: add, subtract, multiply, divide.
* Extra functions: clear, backspace, sign toggle (±), percent.
* Decimal input with prevention of multiple `.`.
* Smart display formatting (rounding, exponential notation for large/small numbers).
* Immediate execution model with operator chaining.
* Error handling for divide-by-zero with playful messages.
* Full keyboard support (digits, operators, Enter, Esc, Backspace).
* Responsive UI styled like a modern calculator.
* Disabled parentheses keys (reserved for future enhancement).

---

## 🚀 Getting Started

1. Clone this repo:

   ```bash
   git clone https://github.com/hemasundar-tatipudi/calculator.git
   ```

2. Open `index.html` in your browser.

3. Start calculating!

---

## 📚 Notes

* Built entirely with **vanilla JavaScript, HTML, and CSS** — no external libraries.
* Designed as part of [The Odin Project](https://www.theodinproject.com/) curriculum practice.
* Parentheses support planned as a future upgrade (would require expression parsing).

---

## 📖 Acknowledgment

This project was built for practice as part of an **assignment in [The Odin Project](https://www.theodinproject.com/)** curriculum.

---
