import {
  AbsoluteFill,
  Audio,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Walk } from "../Walk";
import { Danny } from "../Character/Danny";
import { Dude } from "../Character/Dude";

// Each <Composition> is an entry in the sidebar!

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  // NOTE: Jeder Charakter bekommt eine eigene Sequence in der er exklusiv animiert wird
  return (
    <>
      <Audio src={staticFile("SP2.mp3")} />
      <Sequence from={24 * 2}>
        <Audio src={staticFile("SP1.mp3")} />
      </Sequence>

      <Sequence name="Dude">
        <AbsoluteFill style={{ top: 200, left: 650 }}>
          <Dude />
        </AbsoluteFill>
      </Sequence>

      <Sequence name="Danny">
        <Sequence durationInFrames={24 * 2}>
          <AbsoluteFill style={{ top: 300, left: 200 }}>
            <Danny />
          </AbsoluteFill>
        </Sequence>
        <Sequence durationInFrames={24 * 1.5} from={24 * 2}>
          <Walk start={{ x: 200, y: 300 }} end={{ x: 1200, y: 350 }}>
            <Danny />
          </Walk>
        </Sequence>
        <Sequence from={24 * 3.5} durationInFrames={24 * 5}>
          <AbsoluteFill style={{ top: 350, left: 1200 }}>
            <Danny />
          </AbsoluteFill>
        </Sequence>
      </Sequence>
    </>
  );
};
