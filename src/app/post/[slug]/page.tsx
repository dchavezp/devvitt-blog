import { getPosts, getSinglePost } from "@/services/api.service";
import { Bebas_Neue, Nunito } from "next/font/google";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactHtmlParser from "react-html-parser";
import { formatDateService } from "@/services/formatDate.service";
import { Author, PostOrPage } from "@tryghost/content-api";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const nunito = Nunito({ weight: "400", subsets: ["latin"] });

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const metaData: PostOrPage = await getSinglePost(params.slug);
  if (metaData) {
    let tags = metaData.tags?.map((item) => item.name);
    return {
      title: metaData.title,
      description: metaData.meta_description,
      keywords: tags,
      openGraph: {
        title: metaData.title,
        description: metaData.meta_description,
        url: metaData.url,
        keywords: tags,
        images: [
          {
            url: metaData.feature_image as string,
          },
        ],
        type: "website",
      },
    };
  }
}
async function Post({ params }: { params: { slug: string } }) {
  const post = await getSinglePost(params.slug);
  const authors = post.authors as Author[];
  if (!post) {
    notFound();
  }
  return (
    <article className="w-full prose prose-stone lg:prose-lg 2xl:prose-2xl">
      <h1 className={`${bebas.className}`}>{post.title}</h1>
      <p className="flex flex-row items-center gap-3">
        <Image
          key={authors[0].id}
          src={authors[0].profile_image as string}
          alt={authors[0].name as string}
          className="avatar rounded-full object-cover w-10 h-10"
          width={40}
          height={40}
        ></Image>
        <span className="flex flex-col gap-1 text-sm">
          <span className="text-accent">{authors[0].name}</span>
          <span className="flex flex-row gap-4">
            <span>{post.reading_time} min read</span>
            {formatDateService(post.created_at as string)}
          </span>
        </span>
      </p>
      <figure className="w-full">
        <Image
          src={post.feature_image as string}
          alt={post.title as string}
          className="aspect-video w-full h-full object-cover"
          width={600}
          height={200}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        ></Image>
      </figure>
      <div className={`${nunito.className}`}>
        {ReactHtmlParser(post.html as string)}
      </div>
    </article>
  );
}

export default Post;
