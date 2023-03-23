export default function Checkouts(){
    return(
        <div className="w-full">
        <h2 className="relative top-[12px] text-center bg-white w-48 mx-auto font-medium">Express Checkout</h2>
        <div className=" grid grid-cols-1 sm:grid-cols-3 gap-x-2 border gap-y-4  p-8 rounded-lg">
            <button className="py-2  bg-indigo-500 rounded-lg  h-12 flex justify-center items-center"><img src="./icons/shoppay.png" alt="" className="w-40 h-8"/></button>
            <button className="py-2  bg-yellow-400 rounded-lg  h-12 flex justify-center items-center"><img src="./icons/palpay.png" alt="" className="w-24 h-12" /></button>
            <button className="py-2  bg-black rounded-lg  h-12 flex justify-center items-center"><img src="./icons/gpay.png" alt="" className="w-12 h-6" /></button>
        </div>
      </div>
    );
}