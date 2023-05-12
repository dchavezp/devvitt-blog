import { getAllPages, getSinglePage } from "@/services/api.service";
import ReactHtmlParser from "react-html-parser";
import { Bebas_Neue } from "next/font/google";
import { Nunito } from "next/font/google";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const pages = await getAllPages();
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const nunito = Nunito({ weight: "400", subsets: ["latin"] });

async function Page({ params }: { params: { slug: string } }) {
  const page = await getSinglePage(params.slug);
  if (!page) {
    notFound();
  }
  return (
    <article className="grid place-items-center">
      <>
        <h1 className={`${bebas.className} text-4xl my-4`}>{page.title}</h1>
        <div
          className={`${nunito.className} prose prose-slate sm:prose-base prose-a:no-underline`}
        >
          {ReactHtmlParser(page.html as string)}
        </div>
      </>
    </article>
  );
}

export default Page;
