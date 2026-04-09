import type { Metadata } from "next";
import { Chakra_Petch, Barlow } from "next/font/google";
import "./globals.css";
import { THEME_STORAGE_KEY, THEME_LIGHT_VALUE, THEME_DARK_VALUE } from '@/lib/theme';

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "SkyVault",
  description: "Your personal skydiving logbook",
};

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
      <body className={`${chakraPetch.variable} ${barlow.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
