import "./tailwind.css";
import { Composition } from "remotion";
import { Scene1 } from "./Scenes/Scene1";
import { Scene2 } from "./Scenes/Scene2";
import { Main } from "./Scenes/Main";
import { seconds } from "./util/timing";
import { Scene4 } from "./Scenes/Scene4";
import { Scene9 } from "./Scenes/Scene9";
import { Scene8 } from "./Scenes/Scene8";
import { Scene7 } from "./Scenes/Scene7";
import { Disclaimer } from "./Scenes/Disclaimer";
import { Scene5 } from "./Scenes/Scene5";
import { Scene3 } from "./Scenes/Scene3";
import { Credits } from "./Scenes/Credits";
import { Scene6 } from "./Scenes/Scene6";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  const fps = 24;
  const width = 1920;
  const height = 1080;

  return (
    <>
      <Composition
        id="Main"
        component={Main}
        durationInFrames={
          seconds(10) +
          seconds(24) +
          seconds(58) +
          seconds(126) +
          seconds(134) +
          seconds(63) +
          seconds(49) +
          seconds(64) +
          seconds(108) +
          seconds(99) +
          seconds(56) +
          seconds(27)
        }
        fps={fps}
        width={width}
        height={height}
      />

      <Composition
        id="Disclaimer"
        component={Disclaimer}
        durationInFrames={seconds(10)}
        fps={fps}
        width={width}
        height={height}
      />

      <Composition
        id="Szene-1-Vor-dem-Buero"
        component={Scene1}
        durationInFrames={fps * 24}
        fps={fps}
        width={width}
        height={height}
      />

      <Composition
        id="Szene-2-Buero-Eingang"
        component={Scene2}
        durationInFrames={seconds(58)}
        fps={fps}
        width={width}
        height={height}
      />

      <Composition
        id="Szene-3-Dev-Bereich"
        component={Scene3}
        durationInFrames={seconds(126)}
        fps={fps}
        width={width}
        height={height}
      />

      <Composition
        id="Szene-4-Polaroids"
        component={Scene4}
        durationInFrames={seconds(134)}
        fps={fps}
        width={width}
        height={height}
      />

      <Composition
        id="Szene-5-Klo"
        component={Scene5}
        durationInFrames={seconds(63)}
        fps={fps}
        width={width}
        height={height}
      />

      <Composition
        id="Szene-6-Dev-Bereich"
        component={Scene6}
        durationInFrames={seconds(49)}
        fps={fps}
        width={width}
        height={height}
      />

      <Composition
        id="Szene-7-Klo"
        component={Scene7}
        durationInFrames={seconds(64)}
        fps={fps}
        width={width}
        height={height}
      />

      <Composition
        id="Szene-8-Gindl"
        component={Scene8}
        durationInFrames={seconds(108)}
        fps={fps}
        width={width}
        height={height}
      />

      <Composition
        id="Szene-9-Manhole"
        component={Scene9}
        durationInFrames={seconds(99)}
        fps={fps}
        width={width}
        height={height}
      />

      <Composition
        id="Szene-10-Real-Life"
        component={Scene2}
        durationInFrames={fps * 56}
        fps={fps}
        width={width}
        height={height}
      />

      <Composition
        id="Szene-11-Credits"
        component={Credits}
        durationInFrames={seconds(27)}
        fps={fps}
        width={width}
        height={height}
      />
    </>
  );
};
