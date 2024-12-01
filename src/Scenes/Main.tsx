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
      <Sequence
        name="Scene-3"
        durationInFrames={seconds(56)}
        from={seconds(24) + seconds(56)}
      >
        <Scene2 />
      </Sequence>
      <Sequence
        name="Scene-4"
        durationInFrames={seconds(56)}
        from={seconds(24) + seconds(56) + seconds(56)}
      >
        <Scene2 />
      </Sequence>
      <Sequence
        name="Scene-5"
        durationInFrames={seconds(56)}
        from={seconds(24) + seconds(56) + seconds(56) + seconds(56)}
      >
        <Scene2 />
      </Sequence>
      <Sequence
        name="Scene-6"
        durationInFrames={seconds(56)}
        from={
          seconds(24) + seconds(56) + seconds(56) + seconds(56) + seconds(56)
        }
      >
        <Scene2 />
      </Sequence>
      <Sequence
        name="Scene-7"
        durationInFrames={seconds(56)}
        from={
          seconds(24) +
          seconds(56) +
          seconds(56) +
          seconds(56) +
          seconds(56) +
          seconds(56)
        }
      >
        <Scene2 />
      </Sequence>
      <Sequence
        name="Scene-8"
        durationInFrames={seconds(56)}
        from={
          seconds(24) +
          seconds(56) +
          seconds(56) +
          seconds(56) +
          seconds(56) +
          seconds(56) +
          seconds(56)
        }
      >
        <Scene2 />
      </Sequence>
      <Sequence
        name="Scene-9"
        durationInFrames={seconds(56)}
        from={
          seconds(24) +
          seconds(56) +
          seconds(56) +
          seconds(56) +
          seconds(56) +
          seconds(56) +
          seconds(56) +
          seconds(56)
        }
      >
        <Scene2 />
      </Sequence>
      <Sequence
        name="Scene-10"
        durationInFrames={seconds(56)}
        from={
          seconds(24) +
          seconds(56) +
          seconds(56) +
          seconds(56) +
          seconds(56) +
          seconds(56) +
          seconds(56) +
          seconds(56) +
          seconds(56)
        }
      >
        <Scene2 />
      </Sequence>
      <Sequence
        name="Scene-11"
        durationInFrames={seconds(56)}
        from={
          seconds(24) +
          seconds(56) +
          seconds(56) +
          seconds(56) +
          seconds(56) +
          seconds(56) +
          seconds(56) +
          seconds(56) +
          seconds(56) +
          seconds(56)
        }
      >
        <Scene2 />
      </Sequence>
    </>
  );
};
