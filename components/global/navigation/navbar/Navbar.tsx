import Link from "next/link";
import SearchInput from "./SearchInput";
import { RiCustomerService2Fill } from "react-icons/ri";
import UserAccount from "./UserAccount";
import { ThemeChanger } from "./ThemeChanger";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="bg-background fixed top-0 z-50 w-full border-b">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between gap-14">
          <Link href="/">
            <Logo />
          </Link>
          <a
            href={"tel:+8801632356445"}
            className="flex items-center gap-2.5 rounded-md border p-2"
          >
            <RiCustomerService2Fill size={37} />
            <span>
              <p className="text-sm font-semibold">Hotline 24/7</p>
              <p>+8801632356445</p>
            </span>
          </a>
          <SearchInput />
          <span className="flex items-center gap-2.5">
            <UserAccount />
            <Cart />
            <Wishlist />
            <ThemeChanger />
          </span>
        </div>
      </div>
    </header>
  );
}
