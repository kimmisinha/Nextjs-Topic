import React from "react";

async function result(id) {
  let data = await fetch(`http://localhost:3000/api/user/${id}`);
  data = await data.json();
  return data;
}

async function Page({ params }) {
  let user = await result(params.userid);
  return (
    <div>
      <h2>User Details</h2>
      {user ? (
        <>
          <h2>Name: {user.name}</h2>
          <p>Age: {user.age}</p>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>No user found.</p>
      )}
    </div>
  );
}

export default Page;
