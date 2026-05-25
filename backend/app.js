const express = require('express'); //express package lyaune
const cors = require('cors');  // frontend lai backend sanga connect garne help

//app/server create garne
const app = express();

app.use(express.json());  // Middleware to parse JSON bodies
app.use(cors());//permission dine frontend lai

const products = [
    { id: 1, name: "Coffee", price: 300 },
    { id: 2, name: "Pizza", price: 800 },
    { id: 3, name: "Burger", price: 500 }
];

// app.get("/products")
// → browser le /products open garda yo code run huncha
app.get('/products', (req, res) => {
    res.json(products);  //products array lai JSON banayera browser ma pathaucha
})

app.post('/products', (req, res) => {

    //array ma add garne
    const newProducts = {
        id: products.length + 1,
        ...req.body
    }
    products.push(newProducts);
    console.log(newProducts);
    res.json(newProducts);
})


app.delete('/products/:id', (req, res) => {
    console.log(req.params.id);
    //app
    const id= Number(req.params.id);
    console.log('after id' + id);
    console.log(typeof id);
    const indexNumber= products.findIndex(p=>{
        console.log('inside id' + p.id);
        console.log(typeof p.id);
         return p.id === id;
    })
    console.log(indexNumber);
    products.splice(indexNumber, 1);

    res.json(products);
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
}); //server start on port 3000


