import NavbarForLargeDevices from "./NavbarForLargeDevices";
import NavbarForSmallDevices from "./NavbarForSmallDevices";
import SubNavbar from "./SubNavbar";

export default function Navbar() {
  return (
    <>
      <NavbarForLargeDevices />
      <NavbarForSmallDevices />
      <SubNavbar />
    </>
  );
}
