import { client, urlForImage } from "@/sanity/client";
import { defineQuery } from "next-sanity";
import Image from "next/image";
import { GalleryType } from "@/types";

const GALLERY_QUERY = defineQuery(`
    *[_type == "gallery"]{
      _id,
      images[],
    }[0]
`);

export default async function Gallery() {
  const gallery = await client.fetch<GalleryType>(GALLERY_QUERY);

  return (
    <section>
      <h2>Gallery</h2>
      <ul className="w-full py-4 flex flex-row gap-2 md:gap-4 overflow-x-auto no-scrollbar overflow-y-hidden snap-x snap-mandatory no-scrollbar scroll-smooth lg:grid lg:grid-cols-3">
        {gallery.images?.map((img, imgIndex: number) => (
          <li key={imgIndex} className="min-w-9/10 sm:min-w-4/10 snap-start">
            <Image
              src={urlForImage(img).url()}
              alt={img.alt || "Gallery Image " + (imgIndex + 1)}
              width={500}
              height={800}
              className="aspect-[5/8] object-cover w-full"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
