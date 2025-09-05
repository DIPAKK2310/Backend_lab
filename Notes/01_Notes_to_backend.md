# Backend Development Tools

## 1. Nodemon

- Auto restart server on file changes.
- Install:

```bash
 npm install --save-dev nodemon
```

## 2. dotenv

- Manage environment variables.
- Install :

  ```bash
    npm install dotenv
  ```

- Use in code:

```bash
  import dotenv from "dotenv";

  dotenv.config();

  console.log(process.env.DB_URL);
```

- Example: DB_URL, JWT_SECRET

## 3. Postman / Thunder Client

- API testing without frontend.

## 4. ESLint + Prettier

- For clean, consistent code.
- Install :

```bash
 npm install --save-dev --save-exact prettier
```

- Run:

```bash
  npx prettier . --write
```

- Check :

```bash
  npx prettier . --check
```

- --check is like --write, but only checks that files are already formatted, rather than overwriting them.

## 5. Morgan

- Logs HTTP requests.
- Install :

```bash
  npm install morgan

```

- Usage :

```bash
  import morgan from "morgan";
  app.use(morgan("dev"));
```

## 6. nodemailer

- Send emails from backend.
- Install :

```bash
  npm install nodemailer

```

- Example:

```bash
    import nodemailer from "nodemailer";

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your_email@gmail.com",
      pass: "your_password"
    }
  });

  transporter.sendMail({
    from: "your_email@gmail.com",
    to: "receiver@gmail.com",
    subject: "Test Mail",
    text: "Hello from Node.js!"
  });

```

## 7. Jest / Mocha + Chai

- Testing frameworks.
- Jest install:

```bash
  npm install --save-dev jest

```

- Add to package.json:

```bash
 "scripts": {
  "test": "jest"
  }
```

- Run tests:

```bash
  npm test
```

## 8. Git + GitHub

- Version control.
- Git + Github Basics :

```bash
  git init
  git add .
  git commit -m "first commit"
  git branch -M main
  git remote add origin
   https://github.com/DIPAKK2310/repo_name.git
  git push -u origin main

```

## 9. Database GUIs

- MongoDB Compass, DBeaver.

## 10. Docker

- Containerize apps (advanced).
- Check version :

```bash
  docker --version

```

- Run MongoDB container:

```bash
  docker run -d -p 27017:27017 --name
  mymongo mongo


```

- Run Node app container(example) :

```bash
  docker build -t my-node-app .

  docker run -d -p 3000:3000 my-node-app


```
