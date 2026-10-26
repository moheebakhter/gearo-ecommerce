
"use client";

import { createElement } from "react";
import * as BilditPixelModule from "@bildit-platform/ai-pixel/nextjs";

export default function BilditPixelClient() {
  const PixelComponent =
    (BilditPixelModule as any).NextBILDITAIPixel ??
    (BilditPixelModule as any).default?.default ??
    (BilditPixelModule as any).default;

  if (typeof PixelComponent !== "function") {
    console.error(
      "[BILDIT Pixel] Component export is not a function:",
      BilditPixelModule
    );

    return null;
  }

  return createElement(PixelComponent, { appId: process.env.NEXT_PUBLIC_BILDIT_APP_ID });
}
