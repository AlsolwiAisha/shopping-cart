import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Product from '../components/product';
import Cart from '../components/cart';
import styles from '../styles/Home.module.css'

export default function Home() {
const [products, setProducts] = useState();
  useEffect(() => {
       fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res)
      })
      .catch((err) => console.error(err));
  },[]);
  if (!products|| products==[]) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main>
      hello word
     <div><Product products={products}/></div> 
     </main> 
  
    </div>
  );
}
