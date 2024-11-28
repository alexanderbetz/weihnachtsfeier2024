import { staticFile } from "remotion";
import { z } from "zod";
import { ScalableImg } from "../../Components/ScalableImg";

export const mouthSchema = z.object({
  mouth: z.enum(["grin", "happy"]).optional(),
  scale: z.number().optional(),
});

export const Mouth: React.FC<z.infer<typeof mouthSchema>> = (props) => {
  const image = getMouth(props.mouth ?? "happy");
  const scale = props.scale ?? 1;

  return (
    <ScalableImg
      scale={scale}
      src={staticFile(`/mouth/mouth-${image}.png`)}
    />
  );
};

function getMouth(mouth: NonNullable<z.infer<typeof mouthSchema>["mouth"]>): string {
  switch (mouth) {
    case "happy":
      return "20";
    case "grin":
      return "1";
  }
}
