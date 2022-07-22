require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require ('./db_connect')
const router = require("./routes/index");
const app = express();
const socket_io = require("./sockets/socket_io");


dbConnect();

app.use(cors());
app.use(express.json());

app.use("/api", router);

const PORT = process.env.PORT || 5000
const server = app.listen(PORT, () =>
    console.log(`Server started on ${PORT}`)
);

socket_io()

module.exports = server;
