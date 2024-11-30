import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { Danny } from "../Character/Danny";
import { useRef } from "react";
import { CharacterState, getDefaultCharacterState } from "../Character/Base";
import { Walk } from "../Motion/Walk";
import { Scale } from "../Motion/Scale";
import { seconds } from "../util/timing";

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const dannyCharacterState = useRef<CharacterState>(
    getDefaultCharacterState(),
  );

  const teslaLeft = interpolate(frame - seconds(6), [0, seconds(2)], [1920, 150], {
    extrapolateRight: "clamp",
  });
  const rickVolume = interpolate(frame - seconds(3), [0, seconds(5)], [0.2, 1], {
    extrapolateRight: "clamp",
  });

  // NOTE: Jeder Charakter bekommt eine eigene Sequence in der er exklusiv animiert wird
  return (
    <>
      <Img pauseWhenLoading src={staticFile("locations/office_outside.png")} />
      <Audio src={staticFile("jingles/jingle-2.mp3")} />

      <Sequence name="Character Controller">
        <Sequence name="Danny Scale">
          <Scale start={0.32} state={dannyCharacterState} />
        </Sequence>

        <Sequence durationInFrames={seconds(4)} from={seconds(2)} name="Danny Walk">
          <Walk
            start={{ x: -600, y: 250 }}
            end={{ x: 0, y: -370 }}
            state={dannyCharacterState}
          />
        </Sequence>
      </Sequence>

      <Sequence name="Character Composition">
        <Sequence name="Danny" durationInFrames={seconds(12)}>
          <Danny characterState={dannyCharacterState} />
        </Sequence>

        <Sequence name="Tesla" durationInFrames={seconds(9)} from={seconds(3)}>
          <Audio
            src={staticFile("sounds/rick-diss-track.mp3")}
            volume={rickVolume}
          />

          <AbsoluteFill style={{ top: "500px", left: `${teslaLeft}px` }}>
            <Img
              src={staticFile("locations/tesla.png")}
              width={1024 * 1.3}
              height={299 * 1.3}
            />
          </AbsoluteFill>
        </Sequence>
      </Sequence>
    </>
  );
};
