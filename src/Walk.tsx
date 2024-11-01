import { ReactNode } from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

interface Coord {
  x: number;
  y: number;
}

export const Walk: React.FC = (props: {
  children: ReactNode;
  start: Coord;
  end: Coord;
}) => {
  const frame = useCurrentFrame();
  const config = useVideoConfig();

  const f = frame % 2 === 1 ? frame - 1 : frame;
  const x = interpolate(
    f,
    [0, config.durationInFrames],
    [props.start.x, props.end.x],
  );
  const y = interpolate(
    f,
    [0, config.durationInFrames],
    [props.start.y, props.end.y],
  );

  const rotation =
    frame % 4 === 0 || frame % 4 === 1 ? "rotate(1.5deg)" : "rotate(-1.5deg)";

  return (
    <AbsoluteFill
      style={{
        top: y,
        left: x,
        display: "flex",
        height: "unset",
        width: "unset",
        right: "unset",
        bottom: "unset",
        transform: rotation,
        transformOrigin: "bottom center",
      }}
    >
      {props.children}
    </AbsoluteFill>
  );
};
