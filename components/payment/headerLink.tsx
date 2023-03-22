import Link from "next/link";

export default function HeaderLink(){
    return(
        <div className="flex">
        <Link href={""}>Cart</Link>
        <img
          src="./icons/greater.png"
          alt=""
          className="w-[25px] h-[16px] self-center"
        />
        <Link href={""}>Information</Link>
        <img
          src="./icons/greater.png"
          alt=""
          className="w-[25px] h-[16px] self-center"
        />

        <Link href={""}>Shipping</Link>
        <img
          src="./icons/greater.png"
          alt=""
          className="w-[25px] h-[16px] self-center"
        />

        <Link href={""}>Payment</Link>
      </div>
    );
}