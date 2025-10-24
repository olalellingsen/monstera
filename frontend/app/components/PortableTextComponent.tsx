import Link from "next/link";

export const myPortableTextComponents = {
  types: {
    image: ({ value }: { value: { imageUrl: string } }) => (
      <img src={value.imageUrl} />
    ),
    callToAction: ({
      value,
      isInline,
    }: {
      value: { url: string; text: string };
      isInline: boolean;
    }) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },

  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="pt-2">{children}</p>
    ),
  },

  marks: {
    link: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value?: { href: string };
    }) => {
      const href = value?.href || "#";
      const rel = !href.startsWith("/") ? "noreferrer noopener" : undefined;
      return (
        <Link className="underline" target="_blank" href={href} rel={rel}>
          {children}
        </Link>
      );
    },
  },
};
