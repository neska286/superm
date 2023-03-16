import React, { useState } from "react";
import styles from "./products.module.css"
import Product from "./components/Product";


const Products = () => {
  const [products, setproducts] = useState([
    {
      id: 1,
      productImage:
        "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/cheese.png",
      name: "Cheese",
      desc: "200g cheese block",
      price: "10",
    },
    {
      id: 2,
      productImage:
        "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/milk.png",
      name: "Milk",
      desc: "200g cheese block",
      price: "5",
    },
    {
      id: 3,
      productImage:
        "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/tomato.png",
      name: "Tomato",
      desc: "1 piece of tomato",
      price: "2.75",
    },
    {
      id: 4,
      productImage:
        "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/pineapple.png",
      name: "Pineapple",
      desc: "500g pineapple",
      price: "3.25",
    },
  ]);
  return (
    <section>
        <h1>Products</h1>
        <p>Take a look at our products</p>
        <div className={styles.productLayout}>
        {products.map((product)=>(
           
            <Product  key={product.id} data ={product}/>
        ))}
      </div>
    </section>
  );
};

export default Products;
