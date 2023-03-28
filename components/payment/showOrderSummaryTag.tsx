export default function ShowOrderSummaryTag() {
  return (
    <div className="flex justify-between lg:hidden absolute top-[180px] w-full border-t border-b px-[5%] sm:px-[15%] py-6 border-gray-300 my-4 bg-gray-50">
      <div className="flex justify-between items-center gap-x-4">
        <img src="./icons/cart.png" alt="" className="w-8" />
        <div className="flex items-center gap-x-2">
          <p className="text-blue-500">Show Order Summery</p>
          <img src="./icons/downward.png" alt="" className="w-6 " />
        </div>
      </div>
      <p>$179,94</p>
    </div>
  );
}
