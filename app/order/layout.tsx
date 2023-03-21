import OrderFooter from "@/components/order/footer";
import OrderNavBar from "@/components/order/navbar";

export default function OrderLayout({ children }: { children: any }) {
  return (
    <div className="">
      <OrderNavBar />
      {children}
      <OrderFooter />
    </div>
  );
}
