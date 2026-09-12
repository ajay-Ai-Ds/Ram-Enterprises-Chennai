"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Check,
  Sparkles,
  Phone,
  MessageSquare,
  Shield,
  Eye,
  Settings,
  Layers,
} from "lucide-react";
import { servicesData } from "@/utils/servicesData";

type CategoryFilter = "all" | "safety-nets" | "invisible-grills" | "cloth-hangers";

const categoryTabs = [
  { id: "all" as CategoryFilter, label: "All Services", count: 18, icon: Layers },
  { id: "safety-nets" as CategoryFilter, label: "Safety Nets", count: 10, icon: Shield },
  { id: "invisible-grills" as CategoryFilter, label: "SS316 Invisible Grills", count: 5, icon: Eye },
  { id: "cloth-hangers" as CategoryFilter, label: "Cloth Drying Systems", count: 3, icon: Settings },
];

export default function FeaturedServices() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>("all");

  const allServicesList = Object.values(servicesData);

  const filteredServices =
    activeTab === "all"
      ? allServicesList
      : allServicesList.filter((service) => service.category === activeTab);

  return (
    <section className="py-24 bg-[#F8FAFC] scroll-mt-12" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#0F2137]/10 text-[#0F2137] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-[#0F2137]/15">
            <Sparkles className="w-3.5 h-3.5 text-[#B87333]" />
            <span>Complete Safety &amp; Balcony Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2137] tracking-tight">
            Explore All 18 Installation Services
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            From high-rise balcony fall containment and anti-pigeon duct netting to modern SS316 invisible grills and ceiling cloth drying hoists, browse our complete range of certified doorstep installations across Chennai.
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4.5 py-2.5 sm:px-5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#0F2137] text-white shadow-md shadow-[#0F2137]/20 scale-102 ring-2 ring-[#B87333]"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 hover:border-slate-300"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#B87333]" : "text-slate-500"}`} />
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-extrabold ${
                    isActive ? "bg-[#B87333] text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Services Grid (Shows all services clearly on homepage scroll) */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#B87333] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={`Ram Enterprises - ${service.name} Installation in Chennai, Tamil Nadu`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/10 pointer-events-none" />

                    {/* Category & Warranty Badges */}
                    <div className="absolute top-3 left-3 bg-[#0F2137]/90 backdrop-blur-xs text-[#FDE047] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#B87333]" />
                      <span>{service.categoryName}</span>
                    </div>

                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-[#0F2137] text-[10px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                      5-Year Guarantee
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#B87333] transition-colors leading-snug">
                      <Link href={`/services/${service.slug}`}>
                        {service.name}
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Top 3 Benefits */}
                    <ul className="space-y-2 mb-6">
                      {service.benefits.slice(0, 3).map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                          <Check className="w-3.5 h-3.5 text-[#B87333] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 flex flex-col sm:flex-row gap-2.5">
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex-1 bg-[#0F2137] hover:bg-[#B87333] text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-xs group/btn"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                  <a
                    href="tel:9030505683"
                    className="bg-[#B87333]/15 hover:bg-[#B87333] text-[#0F2137] hover:text-white font-bold py-3 px-3.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all"
                    title="Call for instant quote"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </a>
                  <a
                    href={`https://wa.me/919030505683?text=Hi%20Ram%20Enterprises,%20I%20am%20interested%20in%20${encodeURIComponent(service.name)}%20installation%20in%20Chennai.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-50 hover:bg-[#25D366] text-emerald-700 hover:text-white font-bold py-3 px-3.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all"
                    title="WhatsApp us"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Quick Doorstep Inspection CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#0F2137] to-[#1A3A5C] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-[#FDE047] text-xs font-extrabold uppercase tracking-wider">
              Free Doorstep Service Across All Chennai Localities
            </span>
            <h3 className="text-2xl sm:text-3xl font-black mt-2">
              Need a Custom Measurement for Your Balcony or Windows?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
              Our technicians arrive at your home with laser measurement tools and physical samples. Get a confirmed quotation on the spot with zero obligation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="tel:9030505683"
              className="bg-[#B87333] hover:bg-[#D08A52] text-white font-black px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Call 90305 05683</span>
            </a>
            <a
              href="https://wa.me/919030505683?text=Hi%20Ram%20Enterprises,%20I%20would%20like%20to%20book%20a%20free%20doorstep%20measurement%20in%20Chennai."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-emerald-600 text-white font-black px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
