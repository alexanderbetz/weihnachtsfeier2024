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
import { ScalableImg } from "../Components/ScalableImg";
import { seconds } from "../util/timing";
import { Alex } from "../Character/Alex";
import { Scale } from "../Motion/Scale";
import { Stand } from "../Motion/Stand";
import { Shaby } from "../Character/Shaby";
import { Hazard } from "../Character/Hazard";
import { TomCruise } from "../Character/TomCruise";
import { Walk } from "../Motion/Walk";
import { HeadMotion, MovementType } from "../Motion/HeadMotion";
import { ConversationType, MouthMotion } from "../Motion/MouthMotion";
import { MouthType } from "../Character/Base/Mouth";
import { BlinkMotion } from "../Motion/BlinkMotion";
import { EyesMotion } from "../Motion/EyesMotion";
import { EyeType } from "../Character/Base/Eyes";
import { EyeBrowMotion } from "../Motion/EyeBrowMotion";
import { EyeBrowType } from "../Character/Base/EyeBrows";

export const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const shabyState = useRef<CharacterState>(getDefaultCharacterState());
  const alexState = useRef<CharacterState>(getDefaultCharacterState());
  const hazardState = useRef<CharacterState>(getDefaultCharacterState());
  const tomCruiseState = useRef<CharacterState>(getDefaultCharacterState());
  shabyState.current = getDefaultCharacterState();
  alexState.current = getDefaultCharacterState();
  hazardState.current = getDefaultCharacterState();
  tomCruiseState.current = getDefaultCharacterState();

  return (
    <>
      <AbsoluteFill>
        <ScalableImg src={staticFile("locations/toilet.png")} />
      </AbsoluteFill>
      <AbsoluteFill>
        <Sequence from={seconds(19.5)} durationInFrames={seconds(1.8)}>
          <ScalableImg src={staticFile("locations/toilet-back.png")} />
        </Sequence>

        <Sequence from={seconds(40)} durationInFrames={seconds(1.8)}>
          <ScalableImg src={staticFile("locations/toilet-back.png")} />
        </Sequence>
      </AbsoluteFill>

      <Sequence from={seconds(3)}>
        <Audio src={staticFile("voices/scene5-wc.mp3")} />
      </Sequence>

      <Sequence name="Character Controller">
        <BlinkMotion interval={seconds(2.3)} state={shabyState} />
        <BlinkMotion interval={seconds(3)} state={alexState} />
        <BlinkMotion interval={seconds(1.8)} state={hazardState} />
        <BlinkMotion interval={seconds(2.5)} state={tomCruiseState} />

        <Sequence name="Shaby">
          <Scale start={0.5} state={shabyState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(3)}>
              <Walk
                state={shabyState}
                start={{ x: 0, y: 300 }}
                end={{ x: 200, y: -180 }}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(15.5)}>
              <Stand state={shabyState} at={{ x: 200, y: -180 }} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <Walk
                state={shabyState}
                start={{ x: 200, y: -180 }}
                end={{ x: 300, y: -80 }}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(28)}>
              <Stand state={shabyState} at={{ x: 300, y: -80 }} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <Walk
                state={shabyState}
                start={{ x: 300, y: -80 }}
                end={{ x: 200, y: -180 }}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(28)}>
              <Stand state={shabyState} at={{ x: 200, y: -180 }} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(4.3)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.4)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.1)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.4)}>
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
            <Series.Sequence durationInFrames={seconds(0.4)}>
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
            <Series.Sequence durationInFrames={seconds(1.4)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(25.5)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3.5)}>
              <MouthMotion
                conversation={ConversationType.shout_1}
                state={shabyState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(11)}>
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
            <Series.Sequence durationInFrames={seconds(20)}>
              <MouthMotion mouth={MouthType.unhappy} state={shabyState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(18.2)}>
              <EyesMotion eyes={EyeType.open} angle={60} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(16.5)}>
              <EyesMotion eyes={EyeType.open} angle={150} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(4)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(8.5)}>
              <EyesMotion eyes={EyeType.open} angle={150} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(20)}>
              <EyesMotion eyes={EyeType.open} angle={60} state={shabyState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(5.8)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3.6)}>
              <EyeBrowMotion eyeBrow={EyeBrowType.angry} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(25.3)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3.8)}>
              <EyeBrowMotion eyeBrow={EyeBrowType.angry} state={shabyState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(10.8)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(20)}>
              <EyeBrowMotion eyeBrow={EyeBrowType.angry} state={shabyState} />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Alex">
          <Scale start={0.5} state={alexState} />
          <Stand at={{ x: -300, y: 0 }} state={alexState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(3)}>
              <Walk
                state={alexState}
                start={{ x: 200, y: 400 }}
                end={{ x: 600, y: -120 }}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(80)}>
              <Stand state={alexState} at={{ x: 600, y: -120 }} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(42.5)}>
              <MouthMotion mouth={MouthType.unhappy} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.8)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={alexState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(4.3)}>
              <MouthMotion mouth={MouthType.unhappy} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.8)}>
              <MouthMotion
                conversation={ConversationType.speak_1}
                state={alexState}
              />
              <HeadMotion
                movementType={MovementType.normal_1}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(7.4)}>
              <MouthMotion mouth={MouthType.unhappy} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.4)}>
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
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion mouth={MouthType.unhappy} state={alexState} />
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
            <Series.Sequence durationInFrames={seconds(5)}>
              <MouthMotion mouth={MouthType.unhappy} state={alexState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(3)}>
              <EyesMotion eyes={EyeType.open} angle={110} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <EyesMotion eyes={EyeType.open} angle={150} state={alexState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(65)}>
              <EyesMotion eyes={EyeType.open} angle={150} state={alexState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(47.6)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3)}>
              <EyeBrowMotion eyeBrow={EyeBrowType.angry} state={alexState} />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Hazard" from={seconds(19.5)}>
          <Scale start={0.5} state={hazardState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(2)}>
              <Walk
                start={{ x: 350, y: -200 }}
                end={{ x: -100, y: -50 }}
                state={hazardState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(15)}>
              <Stand at={{ x: -100, y: -50 }} state={hazardState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <Walk
                start={{ x: -100, y: -50 }}
                end={{ x: -200, y: 700 }}
                state={hazardState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(60)}>
              <Stand at={{ x: -200, y: 700 }} state={hazardState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(1.8)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(13)}>
              <HeadMotion
                fast
                movementType={MovementType.normal_1}
                state={hazardState}
              />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(15.5)}>
              <EyesMotion eyes={EyeType.open} angle={310} state={hazardState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(4)}>
              <EyesMotion eyes={EyeType.open} angle={270} state={hazardState} />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Tom Cruise" from={seconds(40)}>
          <Scale start={0.5} state={tomCruiseState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(2)}>
              <Walk
                start={{ x: 350, y: -200 }}
                end={{ x: -100, y: -50 }}
                state={tomCruiseState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(7)}>
              <Stand at={{ x: -100, y: -50 }} state={tomCruiseState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <Walk
                start={{ x: -100, y: -50 }}
                end={{ x: -200, y: 700 }}
                state={tomCruiseState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(60)}>
              <Stand at={{ x: -200, y: 700 }} state={tomCruiseState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(3.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <MouthMotion
                conversation={ConversationType.speak_2}
                state={tomCruiseState}
              />
              <HeadMotion
                fast
                movementType={MovementType.normal_1}
                state={tomCruiseState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.8)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.4)}>
              <MouthMotion
                conversation={ConversationType.speak_2}
                state={tomCruiseState}
              />
              <HeadMotion
                fast
                movementType={MovementType.normal_1}
                state={tomCruiseState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3)}>
              <MouthMotion mouth={MouthType.unhappy} state={tomCruiseState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(3)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(6)}>
              <EyesMotion
                eyes={EyeType.open}
                angle={310}
                state={tomCruiseState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(4)}>
              <EyesMotion
                eyes={EyeType.open}
                angle={270}
                state={tomCruiseState}
              />
            </Series.Sequence>
          </Series>
        </Sequence>
      </Sequence>

      <Sequence name="Character Composition">
        <Sequence name="Hazard" from={seconds(19.5)}>
          <Hazard characterState={hazardState} />
        </Sequence>

        <Sequence name="Tom Cruise" from={seconds(40)}>
          <TomCruise characterState={tomCruiseState} />
        </Sequence>

        <Sequence name="Open Door">
          <AbsoluteFill style={{ opacity: 1 }}>
            <Sequence from={seconds(19.5)} durationInFrames={seconds(1.8)}>
              <ScalableImg src={staticFile("locations/toilet-open.png")} />
            </Sequence>

            <Sequence from={seconds(40)} durationInFrames={seconds(1.8)}>
              <ScalableImg src={staticFile("locations/toilet-open.png")} />
            </Sequence>
          </AbsoluteFill>
        </Sequence>

        <Sequence name="Shaby">
          <Shaby characterState={shabyState} />
        </Sequence>

        <Sequence name="Alex">
          <Alex characterState={alexState} />
        </Sequence>
      </Sequence>
    </>
  );
};
