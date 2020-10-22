const express = require("express");
const app = express();
const connectDB = require("./config/db");
// const ejs=require('ejs');
const path = require("path");

// template engine
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

// mongodb connecton
connectDB();


app.use(express.json());
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show"));
app.use("/file/download", require("./routes/download"));

app.listen(5000, () => {
  console.log("Server Started Sucessfully!");
});
