import { staticFile } from "remotion";
import { z } from "zod";
import { ScalableImg } from "../../Components/ScalableImg";

export enum EyeBrowType {
  normal,
  angry
}

export const eyeBrowSchema = z.object({
  eyeBrow: z.nativeEnum(EyeBrowType).optional(),
  scale: z.number().optional(),
});

export const EyeBrows: React.FC<z.infer<typeof eyeBrowSchema>> = (props) => {
  const image = getMouth(props.eyeBrow ?? EyeBrowType.normal);
  const scale = props.scale ?? 1;

  return (
    <ScalableImg
      scale={scale}
      src={staticFile(`/eyebrows/${image}.png`)}
    />
  );
};

function getMouth(eyeBrow: EyeBrowType): string {
  switch (eyeBrow) {
    case EyeBrowType.angry:
      return "eyebrow-angry";
    default:
      return "eyebrow-normal"
  }
}
