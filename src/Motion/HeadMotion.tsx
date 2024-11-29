import { MutableRefObject } from "react";
import { useCurrentFrame } from "remotion";
import { CharacterState } from "../Character/Base";

export enum MovementType {
  focus_left,
  focus_right,
  angry,
  normal_1,
  normal_2,
  normal_3,
}

interface TransformRecord {
  translateX?: number;
  translateY?: number;
  rotate?: number;
}

const movements = new Map<MovementType, TransformRecord[]>([
  [
    MovementType.normal_1,
    [
      { translateX: 0, translateY: 0, rotate: 0 },
      { translateX: 1, translateY: -1, rotate: 1 },
      { translateX: -1, translateY: 1, rotate: -1 },
      { translateX: 2, translateY: 0, rotate: 1 },
      { translateX: -2, translateY: -1, rotate: -1 },
      { translateX: 1, translateY: 1, rotate: 0 },
      { translateX: -1, translateY: 0, rotate: -1 },
      { translateX: 0, translateY: -1, rotate: 0 },
      { translateX: 1, translateY: 0, rotate: 1 },
      { translateX: -1, translateY: 1, rotate: 0 },
      { translateX: 2, translateY: -1, rotate: -1 },
      { translateX: -2, translateY: 0, rotate: 0 },
      { translateX: 1, translateY: 1, rotate: 1 },
      { translateX: -1, translateY: -1, rotate: -1 },
      { translateX: 0, translateY: 0, rotate: 0 },
      { translateX: 1, translateY: 1, rotate: 1 },
      { translateX: -2, translateY: 0, rotate: -1 },
      { translateX: 2, translateY: -1, rotate: 0 },
      { translateX: -1, translateY: 1, rotate: 1 },
      { translateX: 0, translateY: 0, rotate: 0 },
      { translateX: 1, translateY: -1, rotate: 1 },
      { translateX: -1, translateY: 1, rotate: 0 },
      { translateX: 2, translateY: 0, rotate: 0 },
      { translateX: -2, translateY: -1, rotate: -1 },
      { translateX: 0, translateY: 1, rotate: 0 },
    ],
  ],
  [
    MovementType.normal_2,
    [
      { translateX: 0, translateY: 0, rotate: 0 },
      { translateX: -2, translateY: 1, rotate: -1 },
      { translateX: -3, translateY: 2, rotate: -1 },
      { translateX: -1, translateY: 1, rotate: 0 },
      { translateX: 0, translateY: 0, rotate: 0 },
      { translateX: 1, translateY: -1, rotate: 1 },
      { translateX: 2, translateY: -2, rotate: 2 },
      { translateX: 1, translateY: -1, rotate: 1 },
      { translateX: 0, translateY: 0, rotate: 0 },
      { translateX: -1, translateY: 1, rotate: -1 },
      { translateX: -2, translateY: 0, rotate: -1 },
      { translateX: -3, translateY: 2, rotate: -2 },
      { translateX: -1, translateY: 1, rotate: -1 },
      { translateX: 0, translateY: 0, rotate: 0 },
      { translateX: 1, translateY: -1, rotate: 1 },
      { translateX: 2, translateY: -2, rotate: 2 },
      { translateX: 1, translateY: -1, rotate: 1 },
      { translateX: 0, translateY: 0, rotate: 0 },
      { translateX: -1, translateY: 1, rotate: 0 },
      { translateX: -2, translateY: 2, rotate: -1 },
      { translateX: -1, translateY: 1, rotate: 0 },
      { translateX: 0, translateY: 0, rotate: 0 },
      { translateX: 1, translateY: -1, rotate: 1 },
      { translateX: 2, translateY: 0, rotate: 0 },
      { translateX: 1, translateY: -1, rotate: 0 },
    ],
  ],
  [
    MovementType.normal_3,
    [
      { translateX: 0, translateY: 0, rotate: 0 },
      { translateX: 1, translateY: 1, rotate: 0 },
      { translateX: 2, translateY: 0, rotate: 1 },
      { translateX: 3, translateY: -1, rotate: 1 },
      { translateX: 2, translateY: 0, rotate: 0 },
      { translateX: 1, translateY: 1, rotate: 0 },
      { translateX: 0, translateY: 2, rotate: 0 },
      { translateX: -1, translateY: 1, rotate: -1 },
      { translateX: -2, translateY: 0, rotate: -1 },
      { translateX: -3, translateY: -1, rotate: -2 },
      { translateX: -2, translateY: 0, rotate: -1 },
      { translateX: -1, translateY: 1, rotate: 0 },
      { translateX: 0, translateY: 2, rotate: 0 },
      { translateX: 1, translateY: 1, rotate: 0 },
      { translateX: 2, translateY: 0, rotate: 1 },
      { translateX: 3, translateY: -1, rotate: 1 },
      { translateX: 2, translateY: 0, rotate: 0 },
      { translateX: 1, translateY: 1, rotate: 0 },
      { translateX: 0, translateY: 2, rotate: 0 },
      { translateX: -1, translateY: 1, rotate: -1 },
      { translateX: -2, translateY: 0, rotate: -1 },
      { translateX: -3, translateY: -1, rotate: -2 },
      { translateX: -2, translateY: 0, rotate: -1 },
      { translateX: -1, translateY: 1, rotate: 0 },
      { translateX: 0, translateY: 2, rotate: 0 },
    ],
  ],
  [
    MovementType.focus_left,
    [
      { translateX: -8, translateY: 1, rotate: -2 },
      { translateX: -9, translateY: 2, rotate: -1 },
      { translateX: -7, translateY: 1, rotate: 0 },
      { translateX: -10, translateY: 0, rotate: -2 },
      { translateX: -8, translateY: -1, rotate: 0 },
      { translateX: -12, translateY: 2, rotate: -3 },
      { translateX: -11, translateY: -1, rotate: -2 },
      { translateX: -9, translateY: 1, rotate: -1 },
      { translateX: -7, translateY: 0, rotate: 0 },
      { translateX: -9, translateY: 2, rotate: -1 },
      { translateX: -10, translateY: -1, rotate: -2 },
      { translateX: -8, translateY: 1, rotate: 0 },
      { translateX: -11, translateY: 3, rotate: -3 },
      { translateX: -10, translateY: -2, rotate: -2 },
      { translateX: -7, translateY: 0, rotate: 0 },
      { translateX: -8, translateY: 4, rotate: -1 },
      { translateX: -12, translateY: 1, rotate: -3 },
      { translateX: -10, translateY: -1, rotate: -2 },
      { translateX: -9, translateY: 2, rotate: -1 },
      { translateX: -8, translateY: 0, rotate: 0 },
      { translateX: -11, translateY: -3, rotate: -2 },
      { translateX: -7, translateY: 1, rotate: 0 },
      { translateX: -9, translateY: 2, rotate: -1 },
      { translateX: -10, translateY: 0, rotate: -2 },
      { translateX: -8, translateY: -1, rotate: 0 },
    ],
  ],
  [
    MovementType.focus_right,
    [
      { translateX: 8, translateY: 1, rotate: 2 },
      { translateX: 9, translateY: 2, rotate: 1 },
      { translateX: 7, translateY: 1, rotate: 0 },
      { translateX: 10, translateY: 0, rotate: 2 },
      { translateX: 8, translateY: -1, rotate: 0 },
      { translateX: 12, translateY: 2, rotate: 3 },
      { translateX: 11, translateY: -1, rotate: 2 },
      { translateX: 9, translateY: 1, rotate: 1 },
      { translateX: 7, translateY: 0, rotate: 0 },
      { translateX: 9, translateY: 2, rotate: 1 },
      { translateX: 10, translateY: -1, rotate: 2 },
      { translateX: 8, translateY: 1, rotate: 0 },
      { translateX: 11, translateY: 3, rotate: 3 },
      { translateX: 10, translateY: -2, rotate: 2 },
      { translateX: 7, translateY: 0, rotate: 0 },
      { translateX: 8, translateY: 4, rotate: 1 },
      { translateX: 12, translateY: 1, rotate: 3 },
      { translateX: 10, translateY: -1, rotate: 2 },
      { translateX: 9, translateY: 2, rotate: 1 },
      { translateX: 8, translateY: 0, rotate: 0 },
      { translateX: 11, translateY: -3, rotate: 2 },
      { translateX: 7, translateY: 1, rotate: 0 },
      { translateX: 9, translateY: 2, rotate: 1 },
      { translateX: 10, translateY: 0, rotate: 2 },
      { translateX: 8, translateY: -1, rotate: 0 },
    ],
  ],
  [
    MovementType.angry,
    [
      { translateX: 5, translateY: -23, rotate: 10 },
      { translateX: -5, translateY: 3, rotate: -10 },
      { translateX: 8, translateY: -25, rotate: 12 },
      { translateX: -8, translateY: 5, rotate: -12 },
      { translateX: 10, translateY: 0, rotate: 8 },
      { translateX: -10, translateY: 0, rotate: -8 },
      { translateX: 7, translateY: 3, rotate: 6 },
      { translateX: -7, translateY: -23, rotate: -6 },
      { translateX: 5, translateY: 5, rotate: 4 },
      { translateX: -5, translateY: -25, rotate: -4 },
      { translateX: 3, translateY: 0, rotate: 2 },
      { translateX: -3, translateY: 0, rotate: -2 },
      { translateX: 6, translateY: -22, rotate: 10 },
      { translateX: -6, translateY: 2, rotate: -10 },
      { translateX: 8, translateY: -24, rotate: 12 },
      { translateX: -8, translateY: 4, rotate: -12 },
      { translateX: 9, translateY: 1, rotate: 10 },
      { translateX: -9, translateY: -21, rotate: -10 },
      { translateX: 7, translateY: -23, rotate: 8 },
      { translateX: -7, translateY: 3, rotate: -8 },
      { translateX: 5, translateY: -25, rotate: 6 },
      { translateX: -5, translateY: 5, rotate: -6 },
      { translateX: 3, translateY: 0, rotate: 4 },
      { translateX: -3, translateY: 0, rotate: -4 },
      { translateX: 0, translateY: 0, rotate: 0 },
    ],
  ],
]);

export const HeadMotion: React.FC<{
  movementType: MovementType;
  multiply?: number;
  fast?: boolean;
  state: MutableRefObject<CharacterState>;
}> = (props) => {
  const frame = useCurrentFrame();
  const multiplier = (props.multiply ?? 0) * 10;
  let movementDuration = props.fast ? 6 : 8;

  const index = Math.floor(frame / movementDuration);
  const movement = movements.get(props.movementType);

  if (movement) {
    const move = movement[index % movement.length];
    Object.assign(props.state.current, {
      headRotation: move.rotate,
      headTranslation: {
        x: (move.translateX ?? 0) + multiplier,
        y: (move.translateY ?? 0) + multiplier,
      },
    });
  }

  return <></>;
};
