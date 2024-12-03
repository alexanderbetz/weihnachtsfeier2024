import { staticFile } from "remotion";
import { Character, characterSchema } from "./Base";
import { z } from "zod";

export const Alex: React.FC<
  Omit<z.infer<typeof characterSchema>, "assets">
> = (props) => {
  return (
    <Character
      {...props}
      assets={{
        body: staticFile("characters/alex/body.png"),
        head: staticFile("characters/alex/head.png"),
        headAccessories: [staticFile("characters/alex/head_accessory_1.png")],
        bodyScale: 0.6,
        headScale: 0.6
      }}
    />
  );
};
