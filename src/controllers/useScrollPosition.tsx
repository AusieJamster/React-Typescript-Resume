import { useRef, useLayoutEffect } from 'react';

const isBrowser = typeof window !== `undefined`;

interface ScrollProps {
  prevPos: number;
  currPos: number;
}

function getScrollPosition({ element, useWindow }: { element?: React.MutableRefObject<HTMLElement | null>; useWindow: boolean }): number {
  if (!isBrowser) return 0;

  const target = element?.current ?? document.body;
  const position = target.getBoundingClientRect();

  return useWindow ? window.scrollY : position.top;
}

export function useScrollPosition(
  effect: (props: ScrollProps) => void,
  deps?: React.DependencyList,
  element?: React.MutableRefObject<HTMLElement | null>,
  useWindow: boolean = false,
  wait?: number
) {
  // Note, that I'm using the useRef() and not useState(). According to React-Hooks reference guide, useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.
  const position = useRef(getScrollPosition({ useWindow }));

  let throttleTimeout: NodeJS.Timeout | null = null;

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout = null;
  };

  // React currently supports two types of Effect hooks: useEffect and useLayoutEffect. In our case, the best choice would be useLayoutEffect, it runs synchronously immediately after React has performed all DOM mutations. This can be useful if you need to make DOM measurements (like getting the scroll position or other styles for an element) and then make DOM mutations or trigger a synchronous re-render by updating the state.
  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait && throttleTimeout === null) throttleTimeout = setTimeout(callBack, wait);
      else callBack();
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, deps);
}
