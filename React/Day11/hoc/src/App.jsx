import React from 'react'
import ProductCard from './Components/ProductCard';
import SaleWrapper from './Components/SaleWrapper';

const App = () => {

  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 2499,
      originalPrice: 3499,
      onSale: true,
      discount: 29,
      category: "Electronics",
      brand: "Sony",
      rating: 4.6,
      stock: 15,
      image: "https://picsum.photos/300?random=1",
      description: "Premium over-ear wireless headphones with noise cancellation."
    },
    {
      id: 2,
      name: "Running Shoes",
      price: 3499,
      originalPrice: 3499,
      onSale: false,
      discount: 0,
      category: "Footwear",
      brand: "Nike",
      rating: 4.5,
      stock: 20,
      image: "https://picsum.photos/300?random=2",
      description: "Lightweight running shoes designed for comfort and performance."
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 4999,
      originalPrice: 6999,
      onSale: true,
      discount: 29,
      category: "Wearables",
      brand: "Samsung",
      rating: 4.7,
      stock: 10,
      image: "https://picsum.photos/300?random=3",
      description: "Track your fitness, heart rate, and notifications on the go."
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      price: 4299,
      originalPrice: 4299,
      onSale: false,
      discount: 0,
      category: "Accessories",
      brand: "Keychron",
      rating: 4.8,
      stock: 12,
      image: "https://picsum.photos/300?random=4",
      description: "RGB mechanical keyboard with hot-swappable switches."
    },
    {
      id: 5,
      name: "Backpack",
      price: 1499,
      originalPrice: 1999,
      onSale: true,
      discount: 25,
      category: "Bags",
      brand: "American Tourister",
      rating: 4.4,
      stock: 30,
      image: "https://picsum.photos/300?random=5",
      description: "Spacious backpack suitable for college, office, and travel."
    },
    {
      id: 6,
      name: "Gaming Mouse",
      price: 2799,
      originalPrice: 2799,
      onSale: false,
      discount: 0,
      category: "Accessories",
      brand: "Logitech",
      rating: 4.7,
      stock: 18,
      image: "https://picsum.photos/300?random=6",
      description: "Ergonomic gaming mouse with customizable DPI and RGB lighting."
    },
    {
      id: 7,
      name: "Water Bottle",
      price: 349,
      originalPrice: 499,
      onSale: true,
      discount: 30,
      category: "Lifestyle",
      brand: "Milton",
      rating: 4.3,
      stock: 50,
      image: "https://picsum.photos/300?random=7",
      description: "1L insulated stainless steel water bottle."
    },
    {
      id: 8,
      name: "Laptop Stand",
      price: 999,
      originalPrice: 1499,
      onSale: true,
      discount: 33,
      category: "Office",
      brand: "Portronics",
      rating: 4.5,
      stock: 22,
      image: "https://picsum.photos/300?random=8",
      description: "Adjustable aluminum laptop stand for better ergonomics."
    }
  ];


  return (
    <div>
      
      <div className='grid grid-cols-4 gap-10'>
        {products.map((item) => {
          // return <ProductCard key={item.id} onSale={item.onSale} name={item.name} price={item.price} image={item.image} />

          if(item.onSale)
          {
            return <SaleWrapper key={item.id} >
              <ProductCard onSale={item.onSale} name={item.name} price={item.price} image={item.image} />
            </SaleWrapper>
          }

          return <ProductCard key={item.id} onSale={item.onSale} name={item.name} price={item.price} image={item.image} />


        })}
      </div>


    </div>
  )
}

export default App