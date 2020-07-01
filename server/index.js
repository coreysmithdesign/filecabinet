require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const authCtrl = require("./controllers/authentication");
const documentCtrl = require("./controllers/documents");
const employeeCtrl = require("./controllers/employees");
const businessCtrl = require("./controllers/businesses");
const path = require("path");
const {
  SERVER_PORT,
  SESSION_SECRET,
  CONNECTION_STRING,
  S3_BUCKET,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
} = process.env;
const app = express();

// middleware - json parser
app.use(express.json());

// amazon s3
const aws = require("aws-sdk");

app.get("/api/signs3", (req, res) => {
  aws.config = {
    region: "us-west-1",
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  };

  const s3 = new aws.S3();
  const fileName = req.query["file-name"];
  const fileType = req.query["file-type"];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: "public-read",
  };

  s3.getSignedUrl("putObject", s3Params, async (err, data) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
    };

    return res.send(returnData);
  });
});

// middleware - session
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
app.get("/api/auth/user", authCtrl.user);
app.get("/api/auth/user/:id", authCtrl.view_user);

// endpoints - documents
app.get("/api/documents", documentCtrl.list);
app.post("/api/documents", documentCtrl.add);
app.get("/api/document/:id", documentCtrl.view);
app.put("/api/document/:id", documentCtrl.update);
app.put("/api/document/save/:id", documentCtrl.save_file);
app.delete("/api/document/:id", documentCtrl.delete);

// endpoints - employees
app.get("/api/employees", employeeCtrl.list);
app.post("/api/employees", employeeCtrl.add);
app.get("/api/employee/:id", employeeCtrl.view);
app.get("/api/employee/docs/:id", employeeCtrl.view_documents);
app.put("/api/employee/:id", employeeCtrl.update);
app.delete("/api/employee/:id", employeeCtrl.delete);

// endpoints - businesses
app.get("/api/businesses", businessCtrl.list);
app.post("/api/businesses", businessCtrl.add);
app.get("/api/business/:id", businessCtrl.view);
app.put("/api/business/:id", businessCtrl.update);
app.delete("/api/business/:id", businessCtrl.delete);

app.use(express.static(__dirname + "/../build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

// database connection - massive
massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((db) => {
    app.set("db", db);
    console.log("Welcome to the DB! You have been connected.");
    app.listen(SERVER_PORT, () =>
      console.log(`I will be taking requests on port ${SERVER_PORT}`)
    );
  })
  .catch((err) => console.log(err));
