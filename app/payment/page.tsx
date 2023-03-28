import PaymentForm from "@/components/payment/paymentForm";
import PaymentItemList from "@/components/payment/paymentItemList";

export default function Payment() {
  return (
    <div className=" font-sans flex   gap-x-16 w-full ">
      <div className=" pt-16 bg-white w-full lg:w-[55%] items-center lg:flex-none px-[1%] ssm:px-[5%] sm:px-[15%] lg:px-2 ">
        <PaymentForm />
      </div>
      <div className=" pt-8 bg-gray-50 w-full h-screen p-8 hidden lg:flex">
        <PaymentItemList />
      </div>
    </div>
  );
}
