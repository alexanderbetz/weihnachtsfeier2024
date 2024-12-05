import { staticFile } from "remotion";
import { Character, characterSchema } from "./Base";
import { z } from "zod";

export const TomCruise: React.FC<
  Omit<z.infer<typeof characterSchema>, "assets">
> = (props) => {
  return (
    <Character
      {...props}
      offsets={{
        head: 720,
        eyes: 160,
        eyesScale: 0.8,
        mouth: 85,
        mouthScale: 0.85,
      }}
      assets={{
        body: staticFile("characters/tom-cruise/body.png"),
        head: staticFile("characters/tom-cruise/head.png"),
        headAccessories: [
          staticFile("characters/tom-cruise/head_accessory_1.png"),
        ],
        bodyScale: 0.6,
        headScale: 0.6,
      }}
    />
  );
};
