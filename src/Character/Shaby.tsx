import { staticFile } from "remotion";
import { Character, characterSchema } from "./Base";
import { z } from "zod";

export const Shaby: React.FC<
  Omit<z.infer<typeof characterSchema>, "assets">
> = (props) => {
  return (
    <Character
      {...props}
      assets={{
        body: staticFile("characters/shaby/body.png"),
        head: staticFile("characters/shaby/head.png"),
        bodyScale: 0.53,
        headScale: 0.53,
      }}
    />
  );
};
