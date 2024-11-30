import { MutableRefObject } from "react";
import { useCurrentFrame } from "remotion";
import { CharacterState } from "../Character/Base";
import { MouthType } from "../Character/Base/Mouth";

export enum ConversationType {
  speak_1,
  speak_2,
  shout_1,
  shout_2,
}

const conversations = new Map<ConversationType, MouthType[]>([
  [
    ConversationType.speak_1,
    [
      MouthType.open_teeth_1,
      MouthType.happy,
      MouthType.open_teeth_5,
      MouthType.neutral,
      MouthType.open_teeth_1,
      MouthType.open_teeth_5,
      MouthType.happy,
      MouthType.neutral,
      MouthType.open_teeth_1,
      MouthType.open_teeth_5,
      MouthType.happy,
      MouthType.neutral,
      MouthType.open_teeth_5,
      MouthType.open_teeth_1,
      MouthType.happy,
      MouthType.open_teeth_5,
      MouthType.neutral
    ],
  ],
  [
    ConversationType.speak_2,
    [
      MouthType.happy,
      MouthType.open_teeth_5,
      MouthType.neutral,
      MouthType.open_teeth_1,
      MouthType.open_teeth_5,
      MouthType.happy,
      MouthType.neutral,
      MouthType.open_teeth_1,
      MouthType.open_teeth_5,
      MouthType.happy,
      MouthType.neutral,
      MouthType.open_teeth_1,
      MouthType.open_teeth_5,
      MouthType.happy,
      MouthType.neutral,
      MouthType.open_teeth_5,
      MouthType.open_teeth_1,
      MouthType.happy,
      MouthType.neutral
    ]
  ],
  [
    ConversationType.shout_1,
    [
      MouthType.open_teeth_1,
      MouthType.open_teeth_3,
      MouthType.open_teeth_5,
      MouthType.open_teeth_2,
      MouthType.open_teeth_7,
      MouthType.open_teeth_4,
      MouthType.open_teeth_6,
      MouthType.open_teeth_8,
      MouthType.open_teeth_10,
      MouthType.open_teeth_9,
      MouthType.open_teeth_3,
      MouthType.open_teeth_2,
      MouthType.open_teeth_5,
      MouthType.open_teeth_7,
      MouthType.open_teeth_4,
      MouthType.open_teeth_8,
      MouthType.open_teeth_6,
      MouthType.open_teeth_1,
      MouthType.open_teeth_2,
      MouthType.open_teeth_3,
    ],
  ],
  [
    ConversationType.shout_2,
    [
      MouthType.open_1,
      MouthType.open_teeth_1,
      MouthType.open_teeth_2,
      MouthType.open_teeth_tongue_1,
      MouthType.open_3,
      MouthType.open_teeth_3,
      MouthType.open_teeth_tongue_2,
      MouthType.open_teeth_4,
      MouthType.open_1,
      MouthType.open_teeth_5,
      MouthType.open_teeth_3,
      MouthType.open_teeth_tongue_3,
      MouthType.open_1,
      MouthType.open_teeth_4,
      MouthType.open_teeth_2,
      MouthType.open_teeth_tongue_1,
      MouthType.open_teeth_3,
      MouthType.open_3,
      MouthType.open_teeth_1,
      MouthType.open_teeth_4,
    ],
  ],
]);

export const MouthMotion: React.FC<{
  mouth?: MouthType;
  conversation?: ConversationType;
  fast?: boolean;
  state: MutableRefObject<CharacterState>;
}> = (props) => {
  const frame = useCurrentFrame();

  if (props.mouth !== undefined && props.mouth !== null) {
    Object.assign(props.state.current, {
      mouth: props.mouth,
    });
  } else if (props.conversation !== undefined && props.conversation !== null) {
    const framesPerMouth = props.fast ? 2 : 3;
    const index = Math.floor(frame / framesPerMouth);
    const conversation = conversations.get(props.conversation);

    if (conversation) {
      Object.assign(props.state.current, {
        mouth: conversation[index % conversation.length],
      });
    }
  }

  return <></>;
};
