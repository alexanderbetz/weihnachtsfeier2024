import { staticFile } from "remotion";
import { z } from "zod";
import { ScalableImg } from "../../Components/ScalableImg";

export enum MouthType {
  happy,
  neutral,
  unhappy,
  open_1,
}

export const mouthSchema = z.object({
  mouth: z.nativeEnum(MouthType).optional(),
  scale: z.number().optional(),
});

export const Mouth: React.FC<z.infer<typeof mouthSchema>> = (props) => {
  const image = getMouth(props.mouth ?? MouthType.happy);
  const scale = props.scale ?? 1;

  return (
    <ScalableImg
      scale={scale}
      src={staticFile(`/mouth/mouth-${image}.png`)}
    />
  );
};

function getMouth(mouth: MouthType): string {
  switch (mouth) {
    case MouthType.happy:
      return "20";
    case MouthType.neutral:
      return "2"
    case MouthType.unhappy:
      return "5"
    case MouthType.open_1:
      return "1";
  }
}
