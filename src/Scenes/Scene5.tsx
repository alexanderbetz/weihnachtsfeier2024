import { Audio, Sequence, Series, staticFile, useCurrentFrame } from "remotion";
import { Danny } from "../Character/Danny";
import { useRef } from "react";
import { CharacterState, getDefaultCharacterState } from "../Character/Base";
import { ScalableImg } from "../Components/ScalableImg";
import { seconds } from "../util/timing";
import { Alex } from "../Character/Alex";
import { MichaelJackson } from "../Character/MichaelJackson";
import { Gindl } from "../Character/Gindl";
import { Scale } from "../Motion/Scale";
import { ZodAny } from "zod";
import { Stand } from "../Motion/Stand";
import { Shaby } from "../Character/Shaby";

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
      <ScalableImg src={staticFile("locations/toilet.png")} />
      <Audio src={staticFile("voices/scene5-wc.mp3")} />

      <Sequence name="Character Controller">
        <Sequence name="Shaby">
          <Scale start={0.5} state={shabyState} />
          <Stand at={{ x: -600, y: 0 }} state={shabyState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(20)}>
              <span />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Alex">
          <Scale start={0.5} state={alexState} />
          <Stand at={{ x: -300, y: 0 }} state={alexState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(20)}>
              <span />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Hazard">
          <Scale start={0.5} state={hazardState} />
          <Stand at={{ x: 100, y: 0 }} state={hazardState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(20)}>
              <span />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Tom Cruise">
          <Scale start={0.5} state={tomCruiseState} />
          <Stand at={{ x: 500, y: 0 }} state={tomCruiseState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(20)}>
              <span />
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

        <Sequence name="Hazard">
          <MichaelJackson characterState={hazardState} />
        </Sequence>

        <Sequence name="Tom Cruise">
          <Gindl characterState={tomCruiseState} />
        </Sequence>
      </Sequence>
    </>
  );
};
