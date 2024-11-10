import { MutableRefObject } from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { CharacterState } from "../Character/Base";

interface Coord {
  x: number;
  y: number;
}

export const Walk: React.FC<{
  start: Coord;
  end: Coord;
  state: MutableRefObject<CharacterState>;
}> = (props) => {
  const frame = useCurrentFrame();
  const config = useVideoConfig();

  const f = frame % 2 === 1 ? frame - 1 : frame;
  const x = interpolate(
    f,
    [0, config.durationInFrames],
    [props.start.x ?? 0, props.end.x],
  );
  const y = interpolate(
    f,
    [0, config.durationInFrames],
    [props.start.y ?? 0, props.end.y],
  );

  const rotation = frame % 4 === 0 || frame % 4 === 1 ? 1.5 : -1.5;

  Object.assign(props.state.current, {
    rotation: frame === config.durationInFrames - 1 ? 0 : rotation,
    translation: { x, y },
  });

  return <></>;
};
