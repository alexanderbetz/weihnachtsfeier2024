import { staticFile } from "remotion";
import { Character, characterSchema } from "./Base";
import { z } from "zod";

export const Idefix: React.FC<
  Omit<z.infer<typeof characterSchema>, "assets">
> = (props) => {
  return (
    <Character
      {...props}
      offsets={{
        head: 880,
        eyes: 120,
        eyesScale: 0.8,
        mouth: 40,
        mouthScale: 0.6,
      }}
      assets={{
        body: staticFile("characters/idefix/body.png"),
        head: staticFile("characters/idefix/head.png"),
        bodyScale: 1,
        headScale: 1,
      }}
    />
  );
};
