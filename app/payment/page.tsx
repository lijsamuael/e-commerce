import AdressForm from "@/components/payment/adressForm";
import Checkouts from "@/components/payment/checkouts";
import ContactInfo from "@/components/payment/contactInfo";
import HeaderLink from "@/components/payment/headerLink";

export default function Payment() {
  return (
    <div className="max-w-[1500px] mx-auto font-sans pb-96 pt-8">
      <div className="flex">
        <div className="flex flex-col items-center space-y-8">
          <img src="./images/logo.png" alt="" />
          <HeaderLink />
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
          <div className="flex">
            <div></div>
            <div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                  <span className="absolute font-medium text-xs uppercase right-1 text-white">
                    {" "}
                    OFF{" "}
                  </span>
                  <span className="absolute font-medium text-xs uppercase right-8 text-white">
                    {" "}
                    ON{" "}
                  </span>
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Toggle me
                </span>
              </label>
            </div>
          </div>
        </div>
        <div>right</div>
      </div>
    </div>
  );
}
