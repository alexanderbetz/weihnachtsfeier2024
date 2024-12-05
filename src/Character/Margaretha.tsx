import { staticFile } from "remotion";
import { Character, characterSchema } from "./Base";
import { z } from "zod";

export const Margaretha: React.FC<
  Omit<z.infer<typeof characterSchema>, "assets">
> = (props) => {
  return (
    <Character
      {...props}
      offsets={{
        head: 708,
        eyes: 160,
        eyesScale: 0.75,
        mouth: 80,
        mouthScale: 0.85,
      }}
      assets={{
        body: staticFile("characters/margaretha/body.png"),
        head: staticFile("characters/margaretha/head.png"),
        bodyScale: 1.15,
        headScale: 1.15,
      }}
    />
  );
};
