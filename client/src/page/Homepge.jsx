import { useState, useEffect } from "react";
import Navbar from "../commponent/navbar";
import ProductCard from "../commponent/product";

function Homepage() {

  let procucts=[{name:"I Phone1",price:"20000"},{name:"I Phone2",price:"20000"},{name:"I Phone3",price:"20000"},{name:"I Phone4",price:"20000"},{name:"I Phone",price:"20000"},{name:"I Phone",price:"20000"},{name:"I Phone5",price:"20000"},{name:"I Phone6",price:"20000"},{name:"I Phone7",price:"20000"},{name:"I Phone8",price:"20000"}]

  return (
    <>
    <Navbar />
      <section className=" flex  h-screen bg-blue-200 flex-col items-center  row-span-5 justify-items-start">
        <p className=" text-6xl m-10 text-white font-bold">ALL Product</p>
        <div className=" flex gap-2  w-[50%]  lg:min-w-[1150px]  justify-evenly flex-wrap  ">
        {procucts.map((item,index)=>(
          <ProductCard key={index} item={item}/>
        ))}
        </div>
      </section>
    </>
  );
}

export default Homepage;
