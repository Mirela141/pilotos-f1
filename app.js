const express = require("express");
const app = express();

app.get("/lewis-hamilton", (req, res, next) => {
    return res.status(200).sendFile("hamilton.html", {root: './'});
});

app.get("/max-verstappen", (req, res, next) => {
    return res.status(200).sendFile("verstappen.html", {root: './'});
});

app.get("/lando-norris", (req, res, next) => {
    return res.status(200).sendFile("norris.html", {root: './'});
});

app.get("/ayrton-senna", (req, res, next) => {
    return res.status(200).sendFile("senna.html", {root: './'});
});

app.use((req, res, next)=> {
    const error = new Error("Not found...");
    error.status = 404;
    next(error);
});

module.exports = app;
