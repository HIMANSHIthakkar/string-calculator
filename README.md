# 🧮 String Calculator (TDD Approach)

A simple string-based calculator that performs basic arithmetic operations (`add`, `sub`, `mul`, `div`) on comma-separated numbers.  
Built with **Node.js** and developed using the **Test-Driven Development (TDD)** approach using **Jest**.

---

## 🧪 Test-Driven Development (TDD)

This project follows the **TDD** cycle:

1. **Write a failing test** for the smallest piece of functionality
2. **Implement** just enough code to make the test pass
3. **Refactor** while keeping tests green ✅

Every feature, including error handling and arithmetic operations, was written **after writing tests first** in `calculator.test.js`.

---

## 📦 Features

- ✅ `add`, `sub`, `mul`, `div` operations
- ✅ Input format: `operation:num1,num2,...`
- ✅ Handles:
  - Negative numbers
  - Empty or null input
  - Invalid formats or non-numeric values
  - Division by zero
  - Unsupported operations
- ✅ **Test-Driven** with full unit test coverage

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/string-calculator.git
cd string-calculator
