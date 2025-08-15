const express = require('express');

const profileRouter =require("./route")

const userRouter = require('./user')

const college = require('./colleges')

const app = express();
app.use(express.json());


app.use("/profile",profileRouter)
app.use("/user",userRouter)
app.use("/colleges",college)


// Root route
app.get("/", (req, res) => {
    res.send("Hello World");
});



// Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

//mysql connection
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"sandhya2060",
    database:"sandhya",
    port:3306
});  
connection.connect((err)=>{
    if(err){
        console.log("error connecting to mysql", err);
    }else{
        console.log("connected to mysql");
    }
});
connection.query("SELECT *FROM colleges",(err,results)=>{
    if(err){
        console.log("error quering colleges", err);
    }else{
        console.log("🚀colleges data",results);
    }
})
