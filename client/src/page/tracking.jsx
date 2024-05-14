import Tracking from "../commponent/trackOrder";
import carticon from "../picture/put-out-the-chart-svgrepo-com.svg"
import { useNavigate } from "react-router-dom";
import Navbar from "../commponent/navbar";
  
function TrackingOrder() {
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
        <div className=" flex  justify-evenly w-[50%]">
          <p className=" ">Tracking Number</p>
          <p className=" ">Status</p>
        
        </div>
      </div>
      <Tracking />
      <div className="  bg-blue-200 border-2  flex items-center  h-[50px]  justify-end pr-96 rounded-lg">
      
         
          
      </div>
     
    </section>
    </>
  );
}

export default TrackingOrder;
