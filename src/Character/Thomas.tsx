import { staticFile } from "remotion";
import { Character, characterSchema } from "./Character";
import { z } from "zod";

export const Thomas: React.FC<z.infer<typeof characterSchema>> = (props) => {
  return (
    <Character
      {...props}
      scale={props.scale ? props.scale * 0.7 : 0.7}
      assets={{
        body: staticFile("characters/ike.webp"),
        bodyWidth: 421,
        bodyHeight: 641,
      }}
    />
  );
};
