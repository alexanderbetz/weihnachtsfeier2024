import {
  AbsoluteFill,
  Audio,
  Img,
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
      <Img src={staticFile("city.jpg")} />
      <Audio src={staticFile("SP2.mp3")} />

      <Sequence name="Dude">
        <AbsoluteFill style={{ top: 670, left: 1000 }}>
          <Dude scale={0.12} />
        </AbsoluteFill>
      </Sequence>

      <Sequence name="Danny">
        <Sequence durationInFrames={24 * 2}>
          <AbsoluteFill style={{ top: 670, left: 180 }}>
            <Danny scale={0.12} />
          </AbsoluteFill>
        </Sequence>
        <Sequence durationInFrames={24 * 8} from={24 * 2}>
          <Walk start={{ x: 180, y: 670 }} end={{ x: 1200, y: 670 }}>
            <Danny scale={0.12} />
          </Walk>
        </Sequence>
        <Sequence from={24 * 10} durationInFrames={24 * 2}>
          <AbsoluteFill style={{ top: 670, left: 1200 }}>
            <Danny scale={0.12} />
          </AbsoluteFill>
        </Sequence>
      </Sequence>
    </>
  );
};
