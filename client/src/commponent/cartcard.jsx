function CartCard (){
return(
    <section className="  bg-yellow-50" >
        <div className="  bg-yellow-50 border-2  flex items-center  h-[70px]  rounded-lg">
      
      <p className="  w-[50%] flex  pl-20">product</p>
      <div className=" flex w-[50%] items-center gap-40">
        <p className=" ">price per piece</p>
        <p className=" ">amount</p>
        <p className=" ">total amount</p>
        <div className=" flex gap-2"><button className=" bg-green-100 p-2 rounded-lg shadow-md">select</button>
        <button className="  bg-red-100 p-2 rounded-lg shadow-md">delete</button></div>
        
      </div>
    </div>
    </section>
)
}

export default CartCard