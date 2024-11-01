import { staticFile } from "remotion";
import { Character, characterSchema } from "./Character";
import { z } from "zod";

export const Danny: React.FC<z.infer<typeof characterSchema>> = (props) => {
  return (
    <Character
      {...props}
      assets={{
        body: staticFile("avatar.png"),
        bodyWidth: 476,
        bodyHeight: 643,
      }}
    />
  );
};
