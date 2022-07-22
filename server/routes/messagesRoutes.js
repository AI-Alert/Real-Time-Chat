const { addMessage, getMessages } = require("../controllers/messageController");
const router = require("express").Router();

router.post("/create/", addMessage);
router.post("/message/", getMessages);

module.exports = router;