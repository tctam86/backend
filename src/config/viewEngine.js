import  express  from "express";


let configViewEngine = (app) => {
    //arrow function 
    app.use(express.static("./src/public")) //static 
    app.set("view engine","ejs"); //co the go duoc logic trong file html
    app.set("views","./src/views") 
}

module.exports = configViewEngine;