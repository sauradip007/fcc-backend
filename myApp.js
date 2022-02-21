var express = require("express");
var app = express();
const port = 3001;
console.log("Hello World");

// app.get("/", (req,res)=>{
//     res.sendFile(__dirname + '/views/index.html')
// })

app.get("/json", (req, res) => {
  const obj = { message: "Hello json" };
  res.json(obj);
});
app.use("/public", express.static("public"));
app.listen(port, () => {
  console.log(`Hello Express`);
});

module.exports = app;
