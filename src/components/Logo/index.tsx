import Image from "next/image";
import logoImg from "@/images/logo-v2.png";
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
        alt="devvitt logo"
        placeholder="blur"
        blurDataURL={"/images/logo.svg"}
      />
    </Link>
  );
}

export default Logo;
