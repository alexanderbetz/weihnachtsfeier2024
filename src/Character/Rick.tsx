import { staticFile } from "remotion";
import { Character, characterSchema } from "./Base";
import { z } from "zod";

export const Rick: React.FC<
  Omit<z.infer<typeof characterSchema>, "assets">
> = (props) => {
  return (
    <Character
      {...props}
      offsets={{
        head: 830,
        eyes: 160,
        eyesScale: 0.8,
        mouth: 85,
        mouthScale: 0.85,
        ignoreMouth: true,
        ignoreEyes: true
      }}
      assets={{
        body: staticFile("characters/rick/body.png"),
        head: staticFile("characters/rick/head.png"),
        bodyScale: 0.3,
        headScale: 0.3,
      }}
    />
  );
};
