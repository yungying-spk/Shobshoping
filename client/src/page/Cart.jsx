import CartCard from "../commponent/cartcard";
import carticon from "../picture/put-out-the-chart-svgrepo-com.svg"
import { useNavigate } from "react-router-dom";
import Navbar from "../commponent/navbar";
  
function Cart() {
  let navigate = useNavigate(); 
  const routeOrder = () =>{ 
    let path = `/cart/order`; 
    navigate(path);
  }
  return (
    <>
    <Navbar/>
    <section className=" m-10">
    <div className=" flex"><img className=" w-20" src={carticon} alt="" />
      <div className=" text-6xl font-bold">Cart</div></div>
    
      <div className="  bg-blue-200 border-2  flex items-center  h-[50px]  rounded-lg">
      
        <p className="  w-[50%] flex  pl-20">product</p>
        <div className=" flex gap-40 w-[50%]">
          <p className=" ">price per piece</p>
          <p className=" ">amount</p>
          <p className=" ">total amount</p>
          <p className="  pl-8">action</p>
        </div>
      </div>
      <CartCard />
      <div className="  bg-blue-200 border-2  flex items-center  h-[50px]  justify-end pr-96 rounded-lg">
      
          <p className=" ">total price :</p>
          
      </div>
      <div className=" flex justify-end  pt-5">
      <button className="  bg-purple-100 p-4 pr-6 pl-6 rounded-lg shadow-md  " onClick={routeOrder}>Order</button></div>
      
    </section>
    </>
  );
}

export default Cart;
