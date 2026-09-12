import { Metadata } from "next";
import { generateBreadcrumbSchema, generateAggregateRatingSchema } from "@/utils/schema";
import TestimonialsClient from "./TestimonialsClient";

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials | Ram Enterprises - Safety Nets & Invisible Grills Chennai, Tamil Nadu",
  description:
    "Read 150+ verified reviews for Ram Enterprises across Chennai, including Adyar, Velachery, Anna Nagar, T. Nagar, Tambaram, Porur, and OMR Sholinganallur. Rated 4.9/5 for safety netting and invisible grills.",
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    title: "Customer Reviews & Testimonials | Ram Enterprises - Safety Nets & Invisible Grills Chennai, Tamil Nadu",
    description:
      "Read 150+ verified reviews for Ram Enterprises across Chennai, including Adyar, Velachery, Anna Nagar, T. Nagar, Tambaram, Porur, and OMR Sholinganallur.",
    url: "https://ramenterpriseschennai.com/testimonials",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Ram Enterprises Testimonials & Reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Reviews & Testimonials | Ram Enterprises - Safety Nets & Invisible Grills Chennai, Tamil Nadu",
    description:
      "Read 150+ verified reviews for Ram Enterprises across Chennai serving Adyar, Velachery, Anna Nagar, T. Nagar, Tambaram, Porur, and OMR.",
    images: ["/images/og-image.webp"],
  },
};

export default function TestimonialsPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Testimonials", item: "/testimonials" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateAggregateRatingSchema()) }}
      />
      <TestimonialsClient />
    </>
  );
}
