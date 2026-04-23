"use client";

import { useInView as useFramerInView } from "framer-motion";
import { RefObject } from "react";

export function useInView(
  ref: RefObject<HTMLElement | null>,
  options?: { once?: boolean; margin?: string }
) {
  return useFramerInView(ref, {
    once: options?.once ?? true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    margin: (options?.margin ?? "-100px") as any,
  });
}
