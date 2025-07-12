# REST API with Express.js

This is a simple REST API built with Express.js that performs CRUD operations on an in-memory data store.

## 📦 Features

- GET `/items` – Retrieve all items
- GET `/items/:id` – Retrieve a single item by ID
- POST `/items` – Create a new item
- PUT `/items/:id` – Update an item by ID
- DELETE `/items/:id` – Delete an item by ID

## 🚀 Setup

1. Clone the repository
2. Run `npm install`
3. Start the server with `node app.js`

## 🧪 Testing with Postman

### Example Requests

#### Get All Items

- **Method**: GET
- **URL**: `http://localhost:3000/items`

#### Get Item by ID

- **Method**: GET
- **URL**: `http://localhost:3000/items/1`

#### Create New Item

- **Method**: POST
- **URL**: `http://localhost:3000/items`
- **Body (JSON)**:
  ```json
  {
    "name": "New Item",
    "description": "This is a new item"
  }