import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  excerpt: string;
  slug: string;
  className?: string;
};

export function HeroPost({ title, coverImage, excerpt, slug }: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <Image
          src="/imagehero.jpg"
          alt={title}
          width={200}
          height={100}
          className="w-full rounded-2xl object-cover"
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <p className="text-lg leading-relaxed mb-6">{excerpt}</p>

          {/* Modern Button */}
          <Link
            href={`/posts/${slug}`}
            className="inline-block px-6 py-3 text-lg font-medium text-gray-700 bg-gradient-to-r from-gray-300 to-gray-300 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Découvrez-en plus ici !
          </Link>
        </div>
      </div>
    </section>
  );
}
