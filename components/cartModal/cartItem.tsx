export default function CartItem(){
    return(
        <div className="flex flex-col gap-y-4">
        <h1 className="text-center text-2xl font-bold">
          Riiple Button Up
        </h1>
        <div className="flex gap-x-4">
          <div className="flex flex-col bg-gray-100 mx-2 h-36 ssm:h-48 py-8 justify-center">
            <div className="self-center px-4">
              <img
                src="./images/shirt1.png"
                alt=""
                className="w-[90px]"
              />
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <p>NAVY / S</p>
              <p>$59.00</p>
            </div>
            <div className="flex ">
              <button className="border border-black py-1 px-2">-</button>
              <span className="border-b border-t  border-black py-1 px-2">
                1
              </span>
              <button className="border border-black py-1 px-2">+</button>
            </div>
            <button className="border-b border-black text-xs">
              REMOVE
            </button>
          </div>
        </div>
        <hr />
      </div>
    );
}