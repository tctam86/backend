import express from "express";
import bodyParser from "body-parser"; // /user?id=7 de lay duoc id thi phai dung bodyParser
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import HocSinh from "./models/user";


require('dotenv').config();


let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

viewEngine(app);
initWebRoutes(app);
const name ="Hunglon";
const age = 23;


// sql.query(`INSERT INTO hocsinh (name, age) VALUES ("${name}",${age})`, function (error, results, fields) {
//     sql.query('SELECT * FROM hocsinh', function (error, results, fields) {
//         if (error) throw error;
//         console.log('The solution is: ', results);
//     })
    
// })
HocSinh.findAll().then((data) => {
    console.log(data);
})


let port = process.env.PORT || 3000; //lay tham so cua port cua file .env
//port === undefined => port = 3000;
app.listen(port,() => {
    //callback function
    console.log("Backend Nodejs is runing on the port : " + port)
})
