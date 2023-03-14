import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStickyNote,
  faHdd,
  faDrumstickBite,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <nav className="flex bg-black text-white">
      <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 w-full mx-[3%] mt-12 mb-16 justify-around">
        <div className="w-full border flex ">
          <div className="mx-auto space-x-4  py-4">
            <FontAwesomeIcon icon={faStickyNote} />
            <span>Enhanced Mate Paper</span>
          </div>
        </div>
        <div className="w-full border flex ">
          <div className="mx-auto space-x-4  py-4  ">
            <FontAwesomeIcon icon={faDrumstickBite} />
            <span>Sent Rolled In A Tube</span>
          </div>
        </div>
        <div className="w-full border  flex  ">
          <div className="mx-auto space-x-4  py-4">
            <FontAwesomeIcon icon={faHdd} />
            <span>Ultra High Resolution</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
