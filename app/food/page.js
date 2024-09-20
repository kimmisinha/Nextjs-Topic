"use client"
import React from "react";
import { useRouter } from "next/navigation";

function Page() {
    const router = useRouter()

  return (
    <div>
      <h1 className="heading">Food Details</h1>
      <button type="button" onClick={() => router.push("/food/foodone")}>
        foodone
      </button>
      <br></br>
      <button type="button" onClick={() => router.push("/food/foodtwo")}>
        foodtwo
      </button>
    </div>
  );
}

export default Page;
