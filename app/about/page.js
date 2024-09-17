"use client"; // This marks the component as a client component

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
function Page() {
  const router = useRouter();

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={() =>router.push("/")}>Home page</button>
      <h2>
        <Link href="/about/collegestudent">collegePage</Link>
      </h2>
      <h2>
        <Link href="/about/schoolstudent">schoolstudent</Link>
      </h2>
    </div>
  );
}

export default Page;





