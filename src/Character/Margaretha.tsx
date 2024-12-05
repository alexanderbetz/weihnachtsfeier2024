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
        head: 615,
        eyes: 130,
        eyesScale: 0.65,
        mouth: 65,
        mouthScale: 0.75,
      }}
      assets={{
        body: staticFile("characters/margaretha/body.png"),
        head: staticFile("characters/margaretha/head.png"),
        bodyScale: 1,
        headScale: 1,
      }}
    />
  );
};
