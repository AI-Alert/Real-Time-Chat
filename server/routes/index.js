const Router = require("express")
const router = new Router()
const authRoutes = require('./authRoutes')
const messageRoutes = require('./messagesRoutes')

router.use('/', authRoutes);
router.use('/messages', messageRoutes);

module.exports = router