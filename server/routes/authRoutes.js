const { login, register, getAllUsers, setAvatar, logOut } = require("../controllers/userController");

const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.get("/users/:id", getAllUsers);
router.post("/avatar/:id", setAvatar);
router.get("/logout/:id", logOut);

module.exports = router;