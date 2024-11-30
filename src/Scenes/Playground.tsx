import {
  Audio,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { Danny } from "../Character/Danny";
import { useRef } from "react";
import { CharacterState, getDefaultCharacterState } from "../Character/Base";
import { Walk } from "../Motion/Walk";
import { Scale } from "../Motion/Scale";
import { ConversationType, MouthMotion } from "../Motion/MouthMotion";
import { EyeBrowMotion } from "../Motion/EyeBrowMotion";
import { EyeBrowType } from "../Character/Base/EyeBrows";
import { ScalableImg } from "../Components/ScalableImg";
import { HeadMotion, MovementType } from "../Motion/HeadMotion";
import { EyesMotion } from "../Motion/EyesMotion";
import { EyeType } from "../Character/Base/Eyes";
import { seconds } from "../util/timing";
import { BlinkMotion } from "../Motion/BlinkMotion";

export const Playground: React.FC = () => {
  const frame = useCurrentFrame();
  const dannyCharacterState = useRef<CharacterState>(
    getDefaultCharacterState(),
  );

  dannyCharacterState.current = getDefaultCharacterState();

  const eyeAngle = interpolate(frame, [0, seconds(2)], [0, 360]);

  // NOTE: Jeder Charakter bekommt eine eigene Sequence in der er exklusiv animiert wird
  return (
    <>
      <ScalableImg src={staticFile("locations/city.jpg")} />
      <Audio src={staticFile("jingles/jingle-2.mp3")} />

      <Sequence name="Character Controller">
        <Sequence name="Danny blinzeln">
          <BlinkMotion state={dannyCharacterState} interval={seconds(2)} />
        </Sequence>

        <Sequence name="Danny Scale">
          <Sequence durationInFrames={seconds(6)}>
            <Scale start={1} end={0.33} state={dannyCharacterState} />
          </Sequence>
        </Sequence>

        <Sequence
          name="Danny Head"
          durationInFrames={seconds(6)}
          from={seconds(6)}
        >
          <HeadMotion
            movementType={MovementType.normal_2}
            state={dannyCharacterState}
          />
        </Sequence>

        <Sequence
          durationInFrames={seconds(4)}
          from={seconds(2)}
          name="Danny Walk"
        >
          <Walk
            start={{ x: 0, y: -340 }}
            end={{ x: 400, y: -340 }}
            state={dannyCharacterState}
          />
        </Sequence>

        <Sequence
          durationInFrames={seconds(6)}
          from={seconds(6)}
          name="Danny Talk"
        >
          <MouthMotion
            state={dannyCharacterState}
            conversation={ConversationType.speak_1}
          />
        </Sequence>

        <Sequence
          durationInFrames={seconds(6)}
          from={seconds(6)}
          name="Danny Eyebrows"
        >
          <EyeBrowMotion
            state={dannyCharacterState}
            eyeBrow={EyeBrowType.angry}
          />
          <EyesMotion
            eyes={EyeType.open}
            angle={eyeAngle}
            state={dannyCharacterState}
          />
        </Sequence>

        <Sequence durationInFrames={seconds(2)} from={seconds(12)}>
          <EyeBrowMotion
            state={dannyCharacterState}
            eyeBrow={EyeBrowType.normal}
          />
        </Sequence>

        <Sequence durationInFrames={seconds(2)} from={seconds(14)}>
          <EyesMotion eyes={EyeType.x} state={dannyCharacterState} />
        </Sequence>
      </Sequence>

      <Sequence name="Character Composition">
        <Sequence name="Danny" durationInFrames={seconds(16)}>
          <Danny characterState={dannyCharacterState} />
        </Sequence>
      </Sequence>
    </>
  );
};
