import { type Author } from "@/interfaces/author";
import Link from "next/link";
import CoverImage from "./cover-image";

type Props = {
  title: string;
  coverImage: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({ title, coverImage, excerpt, slug }: Props) {
  // Detect if excerpt looks like a phone number
  const isPhone = /^\d{3}[- ]?\d{3}[- ]?\d{4}$/.test(excerpt);

  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">{title}</h3>
      {isPhone ? (
        <a
          href={`tel:${excerpt.replace(/[^0-9]/g, "")}`}
          className="inline-block px-5 py-3 text-gray-700 bg-gradient-to-r from-gray-300 to-gray-300 font-semibold rounded-xl shadow hover:bg-blue-700 transition"
        >
          {excerpt}
        </a>
      ) : (
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      )}
    </div>
  );
}
