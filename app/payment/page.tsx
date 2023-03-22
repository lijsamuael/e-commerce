import Link from "next/link";

export default function Payment() {
  return (
    <div className="max-w-[1500px] mx-auto">
      <div className="flex ">
        <div className="space-y-8">
          <img src="./images/logo.png" alt="" />
          <div className="flex">
            <Link href={""}>Cart</Link>
            <img
              src="./icons/greater.png"
              alt=""
              className="w-[25px] h-[16px] self-center"
            />
            <Link href={""}>Information</Link>
            <img
              src="./icons/greater.png"
              alt=""
              className="w-[25px] h-[16px] self-center"
            />

            <Link href={""}>Shipping</Link>
            <img
              src="./icons/greater.png"
              alt=""
              className="w-[25px] h-[16px] self-center"
            />

            <Link href={""}>Payment</Link>
          </div>
          <div className="">
            <h2 className="text-center">Express Checkout</h2>
            <div className="flex justify-between gap-x-2 border gap-y-4 p-8 rounded-lg">
                <button className="py-4 px-8 bg-gray-500 rounded-lg">Shop Pay</button>
                <button className="py-4 px-8 bg-gray-500 rounded-lg">Pay pal</button>
                <button className="py-4 px-8 bg-gray-500 rounded-lg">Gpay</button>
            </div>
          </div>
        </div>
        <div>right</div>
      </div>
    </div>
  );
}
