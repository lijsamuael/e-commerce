"use client";

import CartItem from "@/components/cartModal/cartItem";
import Link from "next/link";
import { MouseEventHandler } from "react";

interface CartModalProps {
  modalState: boolean;
  //   image: string;
  //   price: number;
  //   name: string;
  //   color: string;
  //   sizes: string[];
  closeAction: MouseEventHandler<HTMLButtonElement>;
}

export default function CartModal(props: CartModalProps) {
  function handleClose(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    props.closeAction(event);
  }
  const {
    modalState,
    // , image, price, name, color, sizes
  } = props;
  return (
    <>
      {
        <div className="  fixed z-10 top-0 left-0 bg-gray-600  w-full h-full flex items-start justify-end gap-x-4 bg-opacity-40">
          <button className="top-0 w-4 ml-4" onClick={handleClose}>
            <img className="pt-4" src="./icons/cancel.png " alt="" />
          </button>
          <div className="overflow-y-auto top-0 w-[350px] bg-white h-full pt-8 space-y-4 px-4 flex flex-col  pb-8">
            <p className="text-center text-3xl font-bold">YOUR CART</p>
            <hr className="" />
            <CartItem></CartItem>
            <CartItem></CartItem>
            <div className="space-y-2 text-center">
              <p className="text-lg text-center">
                LEAVE A NOTE WITH YOUR ORDER
              </p>
              <input type="text" className="w-full py-4 border-2" />
              <div className="flex flex-col">
                <p className="text-2xl font-bold pt-4">Total</p>
                <p className="text-xl font-semibold">$118.00 USD</p>
              </div>
              <p className="text-lg font-semibold">
                Taxes and shipping calculated at checkout
              </p>
              <button className="w-full py-2  border-2 border-black bg-blue-800 text-white text-xs">
                CHECKOUT
              </button>
              <button className="text-xs pt-3  border-b border-black">
                CONTINUE SHOPPING
              </button>
              <button className="w-full py-1  text-center text-white bg-indigo-500 border border-indigo-500  flex items-center justify-center">
                <img src="./icons/shoppay.png" alt="" className="w-28" />
              </button>
            </div>
          </div>
        </div>
      }
    </>
  );
}
