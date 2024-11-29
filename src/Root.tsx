import "./tailwind.css";
import { Composition } from "remotion";
import { Playground } from "./Scenes/Playground";
import { Scene1 } from "./Scenes/Scene1";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  const fps = 24;
  const width = 1920;
  const height = 1080;

  return (
    <>
      <Composition
        // You can take the "id" to render a video:
        // npx remotion render src/index.ts <id> out/video.mp4
        id="Playground"
        component={Playground}
        durationInFrames={fps * 20}
        fps={fps}
        width={width}
        height={height}
      />

      <Composition
        id="Szene-1-Vor-dem-Buero"
        component={Scene1}
        durationInFrames={fps * 20}
        fps={fps}
        width={width}
        height={height}
      />
    </>
  );
};
