
---

## 🧪 **Testing Instructions**

You can test the API using:

- **Postman**
- **curl**
- **HTTPie**
- **VSCode REST Client Extension**

### Example curl Commands

```bash
# Get all items
curl http://localhost:3000/items

# Get item by ID
curl http://localhost:3000/items/1

# Create item
curl -X POST http://localhost:3000/items \
     -H "Content-Type: application/json" \
     -d '{"name":"NewItem","description":"Sample"}'

# Update item
curl -X PUT http://localhost:3000/items/1 \
     -H "Content-Type: application/json" \
     -d '{"name":"UpdatedName"}'

# Delete item
curl -X DELETE http://localhost:3000/items/1