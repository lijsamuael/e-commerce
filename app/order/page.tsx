import OrderSummary from "@/components/order/orderSummary";
import Payment from "@/components/order/payment";
import Shipping from "@/components/order/shipping";
import Summary from "@/components/order/summary";

export default function Order() {
  return (
    <div className="relative z-10 bottom-[70px] flex  p-4 px-[5%] gap-x-8 w-full">
      <div className="flex flex-col col-span-2 h-full gap-y-8 bg-transparent w-full">
        <div className="flex justify-center space-x-4 text-white">
          <h1 className=" ssm:text-left  text-4xl font-extrabold">YOUR ORDER</h1>
          <span className="hidden ssm:flex flex-grow border-dotted border-b-2 border-white mb-4"></span>
        </div>
        <Summary />
        <Shipping />
        <Payment />
        <OrderSummary width="w-full" visiblity="flex lg:hidden" />
      </div>
      <OrderSummary width="w-[370px]" visiblity="hidden lg:flex" />
    </div>
  );
}
