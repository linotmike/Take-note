const router = require("express").Router()

const path = require("path");


const noteTakerRoute = require("./notetaker");
router.use("/api/notes", noteTakerRoute);

module.exports = router;
