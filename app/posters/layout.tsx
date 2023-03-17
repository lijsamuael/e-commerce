import NavBar from "@/components/navbar";

export default function PostersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-space-mono">
      <NavBar />
      {children}
    </div>
  );
}
