import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  const images = [
    "/image29.jpg",
    "/image32.jpg",
    "/image2.jpg",
    "/image4.jpg",
    "/image5.jpg",
    "/image6.jpg",
    "/image7.jpg",
    "/image8.jpg",
    "/image9.jpg",
    "/image10.jpg",
    "/image11.jpg",
    "/image12.jpg",
    "/image13.jpg",
    "/image14.jpg",
    "/image15.jpg",
    "/image16.jpg",
    "/image17.jpg",
    "/image18.jpg",
    "/image19.jpg",
    "/image20.jpg",
    "/image21.jpg",
    "/image22.jpg",
    "/image23.jpg",
    "/image24.jpg",
    "/image25.jpg",
    "/image26.jpg",
    "/image27.jpg",
    "/image28.jpg",
    "/image1.jpg",
    "/image30.jpg",
    "/image31.jpg",
    "/image3.jpg",
    "/image33.jpg",
    "/image34.jpg",
  ];

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Container>
        <Header />

        {/* Two Column Image Grid */}
        <section className="my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((src, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg group"
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  width={400}
                  height={200}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Désolé`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
