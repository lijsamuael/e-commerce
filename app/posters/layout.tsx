import NavBar from "@/components/navbar";

export default function PostersLayout({children}:{children: React.ReactNode;}){
    return (
        <html lang="en">
        <body className="font-space-mono">
          <NavBar />
          {children}
        </body>
      </html>
    );
}