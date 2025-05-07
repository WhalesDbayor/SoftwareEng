
---

# 📄 Mini Project: Fetch and Display List from an API

## 📌 Objective

The goal of this mini project is to build a **functional React application** that:

* Fetches data from a public API.
* Displays it using a **reusable list component**.
* Follows best practices in component reusability, separation of concerns, and error handling.

---

## 🧩 Features

* ✅ Data fetching with `fetch` or `axios`
* ✅ Graceful loading and error states
* ✅ Modular, reusable `ListComponent`
* ✅ Custom rendering support via props
* ✅ Clean and semantic HTML (`<ul>`, `<li>`, etc.)

---

## 🛠️ Tech Stack

* **React (Functional Components)**
* **JavaScript (ES6+)**
* **Hooks**: `useState`, `useEffect`
* **CSS** (optional styling)

---

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-api-list-project.git
   cd react-api-list-project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

---

## 🧠 Project Structure

```
src/
├── components/
│   └── ListComponent.jsx       # Reusable list renderer
├── App.jsx                     # Main parent component
└── index.js                    # Entry point
```

---

## 🚀 How It Works

### 1. **Fetching Data**

* Data is fetched from a public API (e.g., JSONPlaceholder, Rick & Morty).
* Uses `useEffect` to trigger the fetch on component mount.
* The result is stored in local state with `useState`.

### 2. **ListComponent**

* Accepts a list of items via props.
* Optionally receives a custom `renderItem` function for flexible rendering.
* Handles empty list cases gracefully.

### 3. **Parent Component**

* Calls the API and passes the data to `ListComponent`.
* Displays a loading message while fetching.
* Displays an error if the request fails.

---

## 🧪 Example Usage

```jsx
<ListComponent 
  items={data} 
  renderItem={(item) => <li key={item.id}>{item.title}</li>} 
/>
```

---

## ⚠️ Edge Cases Handled

* Empty lists
* API failures
* Duplicate keys
* Repeated rendering issues

---

## 📚 Public APIs You Can Use

* [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
* [Rick and Morty API](https://rickandmortyapi.com/)
* [PokeAPI](https://pokeapi.co/)

---

## 🙌 Best Practices Followed

* Separation of concerns
* Component reusability
* Clean and accessible markup
* Graceful error and loading handling

---