const fs = require('fs');
const path = require('path');
const { stringify } = require('querystring');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );


module.exports = class Cart {
     static addProduct(id) {
        //fetch the previous cart
          fs.readFile(p, (err, fileContent) =>{
            let cart = {products: [], totalPrice:0};
            if(err) {
                cart = JSON.parse(fileContent);
            }
        // analyze the cart => find existing product
        const existingProductIndex = cart.products.finIndex(prod => prod.id === id);
        const existingProduct = cart.products[existingProductIndex];
        let updatedProduct;
         // add  new product / increase quantity
        if(existingProduct) {
             updatedProduct = {...existingProduct};
             updatedProduct.qty = updatedProduct.qty + 1;
             cart.products= [...cart.products];
             cart.products[existingProductIndex] = updatedProduct;
        }else {
            updatedProduct = {id: id, qty: 1};
            cart.products = [...Cart.products, updatedProduct];
        }
        cart.totalPrice = cart.totalPrice + productPrice;
        fs.writeFile(p, JSON,stringify(cart), err =>{
          console.log(err);
        })
          });
       
     }

}