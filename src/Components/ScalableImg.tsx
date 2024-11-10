import { useState } from "react";
import { Img } from "remotion";
import { z } from "zod";

export const scalableImageProps = z.object({
  src: z.string(),
  scale: z.number().optional(),
});

export const ScalableImg: React.FC<z.infer<typeof scalableImageProps>> = (
  props,
) => {
  const scale = props.scale ?? 1;
  const [dimensions, setDimensions] = useState(() => ({
    height: undefined,
    width: undefined,
  }));

  function onImageLoad(event) {
    setDimensions({
      height: event.target.height,
      width: event.target.width,
    });
  }

  return (
    <Img
      height={dimensions.height ? dimensions.height * scale : undefined}
      width={dimensions.width ? dimensions.width * scale : undefined}
      onLoad={onImageLoad}
      src={props.src}
    />
  );
};
