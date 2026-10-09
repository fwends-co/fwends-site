import type { Metadata, Viewport } from "next";
import { Elms_Sans, Bitcount_Single } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// Reading voice: headlines, body, captions, legal.
const elms = Elms_Sans({
  variable: "--font-elms",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // the ladder has no 500
  display: "swap",
});

// Pressing/playing voice: buttons, nav, link columns. Extra axes stay at defaults.
const bitcount = Bitcount_Single({
  variable: "--font-bitcount",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});

const description =
  "FWENDS is a game you play by meeting people in real life. When two fwends are near each other, they make a shared block: a real memory you can collect and use.";

export const metadata: Metadata = {
  metadataBase: new URL("https://fwends.co"),
  title: {
    default: "FWENDS | Meet in real life. Keep what you make together.",
    template: "%s | FWENDS",
  },
  description,
  applicationName: "FWENDS",
  openGraph: {
    type: "website",
    siteName: "FWENDS",
    url: "/",
    title: "FWENDS | Meet in real life",
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FWENDS | Meet in real life",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f7f7",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${elms.variable} ${bitcount.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <a href="#main" className="skip-link t-button-utility">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
