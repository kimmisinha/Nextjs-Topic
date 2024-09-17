import React from "react";

async function productList() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  res = await res.json();
  return res;
}
async function page() {
  let productdetails = await productList();
  return (
    <div>
      <h2>PRODUCT LIST</h2>
      {productdetails.map((ele, index) => (
        <div key={index}>
          <div> {ele.title}</div>
        </div>
      ))}
    </div>
  );
}

export default page;
