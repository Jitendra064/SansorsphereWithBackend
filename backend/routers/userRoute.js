const express = require("express");
const router = express.Router();
const {
  getUserControllers,
  PostUserControllers,
  DeleteUserControllers,
  UpdateUserControllers,
  getLoggedUser,
  postLoggedUser,
  DeleteLoggedUser,
} = require("../controllers/userControllers");

router.get("/getuserData", getUserControllers);
router.post("/postuserData", PostUserControllers);
router.delete("/deleteuserData/:id", DeleteUserControllers);
router.put("/updateuserData/:id", UpdateUserControllers);

// loggeduser route

router.get("/getloggeduser", getLoggedUser);
router.post("/postloggeduser", postLoggedUser);
router.delete("/deleteloggeduser/:id", DeleteLoggedUser);

module.exports = router;
