"use client"
import React from 'react';
import Navbar from '@/components/navbar';
import Itembar from '@/components/itembar';
import foodimg from "../public/Burger.png";
import foodimg2 from "../public/burger2.png"
import Checkout from '@/components/checkout';
export default function Home() {
  return (
    <div className='h-full'>
      <Navbar/>
      <Itembar img={foodimg} name="Carribean Spicy zency burger" cal="320" price="319"/>
      <Itembar img={foodimg2} name="Canjun veg burger" cal="320" price="319"/>
      <Checkout/>
    </div>
  );
}
