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

// "use client"
// export default function Student({params}){
//     console.log(params)
//     return(
//         <div>
//             <h1>Student Details</h1>
//             <h3>Name : {params.student}</h3>

//         </div>
//     )
// }
