import { Audio, Sequence, Series, staticFile, useCurrentFrame } from "remotion";
import { Danny } from "../Character/Danny";
import { useRef } from "react";
import { CharacterState, getDefaultCharacterState } from "../Character/Base";
import { seconds } from "../util/timing";
import { ScalableImg } from "../Components/ScalableImg";
import { Alex } from "../Character/Alex";
import { Scale } from "../Motion/Scale";
import { Walk } from "../Motion/Walk";
import { Stand } from "../Motion/Stand";

export const Scene7: React.FC = () => {
  const _ = useCurrentFrame();
  const shabyState = useRef<CharacterState>(getDefaultCharacterState());

  const alexState = useRef<CharacterState>(getDefaultCharacterState());

  shabyState.current = getDefaultCharacterState();
  alexState.current = getDefaultCharacterState();

  return (
    <>
      <ScalableImg src={staticFile("locations/wc.png")} />

      <Sequence from={seconds(2)}>
        <Audio src={staticFile("voices/scene7_wc.mp3")} />
      </Sequence>

      <Sequence name="Character Controller">
        <Sequence name="Shaby Controller">
          <Scale start={0.5} state={shabyState} />
          <Stand at={{ x: 200, y: -150 }} state={shabyState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(3.5)}>
              <Walk
                start={{ x: -400, y: 500 }}
                end={{ x: 200, y: -150 }}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(55)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3.5)}>
              <Walk
                start={{ x: 200, y: -150 }}
                end={{ x: -400, y: 500 }}
                state={shabyState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2)}>
              <Stand at={{ x: -400, y: 500 }} state={shabyState} />
            </Series.Sequence>
          </Series>
        </Sequence>

        <Sequence name="Alex Controller">
          <Scale start={0.5} state={alexState} />
          <Stand at={{ x: -100, y: -120 }} state={alexState} />

          <Series>
            <Series.Sequence durationInFrames={seconds(3.5)}>
              <Walk
                start={{ x: -500, y: 500 }}
                end={{ x: -100, y: -120 }}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(54.5)}>
              <span />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(3.5)}>
              <Walk
                start={{ x: -100, y: -120 }}
                end={{ x: -500, y: 500 }}
                state={alexState}
              />
            </Series.Sequence>
            <Series.Sequence durationInFrames={seconds(2.5)}>
              <Stand at={{ x: -500, y: 500 }} state={alexState} />
            </Series.Sequence>
          </Series>
        </Sequence>
      </Sequence>

      <Sequence name="Character Composition">
        <Sequence name="Shaby">
          <Danny characterState={shabyState} />
        </Sequence>

        <Sequence name="Alex">
          <Alex characterState={alexState} />
        </Sequence>
      </Sequence>
    </>
  );
};
