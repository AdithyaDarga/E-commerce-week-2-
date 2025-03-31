
const express = require("express");
const mongoose = require("mongoose") ;
const app = express();
app.use(express.json());
const port = 3000;

const Product= require("./models/Product");
const Signup= require("./models/signup");
const Login = require("./models/Login");

app.post("/addproducts", async(req, res) => {
    try{
      const product = await Product.create(req.body);
      res.json(product);
      console.log("Date inserted");
    } catch(error) {
      res.send("Data not inserted");
    }
});

app.get("/getproducts", async (req,res) => {
  try{
    const product= await Product.find({});
    res.json(product);
    console.log("Data fatched");
  } catch (error) {
    res.send("Data not fetched");
  }
});

app.post("/signup", async(req,res) => {
  try{
    const signup = await Signup.create(req.body);
    res.json(signup);
    console.log("User is created");
  } catch (error) {
    res.send("User is not created");
  }
});

app.post("/login", async(req,res) => {
  try{
    const login = await Login.create(req.body);
    res.json(login);
    console.log("User is login");
  } catch (error) {
    res.send("User is not login");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

mongoose.connect("mongodb+srv://roopesh:roopesh@e-shoping.4sebn9l.mongodb.net/")
.then(()=>{
  console.log("Connected to MongoDB");
}).catch((err)=>{
  console.log("Error connectio=ng to MongoDB", err);
});