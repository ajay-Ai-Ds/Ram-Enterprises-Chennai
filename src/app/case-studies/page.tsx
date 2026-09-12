import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/utils/schema";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "Case Studies | Ram Enterprises - Safety Nets & Invisible Grills Chennai, Tamil Nadu",
  description:
    "Explore case studies & real installation projects by Ram Enterprises across Chennai, including Adyar, Velachery, Anna Nagar, T. Nagar, Tambaram, Porur, and OMR Sholinganallur.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies | Ram Enterprises - Safety Nets & Invisible Grills Chennai, Tamil Nadu",
    description:
      "Explore case studies & real installation projects by Ram Enterprises across Chennai, including Adyar, Velachery, Anna Nagar, T. Nagar, Tambaram, Porur, and OMR Sholinganallur.",
    url: "https://ramenterpriseschennai.com/case-studies",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Ram Enterprises Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Ram Enterprises - Safety Nets & Invisible Grills Chennai, Tamil Nadu",
    description:
      "Explore case studies & real installation projects by Ram Enterprises across Chennai serving Adyar, Velachery, Anna Nagar, T. Nagar, Tambaram, Porur, and OMR.",
    images: ["/images/og-image.webp"],
  },
};

export default function CaseStudiesPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Case Studies", item: "/case-studies" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <CaseStudiesClient />
    </>
  );
}
