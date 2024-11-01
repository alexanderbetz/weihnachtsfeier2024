import { staticFile } from "remotion";
import { Character, characterSchema } from "./Character";
import { z } from "zod";

export const Satan: React.FC<z.infer<typeof characterSchema>> = (props) => {
  return (
    <Character
      {...props}
      assets={{
        body: staticFile("satan.webp"),
        bodyWidth: 906 * 2,
        bodyHeight: 1066 * 2,
      }}
    />
  );
};
