import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://youngdentalsolutions.com"),
  title: {
    default: "Dental Practice Consultant San Diego | Young Dental Solutions",
    template: "%s | Young Dental Solutions",
  },
  description:
    "Arlene Young brings 30+ years of dental practice consulting to Southern California. Practice management, due diligence, coaching, and recruiting — all 1-on-1.",
  keywords: [
    "dental practice consultant San Diego",
    "dental practice management Southern California",
    "dental practice coaching San Diego",
    "dental due diligence consultant",
    "dental recruiting Southern California",
    "Arlene Young dental consultant",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://youngdentalsolutions.com",
    siteName: "Young Dental Solutions",
    title: "Dental Practice Consultant San Diego | Young Dental Solutions",
    description:
      "Arlene Young brings 30+ years of dental practice consulting to Southern California. Practice management, due diligence, coaching, and recruiting — all 1-on-1.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Young Dental Solutions — Dental Practice Consultant San Diego",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Practice Consultant San Diego | Young Dental Solutions",
    description:
      "30+ years of dental practice consulting. Practice management, due diligence, coaching, and recruiting across Southern California.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://youngdentalsolutions.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://youngdentalsolutions.com/#business",
      name: "Young Dental Solutions",
      legalName: "Young Dental Solutions",
      url: "https://youngdentalsolutions.com",
      telephone: "+18582239714",
      email: "arlene@youngdentalsolutions.com",
      foundingDate: "2008",
      address: {
        "@type": "PostalAddress",
        addressLocality: "San Diego",
        addressRegion: "CA",
        postalCode: "92128",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "San Diego" },
        { "@type": "City", name: "Rancho Bernardo" },
        { "@type": "City", name: "Beverly Hills" },
        { "@type": "City", name: "Santa Clarita" },
        { "@type": "State", name: "Southern California" },
        { "@type": "City", name: "Los Angeles" },
        { "@type": "City", name: "Orange County" },
      ],
      priceRange: "$$",
      description:
        "Young Dental Solutions provides dental practice consulting, coaching, due diligence, and recruiting services across Southern California. Founded by Arlene Young with 30+ years of dental industry experience.",
      sameAs: [
        "https://www.instagram.com/youngdentalsolutions/",
        "https://www.linkedin.com/in/arlene-young-dental/",
      ],
      knowsAbout: [
        "dental practice management",
        "dental due diligence",
        "dental practice coaching",
        "dental practice recruiting",
        "dental billing systems",
        "dental scheduling optimization",
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://youngdentalsolutions.com/#organization",
      name: "Young Dental Solutions",
      url: "https://youngdentalsolutions.com",
      founder: {
        "@type": "Person",
        "@id": "https://youngdentalsolutions.com/#arlene-young",
        name: "Arlene Young",
        jobTitle: "Dental Practice Consultant & Coach",
        telephone: "+18582239714",
        email: "arlene@youngdentalsolutions.com",
        worksFor: { "@id": "https://youngdentalsolutions.com/#organization" },
        knowsAbout: [
          "dental practice management",
          "dental practice consulting",
          "dental due diligence",
          "dental business coaching",
        ],
        sameAs: ["https://www.linkedin.com/in/arlene-young-dental/"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://youngdentalsolutions.com/#website",
      url: "https://youngdentalsolutions.com",
      name: "Young Dental Solutions",
      publisher: { "@id": "https://youngdentalsolutions.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://youngdentalsolutions.com/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
