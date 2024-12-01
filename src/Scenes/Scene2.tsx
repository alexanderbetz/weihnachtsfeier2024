import { Audio, Sequence, staticFile, useCurrentFrame } from "remotion";
import { Danny } from "../Character/Danny";
import { useRef } from "react";
import { CharacterState, getDefaultCharacterState } from "../Character/Base";
import { Walk } from "../Motion/Walk";
import { Scale } from "../Motion/Scale";
import { seconds } from "../util/timing";
import { ScalableImg } from "../Components/ScalableImg";

export const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const dannyCharacterState = useRef<CharacterState>(
    getDefaultCharacterState(),
  );

  // NOTE: Jeder Charakter bekommt eine eigene Sequence in der er exklusiv animiert wird
  return (
    <>
      <ScalableImg src={staticFile("locations/office_entry.png")} />
      <Audio src={staticFile("voices/scene2_eingang_innen.mp3")} />

      <Sequence from={seconds(0.2)} durationInFrames={seconds(0.5)}>
        <Audio src={staticFile("sounds/door-init.mp3")} />
      </Sequence>

      <Sequence from={seconds(2.3)} durationInFrames={seconds(0.5)}>
        <Audio src={staticFile("sounds/door-error.mp3")} />
      </Sequence>

      <Sequence from={seconds(4.7)} durationInFrames={seconds(0.5)}>
        <Audio src={staticFile("sounds/door-error.mp3")} />
      </Sequence>

      <Sequence name="Character Controller">
        <Sequence name="Danny Scale">
          <Scale start={0.32} state={dannyCharacterState} />
        </Sequence>

        <Sequence
          durationInFrames={seconds(4)}
          from={seconds(2)}
          name="Danny Walk"
        >
          <Walk
            start={{ x: -600, y: 250 }}
            end={{ x: 0, y: -370 }}
            state={dannyCharacterState}
          />
        </Sequence>
      </Sequence>

      <Sequence name="Character Composition">
        <Sequence
          name="Danny"
          durationInFrames={seconds(12)}
          from={seconds(10)}
        >
          <Danny characterState={dannyCharacterState} />
        </Sequence>
      </Sequence>
    </>
  );
};
