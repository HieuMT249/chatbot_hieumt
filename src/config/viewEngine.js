import express from "express";

let configViewEngine = (app) => {
    app.use(express.static("./src/public")); //static là để lấy các đường link động
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
};

module.exports = configViewEngine;