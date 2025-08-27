import Image from "next/image";
import Link from "next/link";
import SearchInput from "./SearchInput";
import Container from "../../container/Container";
import { RiCustomerService2Fill } from "react-icons/ri";
import UserAccount from "./UserAccount";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b">
      <Container size="full">
        <div className="flex items-center justify-around">
          <Link href="/">
            <Image
              priority
              src="/images/new-market-logo.png"
              alt="New Market Logo"
              width={100}
              height={100}
            />
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
          <UserAccount />
        </div>
      </Container>
    </nav>
  );
}
