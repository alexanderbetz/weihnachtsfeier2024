import "./tailwind.css";
import { Composition } from "remotion";
import { Playground } from "./Scenes/Playground";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        // You can take the "id" to render a video:
        // npx remotion render src/index.ts <id> out/video.mp4
        id="Playground"
        component={Playground}
        durationInFrames={24 * 20}
        fps={24}
        width={1920}
        height={1080}
      />
    </>
  );
};
