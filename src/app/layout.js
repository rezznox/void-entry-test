"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { MantineProvider, createStyles, rem } from "@mantine/core";
import { localApi } from "@/redux/api/local";
import AppHeader from "@/components/header";
import AppFooter from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

const useStyle = createStyles(({ theme }) => ({
  content: {
    minHeight: `calc(100svh - ${rem(164)})`,
    minWidth: 400,
  },
  contentFiller: {
    display: 'table-cell',
    textAlign: 'center',
    width: '100svw'
  }
}));

export default function RootLayout({ children }) {
  const { classes } = useStyle();
  return (
    <ApiProvider api={localApi}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <html id="layout" lang="en">
          <body className={inter.className}>
            <AppHeader
              mainLinks={[
                { label: "Posts", link: "/posts", regex: /^\/posts$/ },
                { label: "Valorant Leaderboard", link: "/", regex: /^\/$/ },
              ]}
            />
            <div id="content" className={classes.content}>
              <div className="content-filler p-8">
                  {children}
                </div>
            </div>
            <AppFooter />
          </body>
        </html>
      </MantineProvider>
    </ApiProvider>
  );
}
