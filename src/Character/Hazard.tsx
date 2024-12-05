import { staticFile } from "remotion";
import { Character, characterSchema } from "./Base";
import { z } from "zod";

export const Hazard: React.FC<
  Omit<z.infer<typeof characterSchema>, "assets">
> = (props) => {
  return (
    <Character
      {...props}
      offsets={{
        head: 820,
        eyes: 160,
        eyesScale: 0.8,
        mouth: 105,
        mouthScale: 0.85,
      }}
      assets={{
        body: staticFile("characters/hazard/body.png"),
        head: staticFile("characters/hazard/head.png"),
        headAccessories: [staticFile("characters/hazard/head_accessory_1.png")],
        bodyScale: 0.6,
        headScale: 0.6,
      }}
    />
  );
};
