import { MutableRefObject } from "react";
import { CharacterState } from "../Character/Base";

interface Coord {
  x: number;
  y: number;
}

export const Stand: React.FC<{
  at: Coord;
  state: MutableRefObject<CharacterState>;
}> = (props) => {
  Object.assign(props.state.current, {
    translation: { x: props.at.x, y: props.at.y },
  });

  return <></>;
};
