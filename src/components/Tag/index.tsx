import Link from "next/link";

function Tag({ name, slug }: { name: string; slug: string }) {
  return (
    <li className="w-full">
      <Link
        href={`/slug/${slug}`}
        className={`btn btn-outline no-animation h-6 bg-base-300 w-full place-items-center`}
      >
        {name}
      </Link>
    </li>
  );
}

export default Tag;
