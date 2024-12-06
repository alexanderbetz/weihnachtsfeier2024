import { staticFile } from "remotion";
import { Character, characterSchema } from "./Base";
import { z } from "zod";

export const Hannes: React.FC<
  Omit<z.infer<typeof characterSchema>, "assets">
> = (props) => {
  return (
    <Character
      {...props}
      offsets={{
        head: 2000,
        eyes: 160,
        eyesScale: 0.8,
        mouth: 85,
        mouthScale: 0.85,
      }}
      assets={{
        body: staticFile("characters/hannes/body.png"),
        head: staticFile("characters/tom-cruise/head.png"),
        bodyScale: 1,
        headScale: 1,
      }}
    />
  );
};
