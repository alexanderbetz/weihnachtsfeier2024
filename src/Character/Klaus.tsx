import { staticFile } from "remotion";
import { Character, characterSchema } from "./Base";
import { z } from "zod";

export const Klaus: React.FC<
  Omit<z.infer<typeof characterSchema>, "assets">
> = (props) => {
  return (
    <Character
      {...props}
      assets={{
        body: staticFile("characters/klaus/body.png"),
        head: staticFile("characters/klaus/head.png"),
        headAccessories: [staticFile("characters/klaus/head_accessory_1.png")],
        bodyScale: 0.6,
        headScale: 0.6
      }}
    />
  );
};
