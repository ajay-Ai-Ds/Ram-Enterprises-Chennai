"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Clock, Wrench, Shield, CheckCircle, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Marine SS316 & Virgin HDPE",
      desc: "We exclusively install genuine aerospace-grade SS316 stainless cables and 100% virgin copolymer netting designed to withstand Chennai's saline air without rusting or fraying.",
    },
    {
      icon: Award,
      title: "Written 5-Year Warranty",
      desc: "Every installation is sealed with an authentic written guarantee covering UV embrittlement, wire breakage, structural tension sag, and anchoring durability.",
    },
    {
      icon: Clock,
      title: "Complimentary Doorstep Estimates",
      desc: "Our safety consultants visit your residence with laser measurement tools and physical sample kits at zero cost, delivering clear written quotations with zero advance.",
    },
    {
      icon: Wrench,
      title: "Certified Rope-Access Crews",
      desc: "All technicians are rigorously trained in high-rise rigging, diamond-core drilling, and multi-point harness anchoring for flawless, vibration-free installations.",
    },
    {
      icon: Shield,
      title: "140kg+ Point Load Capacity",
      desc: "Our netting and invisible wire systems are load-tested to hold heavy dynamic falls, offering infallible protection for toddlers, elderly family members, and pets.",
    },
    {
      icon: CheckCircle,
      title: "Same-Day Mobilization",
      desc: "With localized mobile teams stationed across Chennai, we provide same-day or next-day installation with clean dust extraction and tidy cleanup.",
    },
  ];

  return (
    <section className="py-24 bg-white scroll-mt-12" id="advantage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0F2137]/10 text-[#0F2137] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B87333]" />
            <span>The Ram Enterprises Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F2137] tracking-tight">
            Why Chennai Homeowners Trust Ram Enterprises
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            From beachfront high-rises in Adyar and Thiruvanmiyur to expanding residential towers in Velachery and Porur, we bring uncompromising engineering precision to every safety installation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/80 hover:border-[#B87333] hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0F2137] group-hover:bg-[#B87333] flex items-center justify-center text-[#B87333] group-hover:text-white transition-colors mb-6 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
