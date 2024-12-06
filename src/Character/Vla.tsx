import { staticFile } from "remotion";
import { Character, characterSchema } from "./Base";
import { z } from "zod";

export const Vla: React.FC<
  Omit<z.infer<typeof characterSchema>, "assets">
> = (props) => {
  return (
    <Character
      {...props}
      offsets={{
        head: 770,
        eyes: 160,
        eyesScale: 0.8,
        mouth: 85,
        mouthScale: 0.85,
      }}
      assets={{
        body: staticFile("characters/vla/body.png"),
        head: staticFile("characters/vla/head.png"),
        bodyScale: 0.6,
        headScale: 0.6,
      }}
    />
  );
};
