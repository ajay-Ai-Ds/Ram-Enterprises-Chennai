"use client";

import { Shield, PhoneCall, Award, Clock, Wrench, CheckCircle } from "lucide-react";

export default function MarqueeTicker() {
  const items = [
    { icon: Shield, text: "Certified High-Rise Safety Netting", highlight: "140kg+ Load Tested" },
    { icon: Award, text: "Marine-Grade SS316 Invisible Grills", highlight: "100% Rust-Proof" },
    { icon: Clock, text: "Doorstep Laser Measurements", highlight: "100% Free Consultation" },
    { icon: Wrench, text: "Rapid Turnaround in Chennai", highlight: "Same-Day Service" },
    { icon: PhoneCall, text: "Direct Helpline & WhatsApp", highlight: "+91 90305 05683" },
    { icon: CheckCircle, text: "Official Warranty Assurance", highlight: "5-Year Replacement Card" },
  ];

  return (
    <div className="bg-[#0F2137] text-white py-3.5 overflow-hidden border-y border-[#1A3A5C] select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-2 mx-6 text-xs sm:text-sm font-semibold">
              <Icon className="w-4 h-4 text-[#B87333] shrink-0" />
              <span className="text-slate-200">{item.text}:</span>
              <span className="text-[#B87333] font-bold bg-black/20 px-2 py-0.5 rounded border border-[#B87333]/30">
                {item.highlight}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
