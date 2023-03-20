import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStickyNote,
  faHdd,
  faDrumstickBite,
} from "@fortawesome/free-solid-svg-icons";

export default function PosterNavBar() {
  return (
    <nav className="flex bg-black text-white ">
      <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 w-full mx-[3%] mt-12 mb-16 justify-around">
        <div className="w-full border flex ">
          <div className="mx-auto space-x-4  py-8">
            <FontAwesomeIcon icon={faStickyNote} />
            <span className="text-xl md:text-base">Enhanced Mate Paper</span>
          </div>
        </div>
        <div className="w-full border flex ">
          <div className="mx-auto space-x-4  py-8  ">
            <FontAwesomeIcon icon={faDrumstickBite} />
            <span className="text-xl md:text-base">Sent Rolled In A Tube</span>
          </div>
        </div>
        <div className="w-full border  flex  ">
          <div className="mx-auto space-x-4  py-8">
            <FontAwesomeIcon icon={faHdd} />
            <span className="text-xl md:text-base">Ultra High Resolution</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
