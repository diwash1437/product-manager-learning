const express= require('express'); //express package lyaune
const cors=require('cors');  // frontend lai backend sanga connect garne help

//app/server create garne
const app= express();

app.use(cors());//permission dine frontend lai

const products = [
  { id: 1, name: "Coffee", price: 300 },
  { id: 2, name: "Pizza", price: 800 },
  { id: 3, name: "Burger", price: 500 }
];

// app.get("/products")
// → browser le /products open garda yo code run huncha
app.get('/products',(req,res)=>{
    res.json(products);  //products array lai JSON banayera browser ma pathaucha
})


app.listen(3000,() =>{
    console.log('server is running on port 3000')
}); //server start on port 3000


