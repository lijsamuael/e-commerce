import {
  faCartShopping,
  faLongArrowLeft,
  faStickyNote,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function OrderFooter() {
  return (
    <div className=" bg-black">
      <div className="flex flex-col md:flex-row flex-wrap w-full  justify-between  text-white px-[4%]  py-8 md:text-start text-center gap-y-16 gap-x-36 max-w-[1500px] mx-auto">
        <div className="flex flex-col  gap-y-8 ">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Space Posters</h1>
            <p className="text-gray-400">© Space Posters, 2023</p>
          </div>
          <div className="space-x-4  text-sm">
            <Link href="/" className="space-x-2 gap-y-4">
              <span>HOME</span>
            </Link>
            <Link href="/" className="space-x-2">
              <span>CONTACT</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 w-full md:w-1/2 px-[10%] md:px-0">
          <p className="text-xl md:text-base">
            Sign up for announcments, sales, and new product updates.
          </p>
          <div className="grid grid-cols-3 lg:grid-cols-4 ssm:flex-nowrap flex-wrap gap-x-4 gap-y-2">
            <input
              className="col-span-3 ssm:col-span-2 border-2 border-gray-500 bg-black px-2 py-[6px] flex-grow"
              placeholder="Enter text here"
            ></input>
            <button className="inline-block col-span-3 ssm:col-span-1 border-2 border-gray-500 px-2 py-[6px] w-full ssm:w-auto ">
              Submit
            </button>
          </div>
          <div className=" flex ssm:self-start  justify-center space-x-2  items-center">
            <FontAwesomeIcon icon={faInstagram} />
            <span className="text-sm">Instagram</span>
          </div>
        </div>
      </div>
    </div>
  );
}
