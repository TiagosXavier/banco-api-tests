# Banco API Tests

This project contains automated tests for the REST API of [Banco API](https://github.com/juliodelimas/banco-api).  
The goal is to validate the main endpoints, ensuring quality and proper functionality of the application.

---

## 🚀 Objective
Provide an automated test suite to validate the endpoints of a banking system API, covering both success and failure scenarios.

---

## 🛠️ Tech Stack
- **Language**: JavaScript (Node.js)
- **Test Framework**: [Mocha](https://mochajs.org/)
- **Assertions**: [Chai](https://www.chaijs.com/)
- **HTTP Requests**: [Supertest](https://github.com/visionmedia/supertest)
- **Reports**: [Mochawesome](https://www.npmjs.com/package/mochawesome)

---

## 📂 Project Structure

```
banco-api-tests/
│── test/                # Automated tests
│   ├── accounts.test.js  # Account-related tests
│   ├── clients.test.js   # Client-related tests
│   └── ...               # Other tests
│── mochawesome-report/   # HTML reports generated after execution
│── package.json          # Project dependencies
│── .env                  # Environment configuration (not included in repo)
```

---

## ⚙️ `.env` File

You must create a `.env` file in the project root with the following format:

```
BASE_URL=http://localhost:3000
```

> Where `BASE_URL` represents the API endpoint to be tested.

---

## ▶️ Running the Tests

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the tests:
   ```bash
   npm test
   ```

3. Run the tests with Mochawesome reports:
   ```bash
   npm run test:report
   ```

---

## 📊 Reports

After running `npm run test:report`, the HTML reports will be generated in the following directory:

```
/mochawesome-report/mochawesome.html
```

Open the file in your browser to see the detailed results.

---

## 📚 Dependencies Documentation

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://github.com/visionmedia/supertest)
- [Mochawesome](https://www.npmjs.com/package/mochawesome)

---

## 📎 Related Links

- [Banco API - Tested Project](https://github.com/juliodelimas/banco-api)
- [Banco API Tests - Repository](https://github.com/TiagosXavier/banco-api-tests)
