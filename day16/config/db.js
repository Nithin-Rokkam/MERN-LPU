const mongoose = require('mongoose');

mongoose.connect(
  "mongodb+srv://Nithin:<db_password>@cluster0.tj20e8i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  { dbName: "day16" }
)
.then(() => {
  console.log("Connected to MongoDB successfully");
})
.catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});