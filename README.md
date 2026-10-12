# 🧩 React Components Demo

A simple React learning project demonstrating core React concepts including components, props, class components vs functional components, and JSX.

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Setup & Installation](#setup--installation)
- [Concepts Demonstrated](#concepts-demonstrated)

---

## ✨ Features

- **Class Components** – Props usage with class-based components
- **Functional Components** – Props usage with functional components (JSX)
- **Home Component** – Basic component rendering
- **Props Passing** – Demonstrates passing and consuming props (`nav`, `vay`)

---

## 🛠️ Tech Stack

| Technology         | Version   |
|--------------------|-----------|
| React              | 19.x      |
| JavaScript (ES6+)  | ✅        |

---

## 📁 Project Structure

```
componantsdemo/
├── public/
├── src/
│   ├── App.js                # Main component - renders child components
│   ├── App.css
│   ├── Home.js               # Basic Home component
│   ├── Home.css
│   ├── Props.js              # Class component with props
│   ├── PropsByFunction.jsx   # Functional component with props
│   ├── index.js              # React entry point
│   └── index.css
├── package.json
└── README.md
```

---

## 📦 Prerequisites

- **Node.js** 18+ and **npm** 9+

---

## 🚀 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DeshmaneShubham/react-components-demo.git
   cd react-components-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

   The app will open at `http://localhost:3000`

---

## 🎓 Concepts Demonstrated

### 1. Class Component with Props (`Props.js`)
```jsx
<Props nav="Shubham" vay={27} />
```

### 2. Functional Component with Props (`PropsByFunction.jsx`)
```jsx
<PropsByFunction nav="Ram" vay={27} />
```

### 3. Simple Component (`Home.js`)
```jsx
<Home />
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with ❤️ by Shubham Deshmane
