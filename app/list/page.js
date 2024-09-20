import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/list/1">list1</Link>
        </li>
        <li>
        <Link href="/list/2">list2</Link>
        </li>
        <li>
        <Link href="/list/3">list3</Link>
        </li>
      </ul>
    </div>
  );
}

export default page;
