import { Audio, Sequence, Series, staticFile } from "remotion";
import { Danny } from "../Character/Danny";
import { useRef } from "react";
import { CharacterState, getDefaultCharacterState } from "../Character/Base";
import { Walk } from "../Motion/Walk";
import { Scale } from "../Motion/Scale";
import { seconds } from "../util/timing";
import { ScalableImg } from "../Components/ScalableImg";
import { Alex } from "../Character/Alex";
import { Klaus } from "../Character/Klaus";
import { Stand } from "../Motion/Stand";
import { EyesMotion } from "../Motion/EyesMotion";
import { EyeType } from "../Character/Base/Eyes";
import { BlinkMotion } from "../Motion/BlinkMotion";
import { ConversationType, MouthMotion } from "../Motion/MouthMotion";

export const Scene4: React.FC = () => {
  const shabyCharacterState = useRef<CharacterState>(
    getDefaultCharacterState(),
  );

  const alexCharacterState = useRef<CharacterState>(getDefaultCharacterState());

  const klausCharacterState = useRef<CharacterState>(
    getDefaultCharacterState(),
  );

  shabyCharacterState.current = getDefaultCharacterState();
  alexCharacterState.current = getDefaultCharacterState();
  klausCharacterState.current = getDefaultCharacterState();

  return (
    <>
      <ScalableImg src={staticFile("locations/polaroids.png")} />
      <Audio src={staticFile("jingles/jingle-3.mp3")} />

      <Sequence from={seconds(4)}>
        <Audio src={staticFile("voices/scene4_polaroids.mp3")} />
      </Sequence>

      <Sequence name="Character Controller">
        <Sequence name="Shaby Controller">
          <Scale start={0.5} state={shabyCharacterState} />
          <BlinkMotion state={shabyCharacterState} interval={seconds(2)} />

          <Series>
            <Series.Sequence durationInFrames={seconds(3)}>
              <Stand at={{ x: -1100, y: -40 }} state={shabyCharacterState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3)}>
              <Walk
                start={{ x: -1100, y: -40 }}
                end={{ x: -400, y: -40 }}
                state={shabyCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(54)}>
              <Stand at={{ x: -400, y: -40 }} state={shabyCharacterState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(6)}>
              <EyesMotion
                eyes={EyeType.open}
                angle={0}
                state={shabyCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <EyesMotion
                eyes={EyeType.open}
                angle={80}
                state={shabyCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(52)}>
              <EyesMotion
                eyes={EyeType.open}
                angle={0}
                state={shabyCharacterState}
              />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(4.8)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3.2)}>
              <MouthMotion
                state={shabyCharacterState}
                conversation={ConversationType.shout_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.3)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <MouthMotion
                state={shabyCharacterState}
                conversation={ConversationType.shout_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.4)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.6)}>
              <MouthMotion
                state={shabyCharacterState}
                conversation={ConversationType.shout_1}
              />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Alex Controller">
          <Stand at={{ x: 0, y: -40 }} state={alexCharacterState} />
          <Scale start={0.5} state={alexCharacterState} />
          <BlinkMotion state={alexCharacterState} interval={seconds(2.5)} />

          <Series>
            <Series.Sequence durationInFrames={seconds(2)}>
              <EyesMotion
                eyes={EyeType.open}
                angle={125}
                state={alexCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <EyesMotion
                eyes={EyeType.open}
                angle={145}
                state={alexCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <EyesMotion
                eyes={EyeType.open}
                angle={125}
                state={alexCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(50)}>
              <EyesMotion
                eyes={EyeType.open}
                angle={180}
                state={alexCharacterState}
              />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(12)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.8)}>
              <MouthMotion
                state={alexCharacterState}
                conversation={ConversationType.speak_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.2)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.8)}>
              <MouthMotion
                state={alexCharacterState}
                conversation={ConversationType.speak_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.4)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.7)}>
              <MouthMotion
                state={alexCharacterState}
                conversation={ConversationType.speak_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.3)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <MouthMotion
                state={alexCharacterState}
                conversation={ConversationType.speak_1}
              />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Klaus Controller">
          <Stand at={{ x: 600, y: -40 }} state={klausCharacterState} />
          <Scale start={0.5} state={klausCharacterState} />
          <BlinkMotion state={klausCharacterState} interval={seconds(2.9)} />

          <Sequence>
            <Stand at={{ x: 1100, y: -40 }} state={klausCharacterState} />
          </Sequence>
        </Sequence>
      </Sequence>

      <Sequence name="Character Composition">
        <Sequence name="Shaby">
          <Danny characterState={shabyCharacterState} />
        </Sequence>

        <Sequence name="Alex">
          <Alex characterState={alexCharacterState} />
        </Sequence>

        <Sequence name="Klaus">
          <Klaus characterState={klausCharacterState} />
        </Sequence>
      </Sequence>
    </>
  );
};
