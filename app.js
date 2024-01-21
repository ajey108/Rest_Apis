const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express();

//connecting mongodb
mongoose.connect("mongodb://localhost:27017/Sample",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("connected with mongodb")

})

.catch((error)=>{
    console.log('error')
})


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())




//creating schema
const productSchema = new mongoose.Schema({
    name:String,
    desc:String,
    price:Number
})


//creating model/collection 

const Product = new mongoose.model('Product', productSchema)


//api for create product

app.post("/api/v1/product/new",async(req,res)=>{
  const products = await Product.create(req.body);

   res.status(201).json({
    sucsess:true,
    products
   })
})

//Read

app.get("/api/v1/products",async (req,res)=>{

    const products = await Product.find();

    res.status(200).json({
        sucsess:true,
        products
    })
})


//Update Product

app.put("/api/v1/product/:id",async(req,res)=>{

    let product = await Product.findById(req.params.id)

  // if id doesnt match

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product Not Found"
    
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,
        {
        new:true,
        useFindAndModify:false,
        runValidators:true
    })

    res.status(200).json({
        success:true,
        product
    })
})


//Delete Product

app.delete("/api/v1/product/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Product has been deleted"
        });
    } catch (error) {
        // Handle other errors, e.g., database errors
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});








app.listen(4500,()=>{
    console.log("server is working  http://localhost:4500")
})