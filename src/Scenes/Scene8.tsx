import {
  Audio,
  AbsoluteFill,
  Sequence,
  staticFile,
  useCurrentFrame,
  Series,
  interpolate,
} from "remotion";
import { useRef } from "react";
import { CharacterState, getDefaultCharacterState } from "../Character/Base";
import { Walk } from "../Motion/Walk";
import { Scale } from "../Motion/Scale";
import { seconds } from "../util/timing";
import { ConversationType, MouthMotion } from "../Motion/MouthMotion";
import { MouthType } from "../Character/Base/Mouth";
import { Stand } from "../Motion/Stand";
import { HeadMotion, MovementType } from "../Motion/HeadMotion";
import { EyesMotion } from "../Motion/EyesMotion";
import { EyeType } from "../Character/Base/Eyes";
import { ScalableImg } from "../Components/ScalableImg";
import { BlinkMotion } from "../Motion/BlinkMotion";
import { Alex } from "../Character/Alex";
import { EyeBrowMotion } from "../Motion/EyeBrowMotion";
import { EyeBrows, EyeBrowType } from "../Character/Base/EyeBrows";
import { Gindl } from "../Character/Gindl";
import { Postler } from "../Character/Postler";
import { Shaby } from "../Character/Shaby";

export const Scene8: React.FC = () => {
  const frame = useCurrentFrame();
  const shabyState = useRef<CharacterState>(getDefaultCharacterState());
  const gindlState = useRef<CharacterState>(getDefaultCharacterState());
  const alexState = useRef<CharacterState>(getDefaultCharacterState());
  const postlerState = useRef<CharacterState>(getDefaultCharacterState());

  shabyState.current = getDefaultCharacterState();
  gindlState.current = getDefaultCharacterState();
  alexState.current = getDefaultCharacterState();
  postlerState.current = getDefaultCharacterState();

  const shelfX = interpolate(frame, [seconds(88), seconds(90.5)], [0, 280], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <>
      <AbsoluteFill>
        <ScalableImg src={staticFile("locations/gindl_back.png")} />
      </AbsoluteFill>
      <Audio src={staticFile("voices/scene8_gindl.mp3")} />

      <Sequence from={seconds(87.5)} durationInFrames={seconds(2.8)}>
        <Audio src={staticFile("sounds/gindl-regal-move.mp3")} />
      </Sequence>

      <Sequence name="Character Controller">
        <BlinkMotion state={shabyState} interval={seconds(2.4)} />
        <BlinkMotion state={gindlState} interval={seconds(4.1)} />
        <BlinkMotion state={alexState} interval={seconds(3.1)} />
        <BlinkMotion state={postlerState} interval={seconds(2.8)} />

        <Sequence name="Shaby">
          <Scale start={0.5} state={shabyState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(6)}>
              <Walk
                start={{ x: 1100, y: -100 }}
                end={{ x: 0, y: -100 }}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(88)}>
              <Stand at={{ x: 0, y: -100 }} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3.5)}>
              <Scale start={0.5} end={0.4} state={shabyState} />
              <Walk
                start={{ x: 0, y: -100 }}
                end={{ x: 550, y: -300 }}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(7.5)}>
              <Scale start={0.4} state={shabyState} />
              <Stand at={{ x: 550, y: -300 }} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <Scale start={0.4} end={0.4} state={shabyState} />
              <Walk
                start={{ x: 550, y: -300 }}
                end={{ x: 800, y: -380 }}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(7.3)}>
              <Scale start={0.4} state={shabyState} />
              <Stand at={{ x: 800, y: -380 }} state={shabyState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.7)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
              <HeadMotion
                movementType={MovementType.normal_3}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(99.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.3)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
              <HeadMotion
                movementType={MovementType.normal_3}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
              <HeadMotion
                movementType={MovementType.normal_3}
                state={shabyState}
              />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(15)}>
              <EyesMotion eyes={EyeType.open} angle={160} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(4)}>
              <EyesMotion eyes={EyeType.open} angle={30} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(5)}>
              <EyesMotion eyes={EyeType.open} angle={140} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.9)}>
              <EyesMotion eyes={EyeType.open} angle={30} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(7.4)}>
              <EyesMotion eyes={EyeType.open} angle={140} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(10)}>
              <EyesMotion eyes={EyeType.open} angle={0} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(27.7)}>
              <EyesMotion eyes={EyeType.open} angle={140} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(8.4)}>
              <EyesMotion eyes={EyeType.open} angle={0} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(8)}>
              <EyesMotion eyes={EyeType.open} angle={140} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.7)}>
              <EyesMotion eyes={EyeType.open} angle={50} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3)}>
              <EyesMotion eyes={EyeType.open} angle={140} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3.5)}>
              <EyesMotion eyes={EyeType.open} angle={40} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(4.4)}>
              <EyesMotion eyes={EyeType.open} angle={160} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(4.4)}>
              <EyesMotion eyes={EyeType.open} angle={40} state={shabyState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(128.3)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(7)}>
              <EyeBrowMotion eyeBrow={EyeBrowType.angry} state={shabyState} />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Alex">
          <Scale start={0.5} state={alexState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(2)}>
              <Stand at={{ x: 1100, y: -50 }} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(4)}>
              <Walk
                start={{ x: 1100, y: -50 }}
                end={{ x: 250, y: -50 }}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(89)}>
              <Stand at={{ x: 250, y: -50 }} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.7)}>
              <Scale start={0.5} end={0.4} state={alexState} />
              <Walk
                start={{ x: 250, y: -50 }}
                end={{ x: 400, y: -200 }}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(7.3)}>
              <Scale start={0.4} state={alexState} />
              <Stand at={{ x: 400, y: -200 }} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.7)}>
              <Scale start={0.4} state={alexState} />
              <Walk
                start={{ x: 400, y: -200 }}
                end={{ x: 750, y: -350 }}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(7.3)}>
              <Scale start={0.4} state={alexState} />
              <Stand at={{ x: 750, y: -350 }} state={alexState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(7.8)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.3)}>
              <MouthMotion
                mouth={MouthType.open_teeth_tongue_1}
                state={alexState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.7)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion
                mouth={MouthType.open_teeth_tongue_2}
                state={alexState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.2)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={alexState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={alexState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(20.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.4)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={alexState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(5.5)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={alexState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={alexState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(28)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={alexState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.7)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={alexState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.4)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3.4)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={alexState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={alexState}
              />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(15)}>
              <EyesMotion eyes={EyeType.open} angle={160} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(4)}>
              <EyesMotion eyes={EyeType.open} angle={30} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(5)}>
              <EyesMotion eyes={EyeType.open} angle={140} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.9)}>
              <EyesMotion eyes={EyeType.open} angle={30} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(7.4)}>
              <EyesMotion eyes={EyeType.open} angle={140} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(8.9)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(45.2)}>
              <EyesMotion eyes={EyeType.open} angle={140} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.6)}>
              <EyesMotion eyes={EyeType.open} angle={50} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(4)}>
              <EyesMotion eyes={EyeType.open} angle={140} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.9)}>
              <EyesMotion eyes={EyeType.open} angle={50} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(4)}>
              <EyesMotion eyes={EyeType.open} angle={160} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(10)}>
              <EyesMotion eyes={EyeType.open} angle={60} state={alexState} />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Gindl">
          <Scale start={0.5} state={gindlState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(110)}>
              <Stand at={{ x: -420, y: -190 }} state={gindlState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(4)}>
              <Walk
                start={{ x: 1100, y: -275 }}
                end={{ x: 670, y: -275 }}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(65)}>
              <Stand at={{ x: 670, y: -275 }} state={gindlState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(2.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3.5)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(6.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(4.5)}>
              <MouthMotion mouth={MouthType.unhappy} state={gindlState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.1)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion mouth={MouthType.unhappy} state={gindlState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion mouth={MouthType.unhappy} state={gindlState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.7)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.8)}>
              <MouthMotion mouth={MouthType.unhappy} state={gindlState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.6)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.6)}>
              <MouthMotion mouth={MouthType.unhappy} state={gindlState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <MouthMotion mouth={MouthType.unhappy} state={gindlState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3.7)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion mouth={MouthType.unhappy} state={gindlState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.6)}>
              <MouthMotion mouth={MouthType.unhappy} state={gindlState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.3)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.3)}>
              <MouthMotion mouth={MouthType.unhappy} state={gindlState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(10)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.6)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.6)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.7)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3.2)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.7)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.7)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(4)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3.3)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.4)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.2)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(8.8)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.1)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.6)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.4)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.6)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.6)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.8)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.6)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.6)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3.2)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.3)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.7)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(4)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={gindlState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={gindlState}
              />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(12)}>
              <EyesMotion eyes={EyeType.open} angle={340} state={gindlState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(12)}>
              <EyesMotion eyes={EyeType.open} angle={0} state={gindlState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(18.6)}>
              <EyesMotion eyes={EyeType.open} angle={320} state={gindlState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.2)}>
              <EyesMotion eyes={EyeType.closed} state={gindlState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(27)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(12)}>
              <EyesMotion eyes={EyeType.open} angle={320} state={gindlState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(7)}>
              <EyesMotion eyes={EyeType.open} angle={0} state={gindlState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3)}>
              <EyesMotion eyes={EyeType.open} angle={40} state={gindlState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(30)}>
              <EyesMotion eyes={EyeType.open} angle={340} state={gindlState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(18.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(7)}>
              <EyeBrowMotion eyeBrow={EyeBrowType.angry} state={gindlState} />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Postler">
          <Scale start={0.5} state={postlerState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(12.5)}>
              <Stand at={{ x: 1300, y: -100 }} state={postlerState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <Walk
                start={{ x: 1300, y: -100 }}
                end={{ x: 670, y: -100 }}
                state={postlerState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(9.5)}>
              <Stand at={{ x: 670, y: -100 }} state={postlerState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <Walk
                start={{ x: 670, y: -100 }}
                end={{ x: 1300, y: -100 }}
                state={postlerState}
              />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(14.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.7)}>
              <MouthMotion
                conversation={ConversationType.speak_2}
                state={postlerState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={postlerState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <MouthMotion
                conversation={ConversationType.speak_2}
                state={postlerState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={postlerState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(5.8)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(10)}>
              <MouthMotion mouth={MouthType.unhappy} state={postlerState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(24)}>
              <EyesMotion
                eyes={EyeType.open}
                angle={160}
                state={postlerState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(5)}>
              <EyesMotion
                eyes={EyeType.open}
                angle={310}
                state={postlerState}
              />
            </Series.Sequence>
          </Series>
        </Sequence>
      </Sequence>

      <Sequence durationInFrames={seconds(30)}>
        <AbsoluteFill>
          <ScalableImg src={staticFile("locations/gindl_regal.png")} />
        </AbsoluteFill>
      </Sequence>

      <Sequence name="Character Composition">
        <Sequence name="Shaby">
          <Shaby characterState={shabyState} />
        </Sequence>

        <Sequence name="Gindl">
          <Gindl characterState={gindlState} />
        </Sequence>

        <Sequence name="Alex">
          <Alex characterState={alexState} />
        </Sequence>

        <Sequence
          name="Postler"
          from={seconds(12.5)}
          durationInFrames={seconds(13.5)}
        >
          <Postler characterState={postlerState} />
        </Sequence>
      </Sequence>

      <AbsoluteFill>
        <ScalableImg src={staticFile("locations/gindl_tisch.png")} />
      </AbsoluteFill>

      <Sequence from={seconds(30)}>
        <AbsoluteFill style={{ left: `${shelfX}px` }}>
          <ScalableImg src={staticFile("locations/gindl_regal.png")} />
        </AbsoluteFill>
      </Sequence>
    </>
  );
};
