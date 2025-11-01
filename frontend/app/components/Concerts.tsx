import { client, urlForImage } from "@/sanity/client";
import { Concert } from "@/types";
import { defineQuery } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

const CONCERTS_QUERY = defineQuery(`
  *[_type == "concerts"]{
    _id,
    title,
    date,
    location,
    ticketsLink,
    image
  }
`);

export default async function Concerts() {
  const concerts = await client.fetch<Concert[]>(CONCERTS_QUERY, {});
  return (
    <section>
      <h2>Upcoming Concerts</h2>
      <ul>
        {concerts.map((concert) => (
          <li
            key={concert._id}
            className="grid md:grid-cols-2 bg-foreground/10"
          >
            {concert.image && (
              <Image
                src={urlForImage(concert.image).url()}
                alt={concert.title || "Concert Image"}
                width={800}
                height={600}
              />
            )}
            <div className="p-4">
              <h3>{concert.title}</h3>
              <p>{new Date(concert.date).toLocaleDateString("no-NO")}</p>
              <p>{concert.location}</p>
              {concert.ticketsLink && (
                <Link
                  href={concert.ticketsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  Tickets
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
