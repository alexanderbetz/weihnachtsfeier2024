import { useCallback, useEffect, useState } from "react";
import { continueRender, delayRender, Img } from "remotion";
import { z } from "zod";
import { getImageDimensions } from "@remotion/media-utils";

export const scalableImageProps = z.object({
  src: z.string(),
  scale: z.number().optional(),
});

export const ScalableImg: React.FC<z.infer<typeof scalableImageProps>> = (
  props,
) => {
  const scale = props.scale ?? 1;
  const [dimensions, setDimensions] = useState(() => ({
    height: undefined as number | undefined,
    width: undefined as number | undefined,
  }));

  const [renderHandle] = useState(() => delayRender());
  const fetchData = useCallback(async () => {
    if (dimensions.height && dimensions.width) {
      continueRender(renderHandle);
      return;
    }

    const meta = await getImageDimensions(props.src);
    setDimensions(meta);
    continueRender(renderHandle);
  }, [props.src]);

  useEffect(() => {
    fetchData();
  }, [props.src]);

  const [loadHandle] = useState(() => delayRender());
  function onImageLoad() {
    continueRender(loadHandle);
  }

  return (
    <Img
      height={dimensions.height ? dimensions.height * scale : undefined}
      width={dimensions.width ? dimensions.width * scale : undefined}
      src={props.src}
      onLoad={() => onImageLoad()}
    />
  );
};
