
"use client";

import { NextBILDITAIPixel } from "@bildit-platform/ai-pixel/nextjs";

export default function BilditPixelClient() {
  return (
    <NextBILDITAIPixel
      params={{ app: "bildit_globaltechsolu" }}
    />
  );
}
