import Image from "next/image";
import Link from "next/link";

export default function PromotionalSections() {
  return (
    <div className="grid h-full grid-rows-2 gap-4 rounded">
      <Link href={""} className="relative h-[164px] rounded lg:size-full">
        <Image
          fill
          priority
          src={"/images/promotional1.webp"}
          alt="Promotional Poster 1"
          className="absolute rounded object-cover object-center"
        />
      </Link>
      <Link href={""} className="relative h-[164px] rounded lg:size-full">
        <Image
          fill
          priority
          src={"/images/promotional2.webp"}
          alt="Promotional Poster 2"
          className="absolute rounded object-cover object-center"
        />
      </Link>
    </div>
  );
}
