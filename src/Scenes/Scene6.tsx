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
import { Shaby } from "../Character/Shaby";
import { Margaretha } from "../Character/Margaretha";
import { Danny } from "../Character/Danny";
import { Wiggle } from "../Motion/Wiggle";
import { Alex } from "../Character/Alex";
import { Wagenbrein } from "../Character/Wagenbrein";
import { EyeBrowMotion } from "../Motion/EyeBrowMotion";
import { EyeBrowType } from "../Character/Base/EyeBrows";

export const Scene6: React.FC = () => {
  const frame = useCurrentFrame();
  const shabyState = useRef<CharacterState>(getDefaultCharacterState());
  const staniState = useRef<CharacterState>(getDefaultCharacterState());
  const margaretaState = useRef<CharacterState>(getDefaultCharacterState());
  const dannyState = useRef<CharacterState>(getDefaultCharacterState());
  const alexState = useRef<CharacterState>(getDefaultCharacterState());
  const wagenbreinState = useRef<CharacterState>(getDefaultCharacterState());
  const ottoState = useRef<CharacterState>(getDefaultCharacterState());
  shabyState.current = getDefaultCharacterState();
  staniState.current = getDefaultCharacterState();
  margaretaState.current = getDefaultCharacterState();
  dannyState.current = getDefaultCharacterState();
  alexState.current = getDefaultCharacterState();
  wagenbreinState.current = getDefaultCharacterState();
  ottoState.current = getDefaultCharacterState();

  return (
    <>
      <AbsoluteFill>
        <ScalableImg src={staticFile("locations/dev-scene.png")} />
      </AbsoluteFill>
      <Audio src={staticFile("jingles/jingle-16.mp3")} />
      <Sequence from={seconds(4)}>
        <Audio src={staticFile("voices/scene6-dev.mp3")} />
      </Sequence>

      <Sequence name="Character Controller">
        <BlinkMotion state={shabyState} interval={seconds(2)} />
        <BlinkMotion state={staniState} interval={seconds(2.6)} />
        <BlinkMotion state={dannyState} interval={seconds(3)} />
        <BlinkMotion state={margaretaState} interval={seconds(2.2)} />
        <BlinkMotion state={alexState} interval={seconds(2.2)} />
        <BlinkMotion state={wagenbreinState} interval={seconds(3.2)} />
        <BlinkMotion state={ottoState} interval={seconds(3.1)} />
        <Scale start={0.35} state={shabyState} />
        <Scale start={0.4} state={staniState} />
        <Scale start={0.5} state={margaretaState} />
        <Scale start={0.4} state={dannyState} />
        <Scale start={0.35} state={alexState} />
        <Scale start={0.4} state={wagenbreinState} />
        <Scale start={0.4} state={ottoState} />
        <Stand at={{ x: 120, y: -350 }} state={shabyState} />
        <Stand at={{ x: -550, y: -150 }} state={staniState} />
        <Stand at={{ x: -800, y: -120 }} state={ottoState} />
        <Stand at={{ x: -500, y: -450 }} state={alexState} />
        <Stand at={{ x: 600, y: -150 }} state={wagenbreinState} />

        <Sequence name="Shaby">
          <Series>
            <Series.Sequence durationInFrames={seconds(7)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.2)}>
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.2)}>
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(23)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(4.2)}>
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
          </Series>
          <Series>
            <Series.Sequence durationInFrames={seconds(7.3)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.8)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.7)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.7)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.6)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.2)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.3)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.3)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.15)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.3)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(22.8)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.2)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(15)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(5.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.2)}>
              <EyesMotion eyes={EyeType.open} angle={240} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(6)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(18)}>
              <EyesMotion eyes={EyeType.open} angle={300} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(14)}>
              <EyesMotion eyes={EyeType.open} angle={230} state={shabyState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(7.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(7.5)}>
              <EyeBrowMotion eyeBrow={EyeBrowType.angry} state={shabyState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(13.9)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <Wiggle state={shabyState} />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Stani">
          <Series>
            <Series.Sequence durationInFrames={seconds(4.3)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.3)}>
              <MouthMotion mouth={MouthType.open_1} state={staniState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.7)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.8)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={staniState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={staniState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(24.4)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.6)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={staniState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={staniState}
              />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(4.3)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.4)}>
              <Wiggle state={staniState} />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Margaretha" from={seconds(13)}>
          <Series>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <Walk
                start={{ x: 600, y: 500 }}
                end={{ x: 500, y: 100 }}
                state={margaretaState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(14)}>
              <Stand at={{ x: 500, y: 100 }} state={margaretaState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <Walk
                start={{ x: 500, y: 100 }}
                end={{ x: 600, y: 500 }}
                state={margaretaState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(14)}>
              <Stand at={{ x: 0, y: 1000 }} state={margaretaState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(1.7)}>
              <MouthMotion mouth={MouthType.unhappy} state={margaretaState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.6)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={margaretaState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={margaretaState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion mouth={MouthType.unhappy} state={margaretaState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={margaretaState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={margaretaState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion mouth={MouthType.unhappy} state={margaretaState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.3)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={margaretaState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={margaretaState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion mouth={MouthType.unhappy} state={margaretaState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.3)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={margaretaState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={margaretaState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.8)}>
              <MouthMotion mouth={MouthType.unhappy} state={margaretaState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.9)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={margaretaState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={margaretaState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion mouth={MouthType.unhappy} state={margaretaState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3.8)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={margaretaState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={margaretaState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion mouth={MouthType.unhappy} state={margaretaState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={margaretaState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={margaretaState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(5)}>
              <MouthMotion mouth={MouthType.unhappy} state={margaretaState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(12.8)}>
              <EyesMotion
                eyes={EyeType.open}
                angle={150}
                state={margaretaState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <EyesMotion eyes={EyeType.x} state={margaretaState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.4)}>
              <EyesMotion
                eyes={EyeType.open}
                angle={150}
                state={margaretaState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.6)}>
              <EyesMotion eyes={EyeType.x} state={margaretaState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(15.5)}>
              <EyesMotion
                eyes={EyeType.open}
                angle={270}
                state={margaretaState}
              />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(12.8)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <Wiggle state={margaretaState} />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Danny" from={seconds(30)}>
          <Series>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <Walk
                start={{ x: -200, y: 500 }}
                end={{ x: -100, y: 100 }}
                state={dannyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(12.5)}>
              <Stand at={{ x: -100, y: 100 }} state={dannyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <Walk
                start={{ x: -100, y: 100 }}
                end={{ x: -200, y: 500 }}
                state={dannyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(14)}>
              <Stand at={{ x: 0, y: 1000 }} state={dannyState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(2)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.1)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={dannyState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={dannyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.8)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={dannyState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={dannyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(5.1)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.3)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={dannyState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={dannyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={dannyState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={dannyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.2)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.3)}>
              <MouthMotion mouth={MouthType.open_1} state={dannyState} />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={dannyState}
              />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(2)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <EyesMotion eyes={EyeType.open} angle={20} state={dannyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.8)}>
              <EyesMotion eyes={EyeType.open} angle={180} state={dannyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(7.3)}>
              <EyesMotion eyes={EyeType.open} angle={20} state={dannyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(13)}>
              <EyesMotion eyes={EyeType.open} angle={270} state={dannyState} />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Otto">
          <Series>
            <Series.Sequence durationInFrames={seconds(10.2)}>
              <span />
            </Series.Sequence>

            <Series.Sequence durationInFrames={seconds(0.4)}>
              <Wiggle state={ottoState} />
            </Series.Sequence>
          </Series>
        </Sequence>
      </Sequence>

      <Sequence name="Character Composition">
        <Sequence name="Shaby">
          <Shaby characterState={shabyState} />
        </Sequence>

        <Sequence name="Alex">
          <Alex characterState={alexState} />
        </Sequence>

        <Sequence name="Wagenbrein">
          <Wagenbrein characterState={wagenbreinState} />
        </Sequence>

        <AbsoluteFill>
          <ScalableImg src={staticFile("locations/dev-scene-stuff.png")} />
        </AbsoluteFill>

        <Sequence name="Wagenbrein">
          <Wagenbrein characterState={wagenbreinState} />
        </Sequence>

        <Sequence name="Stani">
          <Shaby characterState={staniState} />
        </Sequence>

        <Sequence name="Otto">
          <Shaby characterState={ottoState} />
        </Sequence>

        <Sequence name="Danny" from={seconds(30)}>
          <Danny characterState={dannyState} />
        </Sequence>

        <Sequence
          name="Margaretha"
          from={seconds(13)}
          durationInFrames={seconds(18)}
        >
          <Margaretha characterState={margaretaState} />
        </Sequence>
      </Sequence>
    </>
  );
};
