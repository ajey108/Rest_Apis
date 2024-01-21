#Express MongoDB API
 simple Express.js API connected to a MongoDB database for managing products. The API allows you to perform basic CRUD operations on a collection of products.

##Getting Started
Prerequisites
Make sure you have the following installed on your machine:

Node.js
MongoDB

##Installation

Install dependencies:


`npm install`

Start the server:

`npm start`

The server will be running at http://localhost:4500.

##Database Configuration 

The API is configured to connect to a local MongoDB database. Ensure that you have MongoDB installed and running. Update the connection string in the code if needed.

```mongoose.connect("mongodb://localhost:27017/Sample", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})```


##API Endpoints 

1. Create Product

Endpoint: POST /api/v1/product/new
Request Body:

{
  "name": "Product Name",
  "desc": "Product Description",
  "price": 99.99
}

Response:
{
  "success": true,
  "product": {
    "_id": "product_id",
    "name": "Product Name",
    "desc": "Product Description",
    "price": 99.99,
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
}


2. Read Products
Endpoint: GET /api/v1/products
Response:

{
  "success": true,
  "products": [
    {
      "_id": "product_id1",
      "name": "Product Name 1",
      "desc": "Product Description 1",
      "price": 49.99,
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    },
    {
      "_id": "product_id2",
      "name": "Product Name 2",
      "desc": "Product Description 2",
      "price": 29.99,
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
    // More products...
  ]
}


3. Update Product
Endpoint: PUT /api/v1/product/:id
Request Body:

{
  "name": "Updated Product Name",
  "desc": "Updated Product Description",
  "price": 129.99
}

Response

{
  "success": true,
  "product": {
    "_id": "product_id",
    "name": "Updated Product Name",
    "desc": "Updated Product Description",
    "price": 129.99,
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
}


4. Delete Product
Endpoint: DELETE /api/v1/product/:id
Response:

{
  "success": true,
  "message": "Product has been deleted"
}

