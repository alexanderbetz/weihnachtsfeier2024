import { staticFile } from "remotion";
import { Character, characterSchema } from "./Base";
import { z } from "zod";

export const Otto: React.FC<
  Omit<z.infer<typeof characterSchema>, "assets">
> = (props) => {
  return (
    <Character
      {...props}
      assets={{
        body: staticFile("characters/otto/body.png"),
        head: staticFile("characters/otto/head.png"),
        bodyScale: 0.7,
        headScale: 0.65,
      }}
    />
  );
};
