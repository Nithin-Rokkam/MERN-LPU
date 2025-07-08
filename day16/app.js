const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(201);
  res.json({
    isSuccess: true,
    message: "Server is in unning...",
    data: {},
  });
});

app.post("/api/v1/products", (req, res) => {
  try{
    const data=req.body;
    console.log("Data received:", data);
    res.status(200);
    res.json({
      isSuccess: true,
      message: "Post request received",
      data: {},
    });
  }catch (error) {
    console.log("Error occoured");
    console.log(err);
    res.status(500);
    res.json({
      isSuccess: false,
      message: "An error occurred",
      data: {},
    });
  }});

app.listen(2900, () => {
  console.log("Server is running on 2900");
});
