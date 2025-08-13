const express = require('express');

const profileRouter =require("./route")

const userRouter = require('./user')

const app = express();

// Root route
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/profile",profileRouter)
app.use("/user",userRouter)

// Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
