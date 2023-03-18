import Footer from "@/components/footer";
import SpaceFooter from "@/components/spaceFooter";
import SpaceNavBar from "@/components/spaceNavbar";

export default function SpacePostersLayout({ children }: { children: any }) {
  return (
    <div>
      <SpaceNavBar />
      {children}
      <SpaceFooter />
    </div>
  );
}
