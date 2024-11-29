import { MutableRefObject } from "react";
import { CharacterState } from "../Character/Base";
import { EyeType } from "../Character/Base/Eyes";

export const EyesMotion: React.FC<{
  eyes: EyeType;
  angle?: number
  state: MutableRefObject<CharacterState>;
}> = (props) => {
  Object.assign(props.state.current, {
    eyes: props.eyes,
    eyeAngle: props.angle
  });

  return <></>;
};
