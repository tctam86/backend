import express from "express";
import homeController from "../controllers/homeController";


let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/',homeController.getHomePage);
    router.get('/',(req,res0) => {
        return res0.send('Hello World')
    });

    //rest api
    //muon lay thong tin dung action get

    return app.use("/",router) //dung tat ca cac file router duoc khai bao
};

module.exports = initWebRoutes;