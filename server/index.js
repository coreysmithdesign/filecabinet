require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const authCtrl = require("./controllers/authentication");
const documentCtrl = require("./controllers/documents");
const employeeCtrl = require("./controllers/employees");
const businessCtrl = require("./controllers/businesses");
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
app.get("/api/documents", documentCtrl.list);
app.post("/api/documents/", documentCtrl.add);
app.get("/api/document/:id", documentCtrl.view);
app.put("/api/document/:id", documentCtrl.update);
app.delete("/api/document/:id", documentCtrl.delete);

// endpoints - employees
app.get("/api/employees", employeeCtrl.list);
app.post("/api/employees/", employeeCtrl.add);
app.get("/api/employee/:id", employeeCtrl.view);
app.put("/api/employee/:id", employeeCtrl.update);
app.delete("/api/employee/:id", employeeCtrl.delete);

// endpoints - businesses
app.get("/api/businesses", businessCtrl.list);
app.post("/api/businesses/", businessCtrl.add);
app.get("/api/business/:id", businessCtrl.view);
app.put("/api/business/:id", businessCtrl.update);
app.delete("/api/business/:id", businessCtrl.delete);

// massive
massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((db) => {
    app.set("db", db);
    console.log("The database is connected.");
    app.listen(SERVER_PORT, () =>
      console.log(`The server is listening (port ${SERVER_PORT}).`)
    );
  })
  .catch((err) => console.log(err));
