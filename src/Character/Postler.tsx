import { staticFile } from "remotion";
import { Character, characterSchema } from "./Base";
import { z } from "zod";

export const Postler: React.FC<
  Omit<z.infer<typeof characterSchema>, "assets">
> = (props) => {
  return (
    <Character
      {...props}
      offsets={{
        head: 760,
        eyes: 170,
        eyesScale: 0.85,
        mouth: 75,
        mouthScale: 0.85,
      }}
      assets={{
        body: staticFile("characters/postler/body.png"),
        head: staticFile("characters/postler/head.png"),
        bodyScale: 0.6,
        headScale: 0.6,
      }}
    />
  );
};
