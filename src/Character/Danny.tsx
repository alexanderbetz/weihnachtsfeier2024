import { staticFile } from "remotion";
import { Character, characterSchema } from "./Base";
import { z } from "zod";

export const Danny: React.FC<
  Omit<z.infer<typeof characterSchema>, "assets">
> = (props) => {
  return (
    <Character
      {...props}
      offsets={{
        head: 880,
        eyes: 170,
        eyesScale: 0.85,
        mouth: 80,
        mouthScale: 0.85,
      }}
      assets={{
        body: staticFile("characters/danny/body.png"),
        head: staticFile("characters/danny/head.png"),
        headAccessories: [staticFile("characters/danny/head_accessory_1.png")],
        bodyScale: 0.7,
        headScale: 0.7,
      }}
    />
  );
};
