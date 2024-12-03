import { staticFile } from "remotion";
import { Character, characterSchema } from "./Base";
import { z } from "zod";

export const Idefix: React.FC<z.infer<typeof characterSchema>> = (props) => {
  return (
    <Character
      {...props}
      assets={{
        body: staticFile("characters/idefix/body.png"),
        head: staticFile("characters/idefix/head.png"),
      }}
    />
  );
};
