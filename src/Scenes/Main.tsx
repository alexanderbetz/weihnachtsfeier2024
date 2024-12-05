import { Series } from "remotion";
import { seconds } from "../util/timing";
import { Scene1 } from "./Scene1";
import { Scene2 } from "./Scene2";
import { Scene4 } from "./Scene4";
import { Disclaimer } from "./Disclaimer";
import React from "react";
import { Scene7 } from "./Scene7";

export const Main: React.FC = () => {
  return (
    <>
      <Series>
        <Series.Sequence durationInFrames={seconds(10)}>
          <Disclaimer />
        </Series.Sequence>

        <Series.Sequence name="Scene-1" durationInFrames={seconds(24)}>
          <Scene1 />
        </Series.Sequence>

        <Series.Sequence name="Scene-2" durationInFrames={seconds(56)}>
          <Scene2 />
        </Series.Sequence>

        <Series.Sequence name="Scene-3" durationInFrames={seconds(56)}>
          <Scene2 />
        </Series.Sequence>

        <Series.Sequence name="Scene-4" durationInFrames={seconds(56)}>
          <Scene4 />
        </Series.Sequence>

        <Series.Sequence name="Scene-5" durationInFrames={seconds(56)}>
          <Scene2 />
        </Series.Sequence>

        <Series.Sequence name="Scene-6" durationInFrames={seconds(56)}>
          <Scene2 />
        </Series.Sequence>

        <Series.Sequence name="Scene-7" durationInFrames={seconds(134)}>
          <Scene7 />
        </Series.Sequence>

        <Series.Sequence name="Scene-8" durationInFrames={seconds(56)}>
          <Scene2 />
        </Series.Sequence>

        <Series.Sequence name="Scene-9" durationInFrames={seconds(56)}>
          <Scene2 />
        </Series.Sequence>

        <Series.Sequence name="Scene-10" durationInFrames={seconds(56)}>
          <Scene2 />
        </Series.Sequence>

        <Series.Sequence name="Scene-11" durationInFrames={seconds(56)}>
          <Scene2 />
        </Series.Sequence>
      </Series>
    </>
  );
};
