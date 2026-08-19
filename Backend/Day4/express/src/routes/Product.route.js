const express = require("express")
const router = express.Router()


const products = [
  {
    id: 1,
    name: "iPhone 15",
    category: "Electronics",
    price: 69999,
    rating: 4.5,
    stock: 25
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    category: "Electronics",
    price: 74999,
    rating: 4.6,
    stock: 18
  },
  {
    id: 3,
    name: "Nike Air Max 270",
    category: "Footwear",
    price: 12999,
    rating: 4.3,
    stock: 40
  },
  {
    id: 4,
    name: "Adidas Ultraboost",
    category: "Footwear",
    price: 15999,
    rating: 4.7,
    stock: 12
  },
  {
    id: 5,
    name: "Levi's 511 Jeans",
    category: "Clothing",
    price: 2999,
    rating: 4.2,
    stock: 55
  },
  {
    id: 6,
    name: "Puma T-Shirt",
    category: "Clothing",
    price: 1499,
    rating: 4.1,
    stock: 80
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    category: "Electronics",
    price: 29990,
    rating: 4.8,
    stock: 10
  },
  {
    id: 8,
    name: "Apple Watch Series 9",
    category: "Electronics",
    price: 41999,
    rating: 4.6,
    stock: 15
  },
  {
    id: 9,
    name: "Woodland Leather Shoes",
    category: "Footwear",
    price: 4999,
    rating: 4.4,
    stock: 30
  },
  {
    id: 10,
    name: "Wildcraft Backpack",
    category: "Accessories",
    price: 2499,
    rating: 4.3,
    stock: 45
  }
];

router.get("/", (req, res) => {
    try {
        res.json({
            data : products
        })
    } catch (error) {
        res.json({
            err : error.message
        })
    }
})

router.delete("/", (req, res) => {
    try {
        const removedVal = products.pop()
        res.json({
            msg : "Product deleted",
            deletedData : removedVal
        })
    } catch (error) {
         res.json({
            err : error.message
        })
    }
})

module.exports = {
  ProductRouter : router
}