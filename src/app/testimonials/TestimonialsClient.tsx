"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Star,
  MessageSquare,
  MapPin,
  CheckCircle2,
  Phone,
  Sparkles,
  Filter,
} from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  date: string;
  category: "safety-nets" | "invisible-grills" | "cloth-hangers";
  serviceName: string;
  comment: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Dr. K. Srinivasan",
    location: "Gandhi Nagar, Adyar",
    rating: 5,
    date: "July 2026",
    category: "invisible-grills",
    serviceName: "Balcony Invisible Grills",
    comment:
      "Ram Enterprises installed SS316 marine-grade invisible grills across our 12th-floor balcony in Adyar. The sweeping panorama of Chennai remains pristine while keeping our children completely secure. Exceptional engineering and neat finishing!",
  },
  {
    id: 2,
    name: "Cdr. (Retd.) Rajesh Nair",
    location: "Vijaya Nagar, Velachery",
    rating: 5,
    date: "June 2026",
    category: "safety-nets",
    serviceName: "Balcony Safety Nets",
    comment:
      "Given Chennai's coastal moisture, corrosion was our main concern. Ram Enterprises fitted heavy UV-stabilized copolymer netting with high-grade stainless anchors. Zero sagging or rust even after heavy coastal winds.",
  },
  {
    id: 3,
    name: "Padmavathi Krishnan",
    location: "Shanthi Colony, Anna Nagar",
    rating: 5,
    date: "June 2026",
    category: "safety-nets",
    serviceName: "Pigeon Safety Nets",
    comment:
      "Pigeons used to soil our drying laundry and balcony plants daily. Ram Enterprises set up discreet translucent anti-bird nets and an easy 6-pipe ceiling clothes drying system in a single afternoon. Our balcony is finally clean!",
  },
  {
    id: 4,
    name: "K. Narayanan",
    location: "East Tambaram, Chennai",
    rating: 5,
    date: "June 2026",
    category: "safety-nets",
    serviceName: "Monkey Safety Nets",
    comment:
      "Monkeys from nearby greenery frequently raided our open terrace area. Ram Enterprises installed reinforced heavy-gauge monkey safety netting with perimeter steel boundary lines. We now enjoy complete peace of mind.",
  },
  {
    id: 5,
    name: "Suresh Ramanathan",
    location: "G.N. Chetty Road, T. Nagar",
    rating: 5,
    date: "May 2026",
    category: "invisible-grills",
    serviceName: "Window Invisible Grills",
    comment:
      "We replaced dated cast-iron bars with invisible grills on 6 bedroom windows in our T. Nagar home. The rooms feel brighter and far more ventilated, and cleaning window glass from inside is effortless.",
  },
  {
    id: 6,
    name: "S. Subramanian",
    location: "Mugen Nagar, Porur",
    rating: 5,
    date: "May 2026",
    category: "safety-nets",
    serviceName: "Children Safety Nets",
    comment:
      "Living in an 8th-floor apartment in Porur, securing our open balcony railings with child safety nets was our top priority for our toddlers. Very strong concrete anchors and courteous, professional technicians.",
  },
  {
    id: 7,
    name: "Ramesh Balaji",
    location: "Balaiah Nagar, Madipakkam",
    rating: 5,
    date: "April 2026",
    category: "cloth-hangers",
    serviceName: "Ceiling Cloth Hangers",
    comment:
      "The ceiling cloth drying hoist reclaimed all our utility balcony floor space. The dual-pulley stainless steel rods lift heavy wet bedsheets smoothly. Easily the most practical home improvement we made this year!",
  },
  {
    id: 8,
    name: "Harish Sundaram",
    location: "Valmiki Nagar, Thiruvanmiyur",
    rating: 5,
    date: "April 2026",
    category: "invisible-grills",
    serviceName: "Staircase Invisible Grills",
    comment:
      "Our duplex staircase void needed reliable fall protection without feeling enclosed. The vertical SS316 cable grills provide an elegant architectural look that all our visitors admire.",
  },
  {
    id: 9,
    name: "Anusha Latha",
    location: "Luz Corner, Mylapore",
    rating: 5,
    date: "March 2026",
    category: "safety-nets",
    serviceName: "Pet Safety Nets",
    comment:
      "Our young persian cat loves resting near balcony railings. The scratch-proof, high-density pet netting installed by Ram Enterprises keeps her safe while allowing the pleasant evening breeze inside.",
  },
];

export default function TestimonialsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredTestimonials =
    selectedCategory === "all"
      ? testimonialsData
      : testimonialsData.filter((t) => t.category === selectedCategory);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#0F2137] font-bold">Testimonials</span>
        </nav>

        {/* 1. HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0F2137] bg-white border border-slate-200 px-4 py-1.5 rounded-full inline-block self-center shadow-xs">
            Customer Experiences &amp; Stories
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2137] tracking-tight leading-tight">
            Verified Homeowner Reviews Across Chennai, Tamil Nadu
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Read real experiences from families, residential gated societies, and commercial property owners who rely on Ram Enterprises.
          </p>
        </div>

        {/* 2. OVERALL RATING SUMMARY CARD */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md max-w-3xl mx-auto mb-16 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl sm:text-5xl font-black text-[#0F2137]">4.9</span>
              <span className="text-lg font-bold text-slate-400">/ 5.0</span>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-[#B87333] fill-[#B87333]" />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-500 mt-1">
              Based on 200+ Verified Customer Ratings
            </span>
          </div>

          <div className="flex flex-col gap-2 w-full sm:w-auto">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>100% Verified Installation Feedback</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Certified 5-Year Material Warranties</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Complimentary Doorstep Measurements</span>
            </div>
          </div>
        </div>

        {/* 3. FILTER TABS */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mr-2">
            <Filter className="w-4 h-4" />
            <span>Filter by Category:</span>
          </div>
          {[
            { label: "All Reviews", value: "all" },
            { label: "Safety Nets", value: "safety-nets" },
            { label: "Invisible Grills", value: "invisible-grills" },
            { label: "Cloth Hangers", value: "cloth-hangers" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setSelectedCategory(tab.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === tab.value
                  ? "bg-[#0F2137] text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#B87333] hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 4. TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#B87333] fill-[#B87333]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {item.date}
                  </span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-extrabold text-[#0F2137]">{item.name}</h3>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                    <MapPin className="w-3 h-3 text-[#B87333]" />
                    <span>{item.location}</span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#0F2137] bg-[#FDF6F0] px-2.5 py-1 rounded-md self-start border border-[#F2D2BD]">
                  {item.serviceName}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 5. CTA BANNER */}
        <div className="bg-[#0F2137] text-white rounded-3xl p-8 sm:p-12 mb-20 shadow-2xl relative overflow-hidden text-center flex flex-col items-center gap-6 border border-[#1A3A5C]">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-[#B87333]/40 text-[#B87333] text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full">
            <Sparkles className="w-4 h-4" />
            <span>Join 5,000+ Satisfied Chennai Families</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl leading-tight">
            Ready to Secure Your High-Rise Home?
          </h2>

          <p className="text-slate-200 text-xs sm:text-sm max-w-xl leading-relaxed">
            Get in touch with Ram Enterprises today for a complimentary on-site measurement and written estimate.
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
              href="https://wa.me/919030505683?text=Hi%20Ram%20Enterprises%2C%20I%20would%20like%20to%20request%20a%20free%20quote%20for%20safety%20nets%2Finvisible%20grills."
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
