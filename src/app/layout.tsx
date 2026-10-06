import type { Metadata } from "next";
import { headers } from "next/headers";
import { getPreviewDateFromHeaders } from "@bildit-platform/nextjs";
import { RemoteConnector } from "@bildit-platform/nextjs-api";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Providers from "@/Components/Providers";


export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "GEARO — Modern Furniture & Office Equipment",
  description:
    "Discover modern furniture and office equipment designed for better spaces.",
};

async function getInitialData() {
  if (!process.env.BILDIT_API_KEY || !process.env.BILDIT_API_URL) {
    return [];
  }
  try {
    const headersList = await headers();
    const pathname = headersList.get("x-pathname") || "/";
    const previewDate = getPreviewDateFromHeaders(headersList);
    const connector = new RemoteConnector({
      key: process.env.BILDIT_API_KEY,
      baseURL: process.env.BILDIT_API_URL,
    });
    const result = await connector.getWebBanners({
      location: pathname,
      date: previewDate,
      mode: "csr",
      tomorrow: true,
      source: "live",
    });
    return result.data || [];
  } catch (error) {
    console.error("[BILDIT] Failed to load scheduled content:", error);
    return [];
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const banners = await getInitialData();

  return (
    <html lang="en">
      <body>
        <Providers banners={banners}>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}