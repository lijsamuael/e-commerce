export default function Summary(){
    return(
        <div className="border border-black px-[5%] py-8 space-y-16 h-full">
        <div className="border-b  border-gray-400 pb-8">
          <h3 className="text-2xl">1. Summary</h3>
        </div>
        <div className="flex flex-col sm:flex-row justify-between w-full gap-y-2 sm:gap-y-4">
          <div className="flex flex-col sm:flex-row gap-x-4 w-full sm:w-[170px] ">
            <img src="./image1.png" alt="" width="" />
            <div className="flex flex-col sm:justify-center space-y-2 sm:space-y-4 whitespace-nowrap">
              <p className="text-xl font-bold">Voyager 1</p>
              <p>Quantity 1</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg">$ 49.99 USD</p>
          </div>
        </div>
      </div>
    );
}