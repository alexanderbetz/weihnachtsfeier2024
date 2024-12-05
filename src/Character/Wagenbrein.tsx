import { staticFile } from "remotion";
import { Character, characterSchema } from "./Base";
import { z } from "zod";

export const Wagenbrein: React.FC<
  Omit<z.infer<typeof characterSchema>, "assets">
> = (props) => {
  return (
    <Character
      {...props}
      offsets={{
        head: 190,
      }}
      assets={{
        body: staticFile("characters/wagenbrein/body.png"),
        head: staticFile("characters/wagenbrein/head.png"),
        bodyScale: 0.53,
        headScale: 0.53,
      }}
    />
  );
};
