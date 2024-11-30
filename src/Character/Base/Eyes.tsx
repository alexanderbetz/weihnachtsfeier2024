import { staticFile } from "remotion";
import { z } from "zod";
import { ScalableImg } from "../../Components/ScalableImg";

export enum EyeType {
  open,
  closed,
  x,
}

export const eyesSchema = z.object({
  eyes: z.nativeEnum(EyeType).optional(),
  angle: z.number().optional(),
  blink: z.boolean().optional(),
  scale: z.number().optional(),
});

export const Eyes: React.FC<z.infer<typeof eyesSchema>> = (props) => {
  const image = getEyes(props.eyes ?? EyeType.open, props.blink);
  const scale = props.scale ?? 1;

  const size = 20 * scale;

  // 400x225 image size
  const centerLeft = {
    x: (400 * scale) / 2 - 95 * scale,
    y: (225 * scale) / 2,
  };
  const centerRight = {
    x: (400 * scale) / 2 + 100 * scale,
    y: (225 * scale) / 2,
  };

  function toRadians(angle: number) {
    return angle * (Math.PI / 180);
  }

  const angleLeft = toRadians(props.angle ?? 0);
  const angleRight = toRadians(props.angle ?? 180);

  const eyeRadius = 40 * scale

  const pupilLeft = {
    x: centerLeft.x + eyeRadius * Math.cos(angleLeft),
    y: centerLeft.y - eyeRadius * Math.sin(angleLeft),
  };

  const pupilRight = {
    x: centerRight.x + eyeRadius * Math.cos(angleRight),
    y: centerRight.y - eyeRadius * Math.sin(angleRight),
  };

  return (
    <div className="relative">
      <ScalableImg scale={scale} src={staticFile(`/eyes/${image}.png`)} />

      {(image === 'open') && (
        <>
          <div
            className="absolute eye-pupil-left bg-black rounded-full -translate-x-[50%]"
            style={{
              height: size + "px",
              width: size + "px",
              top: pupilLeft.y,
              left: pupilLeft.x,
            }}
          />

          <div
            className="absolute eye-pupil-right bg-black rounded-full -translate-x-[50%]"
            style={{
              height: size + "px",
              width: size + "px",
              top: pupilRight.y,
              left: pupilRight.x,
            }}
          />
        </>
      )}
    </div>
  );
};

function getEyes(eyeBrow: EyeType, blink?: boolean): string {
  switch (eyeBrow) {
    case EyeType.open:
      return blink ? "closed" : "open";
    case EyeType.closed:
      return "closed";
    default:
      return "x";
  }
}
