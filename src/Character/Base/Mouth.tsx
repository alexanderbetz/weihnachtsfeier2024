import { staticFile } from "remotion";
import { z } from "zod";
import { ScalableImg } from "../../Components/ScalableImg";

export enum MouthType {
  happy,
  neutral,
  unhappy,
  smirk,
  clench_1,
  clench_2,
  clench_3,
  big_open,
  open_teeth_1,
  open_teeth_2,
  open_teeth_3,
  open_teeth_4,
  open_teeth_5,
  open_teeth_6,
  open_teeth_7,
  open_teeth_8,
  open_teeth_9,
  open_teeth_10,
  open_1,
  open_2,
  open_3,
  open_teeth_tongue_1,
  open_teeth_tongue_2,
  open_teeth_tongue_3,
}

export const mouthSchema = z.object({
  mouth: z.nativeEnum(MouthType).optional(),
  scale: z.number().optional(),
});

export const Mouth: React.FC<z.infer<typeof mouthSchema>> = (props) => {
  const image = getMouth(props.mouth ?? MouthType.happy);
  const scale = props.scale ?? 1;

  return (
    <ScalableImg key={image} scale={scale} src={staticFile(`/mouth/mouth-${image}.png`)} />
  );
};

function getMouth(mouth: MouthType): string {
  switch (mouth) {
    case MouthType.happy:
      return "20";
    case MouthType.neutral:
      return "2";
    case MouthType.unhappy:
      return "5";
    case MouthType.smirk:
      return "6";
    case MouthType.clench_1:
      return "4";
    case MouthType.clench_2:
      return "13";
    case MouthType.clench_3:
      return "17";
    case MouthType.big_open:
      return "8";
    case MouthType.open_teeth_1:
      return "1";
    case MouthType.open_teeth_2:
      return "3";
    case MouthType.open_teeth_3:
      return "7";
    case MouthType.open_teeth_4:
      return "10";
    case MouthType.open_teeth_5:
      return "11";
    case MouthType.open_teeth_6:
      return "14";
    case MouthType.open_teeth_7:
      return "21";
    case MouthType.open_teeth_8:
      return "22";
    case MouthType.open_teeth_9:
      return "23";
    case MouthType.open_teeth_10:
      return "24";
    case MouthType.open_1:
      return "12";
    case MouthType.open_2:
      return "15";
    case MouthType.open_3:
      return "16";
    case MouthType.open_teeth_tongue_1:
      return "9";
    case MouthType.open_teeth_tongue_2:
      return "18";
    case MouthType.open_teeth_tongue_3:
      return "19";
  }
}
