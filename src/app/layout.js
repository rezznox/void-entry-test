"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { MantineProvider } from "@mantine/core";
import { localApi } from "@/redux/api/local";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ApiProvider api={localApi}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <html id="layout" lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </MantineProvider>
    </ApiProvider>
  );
}
