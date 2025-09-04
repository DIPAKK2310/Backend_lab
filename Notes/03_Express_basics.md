# 🚀 Express.js Notes

## 1. Basics
- **What is Express?**  
  A minimal and flexible Node.js framework that simplifies building web applications and APIs.
- **Why use Express?**  
  - Cleaner syntax than Node’s `http` module.  
  - Easy routing, middleware, and request handling.  
- **Install & Run**  
  ```bash
  npm install express


# 🛠 Express.js Practice Roadmap (Beginner → Intermediate)

## ✅ Beginner Level

1. **Hello World Server**
   - Create an Express server on port 3000.
   - Route: `/` → returns `"Hello World 🌍"`.

2. **Basic Routing**
   - Routes:
     - `/` → Home
     - `/about` → About page
     - `/contact` → Contact info
   - Use `res.send()`.

3. **JSON API Basics**
   - Route: `/api/products`
   - Return an array of JSON objects:
     ```json
     [
       { "id": 1, "name": "Shoes", "price": 1999 },
       { "id": 2, "name": "Watch", "price": 4999 }
     ]
     ```

4. **Params and Query Strings**
   - Route: `/api/users/:id` → Return `"User ID is X"`.
   - Route: `/api/search?name=Dipak` → Return `"Searching for Dipak"`.

---

## 🚀 Intermediate Level

5. **CRUD API (In-Memory Data)**
   - Routes:  
     - `GET /api/items` → List all items  
     - `POST /api/items` → Add new item  
     - `PUT /api/items/:id` → Update item  
     - `DELETE /api/items/:id` → Delete item  

6. **Middleware Practice**
   - Create custom middleware to log:
     - Method
     - URL
     - Timestamp
   - Try adding `morgan` as well.

7. **Static File Hosting**
   - Create a `public/` folder with:
     - `index.html`
     - `style.css`
   - Serve with `express.static()`.

8. **Error Handling**
   - Add global error middleware.
   - Example: Return `404` if route not found.

9. **Environment Variables**
   - Use `dotenv` to set:
     - `PORT`
     - `DB_URL`
   - Access with `process.env`.

10. **Router & Modularization**
    - Split routes into:
      - `routes/userRoutes.js`
      - `routes/productRoutes.js`
    - Import into main server file.

---

## 🏆 Stretch Goals (Level-Up)

11. **Mini Authentication**
    - Create `POST /login` → return success if username/password match.
    - Use `bcryptjs` to hash passwords.

12. **Database Integration (MongoDB)**
    - Connect Express app with MongoDB Atlas.
    - CRUD API for users/products.

13. **Project: Blog API**
    - Users can create, read, update, delete posts.
    - Bonus: Add comments.

14. **Project: E-Commerce API**
    - Products, categories, users.
    - Authentication with JWT.
    - Cart & orders.

---

## 📌 Summary
- **Beginner**: Learn routes, JSON, params, middleware basics.  
- **Intermediate**: CRUD API, static files, modular routes, error handling.  
- **Advanced Path**: Add authentication + database → build real projects.  
