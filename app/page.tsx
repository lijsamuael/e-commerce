import Link from "next/link";

export default function Home() {
  return (
    <main className="space-x-16">
      <Link href="/posters">Posters </Link>
      <Link href="/order">Order</Link>
      <Link href="/cards">Cards</Link>
      <Link href="/payment">Payment</Link>
      <Link href="/cardModal">Card Modal</Link>
      <Link href="/cartModal">Cart Modal</Link>
    </main>
  );
}
