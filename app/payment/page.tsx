import PaymentForm from "@/components/payment/paymentForm";
import PaymentItemList from "@/components/payment/paymentItemList";

export default function Payment() {
  return (
    <div className=" font-sans flex   gap-x-16 w-full ">
      <div className=" bg-gray-100 xl:bg-white w-full xl:w-[55%] items-center xl:flex-none px-[5%] sm:px-[15%] xl:px-2 ">
        <PaymentForm />
      </div>
      <div className=" bg-gray-100 w-full p-8 hidden xl:flex">
        <PaymentItemList />
      </div>
    </div>
  );
}
