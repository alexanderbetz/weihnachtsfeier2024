import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Danny } from "../Character/Danny";
import { useRef } from "react";
import { CharacterState, getDefaultCharacterState } from "../Character/Base";
import { Walk } from "../Motion/Walk";
import { Scale } from "../Motion/Scale";

// Each <Composition> is an entry in the sidebar!

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();
  const dannyCharacterState = useRef<CharacterState>(
    getDefaultCharacterState(),
  );

  const teslaLeft = interpolate(frame - 6 * 24, [0, 24 * 2], [1920, 150], {
    extrapolateRight: "clamp",
  });
  const rickVolume = interpolate(frame - 3 * 24, [0, 24 * 5], [0.2, 1], {
    extrapolateRight: "clamp",
  });

  // NOTE: Jeder Charakter bekommt eine eigene Sequence in der er exklusiv animiert wird
  return (
    <>
      <Img pauseWhenLoading src={staticFile("locations/office_outside.png")} />
      <Audio src={staticFile("jingles/jingle-2.mp3")} />

      <Sequence name="Character Controller">
        <Sequence name="Danny Scale">
          <Scale start={0.32} end={0.32} state={dannyCharacterState} />
        </Sequence>

        <Sequence durationInFrames={24 * 4} from={24 * 2} name="Danny Walk">
          <Walk
            start={{ x: -600, y: 250 }}
            end={{ x: 0, y: -370 }}
            state={dannyCharacterState}
          ></Walk>
        </Sequence>
      </Sequence>

      <Sequence name="Character Composition">
        <Sequence name="Danny" durationInFrames={24 * 12}>
          <Danny characterState={dannyCharacterState} />
        </Sequence>

        <Sequence name="Tesla" durationInFrames={24 * 9} from={24 * 3}>
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
