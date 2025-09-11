import Image from "next/image";
import darkModeLogo from "@/public/images/new-market-logo-white.png";

export default function Logo() {
  return (
    <div className="relative h-10 w-28">
      <Image
        fill
        src={darkModeLogo}
        alt="New Market Logo"
        className="absolute object-cover object-center"
      />
    </div>
  );
}
