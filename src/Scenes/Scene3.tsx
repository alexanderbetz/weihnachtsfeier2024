import {
  AbsoluteFill,
  Audio,
  Sequence, Series,
  staticFile,
  useCurrentFrame
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
import { Margaretha } from "../Character/Margaretha";

export const Scene3: React.FC = () => {
  const frame = useCurrentFrame();

  const shabyState = useRef<CharacterState>(getDefaultCharacterState());
  const wagenbreinState = useRef<CharacterState>(getDefaultCharacterState());
  const staniState = useRef<CharacterState>(getDefaultCharacterState());
  const klausState = useRef<CharacterState>(getDefaultCharacterState());
  const ottoState = useRef<CharacterState>(getDefaultCharacterState());
  const postlerState = useRef<CharacterState>(getDefaultCharacterState());
  const elisabethState = useRef<CharacterState>(getDefaultCharacterState());

  shabyState.current = getDefaultCharacterState();
  wagenbreinState.current = getDefaultCharacterState();
  staniState.current = getDefaultCharacterState();
  klausState.current = getDefaultCharacterState();
  ottoState.current = getDefaultCharacterState();
  postlerState.current = getDefaultCharacterState();
  elisabethState.current = getDefaultCharacterState();

  return (
    <>
      <AbsoluteFill>
        <ScalableImg src={staticFile("locations/dev-scene.png")} />
      </AbsoluteFill>
      <AbsoluteFill>
        <ScalableImg src={staticFile("locations/dev-scene-stuff.png")} />
      </AbsoluteFill>
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
          <Stand at={{x: 400, y:-100}} state={wagenbreinState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(3.3)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(0.5)}>
              <Walk start={{x: 400, y:-100}} end={{x: 400, y:-100}} state={wagenbreinState} />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Postler Controller">
          <BlinkMotion state={postlerState} interval={seconds(2)} />
          <Scale start={0.6} state={postlerState} />
          <Stand at={{x: 1100, y: 50}} state={postlerState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(15.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <Walk start={{x: 1100, y: 50}} end={{x: 750, y: 50}} state={postlerState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(6.3)}>
              <Stand at={{x: 750, y: 50}} state={postlerState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <Walk start={{x: 750, y: 50}} end={{x: 1100, y: 50}} state={postlerState} />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Elisabeth Controller">
          <BlinkMotion state={elisabethState} interval={seconds(2.1)} />
          <Scale start={0.6} state={elisabethState} />
          <Stand at={{x: 1100, y: 50}} state={elisabethState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(55.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <Walk start={{x: 1100, y: 50}} end={{x: 750, y: 50}} state={elisabethState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(7.7)}>
              <Stand at={{x: 750, y: 50}} state={elisabethState} />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(1.5)}>
              <Walk start={{x: 750, y: 50}} end={{x: 1100, y: 50}} state={elisabethState} />
            </Series.Sequence>
          </Series>
        </Sequence>
      </Sequence>

      <Sequence name="Character Composition">
        <Sequence name="Shaby">
          <Shaby characterState={shabyState} />
        </Sequence>

        <Sequence name="Wagenbrein">
          <Wagenbrein characterState={wagenbreinState} />
        </Sequence>

        <Sequence name="Stani">
          <Klaus characterState={staniState} />
        </Sequence>

        <Sequence name="Klaus anstatt Rick">
          <Klaus characterState={klausState} />
        </Sequence>

        <Sequence name="Otto">
          <Klaus characterState={ottoState} />
        </Sequence>

        <Sequence name="Postler">
          <Postler characterState={postlerState} />
        </Sequence>

        <Sequence name="Elisabeth">
          <Margaretha characterState={elisabethState} />
        </Sequence>
      </Sequence>
    </>
  );
};
