import Link from "next/link";

function NotFound() {
  return (
    <section className="my-16">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-2xl tracking-tight lg:text-5xl text-primary-600">
            {" "}
            Something went wrong
          </h1>
          <p className="mb-4 text-lg text-black dark:text-white">
            Sorry, we cant find that article. You will find lots to explore on
            the home page.
          </p>
          <Link href="/" className="btn btn-outline">
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
