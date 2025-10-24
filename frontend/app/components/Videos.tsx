import { client } from "@/sanity/client";
import { defineQuery } from "next-sanity";

function getEmbedUrl(url?: string) {
  if (!url) return "";
  const youtubeMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^\&\?\/]+)/
  );
  if (youtubeMatch && youtubeMatch[1]) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  }
  return url; // fallback if it's already an embed or a different provider
}

const VIDEO_QUERY = defineQuery(`
 *[_type == "videos"]{
    videoList[]{
      title,
      videoUrl,
    }
  }[0]
`);

type Videos = {
  videoList: {
    title: string;
    videoUrl: string;
  }[];
};

export default async function Videos() {
  const videos = await client.fetch<Videos>(VIDEO_QUERY);

  return (
    <section>
      <h2>Videos</h2>
      <ul>
        {videos.videoList.map((video) => {
          const embedUrl = getEmbedUrl(video.videoUrl);
          return (
            <li key={video.videoUrl}>
              <iframe
                src={embedUrl}
                title={video.title}
                className="w-full aspect-video"
                allowFullScreen
              ></iframe>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
