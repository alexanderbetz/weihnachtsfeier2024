import {
  AbsoluteFill,
  Audio,
  Sequence,
  Series,
  staticFile,
  useCurrentFrame,
} from "remotion";
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
import { HeadMotion, MovementType } from "../Motion/HeadMotion";
import { MouthType } from "../Character/Base/Mouth";
import { ChatGpt } from "../Character/ChatGpt";
import { EyeBrowMotion } from "../Motion/EyeBrowMotion";
import { EyeBrowType } from "../Character/Base/EyeBrows";
import { Shaby } from "../Character/Shaby";
import { Wiggle } from "../Motion/Wiggle";

export const Scene4: React.FC = () => {
  const _ = useCurrentFrame();
  const shabyCharacterState = useRef<CharacterState>(
    getDefaultCharacterState(),
  );

  const alexCharacterState = useRef<CharacterState>(getDefaultCharacterState());

  const klausCharacterState = useRef<CharacterState>(
    getDefaultCharacterState(),
  );

  const chatGptState = useRef<CharacterState>(getDefaultCharacterState());

  shabyCharacterState.current = getDefaultCharacterState();
  alexCharacterState.current = getDefaultCharacterState();
  klausCharacterState.current = getDefaultCharacterState();
  chatGptState.current = getDefaultCharacterState();

  return (
    <>
      <AbsoluteFill>
        <ScalableImg src={staticFile("locations/polaroids.png")} />
      </AbsoluteFill>
      <AbsoluteFill>
        <ScalableImg src={staticFile("locations/polaroids-front.png")} />
      </AbsoluteFill>
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
            <Series.Sequence durationInFrames={seconds(123)}>
              <Stand at={{ x: -400, y: -40 }} state={shabyCharacterState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3)}>
              <Walk
                start={{ x: -400, y: -40 }}
                end={{ x: 1100, y: -40 }}
                state={shabyCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(10)}>
              <Stand at={{ x: 1100, y: -40 }} state={shabyCharacterState} />
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
            <Series.Sequence durationInFrames={seconds(70)}>
              <EyesMotion
                eyes={EyeType.open}
                angle={0}
                state={shabyCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(43)}>
              <EyesMotion
                eyes={EyeType.open}
                angle={60}
                state={shabyCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(45)}>
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
              <HeadMotion
                movementType={MovementType.normal_3}
                state={shabyCharacterState}
              />
              <MouthMotion
                state={shabyCharacterState}
                conversation={ConversationType.shout_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.3)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <HeadMotion
                movementType={MovementType.normal_3}
                state={shabyCharacterState}
              />
              <MouthMotion
                state={shabyCharacterState}
                conversation={ConversationType.shout_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.4)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.6)}>
              <HeadMotion
                movementType={MovementType.normal_3}
                state={shabyCharacterState}
              />
              <MouthMotion
                state={shabyCharacterState}
                conversation={ConversationType.shout_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(6.4)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.2)}>
              <HeadMotion
                movementType={MovementType.normal_3}
                state={shabyCharacterState}
              />
              <MouthMotion
                state={shabyCharacterState}
                conversation={ConversationType.shout_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.3)}>
              <MouthMotion
                state={shabyCharacterState}
                mouth={MouthType.unhappy}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <HeadMotion
                movementType={MovementType.normal_3}
                state={shabyCharacterState}
              />
              <MouthMotion
                state={shabyCharacterState}
                conversation={ConversationType.shout_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.8)}>
              <MouthMotion
                state={shabyCharacterState}
                mouth={MouthType.unhappy}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3.1)}>
              <HeadMotion
                movementType={MovementType.normal_3}
                state={shabyCharacterState}
              />
              <MouthMotion
                state={shabyCharacterState}
                conversation={ConversationType.shout_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion
                state={shabyCharacterState}
                mouth={MouthType.unhappy}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.7)}>
              <HeadMotion
                movementType={MovementType.normal_3}
                state={shabyCharacterState}
              />
              <MouthMotion
                state={shabyCharacterState}
                conversation={ConversationType.shout_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.4)}>
              <MouthMotion
                state={shabyCharacterState}
                mouth={MouthType.unhappy}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.4)}>
              <HeadMotion
                movementType={MovementType.normal_3}
                state={shabyCharacterState}
              />
              <MouthMotion
                state={shabyCharacterState}
                conversation={ConversationType.shout_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(10)}>
              <MouthMotion
                state={shabyCharacterState}
                mouth={MouthType.unhappy}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(15)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <MouthMotion
                mouth={MouthType.open_2}
                state={shabyCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(4.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.5)}>
              <HeadMotion
                movementType={MovementType.normal_3}
                state={shabyCharacterState}
              />
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(12)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.6)}>
              <HeadMotion
                movementType={MovementType.normal_3}
                state={shabyCharacterState}
              />
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <HeadMotion
                movementType={MovementType.normal_3}
                state={shabyCharacterState}
              />
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3.7)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.8)}>
              <HeadMotion
                movementType={MovementType.normal_3}
                state={shabyCharacterState}
              />
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <HeadMotion
                movementType={MovementType.normal_3}
                state={shabyCharacterState}
              />
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(5.4)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.2)}>
              <HeadMotion
                movementType={MovementType.normal_3}
                state={shabyCharacterState}
              />
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.3)}>
              <MouthMotion
                mouth={MouthType.unhappy}
                state={shabyCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <HeadMotion
                movementType={MovementType.normal_3}
                state={shabyCharacterState}
              />
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.9)}>
              <MouthMotion
                mouth={MouthType.unhappy}
                state={shabyCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3)}>
              <HeadMotion
                movementType={MovementType.normal_3}
                state={shabyCharacterState}
              />
              <MouthMotion
                conversation={ConversationType.shout_2}
                state={shabyCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3.5)}>
              <MouthMotion
                mouth={MouthType.unhappy}
                state={shabyCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <HeadMotion
                movementType={MovementType.normal_3}
                state={shabyCharacterState}
              />
              <MouthMotion
                conversation={ConversationType.shout_2}
                state={shabyCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(30)}>
              <MouthMotion
                mouth={MouthType.unhappy}
                state={shabyCharacterState}
              />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(95)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(6)}>
              <EyeBrowMotion
                state={shabyCharacterState}
                eyeBrow={EyeBrowType.angry}
              />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Alex Controller">
          <Scale start={0.5} state={alexCharacterState} />
          <BlinkMotion state={alexCharacterState} interval={seconds(2.5)} />

          <Series>
            <Series.Sequence durationInFrames={seconds(129.2)}>
              <Stand at={{ x: 0, y: -40 }} state={alexCharacterState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.2)}>
              <Walk
                start={{ x: 0, y: -40 }}
                end={{ x: 1100, y: -40 }}
                state={alexCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(10)}>
              <Stand at={{ x: 1100, y: -40 }} state={alexCharacterState} />
            </Series.Sequence>
          </Series>

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
            <Series.Sequence durationInFrames={seconds(30)}>
              <EyesMotion
                eyes={EyeType.open}
                angle={180}
                state={alexCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(40)}>
              <EyesMotion
                eyes={EyeType.open}
                angle={0}
                state={alexCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.5)}>
              <EyesMotion eyes={EyeType.open} state={alexCharacterState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(5)}>
              <EyesMotion
                eyes={EyeType.open}
                angle={180}
                state={alexCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(38)}>
              <EyesMotion
                eyes={EyeType.open}
                angle={110}
                state={alexCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(38)}>
              <EyesMotion
                eyes={EyeType.open}
                angle={0}
                state={alexCharacterState}
              />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(12)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.8)}>
              <HeadMotion
                movementType={MovementType.normal_2}
                state={alexCharacterState}
              />
              <MouthMotion
                state={alexCharacterState}
                conversation={ConversationType.speak_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.2)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.8)}>
              <HeadMotion
                movementType={MovementType.normal_2}
                state={alexCharacterState}
              />
              <MouthMotion
                state={alexCharacterState}
                conversation={ConversationType.speak_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.4)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.7)}>
              <HeadMotion
                movementType={MovementType.normal_2}
                state={alexCharacterState}
              />
              <MouthMotion
                state={alexCharacterState}
                conversation={ConversationType.speak_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.3)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.4)}>
              <HeadMotion
                movementType={MovementType.normal_2}
                state={alexCharacterState}
              />
              <MouthMotion
                state={alexCharacterState}
                conversation={ConversationType.speak_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(13)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <MouthMotion
                mouth={MouthType.open_1}
                state={alexCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.3)}>
              <HeadMotion
                movementType={MovementType.normal_2}
                state={alexCharacterState}
              />
              <MouthMotion
                state={alexCharacterState}
                conversation={ConversationType.speak_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <HeadMotion
                movementType={MovementType.normal_2}
                state={alexCharacterState}
              />
              <MouthMotion
                state={alexCharacterState}
                conversation={ConversationType.speak_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(6)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <HeadMotion
                movementType={MovementType.normal_2}
                state={alexCharacterState}
              />
              <MouthMotion
                state={alexCharacterState}
                conversation={ConversationType.speak_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(6.6)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <HeadMotion
                movementType={MovementType.normal_2}
                state={alexCharacterState}
              />
              <MouthMotion
                state={alexCharacterState}
                conversation={ConversationType.speak_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(5.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <MouthMotion
                mouth={MouthType.open_2}
                state={alexCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(8)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(10)}>
              <HeadMotion
                movementType={MovementType.normal_2}
                state={alexCharacterState}
              />
              <MouthMotion
                conversation={ConversationType.speak_2}
                state={alexCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(53)}>
              <MouthMotion
                mouth={MouthType.unhappy}
                state={alexCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.4)}>
              <MouthMotion
                conversation={ConversationType.speak_2}
                state={alexCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(10)}>
              <MouthMotion
                mouth={MouthType.unhappy}
                state={alexCharacterState}
              />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(127.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(10)}>
              <EyeBrowMotion
                eyeBrow={EyeBrowType.angry}
                state={alexCharacterState}
              />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Klaus Controller">
          <Scale start={0.5} state={klausCharacterState} />
          <BlinkMotion state={klausCharacterState} interval={seconds(2.9)} />

          <Series>
            <Series.Sequence durationInFrames={seconds(7)}>
              <Stand at={{ x: 1100, y: -40 }} state={klausCharacterState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3)}>
              <Walk
                start={{ x: 1100, y: -40 }}
                end={{ x: 300, y: -40 }}
                state={klausCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(117)}>
              <Stand at={{ x: 300, y: -40 }} state={klausCharacterState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <Walk
                start={{ x: 300, y: -40 }}
                end={{ x: 1100, y: -40 }}
                state={klausCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(10)}>
              <Stand at={{ x: 1100, y: -40 }} state={klausCharacterState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(34.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <HeadMotion
                movementType={MovementType.normal_1}
                state={klausCharacterState}
              />
              <MouthMotion
                state={klausCharacterState}
                conversation={ConversationType.speak_2}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <HeadMotion
                movementType={MovementType.normal_1}
                state={klausCharacterState}
              />
              <MouthMotion
                state={klausCharacterState}
                conversation={ConversationType.speak_2}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.6)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.7)}>
              <HeadMotion
                movementType={MovementType.normal_1}
                state={klausCharacterState}
              />
              <MouthMotion
                state={klausCharacterState}
                conversation={ConversationType.speak_2}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.4)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(4.8)}>
              <HeadMotion
                movementType={MovementType.normal_1}
                state={klausCharacterState}
              />
              <MouthMotion
                state={klausCharacterState}
                conversation={ConversationType.speak_2}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.6)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.4)}>
              <HeadMotion
                movementType={MovementType.normal_1}
                state={klausCharacterState}
              />
              <MouthMotion
                state={klausCharacterState}
                conversation={ConversationType.speak_2}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.2)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.5)}>
              <HeadMotion
                movementType={MovementType.normal_1}
                state={klausCharacterState}
              />
              <MouthMotion
                state={klausCharacterState}
                conversation={ConversationType.speak_2}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(4)}>
              <MouthMotion
                state={klausCharacterState}
                mouth={MouthType.unhappy}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.7)}>
              <HeadMotion
                movementType={MovementType.normal_1}
                state={klausCharacterState}
              />
              <MouthMotion
                state={klausCharacterState}
                conversation={ConversationType.shout_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion
                state={klausCharacterState}
                mouth={MouthType.unhappy}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.7)}>
              <HeadMotion
                movementType={MovementType.normal_1}
                state={klausCharacterState}
              />
              <MouthMotion
                state={klausCharacterState}
                conversation={ConversationType.shout_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(60)}>
              <MouthMotion
                state={klausCharacterState}
                mouth={MouthType.unhappy}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <HeadMotion
                movementType={MovementType.normal_1}
                state={klausCharacterState}
              />
              <MouthMotion
                state={klausCharacterState}
                conversation={ConversationType.shout_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.2)}>
              <MouthMotion
                state={klausCharacterState}
                mouth={MouthType.unhappy}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <HeadMotion
                movementType={MovementType.normal_1}
                state={klausCharacterState}
              />
              <MouthMotion
                state={klausCharacterState}
                conversation={ConversationType.shout_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(4.4)}>
              <MouthMotion
                state={klausCharacterState}
                mouth={MouthType.unhappy}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.4)}>
              <HeadMotion
                movementType={MovementType.normal_1}
                state={klausCharacterState}
              />
              <MouthMotion
                state={klausCharacterState}
                conversation={ConversationType.shout_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(4)}>
              <MouthMotion
                state={klausCharacterState}
                mouth={MouthType.unhappy}
              />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(37.4)}>
              <EyesMotion
                eyes={EyeType.open}
                angle={180}
                state={klausCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.9)}>
              <EyesMotion eyes={EyeType.open} state={klausCharacterState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(40)}>
              <EyesMotion
                eyes={EyeType.open}
                angle={180}
                state={klausCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3)}>
              <EyesMotion eyes={EyeType.open} state={klausCharacterState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(36)}>
              <EyesMotion
                eyes={EyeType.open}
                angle={140}
                state={klausCharacterState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(8)}>
              <EyesMotion eyes={EyeType.open} state={klausCharacterState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(10)}>
              <EyesMotion
                eyes={EyeType.open}
                angle={0}
                state={klausCharacterState}
              />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(54.2)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.9)}>
              <Wiggle state={klausCharacterState} />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="ChatGPT Controller">
          <Scale start={0.5} state={chatGptState} />
          <Stand at={{ x: -212, y: -725 }} state={chatGptState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(83.3)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.6)}>
              <Wiggle state={chatGptState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(4)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3)}>
              <Wiggle state={chatGptState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(7.8)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.8)}>
              <Wiggle state={chatGptState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(16.4)}>
              <Wiggle state={chatGptState} />
            </Series.Sequence>
          </Series>
        </Sequence>
      </Sequence>

      <Sequence name="Character Composition">
        <Sequence name="ChatGPT">
          <ChatGpt characterState={chatGptState} />
        </Sequence>

        <Sequence name="Shaby">
          <Shaby characterState={shabyCharacterState} />
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
