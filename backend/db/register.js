const mongoose = require("mongoose");

const UserSechema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  confirm_password: String,
});
const loggedUserSchema = mongoose.Schema({
  username: String,
  email: String,
});

const Users = mongoose.model("Users", UserSechema);
const LoggedUsers = mongoose.model("LoggedUsers", loggedUserSchema);

module.exports = { Users, LoggedUsers };
