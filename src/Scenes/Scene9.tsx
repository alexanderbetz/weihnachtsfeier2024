import {
  Audio,
  AbsoluteFill,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
  Series,
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
import { MichaelJackson } from "../Character/MichaelJackson";
import { EyeBrowMotion } from "../Motion/EyeBrowMotion";
import { EyeBrowType } from "../Character/Base/EyeBrows";
import { Shaby } from "../Character/Shaby";

export const Scene9: React.FC = () => {
  const frame = useCurrentFrame();
  const shabyState = useRef<CharacterState>(getDefaultCharacterState());
  const michaelState = useRef<CharacterState>(getDefaultCharacterState());
  const alexState = useRef<CharacterState>(getDefaultCharacterState());
  shabyState.current = getDefaultCharacterState();
  michaelState.current = getDefaultCharacterState();
  alexState.current = getDefaultCharacterState();
  const isRoomDark = frame < seconds(27);
  const michaelOpacity = interpolate(
    frame,
    [seconds(63), seconds(65)],
    [1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  return (
    <>
      <AbsoluteFill style={{ backgroundColor: "black" }} />
      <Sequence>
        <AbsoluteFill style={{ opacity: isRoomDark ? 0.2 : 1 }}>
          <ScalableImg src={staticFile("locations/end-layer-back.png")} />
        </AbsoluteFill>
      </Sequence>
      <Audio src={staticFile("voices/scene9_ende.mp3")} />

      <Sequence name="Character Controller">
        <BlinkMotion state={shabyState} interval={seconds(2.4)} />
        <BlinkMotion state={michaelState} interval={seconds(4.1)} />
        <BlinkMotion state={alexState} interval={seconds(3.1)} />

        <Sequence name="Shaby">
          <Scale start={0.35} state={shabyState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(6)}>
              <Walk
                start={{ x: 1100, y: -275 }}
                end={{ x: 470, y: -275 }}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(64)}>
              <Stand at={{ x: 470, y: -275 }} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(6)}>
              <Walk
                start={{ x: 470, y: -275 }}
                end={{ x: -680, y: -275 }}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(40)}>
              <Stand at={{ x: -680, y: -275 }} state={shabyState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(6)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.7)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.7)}>
              <HeadMotion
                movementType={MovementType.normal_3}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.7)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.7)}>
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(10)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(7.5)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.6)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(5)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(5.6)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(10.6)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.6)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.4)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3.8)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.9)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.3)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3.5)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.7)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.8)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.1)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(6.9)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.6)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.4)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.8)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.4)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.4)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.8)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.8)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.8)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion mouth={MouthType.open_1} state={shabyState} />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(27.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(23.8)}>
              <EyesMotion eyes={EyeType.open} angle={160} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3)}>
              <EyesMotion eyes={EyeType.open} angle={0} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(10.9)}>
              <EyesMotion eyes={EyeType.open} angle={160} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(5)}>
              <EyesMotion eyes={EyeType.open} angle={0} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(5.8)}>
              <EyesMotion eyes={EyeType.open} angle={190} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3.6)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(30)}>
              <EyesMotion eyes={EyeType.open} angle={300} state={shabyState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(28.3)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(7)}>
              <EyeBrowMotion eyeBrow={EyeBrowType.angry} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(37.6)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(27)}>
              <EyeBrowMotion eyeBrow={EyeBrowType.angry} state={shabyState} />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Alex">
          <Scale start={0.35} state={alexState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(2)}>
              <Stand at={{ x: 1100, y: -275 }} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(4)}>
              <Walk
                start={{ x: 1100, y: -275 }}
                end={{ x: 670, y: -275 }}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(65)}>
              <Stand at={{ x: 670, y: -275 }} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(6)}>
              <Walk
                start={{ x: 670, y: -275 }}
                end={{ x: -470, y: -275 }}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(40)}>
              <Stand at={{ x: -470, y: -275 }} state={alexState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(8.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(8)}>
              <HeadMotion
                movementType={MovementType.normal_1}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(6)}>
              <HeadMotion
                movementType={MovementType.normal_1}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(23.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.8)}>
              <MouthMotion
                conversation={ConversationType.speak_2}
                state={alexState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(16.8)}>
              <MouthMotion mouth={MouthType.unhappy} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.3)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={alexState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion mouth={MouthType.unhappy} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.3)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={alexState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(19.2)}>
              <MouthMotion mouth={MouthType.unhappy} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion
                conversation={ConversationType.shout_2}
                state={alexState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.8)}>
              <MouthMotion mouth={MouthType.unhappy} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion
                conversation={ConversationType.shout_2}
                state={alexState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.8)}>
              <MouthMotion mouth={MouthType.unhappy} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion
                conversation={ConversationType.shout_2}
                state={alexState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.8)}>
              <MouthMotion mouth={MouthType.unhappy} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion mouth={MouthType.open_3} state={alexState} />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={alexState}
              />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(27.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(53)}>
              <EyesMotion eyes={EyeType.open} angle={160} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(40)}>
              <EyesMotion eyes={EyeType.open} angle={230} state={alexState} />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Michael">
          <Scale start={0.35} state={michaelState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(18.5)}>
              <Stand at={{ x: -1000, y: -275 }} state={michaelState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <Walk
                start={{ x: -1000, y: -275 }}
                end={{ x: -700, y: -275 }}
                state={michaelState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(43.5)}>
              <Stand at={{ x: -700, y: -275 }} state={michaelState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <Walk
                start={{ x: -700, y: -275 }}
                end={{ x: -950, y: -275 }}
                state={michaelState}
              />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(35.7)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={michaelState}
              />
              <HeadMotion
                state={michaelState}
                movementType={MovementType.normal_2}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.7)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.7)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={michaelState}
              />
              <HeadMotion
                state={michaelState}
                movementType={MovementType.normal_2}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.7)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.3)}>
              <MouthMotion mouth={MouthType.open_1} state={michaelState} />
              <HeadMotion
                state={michaelState}
                movementType={MovementType.normal_2}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.1)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.3)}>
              <MouthMotion
                mouth={MouthType.open_teeth_tongue_1}
                state={michaelState}
              />
              <HeadMotion
                state={michaelState}
                movementType={MovementType.normal_2}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3.3)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(6)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={michaelState}
              />
              <HeadMotion
                state={michaelState}
                movementType={MovementType.normal_2}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.1)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.3)}>
              <MouthMotion
                mouth={MouthType.open_teeth_tongue_3}
                state={michaelState}
              />
              <HeadMotion
                state={michaelState}
                movementType={MovementType.normal_2}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.3)}>
              <MouthMotion
                mouth={MouthType.open_teeth_tongue_1}
                state={michaelState}
              />
              <HeadMotion
                state={michaelState}
                movementType={MovementType.normal_2}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(11.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.5)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={michaelState}
              />
              <HeadMotion
                state={michaelState}
                movementType={MovementType.normal_2}
              />
            </Series.Sequence>
          </Series>
        </Sequence>
      </Sequence>

      <Sequence name="Character Composition">
        <AbsoluteFill style={{ filter: isRoomDark ? "brightness(0%)" : "" }}>
          <Sequence name="Shaby">
            <Shaby characterState={shabyState} />
          </Sequence>

          <Sequence name="Michael">
            <AbsoluteFill style={{ opacity: michaelOpacity }}>
              <MichaelJackson characterState={michaelState} />
            </AbsoluteFill>
          </Sequence>

          <Sequence name="Alex">
            <Alex characterState={alexState} />
          </Sequence>
        </AbsoluteFill>
      </Sequence>

      {!isRoomDark && (
        <AbsoluteFill>
          <ScalableImg src={staticFile("locations/end-layer.png")} />
        </AbsoluteFill>
      )}

      <Sequence from={seconds(95.8)}>
        <AbsoluteFill style={{ backgroundColor: "black" }} />
      </Sequence>
    </>
  );
};
