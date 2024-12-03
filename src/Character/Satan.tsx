import { staticFile } from "remotion";
import { Character, characterSchema } from "./Base";
import { z } from "zod";

export const Elisabeth: React.FC<z.infer<typeof characterSchema>> = (props) => {
  return (
    <Character
      {...props}
      bodySize="adult"
      assets={{
        body: staticFile("characters/elisabeth/body.png"),
        head: staticFile("characters/elisabeth/head.png"),
      }}
    />
  );
};
