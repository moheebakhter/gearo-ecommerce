"use client";

import { BilditProvider } from "@bildit-platform/nextjs";

export default function Providers({
  children,
  banners,
}: {
  children: React.ReactNode;
  banners: any[];
}) {
  return (
    <BilditProvider banners={banners}>
      {children}
    </BilditProvider>
  );
}