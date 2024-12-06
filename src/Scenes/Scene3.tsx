import {
  AbsoluteFill,
  Audio,
  Sequence,
  Series,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { ScalableImg } from "../Components/ScalableImg";
import { seconds } from "../util/timing";
import { Shaby } from "../Character/Shaby";
import { useRef } from "react";
import { CharacterState, getDefaultCharacterState } from "../Character/Base";
import { Wagenbrein } from "../Character/Wagenbrein";
import { Stand } from "../Motion/Stand";
import { Scale } from "../Motion/Scale";
import { BlinkMotion } from "../Motion/BlinkMotion";
import { Walk } from "../Motion/Walk";
import { Klaus } from "../Character/Klaus";
import { Postler } from "../Character/Postler";
import { Elisabeth } from "../Character/Elisabeth";
import { ConversationType, MouthMotion } from "../Motion/MouthMotion";
import { MouthType } from "../Character/Base/Mouth";
import { EyesMotion } from "../Motion/EyesMotion";
import { EyeType } from "../Character/Base/Eyes";
import { HeadMotion, MovementType } from "../Motion/HeadMotion";
import { Wiggle } from "../Motion/Wiggle";

export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();

  const shabyState = useRef<CharacterState>(getDefaultCharacterState());
  const wagenbreinState = useRef<CharacterState>(getDefaultCharacterState());
  const staniState = useRef<CharacterState>(getDefaultCharacterState());
  const rickState = useRef<CharacterState>(getDefaultCharacterState());
  const ottoState = useRef<CharacterState>(getDefaultCharacterState());
  const postlerState = useRef<CharacterState>(getDefaultCharacterState());
  const elisabethState = useRef<CharacterState>(getDefaultCharacterState());
  const klausState = useRef<CharacterState>(getDefaultCharacterState());

  shabyState.current = getDefaultCharacterState();
  wagenbreinState.current = getDefaultCharacterState();
  staniState.current = getDefaultCharacterState();
  rickState.current = getDefaultCharacterState();
  ottoState.current = getDefaultCharacterState();
  postlerState.current = getDefaultCharacterState();
  elisabethState.current = getDefaultCharacterState();
  klausState.current = getDefaultCharacterState();

  return (
    <>
      <Audio src={staticFile("jingles/jingle-1.mp3")} />

      <Sequence name="Audio" from={seconds(3)}>
        <Audio src={staticFile("voices/scene3_dev_area.mp3")} />
      </Sequence>

      <Sequence name="Audio" from={seconds(68)}>
        <Audio src={staticFile("voices/scene3_dev_area2.mp3")} />
      </Sequence>

      <Sequence name="Character Controller">
        <Sequence name="Wagenbrein Controller">
          <BlinkMotion state={wagenbreinState} interval={seconds(2.3)} />
          <Scale start={0.4} state={wagenbreinState} />
          <Stand at={{ x: 400, y: -100 }} state={wagenbreinState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(3.2)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <Wiggle state={wagenbreinState} />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Postler Controller">
          <BlinkMotion state={postlerState} interval={seconds(2)} />
          <Scale start={0.6} state={postlerState} />
          <Stand at={{ x: 1100, y: 50 }} state={postlerState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(15.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <Walk
                start={{ x: 1100, y: 50 }}
                end={{ x: 750, y: 50 }}
                state={postlerState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(6.3)}>
              <Stand at={{ x: 750, y: 50 }} state={postlerState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <Walk
                start={{ x: 750, y: 50 }}
                end={{ x: 1100, y: 50 }}
                state={postlerState}
              />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(16.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.2)}>
              <HeadMotion
                movementType={MovementType.normal_3}
                state={postlerState}
              />
              <MouthMotion
                state={postlerState}
                conversation={ConversationType.speak_2}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.3)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <HeadMotion
                movementType={MovementType.normal_3}
                state={postlerState}
              />
              <MouthMotion
                state={postlerState}
                conversation={ConversationType.speak_2}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3)}>
              <MouthMotion state={postlerState} mouth={MouthType.unhappy} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(23.5)}>
              <EyesMotion
                eyes={EyeType.open}
                state={postlerState}
                angle={200}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3)}>
              <EyesMotion
                eyes={EyeType.open}
                state={postlerState}
                angle={330}
              />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Elisabeth Controller">
          <BlinkMotion state={elisabethState} interval={seconds(2.1)} />
          <Scale start={0.6} state={elisabethState} />
          <Stand at={{ x: 1100, y: 50 }} state={elisabethState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(55.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <Walk
                start={{ x: 1100, y: 50 }}
                end={{ x: 750, y: 50 }}
                state={elisabethState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(7.7)}>
              <Stand at={{ x: 750, y: 50 }} state={elisabethState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <Walk
                start={{ x: 750, y: 50 }}
                end={{ x: 1100, y: 50 }}
                state={elisabethState}
              />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(57.8)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <HeadMotion
                movementType={MovementType.normal_2}
                state={elisabethState}
              />
              <MouthMotion
                state={elisabethState}
                conversation={ConversationType.speak_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.4)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.4)}>
              <HeadMotion
                movementType={MovementType.normal_2}
                state={elisabethState}
              />
              <MouthMotion
                state={elisabethState}
                conversation={ConversationType.speak_1}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(4)}>
              <MouthMotion state={elisabethState} mouth={MouthType.unhappy} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(64.3)}>
              <EyesMotion
                eyes={EyeType.open}
                state={elisabethState}
                angle={200}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3)}>
              <EyesMotion
                eyes={EyeType.open}
                state={elisabethState}
                angle={330}
              />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Rick Controller">
          <Scale start={0.4} state={rickState} />
          <Stand at={{ x: -800, y: -300 }} state={rickState} />
        </Sequence>

        <Sequence name="Otto Controller">
          <BlinkMotion state={ottoState} interval={seconds(2.2)} />
          <Scale start={0.4} state={ottoState} />
          <Stand at={{ x: -700, y: -100 }} state={ottoState} />
        </Sequence>

        <Sequence name="Shaby Controller">
          <BlinkMotion state={shabyState} interval={seconds(2.4)} />
          <Scale start={0.4} state={shabyState} />
          <Stand at={{ x: -500, y: -100 }} state={shabyState} />
        </Sequence>

        <Sequence name="Stani Controller">
          <BlinkMotion state={staniState} interval={seconds(2.5)} />
          <Scale start={0.35} state={staniState} />
          <Stand at={{ x: -350, y: -350 }} state={staniState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(6.2)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.8)}>
              <Wiggle state={staniState} />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Klaus Controller">
          <BlinkMotion state={klausState} interval={seconds(2.6)} />
          <Scale start={0.35} state={klausState} />
          <Stand at={{ x: 500, y: -540 }} state={klausState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(51.3)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <Wiggle state={klausState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(11.6)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.3)}>
              <MouthMotion
                state={klausState}
                conversation={ConversationType.shout_2}
              />
              <HeadMotion
                movementType={MovementType.normal_3}
                state={klausState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1)}>
              <MouthMotion state={klausState} mouth={MouthType.open_teeth_tongue_2} />
              <HeadMotion
                movementType={MovementType.normal_3}
                state={klausState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <MouthMotion
                state={klausState}
                conversation={ConversationType.shout_2}
              />
              <HeadMotion
                movementType={MovementType.normal_3}
                state={klausState}
              />
            </Series.Sequence>
          </Series>
        </Sequence>
      </Sequence>

      <Sequence name="Character Composition">
        <AbsoluteFill>
          <ScalableImg src={staticFile("locations/dev-scene.png")} />
        </AbsoluteFill>

        <Sequence name="Rick">
          <Klaus characterState={rickState} />
        </Sequence>

        <Sequence name="Stani">
          <Klaus characterState={staniState} />
        </Sequence>

        <Sequence name="Klaus">
          <Klaus characterState={klausState} />
        </Sequence>

        <AbsoluteFill>
          <ScalableImg src={staticFile("locations/dev-scene-stuff.png")} />
        </AbsoluteFill>

        <Sequence name="Shaby">
          <Shaby characterState={shabyState} />
        </Sequence>

        <Sequence name="Wagenbrein">
          <Wagenbrein characterState={wagenbreinState} />
        </Sequence>

        <Sequence name="Otto">
          <Klaus characterState={ottoState} />
        </Sequence>

        <Sequence name="Postler">
          <Postler characterState={postlerState} />
        </Sequence>

        <Sequence name="Elisabeth">
          <Elisabeth characterState={elisabethState} />
        </Sequence>
      </Sequence>
    </>
  );
};
