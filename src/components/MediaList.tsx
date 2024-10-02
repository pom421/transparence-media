import { type PropsWithChildren } from "react";
import type { MediaSchema } from "../content/config";
import type { InferEntrySchema } from "astro:content";

type Props = {
  list: { id: string; collection: "media"; data: InferEntrySchema<"media"> }[];
};

export const MediaList = ({ children, list }: PropsWithChildren<Props>) => {
  return (
    <>
      <h1>Liste media</h1>
      <ul>
        {list.map((media) => (
          <li key={media.id}>
            <h2>{media.data["nom"]}</h2>
            <a href={media.data["site_web"]}>{media.data["site_web"]}</a>
            <pre>{JSON.stringify(media.data, null, 2)}</pre>
            {children}
          </li>
        ))}
      </ul>
    </>
  );
};
