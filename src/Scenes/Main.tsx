import { Sequence } from "remotion";
import { seconds } from "../util/timing";
import { Scene1 } from "./Scene1";
import { Scene2 } from "./Scene2";

export const Main: React.FC = () => {
  return (
    <>
      <Sequence name="Scene-1" durationInFrames={seconds(24)}>
        <Scene1 />
      </Sequence>

      <Sequence
        name="Scene-2"
        durationInFrames={seconds(56)}
        from={seconds(24)}
      >
        <Scene2 />
      </Sequence>
    </>
  );
};
