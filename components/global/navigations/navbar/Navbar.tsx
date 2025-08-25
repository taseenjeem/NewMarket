import Image from "next/image";
import Link from "next/link";
import SearchInput from "./SearchInput";
import Container from "../../container/Container";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b">
      <Container size="xl">
        <div className="flex items-center justify-evenly">
          <Link href="/">
            <Image
              priority
              src="/images/new-market-logo.png"
              alt="New Market Logo"
              width={100}
              height={100}
            />
          </Link>
          <div></div>
          <SearchInput />
        </div>
      </Container>
    </nav>
  );
}
