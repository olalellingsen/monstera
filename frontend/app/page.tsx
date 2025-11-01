import { defineQuery } from "next-sanity";
import Image from "next/image";
import { client, urlForImage } from "@/sanity/client";
import News from "./components/News";
import Concerts from "./components/Concerts";
import Link from "next/link";
import Gallery from "./components/Gallery";
import Videos from "./components/Videos";
import Popup from "./components/Popup";

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
      <nav className="absolute top-0 right-0 p-4 sm:px-8">
        <Link href="/music">
          <h3>MUSIC</h3>
        </Link>
      </nav>
      <header>
        <h1 className="absolute bottom-4 left-4">{header.title}</h1>
        {header.homeImage && (
          <Image
            src={urlForImage(header.homeImage.image).url()}
            alt={header.title}
            width={1200}
            height={600}
            className="object-cover h-screen w-full"
          />
        )}

        <Popup />
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
