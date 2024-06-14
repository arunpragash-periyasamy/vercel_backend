const express = require("express");
const app = express();
const serverless = require("serverless-http");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello world from node js");
});

app.use("/.netlify/functions/app", router);
module.exports.handler = serverless(app);