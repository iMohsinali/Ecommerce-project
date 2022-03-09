import express  from "express";
import data from "./data.js";

const app=express()

app.get('/api/product/:id', (req, res) => {
    const product = data.product.find((x) => x._id === req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });

app.get('/api/product',(req,res)=>{
    res.send(data.product)
    console.log(data.product)

})
app.get('/',(req,res)=>{
    res.send("server is working hek")
})

const port=process.env.PORT ||5000
app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`)
})