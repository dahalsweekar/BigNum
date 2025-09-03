# BigNum - Ceil Rounding

This project is a simple web-based utility that allows users to round a number to a specified number of decimal places. It is built with plain HTML, CSS, and JavaScript.

---

## 🚀 Live Demo

You can try the live version here:  
👉 [(https://dahalsweekar.github.io/BigNum---Rounding-Function/)]

---

## ✨ Features

- User-friendly and centered UI
- Customizable rounding precision (e.g., 1, 2, or 3 decimal places)
- Always rounds **up** (ceil logic), ensuring the result is greater than or equal to the original number
- Validates user inputs for correctness

---

## 🔍 How It Works

The function `RoundOff()` performs the rounding in the following steps:

1. **Input Collection**:  
   The user provides:
   - A number to round (`numIn`)
   - The number of decimal places to round to (`roundId`)

2. **Rounding Logic**:
   - The number is split into two halves (before and after decimal point).
   - The result is passed through Rounding function where the logic is to check from the last digit (of the second half) and sequentially sum ip to the decimal places number set by the user.
   - The result is concatinated.
