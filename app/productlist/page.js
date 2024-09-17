"use client";
import React, { useEffect, useState } from "react";

function Page() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await res.json();  
      console.log(data);
      setProduct(data);  
    }
    fetchProduct();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {
        product.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
          </div>
        ))
    }
    </div>
  );
}

export default Page;
