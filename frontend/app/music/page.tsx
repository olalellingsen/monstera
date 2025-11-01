import { client, urlForImage } from "@/sanity/client";
import { Release } from "@/types";
import Image from "next/image";
import { defineQuery } from "next-sanity";
import Link from "next/link";

const ALBUM_QUERY = defineQuery(`
  *[_type == "albums"] | order(releaseDate desc){
    _id,
    title,
    coverArt,
    releaseDate,
    spotifyLink,
    trackList,
    personnel,
    description
  }
`);

const SINGLE_QUERY = defineQuery(`
  *[_type == "Singles"] | order(releaseDate desc){
    _id,
    title,
    coverArt,
    releaseDate,
  }
`);

export default async function page() {
  const albums = await client.fetch<Release[]>(ALBUM_QUERY, {});
  const singles = await client.fetch<Release[]>(SINGLE_QUERY, {});

  return (
    <>
      <nav className="absolute top-0 right-0 p-4 sm:px-8">
        <Link href="/">
          <h3>HOME</h3>
        </Link>
      </nav>
      <main className="px-2 sm:px-8 py-8 space-y-10 md:space-y-16">
        <h1>Music</h1>

        <section>
          <h2>Albums</h2>
          <ul className="flex flex-wrap gap-4">
            {albums.map((album) => (
              <li key={album._id}>
                <h3>{album.title}</h3>
                <Image
                  src={urlForImage(album.coverArt).url()}
                  alt={album.title || "Album Cover"}
                  width={500}
                  height={500}
                  className="w-sm lg:w-md"
                />
                <p className="text-gray-400">
                  Release:{" "}
                  {new Date(album.releaseDate).toLocaleDateString("no-NO")}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Singles</h2>
          <ul className="flex flex-wrap gap-2">
            {singles.map((single) => (
              <li key={single._id}>
                <h3>{single.title}</h3>
                <Image
                  src={urlForImage(single.coverArt).url()}
                  alt={single.title || "Single Cover"}
                  width={400}
                  height={400}
                  className="sm:max-w-xs"
                />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
