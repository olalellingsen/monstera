import { client, urlForImage } from "@/sanity/client";
import { NewsItem } from "@/types";
import { defineQuery, PortableText } from "next-sanity";
import Image from "next/image";
import { myPortableTextComponents } from "./PortableTextComponent";

const NEWS_QUERY = defineQuery(`
  *[_type == "news"]{
    _id,
    title,
    publishedAt,
    image,
    body
  }
`);

export default async function News() {
  const news = await client.fetch<NewsItem[]>(NEWS_QUERY, {});

  return (
    <section>
      <h2>Latest</h2>
      <ul className="">
        {news.map((item) => (
          <li key={item._id} className="grid sm:grid-cols-2 bg-foreground/10">
            {item.image && (
              <Image
                src={urlForImage(item.image).url()}
                alt={item.title}
                className="w-full object-cover"
                width={800}
                height={600}
              />
            )}
            <div className="p-4">
              <p className="text-foreground/50">
                {new Date(item.publishedAt).toLocaleDateString()}
              </p>
              <h3>{item.title}</h3>
              <PortableText
                value={item.body}
                components={myPortableTextComponents}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
