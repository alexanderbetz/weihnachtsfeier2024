import { MutableRefObject } from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { CharacterState } from "../Character/Base";

export const Wiggle: React.FC<{
  state: MutableRefObject<CharacterState>;
}> = (props) => {
  const frame = useCurrentFrame();
  const config = useVideoConfig();

  const rotation = frame % 4 === 0 || frame % 4 === 1 ? 1.5 : -1.5;

  Object.assign(props.state.current, {
    rotation: frame === config.durationInFrames - 1 ? 0 : rotation,
  });

  return <></>;
};
