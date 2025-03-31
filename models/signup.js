const mongoose = require("mongoose");
const signupSchema = mongoose.Schema({
fname: String,
lname: String,
email: String,
password: String,
});
const signup = mongoose.model("signup", signupSchema);
module.exports = signup;
