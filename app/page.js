"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter()
  const [value, setvalue] = useState("hello");
  const btn = (value) => {
    console.log("kimmi", value);
    setvalue(value);
  };
  let studentName="kimmmi"
  return (
    <div className={styles.page}>
      {value}
      <Link href="api/productList">Go to Product Page</Link>
      <button onClick={() => btn("kimmi")}>btn</button>
      <Link href={`/studentlist/${studentName}`}>Go to Kimmi's Profile</Link>
      <Link href="/productlist">productlist</Link>
      <button type="button" onClick={()=>router.push("/productlist")}>Navigation button</button>
      <button type="button" onClick={()=>router.push(`/studentlist/${studentName}`)}>Navigation button</button>
    </div>
  );
}
