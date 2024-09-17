"use client";
import React from "react";

function page({ params }) {
  console.log(params);
  return (
    <>
      <h3>studentname:{params.student}</h3>
    </>
  );
}

export default page;
