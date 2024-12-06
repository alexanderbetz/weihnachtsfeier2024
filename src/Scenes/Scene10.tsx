import React from "react";
import {
  AbsoluteFill,
  Audio,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
  Video,
} from "remotion";
import { seconds } from "../util/timing";

export const Scene10: React.FC = () => {
  const frame = useCurrentFrame();
  const volume = interpolate(frame, [seconds(0.5), seconds(1.5)], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <>
      <AbsoluteFill style={{ backgroundColor: "black" }} />
      <Sequence durationInFrames={seconds(7)}>
        <Video src={staticFile("locations/real_life.mov")} volume={volume} />
      </Sequence>

      <Sequence from={seconds(4.5)}>
        <Audio src={staticFile("sounds/wagner-beep.mp3")} />
      </Sequence>
    </>
  );
};
