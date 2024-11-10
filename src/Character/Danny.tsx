import { staticFile } from "remotion";
import { Character, characterSchema } from "./Base";
import { z } from "zod";

export const Danny: React.FC<
  Omit<z.infer<typeof characterSchema>, "assets">
> = (props) => {
  return (
    <Character
      {...props}
      assets={{
        body: staticFile("characters/danny/body.png"),
        head: staticFile("characters/danny/head.png"),
        headAccessories: [staticFile("characters/danny/head_accessory_1.png")],
      }}
    />
  );
};
