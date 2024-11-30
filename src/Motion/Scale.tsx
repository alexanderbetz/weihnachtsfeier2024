import { MutableRefObject } from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { CharacterState } from "../Character/Base";

export const Scale: React.FC<{
  start: number;
  end?: number;
  state: MutableRefObject<CharacterState>;
}> = (props) => {
  const frame = useCurrentFrame();
  const config = useVideoConfig();

  const f = frame % 2 === 1 ? frame - 1 : frame;
  const scale = props.end >= 0 ? interpolate(
    f,
    [0, config.durationInFrames],
    [props.start, props.end],
  ) : props.start;

  Object.assign(props.state.current, {
    scale,
  });

  return <></>;
};
