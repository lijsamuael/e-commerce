import './globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';



import NavBar from "@/components/poster/navbar";
import Footer from "@/components/poster/footer";

config.autoAddCss = false;


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-space-mono box-border">
        {children}
      </body>
    </html>
  );
}
