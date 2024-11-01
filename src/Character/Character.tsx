import { Img } from "remotion";
import { z } from "zod";

export const characterSchema = z.object({
  eyeBrows: z.enum(["normal", "angry"]).optional(),
  mouth: z.enum(["closed", "open"]),
  eyes: z.enum(["closed", "x"]).optional(),
  eyeAngle: z.enum(["left", "right"]).optional(),
  headRotation: z.number().optional(),
  headTranslation: z.enum(["elevated", "lowered"]).optional(),
  scale: z.number().optional(),
  assets: z
    .object({
      body: z.string().optional(),
      bodyHeight: z.number().optional(),
      bodyWidth: z.number().optional(),
    })
    .optional(),
});

export const Character: React.FC<z.infer<typeof characterSchema>> = (props) => {
  const height = (props.assets?.bodyHeight ?? 0) * (props.scale ?? 1);
  const width = (props.assets?.bodyWidth ?? 0) * (props.scale ?? 1);

  return <Img height={height} width={width} src={props.assets?.body ?? ""} />;
};
