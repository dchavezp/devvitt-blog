import Image from "next/image";
import logoImg from "@/images/logov2.svg";
import Link from "next/link";

function Logo() {
  return (
    <Link
      className="btn btn-ghost normal-case text-xl"
      href={"/"}
      aria-label="Home Page"
    >
      <Image
        src={logoImg}
        className="w-[100px]"
        alt="devvitt logo"
        placeholder="blur"
        blurDataURL={"/images/logo.svg"}
      />
    </Link>
  );
}

export default Logo;
