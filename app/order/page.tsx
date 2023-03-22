import CustomForm from "@/components/order/customForm";
import OrderSummary from "@/components/order/orderSummary";
import Summary from "@/components/order/summary";
import { shipping, payment } from "../../components/order/inputs";

export default function Order() {
  return (
    <div className="relative z-10 bottom-[70px] flex  p-4 px-[3%] sm:px-[5%] gap-x-8 max-w-[1500px] mx-auto">
      <div className="flex flex-col col-span-2 h-full gap-y-8 bg-transparent w-full">
        <div className="flex justify-center space-x-4 text-white">
          <h1 className=" ssm:text-left  text-4xl font-extrabold">
            YOUR ORDER
          </h1>
          <span className="hidden ssm:flex flex-grow border-dotted border-b-2 border-white mb-4"></span>
        </div>
        <Summary />
        <CustomForm form={shipping} />
        <div className="space-y-2">
          <CustomForm form={payment} />
          <OrderSummary width="w-full" visiblity="flex lg:hidden" />
        </div>
      </div>
      <OrderSummary width="w-[370px]" visiblity="hidden lg:flex" />
    </div>
  );
}
