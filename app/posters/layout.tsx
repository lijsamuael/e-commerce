import PosterNavBar from "@/components/poster/navbar";

export default function PostersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-space-mono">
      <PosterNavBar />
      {children}
    </div>
  );
}
