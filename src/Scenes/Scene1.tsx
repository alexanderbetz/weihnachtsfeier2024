import {
  Audio,
  AbsoluteFill,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { Danny } from "../Character/Danny";
import { useRef } from "react";
import { CharacterState, getDefaultCharacterState } from "../Character/Base";
import { Walk } from "../Motion/Walk";
import { Scale } from "../Motion/Scale";
import { seconds } from "../util/timing";
import { ConversationType, MouthMotion } from "../Motion/MouthMotion";
import { Mouth, MouthType } from "../Character/Base/Mouth";
import { Stand } from "../Motion/Stand";
import { HeadMotion, MovementType } from "../Motion/HeadMotion";
import { EyesMotion } from "../Motion/EyesMotion";
import { EyeType } from "../Character/Base/Eyes";
import { ScalableImg } from "../Components/ScalableImg";
import { BlinkMotion } from "../Motion/BlinkMotion";

export const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const shabyState = useRef<CharacterState>(getDefaultCharacterState());
  shabyState.current = getDefaultCharacterState();

  const teslaLeft = interpolate(
    frame - seconds(18),
    [0, seconds(2)],
    [1920, 850],
    {
      extrapolateRight: "clamp",
    },
  );
  const rickVolume = interpolate(frame - seconds(18), [0, seconds(5)], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <>
      <ScalableImg src={staticFile("locations/office_outside.png")} />
      <Audio src={staticFile("jingles/jingle-2.mp3")} />
      <Sequence from={seconds(3)}>
        <Audio src={staticFile("voices/scene1_eingang_ausen.mp3")} />
      </Sequence>

      <Sequence name="Character Controller">
        <BlinkMotion state={shabyState} interval={seconds(2)} />

        <Sequence durationInFrames={seconds(4)} from={seconds(2)} name="Danny">
          <MouthMotion mouth={MouthType.happy} state={shabyState} />
          <Scale start={0.6} end={0.45} state={shabyState} />
          <Walk
            start={{ x: -600, y: 550 }}
            end={{ x: -300, y: -200 }}
            state={shabyState}
          />
        </Sequence>

        <Sequence from={seconds(5.5)} durationInFrames={seconds(0.5)}>
          <MouthMotion mouth={MouthType.open_1} state={shabyState} />
        </Sequence>

        <Sequence durationInFrames={seconds(9)} from={seconds(6)} name="Danny">
          <Scale start={0.45} state={shabyState} />
          <Stand at={{ x: -300, y: -200 }} state={shabyState} />
          <MouthMotion mouth={MouthType.unhappy} state={shabyState} />

          <Sequence durationInFrames={seconds(1)} from={seconds(0.5)}>
            <MouthMotion
              conversation={ConversationType.shout_1}
              state={shabyState}
            />
            <HeadMotion
              movementType={MovementType.normal_1}
              state={shabyState}
              fast
            />
          </Sequence>

          <Sequence durationInFrames={seconds(1.5)} from={seconds(1.5)}>
            <MouthMotion
              conversation={ConversationType.shout_2}
              state={shabyState}
            />
            <EyesMotion eyes={EyeType.x} state={shabyState} />
            <HeadMotion
              movementType={MovementType.normal_1}
              state={shabyState}
              fast
            />
          </Sequence>

          <Sequence durationInFrames={seconds(1)} from={seconds(3.5)}>
            <MouthMotion
              conversation={ConversationType.shout_2}
              state={shabyState}
            />
            <HeadMotion
              movementType={MovementType.normal_1}
              state={shabyState}
              fast
            />
          </Sequence>

          <Sequence durationInFrames={seconds(1.8)} from={seconds(4.8)}>
            <MouthMotion
              conversation={ConversationType.shout_2}
              state={shabyState}
            />
            <HeadMotion
              movementType={MovementType.normal_1}
              state={shabyState}
              fast
            />
          </Sequence>

          <Sequence durationInFrames={seconds(0.5)} from={seconds(7.5)}>
            <MouthMotion
              conversation={ConversationType.shout_2}
              state={shabyState}
            />
            <HeadMotion
              movementType={MovementType.normal_1}
              state={shabyState}
              fast
            />
          </Sequence>

          <Sequence durationInFrames={seconds(0.5)} from={seconds(8.5)}>
            <MouthMotion
              conversation={ConversationType.shout_2}
              state={shabyState}
            />
            <HeadMotion
              movementType={MovementType.normal_1}
              state={shabyState}
              fast
            />
          </Sequence>
        </Sequence>

        <Sequence
          name="Danny"
          from={seconds(15)}
          durationInFrames={seconds(1.5)}
        >
          <Scale state={shabyState} start={0.45} end={0.32} />
          <Walk
            start={{ x: -300, y: -200 }}
            end={{ x: 0, y: -350 }}
            state={shabyState}
          />

          <Sequence durationInFrames={seconds(0.5)} from={seconds(0.75)}>
            <MouthMotion mouth={MouthType.open_1} state={shabyState} />
          </Sequence>
        </Sequence>

        <Sequence
          durationInFrames={seconds(10)}
          from={seconds(16.5)}
          name="Danny"
        >
          <Stand at={{ x: 0, y: -350 }} state={shabyState} />
          <Scale start={0.32} state={shabyState} />

          <Sequence from={seconds(0.5)} durationInFrames={seconds(2)}>
            <MouthMotion
              conversation={ConversationType.shout_2}
              state={shabyState}
            />
            <HeadMotion
              movementType={MovementType.normal_1}
              state={shabyState}
              fast
            />
          </Sequence>

          <Sequence from={seconds(3)}>
            <EyesMotion eyes={EyeType.open} angle={0} state={shabyState} />
          </Sequence>

          <Sequence from={seconds(5.5)} durationInFrames={seconds(1.5)}>
            <MouthMotion
              conversation={ConversationType.shout_2}
              state={shabyState}
            />
            <HeadMotion
              movementType={MovementType.normal_1}
              state={shabyState}
              fast
            />
          </Sequence>
        </Sequence>
      </Sequence>

      <Sequence name="Character Composition">
        <Sequence name="Danny" from={seconds(3)}>
          <Danny characterState={shabyState} />
        </Sequence>

        <Sequence name="Tesla" durationInFrames={seconds(9)} from={seconds(18)}>
          <Audio
            src={staticFile("sounds/rick-diss-track.mp3")}
            volume={rickVolume}
          />

          <AbsoluteFill style={{ top: "500px", left: `${teslaLeft}px` }}>
            <ScalableImg src={staticFile("locations/tesla.png")} scale={1.3} />
          </AbsoluteFill>
        </Sequence>
      </Sequence>
    </>
  );
};
