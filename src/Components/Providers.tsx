"use client";

import React, { Suspense } from "react";
import { BilditProvider } from "@bildit-platform/nextjs";
import cmsDependencies from "@/utils/cmsDependencies";


export default function Providers({
  children,
  banners,
}: {
  children: React.ReactNode;
  banners: any[];
}) {
  return (
    <Suspense>
      <BilditProvider
        banners={banners}
        extraDependenciesConfig={cmsDependencies}
      >
        {children}
      </BilditProvider>
    </Suspense>
  );
}