import { MutableRefObject, useEffect, useState } from "react";

export function useRefChange<T>(ref: MutableRefObject<T>) {
  const [currentValue, setCurrentValue] = useState(ref.current);

  useEffect(() => {
    if (ref.current !== currentValue) {
      setCurrentValue(ref.current);
    }
  }, [ref.current, currentValue]);

  return currentValue;
}
