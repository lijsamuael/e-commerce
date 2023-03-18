import {
  faDrumstickBite,
  faHdd,
  faStickyNote,
  faLongArrowLeft,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function SpaceNavBar() {
  return (
    <nav className="relative flex flex-col z-0 bg-black text-white px-[4%] pt-8 pb-40 space-y-12">
      <div className="flex">
        <Link href="/" className="space-x-2">
          <FontAwesomeIcon icon={faLongArrowLeft} />
          <span>Back</span>
        </Link>
        <h1 className="mx-auto text-xl ssm:text-2xl font-bold">Space Posters</h1>
        <div className="space-x-2">
          <FontAwesomeIcon icon={faCartShopping} />
          <span>1</span>
        </div>
      </div>
      <div className="hidden sm:flex  mt-12 mb-16 justify-between bg-gray-700 px-2 py-[4px]">
        <span className="text-xl md:text-base">1. SUMMERY</span>
        <span className="flex-grow border-b-2 m-2"></span>
        <span className="text-xl md:text-base">2. SHIPPING</span>
        <span className="flex-grow border-b-2 m-2"></span>
        <span className="text-xl md:text-base">3. PARYMENT</span>
      </div>
    </nav>
  );
}
