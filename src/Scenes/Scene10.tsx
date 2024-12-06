import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, Video } from "remotion";
import { seconds } from "../util/timing";

export const Scene10: React.FC = () => {
  return (
    <>
      <AbsoluteFill style={{ backgroundColor: "black" }} />
      <Sequence durationInFrames={seconds(7)}>
        <Video src={staticFile("locations/real_life.mov")} />
      </Sequence>

      <Sequence from={seconds(4.5)}>
        <Audio src={staticFile("sounds/wagner-beep.mp3")} />
      </Sequence>
    </>
  );
};
