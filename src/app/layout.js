"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { leaderboardApi } from "@/redux/api/leaderboard";
import { MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ApiProvider api={leaderboardApi}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <html id="layout" lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </MantineProvider>
    </ApiProvider>
  );
}
