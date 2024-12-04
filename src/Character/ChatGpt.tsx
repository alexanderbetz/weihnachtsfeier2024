import { staticFile } from "remotion";
import { characterSchema } from "./Base";
import { z } from "zod";
import { ScalableImg } from "../Components/ScalableImg";
import { makeTransform, rotate } from "@remotion/animation-utils";

export const ChatGpt: React.FC<
  Omit<z.infer<typeof characterSchema>, "assets">
> = (props) => {
  const state = props.characterState.current;
  const scale = props.characterState.current.scale ?? 1;

  return (
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
        <ScalableImg
          src={staticFile("characters/chatgpt/chatgpt.png")}
          scale={scale}
        />
      </div>
    </div>
  );
};
