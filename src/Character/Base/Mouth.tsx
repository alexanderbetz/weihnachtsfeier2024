import { staticFile } from "remotion";
import { z } from "zod";

export const mouthSchema = z.object({
  mouth: z.enum(["grin", "happy"]).optional(),
  scale: z.number().optional(),
});

export const Mouth: React.FC<z.infer<typeof mouthSchema>> = (props) => {
  const offset = getMouthOffset(props.mouth ?? "happy");
  const scale = props.scale ?? 1;

  return (
    <div
      style={{
        backgroundImage: `url(${staticFile("/south park mouth chart.jpg.png")})`,
        backgroundPosition: `${offset.x}px ${offset.y}px`,
        height: `${offset.height}px`,
        width: `${offset.width}px`,
        transform: `scale(${scale * 0.7})`,
        transformOrigin: "bottom",
      }}
    />
  );
};

function getMouthOffset(
  mouth: NonNullable<z.infer<typeof mouthSchema>["mouth"]>,
): { x: number; y: number; height: number; width: number } {
  switch (mouth) {
    case "grin":
      return { x: -35, y: -40, height: 50, width: 150 };
    case "happy":
      return { x: -50, y: -640, height: 30, width: 150 };
  }
}
