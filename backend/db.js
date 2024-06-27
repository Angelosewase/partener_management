const mongoose = require("mongoose");

const connectDb = async () => {
  mongoose
    .connect("mongodb+srv://sewase:%40Password1@cluster0.xuykxgv.mongodb.net/crude")
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.error(error));
};

module.exports = connectDb;