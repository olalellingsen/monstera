import { defineQuery } from "next-sanity";
import Image from "next/image";
import { client, urlForImage } from "@/sanity/client";
import News from "./components/News";
import Concerts from "./components/Concerts";
import Link from "next/link";
import Gallery from "./components/Gallery";
import Videos from "./components/Videos";

const HEADER_QUERY = defineQuery(`
  *[_type == "header"][0]{
    title,
    homeImage, 
  }
`);

export default async function Home() {
  const header = await client.fetch(HEADER_QUERY, {});

  return (
    <>
      <header>
        <nav className="absolute bottom-0 w-full">
          <div className="flex justify-between w-full text-white p-8">
            <h1>Monstera</h1>
            <ul className="flex space-x-4">
              <Link href="/"></Link>
            </ul>
          </div>
        </nav>
        {header.homeImage && (
          <Image
            src={urlForImage(header.homeImage.image).url()}
            alt={header.title}
            width={1200}
            height={600}
            className="object-cover h-screen w-full"
          />
        )}
      </header>

      <main className="p-2 space-y-10 py-8 md:space-y-20 mx-auto max-w-4xl">
        <News />
        <Concerts />
        <Videos />
        <Gallery />
      </main>
    </>
  );
}
