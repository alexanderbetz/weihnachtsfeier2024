import { staticFile } from "remotion";
import { Character, characterSchema } from "./Base";
import { z } from "zod";

export const Satan: React.FC<z.infer<typeof characterSchema>> = (props) => {
  return (
    <Character
      {...props}
      assets={{
        body: staticFile("characters/satan.webp"),
        bodyWidth: 906 * 2,
        bodyHeight: 1066 * 2,
      }}
    />
  );
};
