import React from "react";
import jsxRuntime from "react/jsx-runtime";
import NextImage from "next/image";
import NextLink from "next/link";
import * as NextScript from "next/script";

const cmsDependencies = {
  react: { module: React },
  "react/jsx-runtime": { module: jsxRuntime },
  "next/image": { module: { default: NextImage, __esModule: true } },
  "next/link": { module: { default: NextLink, __esModule: true } },
  "next/script": { module: NextScript },
};

export default cmsDependencies;