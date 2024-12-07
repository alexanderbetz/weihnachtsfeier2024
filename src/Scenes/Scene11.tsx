import {
  Audio,
  AbsoluteFill,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
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
import { Wagenbrein } from "../Character/Wagenbrein";
import { Alex } from "../Character/Alex";
import { Stani } from "../Character/Stani";
import { Klaus } from "../Character/Klaus";
import { Otto } from "../Character/Otto";
import { Vla } from "../Character/Vla";
import { Rick } from "../Character/Rick";
import { Danny } from "../Character/Danny";
import { Hannes } from "../Character/Hannes";
import { Idefix } from "../Character/Idefix";

export const Scene11: React.FC = () => {
  const frame = useCurrentFrame();
  const shabyState = useRef<CharacterState>(getDefaultCharacterState());
  const wagenbreinState = useRef<CharacterState>(getDefaultCharacterState());
  const alexState = useRef<CharacterState>(getDefaultCharacterState());
  const staniState = useRef<CharacterState>(getDefaultCharacterState());
  const klausState = useRef<CharacterState>(getDefaultCharacterState());
  const ottoState = useRef<CharacterState>(getDefaultCharacterState());
  const valState = useRef<CharacterState>(getDefaultCharacterState());
  const rickState = useRef<CharacterState>(getDefaultCharacterState());
  const dannyState = useRef<CharacterState>(getDefaultCharacterState());
  const hannesState = useRef<CharacterState>(getDefaultCharacterState());
  const idefixState = useRef<CharacterState>(getDefaultCharacterState());

  return (
    <>
      <ScalableImg src={staticFile("locations/office_outside.png")} />
      <Audio src={staticFile("jingles/jingle-2.mp3")} />

      <Scale start={0.35} state={shabyState} />
      <Scale start={0.35} state={wagenbreinState} />
      <Scale start={0.35} state={alexState} />
      <Scale start={0.35} state={staniState} />
      <Scale start={0.35} state={klausState} />
      <Scale start={0.35} state={ottoState} />
      <Scale start={0.35} state={valState} />
      <Scale start={0.35} state={rickState} />
      <Scale start={0.35} state={dannyState} />
      <Scale start={0.7} state={hannesState} />
      <Scale start={0.4} state={idefixState} />

      <Stand at={{ x: -500, y: 0 }} state={shabyState} />
      <Stand at={{ x: -350, y: 0 }} state={wagenbreinState} />
      <Stand at={{ x: -200, y: 0 }} state={alexState} />
      <Stand at={{ x: -50, y: 0 }} state={staniState} />
      <Stand at={{ x: 100, y: 0 }} state={klausState} />
      <Stand at={{ x: 250, y: 0 }} state={ottoState} />
      <Stand at={{ x: 400, y: 0 }} state={valState} />
      <Stand at={{ x: 550, y: 0 }} state={rickState} />
      <Stand at={{ x: 700, y: 0 }} state={dannyState} />
      <Stand at={{ x: 900, y: 0 }} state={hannesState} />
      <Stand at={{ x: -900, y: 50 }} state={idefixState} />

      <AbsoluteFill style={{ left: "200px", top: "700px" }}>
        <ScalableImg scale={0.2} src={staticFile("characters/falli.png")} />
      </AbsoluteFill>
      <AbsoluteFill style={{ left: "400px", top: "700px" }}>
        <ScalableImg scale={0.45} src={staticFile("characters/joul.png")} />
      </AbsoluteFill>
      <AbsoluteFill style={{ left: "600px", top: "700px" }}>
        <ScalableImg scale={0.7} src={staticFile("characters/kevin.png")} />
      </AbsoluteFill>
      <AbsoluteFill style={{ left: "800px", top: "600px" }}>
        <ScalableImg scale={0.6} src={staticFile("characters/patricia.png")} />
      </AbsoluteFill>
      <AbsoluteFill style={{ left: "1000px", top: "700px" }}>
        <ScalableImg scale={0.25} src={staticFile("characters/thomas.png")} />
      </AbsoluteFill>
      <AbsoluteFill style={{ left: "1150px", top: "700px" }}>
        <ScalableImg scale={0.7} src={staticFile("characters/timna.png")} />
      </AbsoluteFill>
      <AbsoluteFill style={{ left: "270px", top: "850px" }}>
        <ScalableImg scale={0.5} src={staticFile("characters/viki.png")} />
      </AbsoluteFill>

      <Shaby characterState={shabyState} />
      <Wagenbrein characterState={wagenbreinState} />
      <Alex characterState={alexState} />
      <Stani characterState={staniState} />
      <Klaus characterState={klausState} />
      <Otto characterState={ottoState} />
      <Vla characterState={valState} />
      <Rick characterState={rickState} />
      <Danny characterState={dannyState} />
      <Hannes characterState={hannesState} />
      <Idefix characterState={idefixState} />
    </>
  );
};
