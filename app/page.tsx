import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';


export default function Home() {
  return (
    <main>
      <Link href="/posters">Posters Page</Link>
      <Link href="/spacePosters">Space Posters Page</Link>
    </main>
  );
}
