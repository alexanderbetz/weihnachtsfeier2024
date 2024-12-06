import { staticFile } from "remotion";
import { Character, characterSchema } from "./Base";
import { z } from "zod";

export const Stani: React.FC<
  Omit<z.infer<typeof characterSchema>, "assets">
> = (props) => {
  return (
    <Character
      {...props}
      offsets={{
        head: 380
      }}
      assets={{
        body: staticFile("characters/stani/body.png"),
        head: staticFile("characters/stani/head.png"),
        bodyScale: 0.65,
        headScale: 0.55,
      }}
    />
  );
};
