import {
  Audio,
  Img,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Danny } from "../Character/Danny";
import { useRef } from "react";
import { CharacterState, getDefaultCharacterState } from "../Character/Base";
import { Walk } from "../Motion/Walk";
import { Scale } from "../Motion/Scale";
import { ConversationType, MouthMotion } from "../Motion/MouthMotion";
import { EyeBrowMotion } from "../Motion/EyeBrowMotion";
import { EyeBrowType } from "../Character/Base/EyeBrows";

// Each <Composition> is an entry in the sidebar!

export const Playground: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();
  const dannyCharacterState = useRef<CharacterState>(
    getDefaultCharacterState(),
  );

  dannyCharacterState.current = getDefaultCharacterState()

  // NOTE: Jeder Charakter bekommt eine eigene Sequence in der er exklusiv animiert wird
  return (
    <>
      <Img src={staticFile("locations/city.jpg")} />
      <Audio src={staticFile("jingles/jingle-2.mp3")} />

      <Sequence name="Character Controller">
        <Sequence name="Danny Scale">
          <Scale start={1} end={0.12} state={dannyCharacterState} />
        </Sequence>

        <Sequence durationInFrames={24 * 4} from={24 * 2} name="Danny Walk">
          <Walk
            start={{ x: 0, y: -340 }}
            end={{ x: 400, y: -340 }}
            state={dannyCharacterState}
          />

          <MouthMotion
            state={dannyCharacterState}
            conversation={ConversationType.speak_1}
          />
          <EyeBrowMotion
            state={dannyCharacterState}
            eyeBrow={EyeBrowType.angry}
          />
        </Sequence>
      </Sequence>

      <Sequence name="Character Composition">
        <Sequence name="Danny" durationInFrames={24 * 12}>
          <Danny characterState={dannyCharacterState} />
        </Sequence>
      </Sequence>
    </>
  );
};
