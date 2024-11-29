import { MutableRefObject } from "react";
import { CharacterState } from "../Character/Base";
import { EyeBrowType } from "../Character/Base/EyeBrows";

export const EyeBrowMotion: React.FC<{
  eyeBrow?: EyeBrowType;
  state: MutableRefObject<CharacterState>;
}> = (props) => {
  Object.assign(props.state.current, {
    eyeBrows: props.eyeBrow,
  });

  return <></>;
};
