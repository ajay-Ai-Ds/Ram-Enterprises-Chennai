import { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  Ruler,
  Layers,
  FileCheck,
  Maximize,
  Award,
  Building,
  ShieldCheck,
  Phone,
  MessageSquare,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { generateBreadcrumbSchema } from "@/utils/schema";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Pricing Guide & Estimation | Ram Enterprises Chennai, Tamil Nadu",
  description:
    "Transparent per-square-foot pricing for balcony safety nets, SS316 invisible grills & drying hangers by Ram Enterprises in Adyar, Velachery, Anna Nagar, and all across Chennai.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing Guide & Estimation | Ram Enterprises Chennai, Tamil Nadu",
    description:
      "Transparent per-square-foot pricing for balcony safety nets, SS316 invisible grills & drying hangers by Ram Enterprises in Adyar, Velachery, Anna Nagar, and all across Chennai.",
    url: "https://ramenterpriseschennai.com/pricing",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Ram Enterprises Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Guide & Estimation | Ram Enterprises Chennai, Tamil Nadu",
    description:
      "Transparent per-square-foot pricing for safety nets, invisible grills & cloth hangers across Adyar, Velachery, Anna Nagar, T. Nagar, Tambaram, Porur, and OMR.",
    images: ["/images/og-image.webp"],
  },
};

export default function PricingPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Pricing", item: "/pricing" },
  ];

  const howWePriceSteps = [
    {
      step: "01",
      icon: <Ruler className="w-7 h-7 text-[#B87333]" />,
      title: "Complimentary Doorstep Laser Measurement",
      description:
        "Our safety technicians evaluate your balcony, window, or building shaft dimensions using precision laser tools across all 20 Chennai service localities.",
    },
    {
      step: "02",
      icon: <Layers className="w-7 h-7 text-[#B87333]" />,
      title: "Physical Material Demonstration",
      description:
        "Inspect real samples of copolymer HDPE netting, marine SS316 stainless cables, and aluminium track channels directly at your premises.",
    },
    {
      step: "03",
      icon: <FileCheck className="w-7 h-7 text-[#B87333]" />,
      title: "Guaranteed Written Quotation",
      description:
        "Receive an upfront, transparent quotation with all hardware, tensioning, and warranty guarantees itemized with zero surprise charges.",
    },
  ];

  const priceFactors = [
    {
      icon: <Maximize className="w-6 h-6 text-[#B87333]" />,
      title: "Surface Area & Perimeter Span",
      description:
        "Overall square footage of the balcony, open window sills, staircase void, or vertical duct shaft requiring containment.",
    },
    {
      icon: <Award className="w-6 h-6 text-[#B87333]" />,
      title: "Polymer & Metallurgy Grade",
      description:
        "Selection between UV-stabilized copolymer HDPE mesh or high-tensile SS316 marine stainless steel cables with DuPont nylon coating.",
    },
    {
      icon: <Building className="w-6 h-6 text-[#B87333]" />,
      title: "Structural Elevation & Access",
      description:
        "Building floor level, external rope rigging requirements, and masonry anchoring substrate characteristics.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#B87333]" />,
      title: "Custom Hardware Profiles",
      description:
        "Heavy anodized aluminium structural tracks, stainless eyebolts, or specialized zipper access points for AC outdoor units.",
    },
  ];

  const trustBadges = [
    {
      title: "Zero Obligation Home Survey",
      desc: "Our on-site measurement, engineering evaluation, and material sampling visits are 100% free.",
    },
    {
      title: "Itemized Written Price Guarantee",
      desc: "Every cost element is finalized in writing prior to commencing installation.",
    },
    {
      title: "Complimentary Post-Install Checks",
      desc: "We provide follow-up tension inspection and calibration checks whenever requested.",
    },
    {
      title: "Direct Manufacturer Pricing",
      desc: "Enjoy competitive direct-to-consumer rates on ISO-certified safety nets and SS316 cable grills.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#B87333] flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#0F2137] font-bold">Pricing Approach</span>
        </nav>

        {/* 1. HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0F2137] bg-[#FDF6F0] border border-[#E8BA9B] px-4 py-1.5 rounded-full inline-block self-center shadow-xs">
            Clear &amp; Predictable Costing
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2137] tracking-tight leading-tight">
            Transparent Pricing Methodology
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We believe in complete pricing transparency with zero hidden fees. Every quotation is customized to your exact spatial measurements and material preferences.
          </p>
        </div>

        {/* 2. HOW WE PRICE (3-Step Explainer) */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2137] tracking-tight">
              Our 3-Step Valuation Process
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2">
              How Ram Enterprises ensures accurate, hassle-free pricing before work begins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howWePriceSteps.map((stepItem) => (
              <div
                key={stepItem.step}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col items-center text-center group"
              >
                <div className="absolute top-4 right-6 text-3xl font-black text-slate-200 group-hover:text-[#B87333]/30 transition-colors">
                  {stepItem.step}
                </div>
                <div className="p-4 bg-[#F8FAFC] rounded-2xl mb-6 shadow-xs group-hover:bg-[#0F2137] transition-colors duration-300">
                  {stepItem.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0F2137] mb-3 group-hover:text-[#B87333] transition-colors">
                  {stepItem.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {stepItem.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. WHAT AFFECTS YOUR PRICE */}
        <div className="bg-[#F8FAFC] rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12 flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F2137]">Cost Variables</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2137]">
              Factors Determining Your Custom Quote
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Understanding the key structural and material components in your safety setup.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {priceFactors.map((factor) => (
              <div
                key={factor.title}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xs hover:shadow-md transition-shadow flex flex-col gap-3"
              >
                <div className="p-3 bg-[#F8FAFC] rounded-xl self-start">
                  {factor.icon}
                </div>
                <h3 className="text-sm font-bold text-[#0F2137] mt-1">{factor.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. TRUST BADGES */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2137]">
              Our Honest Pricing Commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex items-start gap-4"
              >
                <div className="p-2.5 bg-[#FDF6F0] text-[#0F2137] rounded-xl shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#B87333]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800 mb-1">{badge.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. LARGE PROMINENT CTA BANNER */}
        <div className="bg-[#0F2137] text-white rounded-3xl p-8 sm:p-12 mb-20 shadow-2xl relative overflow-hidden text-center flex flex-col items-center gap-6 border border-[#1A3A5C]">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-[#B87333]/40 text-[#B87333] text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4" />
            <span>Ready for an Exact On-Site Quote?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl leading-tight">
            Schedule Your Free On-Site Inspection Today
          </h2>

          <p className="text-slate-200 text-xs sm:text-sm max-w-xl leading-relaxed">
            Our certified field technician will visit your location in Chennai with material samples, perform exact laser measurements, and present a written estimate on the spot.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-2 w-full max-w-md">
            <a
              href="tel:+919030505683"
              className="flex-1 min-w-[180px] flex items-center justify-center gap-2.5 bg-[#B87333] hover:bg-[#D08A52] text-white font-black py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 90305 05683</span>
            </a>

            <a
              href="https://wa.me/919030505683?text=Hi%20Ram%20Enterprises%2C%20I%20would%20like%20to%20request%20a%20free%20on-site%20measurement%20and%20pricing%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[180px] flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Quote</span>
            </a>
          </div>
        </div>

        {/* Contact Form Inclusion */}
        <ContactForm />
      </div>
    </div>
  );
}
