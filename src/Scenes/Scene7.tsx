import { Audio, Sequence, Series, staticFile, useCurrentFrame } from "remotion";
import { Danny } from "../Character/Danny";
import { useRef } from "react";
import { CharacterState, getDefaultCharacterState } from "../Character/Base";
import { seconds } from "../util/timing";
import { ScalableImg } from "../Components/ScalableImg";
import { Alex } from "../Character/Alex";
import { Scale } from "../Motion/Scale";
import { Walk } from "../Motion/Walk";
import { Stand } from "../Motion/Stand";
import { BlinkMotion } from "../Motion/BlinkMotion";
import { ConversationType, MouthMotion } from "../Motion/MouthMotion";
import { HeadMotion, MovementType } from "../Motion/HeadMotion";
import { MouthType } from "../Character/Base/Mouth";

export const Scene7: React.FC = () => {
  const _ = useCurrentFrame();
  const shabyState = useRef<CharacterState>(getDefaultCharacterState());

  const alexState = useRef<CharacterState>(getDefaultCharacterState());

  shabyState.current = getDefaultCharacterState();
  alexState.current = getDefaultCharacterState();

  return (
    <>
      <ScalableImg src={staticFile("locations/wc.png")} />

      <Sequence from={seconds(2)}>
        <Audio src={staticFile("voices/scene7_wc.mp3")} />
      </Sequence>

      <Sequence name="Character Controller">
        <Sequence name="Shaby Controller">
          <BlinkMotion state={shabyState} interval={seconds(2)} />
          <Scale start={0.5} state={shabyState} />
          <Stand at={{ x: 200, y: -150 }} state={shabyState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(3.5)}>
              <Walk
                start={{ x: -400, y: 500 }}
                end={{ x: 200, y: -150 }}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(55)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3.5)}>
              <Walk
                start={{ x: 200, y: -150 }}
                end={{ x: -400, y: 500 }}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <Stand at={{ x: -400, y: 500 }} state={shabyState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(3)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.3)}>
              <MouthMotion
                state={shabyState}
                conversation={ConversationType.shout_1}
              />
              <HeadMotion
                movementType={MovementType.normal_2}
                state={shabyState}
              />
            </Series.Sequence>

            <Series.Sequence durationInFrames={seconds(0.7)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.2)}>
              <MouthMotion
                state={shabyState}
                conversation={ConversationType.shout_1}
              />
              <HeadMotion
                movementType={MovementType.normal_2}
                state={shabyState}
              />
            </Series.Sequence>

            <Series.Sequence durationInFrames={seconds(0.6)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <MouthMotion
                state={shabyState}
                conversation={ConversationType.shout_1}
              />
              <HeadMotion
                movementType={MovementType.normal_2}
                state={shabyState}
              />
            </Series.Sequence>

            <Series.Sequence durationInFrames={seconds(10)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.1)}>
              <MouthMotion
                state={shabyState}
                conversation={ConversationType.shout_1}
              />
              <HeadMotion
                movementType={MovementType.normal_2}
                state={shabyState}
              />
            </Series.Sequence>

            <Series.Sequence durationInFrames={seconds(4.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.9)}>
              <MouthMotion
                state={shabyState}
                conversation={ConversationType.shout_1}
              />
              <HeadMotion
                movementType={MovementType.normal_2}
                state={shabyState}
              />
            </Series.Sequence>

            <Series.Sequence durationInFrames={seconds(8.4)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.3)}>
              <MouthMotion
                state={shabyState}
                conversation={ConversationType.shout_1}
              />
              <HeadMotion
                movementType={MovementType.normal_2}
                state={shabyState}
              />
            </Series.Sequence>

            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <MouthMotion
                state={shabyState}
                conversation={ConversationType.shout_1}
              />
              <HeadMotion
                movementType={MovementType.normal_2}
                state={shabyState}
              />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Alex Controller">
          <BlinkMotion state={alexState} interval={seconds(2.5)} />
          <Scale start={0.5} state={alexState} />
          <Stand at={{ x: -100, y: -120 }} state={alexState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(3.5)}>
              <Walk
                start={{ x: -500, y: 500 }}
                end={{ x: -100, y: -120 }}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(54.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3.5)}>
              <Walk
                start={{ x: -100, y: -120 }}
                end={{ x: -500, y: 500 }}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.5)}>
              <Stand at={{ x: -500, y: 500 }} state={alexState} />
            </Series.Sequence>
          </Series>
        </Sequence>
      </Sequence>

      <Sequence name="Character Composition">
        <Sequence name="Shaby">
          <Danny characterState={shabyState} />
        </Sequence>

        <Sequence name="Alex">
          <Alex characterState={alexState} />
        </Sequence>
      </Sequence>
    </>
  );
};
