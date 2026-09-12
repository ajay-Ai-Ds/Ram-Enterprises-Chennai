import { Metadata } from "next";
import Link from "next/link";
import { Home, ShieldCheck, HardHat, Sparkles, CheckCircle2, Building2 } from "lucide-react";
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/utils/schema";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "About Us | Ram Enterprises - Safety Net & Invisible Grill Specialists Chennai",
  description:
    "Discover Ram Enterprises: Chennai, Tamil Nadu's premier engineering team for high-rise balcony safety nets, marine-grade SS316 invisible grills, and modern drying systems.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Ram Enterprises - Safety Net & Invisible Grill Specialists Chennai",
    description:
      "Discover Ram Enterprises: Chennai, Tamil Nadu's premier engineering team for high-rise balcony safety nets, marine-grade SS316 invisible grills, and modern drying systems.",
    url: "https://ramenterpriseschennai.com/about",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "About Ram Enterprises - Chennai, Tamil Nadu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Ram Enterprises - Safety Net & Invisible Grill Specialists Chennai",
    description:
      "Discover Ram Enterprises: Chennai, Tamil Nadu's premier engineering team for high-rise balcony safety nets, marine-grade SS316 invisible grills, and modern drying systems.",
    images: ["/images/og-image.webp"],
  },
};

export default function AboutPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "About Us", item: "/about" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Inject Structured Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#B87333] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">About Us</span>
        </nav>

        {/* Hero Section */}
        <div className="text-left max-w-3xl mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B87333] bg-[#FDF6F0] px-3.5 py-1.5 rounded-full inline-block self-start">
            Our Story &amp; Craftsmanship
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Protecting High-Rise Homes Across Chennai, Tamil Nadu
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Ram Enterprises is an engineering-driven safety installation enterprise dedicated to safeguarding families, toddlers, and pets from multi-story fall risks while preserving panoramic architectural aesthetics.
          </p>
        </div>

        {/* Split Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          {/* Mission & Story (Left) */}
          <div className="lg:col-span-8 flex flex-col gap-8 text-left">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs flex flex-col gap-5">
              <h2 className="text-xl font-bold text-slate-800 border-b border-slate-100 pb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#B87333] shrink-0" />
                <span>Our Uncompromising Safety Philosophy</span>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                As high-rise residential townships transform urban horizons from Adyar and Velachery to Anna Nagar, T. Nagar, and Tambaram, modern open architecture frequently creates critical safety hazards. Wide balcony railing intervals and low window parapets present constant risks for young children and household pets.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ram Enterprises was founded on a simple principle: high-altitude protection must be robust, certified, and visually discreet. We combine virgin polymer HDPE safety netting and aerospace-grade SS316 marine stainless steel invisible cables with calibrated concrete anchoring techniques to ensure every installation delivers absolute peace of mind.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-3">
                <div className="p-3 bg-[#FDF6F0] rounded-xl text-[#B87333] self-start">
                  <HardHat className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-800">Certified Riggers</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Our installation technicians undergo comprehensive rope access and high-rise structural anchoring training.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-3">
                <div className="p-3 bg-[#FDF6F0] rounded-xl text-[#B87333] self-start">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-800">Aerospace Metallurgy</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  We use genuine SS316 marine cables with molybdenum alloy cores that resist coastal humidity and saline corrosion.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-3">
                <div className="p-3 bg-[#FDF6F0] rounded-xl text-[#B87333] self-start">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-800">Spotless Handover</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Every site is vacuum-cleaned of masonry dust with rigorous multi-point anchor tension load testing before handover.
                </p>
              </div>
            </div>
          </div>

          {/* Verification Stats (Right) */}
          <div className="lg:col-span-4 bg-[#0F2137] text-white rounded-3xl p-6 sm:p-8 border border-[#1A3A5C] flex flex-col gap-6">
            <h3 className="text-base font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#B87333]" />
              <span>Operational Track Record</span>
            </h3>

            {/* Factual Data */}
            <div className="flex flex-col gap-5 text-left">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-slate-400">Industry Experience</span>
                <span className="text-xs font-bold text-[#B87333] uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-md self-start">
                  12+ Years Field Expertise
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-slate-400">Verified High-Rise Setups</span>
                <span className="text-xs font-bold text-[#B87333] uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-md self-start">
                  5,000+ Completed Projects
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-slate-400">Engineering Compliance</span>
                <span className="text-xs font-bold text-[#B87333] uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-md self-start">
                  ISO 9001 Tested &amp; High-Altitude Certified
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-[11px] leading-relaxed pt-2 border-t border-white/10">
              Ram Enterprises is committed to zero-defect execution and comprehensive 5-year warranties across all 20 prime localities in Chennai.
            </p>
          </div>
        </div>

        {/* Lead Inquiry Form */}
        <ContactForm />
      </div>
    </div>
  );
}
