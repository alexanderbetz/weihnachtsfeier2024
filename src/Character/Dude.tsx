import { staticFile } from "remotion";
import { Character, characterSchema } from "./Character";
import { z } from "zod";

export const Dude: React.FC<z.infer<typeof characterSchema>> = (props) => {
  return (
    <Character
      {...props}
      assets={{
        body: staticFile("avatar-2.png"),
        bodyWidth: 547,
        bodyHeight: 621,
      }}
    />
  );
};
