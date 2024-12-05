import {
  AbsoluteFill,
  useCurrentFrame
} from "remotion";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { seconds } from "../util/timing";
import { fade } from "@remotion/transitions/fade";

export const Disclaimer: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={seconds(2)}>
          <AbsoluteFill className="bg-black" />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: seconds(1) })}
        />

        <TransitionSeries.Sequence durationInFrames={seconds(6)}>
          <AbsoluteFill className="bg-black">
            <div className="flex justify-center items-center h-full">
              <p className="text-white uppercase max-w-[1050px] text-[40px] leading-[200%] font-mono">
                Die hier dargestellten Charaktere sind fiktiv und jede Ähnlichkeit
                mit realen Personen oder Handlungen ist rein zufällig
              </p>
            </div>
          </AbsoluteFill>
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: seconds(1) })}
        />

        <TransitionSeries.Sequence durationInFrames={seconds(4)}>
          <AbsoluteFill className="bg-black" />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </>
  );
};
