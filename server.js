const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
// const ejs=require('ejs');
const path = require("path");

// template engine
app.use(express.static("public"));
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "ejs");

// mongodb connecton
const connectDB = require("./config/db");
connectDB();


app.use(express.json());
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show"));
app.use("/file/download", require("./routes/download"));

app.listen(PORT,
  console.log("Server Started Sucessfully! "+PORT)
);
