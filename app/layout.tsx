import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { FloatingMessage } from "@/components/floating-message";
import { OrganizationSchema } from "@/components/seo/organization-schema";
import { ServiceSchema } from "@/components/seo/service-schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  metadataBase: new URL("https://www.refinix.in"),

  title: {
    default: "Refinix Solutions | Web Development & Digital Growth",
    template: "%s | Refinix Solutions",
  },

  description:
    "Refinix Solutions provides web development, custom software, app development, SEO, digital marketing and social media services for businesses.",

  keywords: [
    "web development",
    "website development",
    "custom software development",
    "app development",
    "SEO",
    "digital marketing",
    "social media management",
    "Refinix Solutions",
  ],

  authors: [{ name: "Refinix Solutions" }],
  creator: "Refinix Solutions",
  publisher: "Refinix Solutions",

  alternates: {
    canonical: "https://www.refinix.in",
  },

  openGraph: {
    type: "website",
    url: "https://www.refinix.in",
    siteName: "Refinix Solutions",
    title: "Refinix Solutions | Web Development & Digital Growth",
    description:
      "Web development, custom software, apps, SEO and digital growth solutions for businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Refinix Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Refinix Solutions | Web Development & Digital Growth",
    description:
      "Web development, custom software, apps, SEO and digital growth solutions for businesses.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


import Script from "next/script";

const GA_ID = "G-TK8EVR71TL";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <OrganizationSchema />
        <ServiceSchema
          name="Refinix Solutions"
          description="Conversion-focused websites and digital experiences built for businesses."
          url="https://refinix.in/"
        />
        <Navbar />
        {children}
        <Footer />
        <FloatingMessage />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
