import {
  AbsoluteFill,
  Audio,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { seconds } from "../util/timing";
import { fade } from "@remotion/transitions/fade";
import { makeTransform, translate } from "@remotion/animation-utils";
import { Shaby } from "../Character/Shaby";
import { useRef } from "react";
import { getDefaultCharacterState } from "../Character/Base";
import { Stand } from "../Motion/Stand";
import { Scale } from "../Motion/Scale";
import { HeadMotion, MovementType } from "../Motion/HeadMotion";
import { Alex } from "../Character/Alex";
import { Klaus } from "../Character/Klaus";
import { BlinkMotion } from "../Motion/BlinkMotion";

export const Credits: React.FC = () => {
  const frame = useCurrentFrame();
  const shabyState = useRef(getDefaultCharacterState());
  const alexState = useRef(getDefaultCharacterState());
  const klausState = useRef(getDefaultCharacterState());
  shabyState.current = getDefaultCharacterState();
  alexState.current = getDefaultCharacterState();
  klausState.current = getDefaultCharacterState();
  const creditsTop = interpolate(frame, [seconds(1), seconds(26)], [0, -100]);

  return (
    <>
      <Audio src={staticFile("voices/intro.mp3")} />

      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={seconds(2)}>
          <AbsoluteFill className="bg-black" />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: seconds(1) })}
        />

        <TransitionSeries.Sequence durationInFrames={seconds(25)}>
          <AbsoluteFill className="bg-black">
            <div
              className="max-w-[1200px] mx-auto uppercase text-white text-[35px] font-mono space-y-16"
              style={{
                transform: makeTransform([translate("0px", `${creditsTop}%`)]),
              }}
            >
              <div className="h-[200px]" />
              <CreditEntry
                title="LoC (Lines of Code)"
                text="find . -name '*.ts*' | xargs wc -l"
              />
              <CreditEntry
                title="Waren Kundenprojekte für die Erstellung dieses Videos beeinträchtigt?"
                text="Keine Auskunft"
              />
              <CreditEntry
                title="Waren Kundenprojekte für die Erstellung dieses Videos beeinträchtigt?"
                text="Keine Auskunft"
              />
              <CreditEntry
                title="Waren Kundenprojekte für die Erstellung dieses Videos beeinträchtigt?"
                text="Keine Auskunft"
              />
              <CreditEntry
                title="Waren Kundenprojekte für die Erstellung dieses Videos beeinträchtigt?"
                text="Keine Auskunft"
              />
            </div>

            <HeadMotion
              movementType={MovementType.normal_1}
              state={shabyState}
            />
            <Sequence from={seconds(0.2)}>
              <HeadMotion
                movementType={MovementType.normal_1}
                state={alexState}
              />
            </Sequence>
            <Sequence from={seconds(0.4)}>
              <HeadMotion
                movementType={MovementType.normal_1}
                state={klausState}
              />
            </Sequence>
            <BlinkMotion interval={seconds(2.1)} state={shabyState} />
            <BlinkMotion interval={seconds(2.8)} state={alexState} />
            <BlinkMotion interval={seconds(3.1)} state={klausState} />
            <Stand at={{ x: 800, y: -50 }} state={shabyState} />
            <Stand at={{ x: 800, y: -350 }} state={alexState} />
            <Stand at={{ x: 800, y: -650 }} state={klausState} />
            <Scale state={shabyState} start={0.4} />
            <Scale state={alexState} start={0.4} />
            <Scale state={klausState} start={0.4} />
            <Shaby characterState={shabyState} />
            <Alex characterState={alexState} />
            <Klaus characterState={klausState} />
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

const CreditEntry: React.FC<{ title: string; text: string }> = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <p className="opacity-60">{props.text}</p>
    </div>
  );
};
