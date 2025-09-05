import Link from "next/link";
import Logo from "./Logo";
import SearchDrawer from "./SearchDrawer";
import Cart from "./Cart";
import { MobileMenu } from "./MobileMenu";

export default function NavbarForSmallDevices() {
  return (
    <header className="bg-background fixed top-0 z-50 block w-full border-b md:hidden">
      <nav className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Cart isMobile />
          </span>
          <Link href="/">
            <Logo />
          </Link>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
