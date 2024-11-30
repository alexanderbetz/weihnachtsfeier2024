import { MutableRefObject } from "react";
import { CharacterState } from "../Character/Base";
import { useCurrentFrame } from "remotion";

export const BlinkMotion: React.FC<{
  interval?: number;
  state: MutableRefObject<CharacterState>;
}> = (props) => {
  const frame = useCurrentFrame();
  const blinkDuration = 2;

  if (
    props.interval &&
    frame >= blinkDuration &&
    frame % props.interval < blinkDuration
  ) {
    Object.assign(props.state.current, {
      blink: true,
    });
  }

  return <></>;
};
