import { PortableTextBlock } from "next-sanity";

export type NewsItem = {
  _id: string;
  title: string;
  publishedAt: string;
  image: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  body: PortableTextBlock[];
};

export type Concert = {
  _id: string;
  title: string;
  date: string;
  location: string;
  ticketsLink: string;
  image?: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
};

export type GalleryType = {
  _id: string;
  title: string;
  images: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
    alt?: string;
  }[];
};
