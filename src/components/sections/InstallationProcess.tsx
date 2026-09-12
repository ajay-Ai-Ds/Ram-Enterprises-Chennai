"use client";

import { motion } from "framer-motion";
import { PhoneCall, Ruler, Wrench, ShieldCheck } from "lucide-react";

interface Step {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    icon: <PhoneCall className="w-6 h-6 text-[#B87333]" />,
    title: "1. Free Booking & Consultation",
    description: "Contact us via call or WhatsApp. We assign a local technician for a complimentary site evaluation at your convenience.",
  },
  {
    id: 2,
    icon: <Ruler className="w-6 h-6 text-[#B87333]" />,
    title: "2. Precision Laser Measurements",
    description: "Our riggers inspect structural anchor points, measure exact frame dimensions, and present physical material samples.",
  },
  {
    id: 3,
    icon: <Wrench className="w-6 h-6 text-[#B87333]" />,
    title: "3. Calibrated Anchor & Cable Rigging",
    description: "We install heavy stainless fasteners, precision tension cables or netting, and seal perimeters cleanly.",
  },
  {
    id: 4,
    icon: <ShieldCheck className="w-6 h-6 text-[#B87333]" />,
    title: "4. Load Testing & Warranty Handover",
    description: "We perform dynamic multi-point load tests, vacuum all masonry dust, and issue your official 5-year written warranty.",
  },
];

export default function InstallationProcess() {
  return (
    <section className="bg-white py-24 scroll-mt-12" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0F2137] bg-[#FDF6F0] border border-[#E8BA9B] px-3.5 py-1.5 rounded-full inline-block self-center">
            How Our Installation Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2137] tracking-tight leading-tight">
            Our 4-Step Precision Installation Workflow
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            From your initial inquiry to final load testing and cleanup, here is how Ram Enterprises ensures flawless safety execution across Chennai.
          </p>
        </div>

        {/* Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[32px] left-[12%] right-[12%] h-0.5 bg-[#E2E8F0] -z-0 rounded-full"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center text-center group relative z-10"
            >
              {/* Step Circle */}
              <div className="w-16 h-16 rounded-2xl bg-[#0F2137] group-hover:bg-[#1A3A5C] text-[#B87333] flex items-center justify-center shadow-lg transition-colors duration-300 mb-6 shrink-0 relative border border-[#1A3A5C]">
                {step.icon}
                {/* Step micro-badge */}
                <div className="absolute -top-1.5 -right-1.5 bg-[#B87333] text-white text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-xs transition-colors duration-300">
                  {step.id}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-bold text-[#0F2137] mb-2.5 group-hover:text-[#B87333] transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
