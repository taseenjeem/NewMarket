import Image from "next/image";
import Link from "next/link";
import SearchInput from "./SearchInput";
import Container from "../../container/Container";
import { RiCustomerService2Fill } from "react-icons/ri";
import UserAccount from "./UserAccount";
import { ThemeChanger } from "./ThemeChanger";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

export default function Navbar() {
  return (
    <nav className="bg-background fixed top-0 z-50 w-full border-b">
      <Container size="full">
        <div className="flex items-center justify-around">
          <Link href="/">
            <p className="text-2xl font-semibold uppercase tracking-widest">
              New Market
            </p>
          </Link>
          <Link
            href={"tel:+8801632356445"}
            className="flex items-center gap-2.5"
          >
            <RiCustomerService2Fill size={40} />
            <span>
              <p>Hotline 24/7</p>
              <p>+8801632356445</p>
            </span>
          </Link>
          <SearchInput />
          <span className="flex items-center gap-2.5">
            <UserAccount />
            <Cart />
            <Wishlist />
            <ThemeChanger />
          </span>
        </div>
      </Container>
    </nav>
  );
}
