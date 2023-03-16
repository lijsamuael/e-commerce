export default function SpacePosters() {
  return (
    <div className="grid grid-cols-3  py-4 px-[10%] gap-x-8">
      <div className="flex flex-col col-span-2 ">
        <h1 className="text-4xl font-extrabold">YOUR ORDER</h1>
        <div className="border border-black">
        <div className="border">
          <h3>1. Summary</h3>
        </div>
        <div className="flex justify-between ">
          <div className="flex">
            <img src="./image1.png" alt="" width="200" />
            <div className="flex flex-col justify-center">
                <p>Voyager 1</p>
                <p>Quantity 1</p>
            </div>
          </div>
           <div className="flex flex-col justify-center">
           <p className="text-lg">$ 49.99 USD</p>
           </div>
        </div>
        </div>
      </div>
      <div className="flex flex-col col-span-1 justify-center border border-black  py-4 w-96">
        <h2 className="text-xl font-medium border-b border-gray-300 px-4  py-4 flex align-middle">
          Order Summary
        </h2>
        <div className="border-b border-gray-300 px-4 py-4 space-y-2">
          <p className="text-lg font-medium">Posters</p>
          <div className="flex justify-between">
            <p className="text-gray-400">Voyager 1</p>
            <p>x1</p>
          </div>
        </div>
        <div className="border-b border-gray-300 px-4 py-4">
          <div className="flex justify-between border-b border-gray-300 py-4 ">
            <p className="text-gray-400">Posters</p>
            <p>$ 49.99 USD</p>
          </div>
          <div className="flex justify-between py-4">
            <p className="text-lg font-medium">Total</p>
            <p className="text-xl font-bold">$ 49.99 USD</p>
          </div>
        </div>
        <div className="px-4 py-4 space-y-2">
          <p className="text-lg font-medium">Discount Code</p>
          <div className="flex gap-x-2">
            <input className="bg-gray-300" type="text" />
            <button className="border border-black py-4 px-8 ">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}
