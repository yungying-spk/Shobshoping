import productpic from "../picture/creative-reels-composition.jpg";
import cart from "../picture/put-out-the-chart-svgrepo-com.svg"
import buy from "../picture/big-shopping-bag-svgrepo-com.svg"

function ProductCard() {
    return (
        <section className="card bg-white w-[220px] h-[280px] flex flex-col  items-center text-pretty  rounded-md " >
            <img className="w-[220px] h-[150px]" src={productpic} alt="image description" />
            <div className="text-wrap flex flex-col w-[200px]break-words text-center px-3 py-2">
                <p className=" ">I Phone 15</p>
                <p className=" ">20000</p>
            </div>
            <div className=" flex gap-2">
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  
  <img className=" w-[20px] h-[15px]" src={cart} alt="image description" />
</button>
   <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  
  <img className=" w-[20px] h-[15px]" src={buy} alt="image description" />
</button>
            </div>
         
        </section>
    );
}

export default ProductCard;
