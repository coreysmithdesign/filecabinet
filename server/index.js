require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const authCtrl = require("./controllers/authentication");
const app = express();

// middleware
app.use(express.json());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 },
    secret: SESSION_SECRET,
  })
);

// endpoints - authentication
app.post("/api/auth/register", authCtrl.register);
app.post("/api/auth/login", authCtrl.login);
app.post("/api/auth/logout", authCtrl.logout);

// endpoints - documents
app.get("/api/documents");
app.post("/api/documents/");
app.get("/api/document/:id");
app.put("/api/document/:id");
app.delete("/api/document/:id");

// endpoints - employees
app.get("/api/employees");
app.post("/api/employees/");
app.get("/api/employee/:id");
app.put("/api/employee/:id");
app.delete("/api/employee/:id");

// endpoints - businesses
app.get("/api/businesses");
app.post("/api/businesses/");
app.get("/api/business/:id");
app.put("/api/business/:id");
app.delete("/api/business/:id");

// massive
massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((db) => {
    app.set("db", db);
    console.log("The DB is connected.");
    app.listen(SERVER_PORT, () =>
      console.log(`The server is listening on port ${SERVER_PORT}.`)
    );
  })
  .catch((err) => console.log(err));
