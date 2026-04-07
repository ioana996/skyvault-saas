import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { THEME_STORAGE_KEY, THEME_LIGHT_VALUE, THEME_DARK_VALUE } from '@/lib/theme';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkyVault",
  description: "Your personal skydiving logbook",
};

// Prevents flash of wrong theme on page load
const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('${THEME_STORAGE_KEY}');
    if (stored === '${THEME_LIGHT_VALUE}' || stored === '${THEME_DARK_VALUE}') {
      if (stored === '${THEME_LIGHT_VALUE}') document.documentElement.setAttribute('data-theme', '${THEME_LIGHT_VALUE}');
    } else if (window.matchMedia('(prefers-color-scheme: ${THEME_LIGHT_VALUE})').matches) {
      document.documentElement.setAttribute('data-theme', '${THEME_LIGHT_VALUE}');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
