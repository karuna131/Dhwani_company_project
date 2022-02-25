const express = require("express");
const router = express.Router();
const {users,createUsers,updateUser,deleteUser,} = require("../controllers/users");
const {state, createState} = require("../controllers/state");
const {district, createDistrict} = require("../controllers/District");
const {child, createChild} = require("../controllers/Child");

router.get("/api/users", users);
router.post("/api/createUser", createUsers);
router.post("/api/Userlogin", Userlogin);
router.get("/api/userLogout", userLogout);


router.get("/api/getState", state);
router.post("/api/createState", createState);

router.get("/api/getDistrict", district);
router.post("/api/createDistrict", createDistrict);

router.get("/api/getChild", child);
router.post("/api/createChild", createChild);

module.exports = router;
