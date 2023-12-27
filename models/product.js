const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      console.log('data..', fileContent.toString());
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random().toString();
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id ===id);
      cb(product);
   });
  }
=======
    const p = path.join(
        path.dirname(process.mainModule.filename), 
        'data', 
        'products.json'
        );

const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if(err) {
         cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
     });
};

module.exports = class Product{
     constructor(t) { 
        this.title = t;
    }

    save() {
     getProductsFromFile(products => {
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), err =>{
            console.log(err);
        });
     });
       
     }
     
     static fetchAll(cb) {
       getProductsFromFile(cb);
    }
>>>>>>> af7cf7b27d58155b95d99880d6ea1b2ed1039220
};