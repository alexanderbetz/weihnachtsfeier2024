import { z } from "zod";
import { ScalableImg } from "../../Components/ScalableImg";
import { Mouth, MouthType } from "./Mouth";
import { makeTransform, rotate, translate } from "@remotion/animation-utils";
import { useRefChange } from "../../util/use-ref-change";
import { EyeBrows, EyeBrowType } from "./EyeBrows";
import { Eyes, EyeType } from "./Eyes";
import { useCurrentFrame } from "remotion";

export const characterSchema = z.object({
  offsets: z
    .object({
      head: z.number().optional(),
      eyes: z.number().optional(),
      eyesScale: z.number().optional(),
      mouth: z.number().optional(),
      mouthScale: z.number().optional(),
    })
    .optional(),
  assets: z.object({
    body: z.string(),
    head: z.string(),
    headAccessories: z.array(z.string()).optional(),
    bodyScale: z.number().optional(),
    headScale: z.number().optional(),
  }),
  characterState: z.object({
    current: z.object({
      eyeBrows: z.nativeEnum(EyeBrowType).optional(),
      mouth: z.nativeEnum(MouthType).optional(),
      eyes: z.nativeEnum(EyeType).optional(),
      eyeAngle: z.number().optional(),
      blink: z.boolean().optional(),
      headRotation: z.number(),
      headTranslation: z.object({ x: z.number(), y: z.number() }),
      translation: z.object({ x: z.number(), y: z.number() }),
      rotation: z.number(),
      scale: z.number(),
    }),
  }),
});

export function getDefaultCharacterState(): CharacterState {
  return {
    headRotation: 0,
    headTranslation: { x: 0, y: 0 },
    translation: { x: 0, y: 0 },
    rotation: 0,
    scale: 1,
  };
}

export type CharacterState = z.infer<
  typeof characterSchema
>["characterState"]["current"];

export const Character: React.FC<z.infer<typeof characterSchema>> = (props) => {
  const state = useRefChange(props.characterState);
  const scale = state.scale ?? 1;
  const bodyScale = (props.assets.bodyScale ?? 1) * scale;
  const headScale = (props.assets.headScale ?? 1) * scale;
  const headOffset = props.offsets?.head;
  const eyesOffset = props.offsets?.eyes;
  const eyesScale = props.offsets?.eyesScale ?? 1;
  const mouthOffset = props.offsets?.mouth;
  const mouthScale = props.offsets?.mouthScale ?? 1;

  return (
    <>
      <div
        className="absolute h-[1080px] w-[1920px]"
        style={{
          top: (state.translation?.y ?? 0) + "px",
          left: (state.translation?.x ?? 0) + "px",
          transform: makeTransform(
            [state.rotation ? rotate(state.rotation) : undefined].filter(
              Boolean,
            ) as string[],
          ),
          transformOrigin: "bottom",
        }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <ScalableImg src={props.assets.body} scale={bodyScale} />
        </div>

        <div
          className={`character-head absolute h-[1080px] w-[1920px] origin-bottom`}
          style={{
            bottom: (headOffset ?? 172) * scale + "px",
            transform: makeTransform(
              [
                state.headRotation ? rotate(state.headRotation) : undefined,
                state.headTranslation
                  ? translate(state.headTranslation.x, state.headTranslation.y)
                  : undefined,
              ].filter(Boolean) as string[],
            ),
          }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <ScalableImg src={props.assets.head} scale={headScale} />
          </div>

          <div
            className="mouth absolute left-1/2 -translate-x-1/2 translate-y-1/2"
            style={{ bottom: (mouthOffset ?? 50) * scale + "px" }}
          >
            <Mouth scale={scale * 0.8 * mouthScale} mouth={state.mouth} />
          </div>

          <div
            className="eyes absolute left-1/2 -translate-x-1/2"
            style={{ bottom: (eyesOffset ?? 100) * scale + "px" }}
          >
            <Eyes
              scale={scale * 0.7 * eyesScale}
              eyes={state.eyes}
              angle={state.eyeAngle}
              blink={state.blink}
            />
          </div>

          {state.eyeBrows >= 0 && (
            <div
              className="eye-brows absolute left-1/2 -translate-x-1/2"
              style={{
                bottom: (eyesOffset ? eyesOffset + 120 : 250) * scale + "px",
              }}
            >
              <EyeBrows scale={scale * 0.5} eyeBrow={state.eyeBrows} />
            </div>
          )}

          {(props.assets.headAccessories ?? []).map((src) => (
            <div
              key={src}
              className="character-head-accessories absolute bottom-0 left-1/2 -translate-x-1/2"
            >
              <ScalableImg scale={headScale} src={src} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
