const mongoose = require("mongoose");

const loginSchema= mongoose.Schema({
    email: String,
    password: String,
});
const Login= mongoose.model("Login", loginSchema);
module.exports= Login;