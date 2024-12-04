import {
  Audio,
  AbsoluteFill,
  Sequence,
  staticFile,
  useCurrentFrame,
  Series,
} from "remotion";
import { Danny } from "../Character/Danny";
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

  return (
    <>
      <AbsoluteFill>
        <ScalableImg src={staticFile("locations/gindl_back.png")} />
      </AbsoluteFill>
      <Audio src={staticFile("voices/scene8_gindl.mp3")} />

      <Sequence name="Character Controller">
        <BlinkMotion state={shabyState} interval={seconds(2.4)} />
        <BlinkMotion state={gindlState} interval={seconds(4.1)} />
        <BlinkMotion state={alexState} interval={seconds(3.1)} />
        <BlinkMotion state={postlerState} interval={seconds(2.8)} />

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
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(27.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(23.8)}>
              <EyesMotion eyes={EyeType.open} angle={160} state={shabyState} />
            </Series.Sequence>
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(28.3)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(7)}>
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
          </Series>

          <Series>
            <Series.Sequence durationInFrames={seconds(27.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(53)}>
              <EyesMotion eyes={EyeType.open} angle={160} state={alexState} />
            </Series.Sequence>
          </Series>
        </Sequence>
      </Sequence>

      <Sequence name="Character Composition">
        <Sequence name="Shaby">
          <Danny characterState={shabyState} />
        </Sequence>

        <Sequence name="Gindl">
          <MichaelJackson characterState={gindlState} />
        </Sequence>

        <Sequence name="Alex">
          <Alex characterState={alexState} />
        </Sequence>
      </Sequence>

      <AbsoluteFill>
        <ScalableImg src={staticFile("locations/gindl_tisch.png")} />
      </AbsoluteFill>

      <AbsoluteFill>
        <ScalableImg src={staticFile("locations/gindl_regal.png")} />
      </AbsoluteFill>
    </>
  );
};
