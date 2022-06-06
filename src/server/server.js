const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(cors());
// parse application/json
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
// app.use(express.json())

//create database connection
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

//connect to database
conn.connect((err) => {
  if (err) throw err;
  console.log("Mysql Connected...");
});

//add new task
app.post("/add_task", (req, res) => {
  // define column and their property
  let data = { name: req.body.task };
  let sql = "INSERT INTO tasks SET ?";
  conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.status(200).json({
      status: 200,
      taskName: req.body.task,
      statusText: "success",
      user: "hardik",
      error: null,
      response: "hey",
    });
  });
});
//get all tasks
app.get("/get_tasks", (req, res) => {
  let sql = "SELECT * FROM tasks";
  conn.query(sql, (err, results) => {
    if (err) throw err;
    res.status(200).json({
      statusText: "success",
      data: results,
    });
  });
});
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3002, () => {
  console.log("Server running successfully on 3002");
});
