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

const conversations = new Map([
  [ConversationType.speak_1, [MouthType.open_1, MouthType.unhappy, MouthType.neutral]]
])

export const MouthMotion: React.FC<{
  mouth?: MouthType;
  conversation?: ConversationType;
  fast?: boolean;
  state: MutableRefObject<CharacterState>;
}> = (props) => {
  const frame = useCurrentFrame();

  if(props.mouth !== undefined && props.mouth !== null) {
    Object.assign(props.state.current, {
      mouth: props.mouth,
    });
  } else if(props.conversation !== undefined && props.conversation !== null) {
    const framesPerMouth = props.fast ? 2 : 3;
    const index = Math.floor(frame / framesPerMouth);
    const conversation = conversations.get(props.conversation)

    if (conversation) {
      Object.assign(props.state.current, {
        mouth: conversation[index % conversation.length]
      });
    }
  }

  return <></>;
};
