import { staticFile } from "remotion";
import { Character, characterSchema } from "./Base";
import { z } from "zod";

export const MichaelJackson: React.FC<
  Omit<z.infer<typeof characterSchema>, "assets">
> = (props) => {
  return (
    <Character
      {...props}
      offsets={{
        head: 820,
        eyes: 170,
        eyesScale: 0.85,
        mouth: 105,
        mouthScale: 0.85,
      }}
      assets={{
        body: staticFile("characters/michael/body.png"),
        head: staticFile("characters/michael/head.png"),
        bodyScale: 0.6,
        headScale: 0.6,
      }}
    />
  );
};
