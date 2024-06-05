const express = require("express");
const app = express();
const port = 1300;
const Dbconfig = require("./db/connection");
const cors = require("cors");

Dbconfig();
app.use(cors());
app.use(express.json());

app.use("/user", require("./routers/userRoute"));

app.listen(port, () => {
  console.log("server listing on the port", +1300);
});
