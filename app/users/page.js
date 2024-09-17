import Link from "next/link";
import React from "react";

async function result() {
  let data = await fetch("http://localhost:3000/api/user");
  data = await data.json();
  return data;
}
async function page() {
  let users = await result();
  return (
    <div>
      <h3>USER LIST</h3>
      {users.map((item) => (
        <div key={item.id}>
          <Link href={`users/${item.id}`}> {item.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default page;
