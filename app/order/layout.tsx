import OrderFooter from "@/components/order/footer";
import OrderNavBar from "@/components/order/navbar";

export default function OrderLayout({ children }: { children: any }) {
  return (
    <div>
      <OrderNavBar />
      {children}
      <OrderFooter />
    </div>
  );
}
