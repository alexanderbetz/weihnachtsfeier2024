import { staticFile } from "remotion";
import { Character, characterSchema } from "./Base";
import { z } from "zod";

export const Gindl: React.FC<
  Omit<z.infer<typeof characterSchema>, "assets">
> = (props) => {
  return (
    <Character
      {...props}
      offsets={{
        head: 720,
        eyes: 170,
        eyesScale: 0.85,
        mouth: 85,
        mouthScale: 0.85,
      }}
      assets={{
        body: staticFile("characters/gindl/body.png"),
        head: staticFile("characters/gindl/head.png"),
        bodyScale: 0.6,
        headScale: 0.6,
      }}
    />
  );
};
