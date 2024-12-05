import { staticFile } from "remotion";
import { Character, characterSchema } from "./Base";
import { z } from "zod";

export const Elisabeth: React.FC<
  Omit<z.infer<typeof characterSchema>, "assets">
> = (props) => {
  return (
    <Character
      {...props}
      offsets={{
        head: 820,
        eyes: 120,
        eyesScale: 0.75,
        mouth: 60,
        mouthScale: 0.85,
      }}
      assets={{
        body: staticFile("characters/elisabeth/body.png"),
        head: staticFile("characters/elisabeth/head.png"),
        bodyScale: 0.6,
        headScale: 0.6,
      }}
    />
  );
};
