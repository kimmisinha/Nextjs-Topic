import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <h3>Link you go through</h3>
      <ul>
        <li>
          <Link href="/studentlist/1">student1</Link>
        </li>
        <li>
          <Link href="/studentlist/2">student2</Link>
        </li>
        <li>
          <Link href="/studentlist/3">student3</Link>
        </li>
        <li>
          <Link href="/studentlist/4">student4</Link>
        </li>
        <li>
          <Link href="/studentlist/5">student5</Link>
        </li>
        <li>
          <Link href="/studentlist/6">student6</Link>
        </li>
      </ul>
    </div>
  );
}

export default page;
