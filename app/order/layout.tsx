import OrderFooter from "@/components/order/footer";
import OrderNavBar from "@/components/order/navbar";

export default function OrderLayout({ children }: { children: any }) {
  return (
    <div className="max-w-[1500px] mx-auto">
      <OrderNavBar />
      {children}
      <OrderFooter />
    </div>
  );
}
