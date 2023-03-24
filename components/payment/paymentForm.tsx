import Link from "next/link";
import AdressForm from "./adressForm";
import Checkouts from "./checkouts";
import ContactInfo from "./contactInfo";
import HeaderLink from "./headerLink";
import NewArivals from "./newArrivals";
import Policies from "./policies";
import PosterMark from "./posterMark";
import ShowOrderSummaryTag from "./showOrderSummaryTag";

export default function PaymentForm() {
  return (
    <div className="flex flex-col items-center space-y-8 xl:max-w-[660px]  xl:ml-auto">
      <img src="./images/logo.png" alt="" />
      <ShowOrderSummaryTag />
      <HeaderLink />
      <div className="flex flex-col xl:hidden w-full">
      <NewArivals />
      </div>
      <Checkouts />
      <div className=" flex flex-col  w-full">
        <p className="relative top-[12px] self-center bg-white px-4">OR</p>
        <hr />
      </div>
      <ContactInfo />
      <AdressForm />
      <div className="flex space-x-4 self-start">
        <input type="checkbox" className="w-6 h-6 rounded-full" />
        <span>
          Text me with new competitions, products and special descounts -
          exclusive via only SMS
        </span>
      </div>
      <div className="flex justify-between w-full border rounded-lg p-2 ">
        <div className="flex justify-start items-center gap-x-2">
          <img src="./icons/leaf.png" alt="" className="w-16 h-8" />
          <div className="flex flex-col">
            <p className="text-lg font-semibold">
              Match our donation for $0.56
            </p>
            <div className="flex items-center gap-x-2">
              <p>powered by </p>
              <img src="./icons/ecocart.png" alt="" className="w-20 " />
            </div>
          </div>
        </div>
        <PosterMark />
      </div>
      <div className="flex flex-wrap-reverse justify-between w-full items-center">
        <div className="flex   items-center mx-auto sm:m-1 gap-y-4">
          <img src="./icons/smaller.png" alt="" className="w-4 " />
          <Link href="/cards" className="text-blue-500">
            Return to Cart
          </Link>
        </div>
        <button className="p-4 bg-blue-700 rounded-lg text-white w-full sm:w-64">
          Continue to shipping
        </button>
      </div>
      <hr className="w-full" />
      <Policies />
    </div>
  );
}
