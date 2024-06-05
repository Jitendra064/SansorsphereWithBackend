const mongoose = require("mongoose");
const URL =
  "mongodb://127.0.0.1:27017/sasorsphere?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.1";

const Dbconfig = async () => {
  try {
    await mongoose.connect(URL);
    console.log("MongoDB connect your database");
  } catch (error) {
    console.log("Register Error is ", error);
  }
};

module.exports = Dbconfig;
