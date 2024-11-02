import {
  AbsoluteFill,
  Img,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Danny } from "../Character/Danny";

// Each <Composition> is an entry in the sidebar!

export const Eyes: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  // NOTE: Jeder Charakter bekommt eine eigene Sequence in der er exklusiv animiert wird
  return (
    <>
      <Img src={staticFile("locations/city.jpg")} />

      <Sequence name="Danny">
        <AbsoluteFill style={{ top: 100, left: 700 }}>
          <Danny scale={1.3} />
        </AbsoluteFill>
      </Sequence>
    </>
  );
};
