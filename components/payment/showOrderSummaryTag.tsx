export default function ShowOrderSummaryTag(){
    return(
        <div className="flex justify-between xl:hidden w-full border-t border-b p-4 bg-gray-200">
        <div className="flex justify-between items-center gap-x-2">
          <img src="./icons/cart.png" alt="" className="w-8" />
          <p>Show Order Summery</p>
          <img src="./icons/downward.png" alt="" className="w-4 " />
        </div>
        <p>$179,94</p>
    </div>
    );
}