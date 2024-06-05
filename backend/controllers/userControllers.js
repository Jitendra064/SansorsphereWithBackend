const { get } = require("mongoose");
const { Users, LoggedUsers } = require("../db/register");

const getUserControllers = async (req, res) => {
  try {
    const AllUser = await Users.find();
    res.send(AllUser);
  } catch (error) {
    console.log("Get error is ", error);
  }
};

const PostUserControllers = async (req, res) => {
  try {
    const NewUser = req.body;
    const AddUser = await Users(NewUser);
    await AddUser.save();

    res.json({
      status: 200,
    });
    // const AllUser = await Users.find();
  } catch (error) {
    console.log("Post Error is ", error);
  }
};

const DeleteUserControllers = async (req, res) => {
  try {
    let id = req.params.id;
    await Users.findByIdAndDelete(id);
    res.send("delete successfully");
  } catch (error) {
    console.log("Delete Error is ", error);
  }
};

const UpdateUserControllers = async (req, res) => {
  try {
    let id = req.params.id;
    let UpdateData = req.body;
    await Users.findByIdAndUpdate(id, UpdateData);
    const AllUser = await Users.find();
    res.send(AllUser);
  } catch (error) {
    console.log("Delete Error is ", error);
  }
};

// loggedUser methods

const getLoggedUser = async (req, res) => {
  try {
    const AllLoggeduser = await LoggedUsers.find();
    res.send(AllLoggeduser);
  } catch (error) {
    console.log("loggedUser error", error);
  }
};
const postLoggedUser = async (req, res) => {
  try {
    let newLoggeduser = req.body;
    const AllLoggeduser = await LoggedUsers(newLoggeduser);
    await AllLoggeduser.save();
    res.send(AllLoggeduser);
  } catch (error) {
    console.log("loggedUser error", error);
  }
};

const DeleteLoggedUser = async (req, res) => {
  try {
    let id = req.params.id;
    await LoggedUsers.findByIdAndDelete(id);
    res.send("delete successfully");
  } catch (error) {
    console.log("Delete Error is ", error);
  }
};

module.exports = {
  getUserControllers,
  PostUserControllers,
  DeleteUserControllers,
  UpdateUserControllers,
  getLoggedUser,
  postLoggedUser,
  DeleteLoggedUser,
};
