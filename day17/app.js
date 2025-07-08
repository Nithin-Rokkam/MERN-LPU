const dotenv = require('dotenv');
dotenv.config();
const express = require('express');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    console.log("--------------");
    console.log(new Date(), req.method, req.url);
    console.log("--------------");
    next();
});

app.get("/",(req, res) =>{
    res.json({
        isSuccess: true,
        message: "Server is runnign",
        data: {},
    });
});

app.get("/hello",(req, res) =>{
    res.json({
        isSuccess: true,
        message: "Server is runnign",
        data: {},
    });
});

app.use((req, res, next) => {
    console.log("404 Not Found");
    next();
});

app.listen(2900, () => {
    console.log("Server is running on port 2900");
});