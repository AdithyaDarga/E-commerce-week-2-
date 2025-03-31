const mongoose=require("mongoose");
// const Schema=mongoose.Schema;

const productSchema=mongoose.Schema({
    name: String,
    description: String,
    link: String,
    img: String,
    prize: Number,
    rating: Number, 
})
const Product=mongoose.model("Product", productSchema);
module.exports=Product;