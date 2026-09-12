"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Check, Sparkles } from "lucide-react";

export default function FeaturedServices() {
  const services = [
    {
      title: "Balcony Safety Nets",
      category: "Fall Protection",
      desc: "High-density virgin polymer netting with 140kg+ load resistance. Protects children and pets without blocking natural sunlight or ventilation.",
      image: "/images/hero/balconysafetynet.jpg",
      altText: "Ram Enterprises balcony safety netting installed in a Chennai high-rise flat",
      link: "/services/balcony-safety-nets",
      features: ["140kg point load capacity", "UV-fortified 10-year durability", "Free laser measurement"],
    },
    {
      title: "Balcony Invisible Grills",
      category: "Modern Architecture",
      desc: "Aerospace-grade SS316 stainless cables anchored in slim aluminium channels. Enjoy unhindered 180° views with 400kg+ tensile breaking strength.",
      image: "/images/hero/hero_invisible_grill.png",
      altText: "Ram Enterprises SS316 invisible wire grills installed on a modern Chennai balcony",
      link: "/services/balcony-invisible-grills",
      features: ["SS316 marine stainless core", "400kg+ tensile wire strength", "100% rust-proof guarantee"],
    },
    {
      title: "Pigeon Safety Nets & Spikes",
      category: "Humane Pest Control",
      desc: "Discreet translucent netting and blunt-tip stainless spikes that permanently exclude pigeons from AC outdoor units, light wells, and utility balconies.",
      image: "/images/hero/pigeonnet.jpg",
      altText: "Ram Enterprises anti-pigeon netting preventing bird nesting on a Chennai balcony",
      link: "/services/pigeon-safety-nets",
      features: ["100% humane bird deterrence", "Discreet transparent mesh", "Zero maintenance required"],
    },
    {
      title: "Ceiling Cloth Drying Systems",
      category: "Balcony Space Optimization",
      desc: "Dual-pulley SS304 stainless steel clothes drying racks that lower to chest height and hoist to the ceiling, reclaiming 100% of your balcony walkway.",
      image: "/images/hero/cloth-hanger.png",
      altText: "Ram Enterprises ceiling cloth drying hoist system in a Chennai apartment",
      link: "/services/ceiling-cloth-hangers",
      features: ["Smooth dual-pulley hoist", "SS304 rustproof stainless pipes", "Frees 100% floor space"],
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] scroll-mt-12" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0F2137]/10 text-[#0F2137] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B87333]" />
            <span>Our Core Safety Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F2137] tracking-tight">
            Precision Safety Engineering for Every Need
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Whether securing high-floor balconies against accidental falls or optimizing compact utility areas, explore our most sought-after installation services in Chennai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#B87333] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.altText}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0F2137] text-[#FDE047] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md shadow-xs">
                    {service.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.desc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#B87333] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={service.link}
                  className="w-full bg-[#0F2137] hover:bg-[#B87333] text-white hover:text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <span>View Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-extrabold text-[#0F2137] hover:text-[#B87333] uppercase tracking-wider transition-colors"
          >
            <span>View All 18 Safety Netting &amp; Invisible Grill Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
