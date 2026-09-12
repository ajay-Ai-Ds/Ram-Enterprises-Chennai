"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Quote, Sparkles, CheckCircle2 } from "lucide-react";

export default function CustomerReviews() {
  const testimonials = [
    {
      name: "S. Meenakshi Sundaram",
      locality: "Adyar, Chennai",
      service: "Balcony Invisible Grills",
      rating: 5,
      date: "June 2026",
      comment:
        "Living near the coast in Adyar, we were nervous about wire corrosion. Ram Enterprises installed SS316 marine invisible grills on our 9th floor balcony. The view of the sea is completely unhindered and the cables are rock solid. Superb craftsmanship!",
    },
    {
      name: "K. Balasubramanian",
      locality: "Velachery, Chennai",
      service: "Child Safety Nets",
      rating: 5,
      date: "May 2026",
      comment:
        "We have two toddlers and lived with constant worry about our balcony railing gaps. Ram Enterprises came on the same day for measurements and finished the net setup in 2.5 hours. Highly tensioned, extremely neat, and very courteous technicians.",
    },
    {
      name: "Dr. Arvind Swaminathan",
      locality: "Anna Nagar, Chennai",
      service: "Pigeon Safety Nets & Spikes",
      rating: 5,
      date: "July 2026",
      comment:
        "Pigeons were making a total mess of our AC outdoor compressors and utility balcony. The translucent netting installed by Ram Enterprises solved the menace completely without spoiling the apartment aesthetics. 100% recommended!",
    },
    {
      name: "Priyadarshini R.",
      locality: "T. Nagar, Chennai",
      service: "Ceiling Cloth Drying Hangers",
      rating: 5,
      date: "April 2026",
      comment:
        "The 6-pipe ceiling pulley hanger saved our small utility balcony. The rods lower effortlessly to chest height and hoist easily. No more tripping over bulky drying stands. Best investment for our flat!",
    },
    {
      name: "Capt. K. Sundar (Retd.)",
      locality: "Thiruvanmiyur, Chennai",
      service: "Balcony Invisible Grills",
      rating: 5,
      date: "June 2026",
      comment:
        "I was impressed by the precision of their diamond drilling and aluminium track mounting. Genuine SS316 marine cables with DuPont nylon coating. Safe for my golden retriever and gives an open breeze.",
    },
    {
      name: "Ananya Narayanan",
      locality: "Porur, Chennai",
      service: "Window Invisible Grills",
      rating: 5,
      date: "May 2026",
      comment:
        "Replaced our dark old iron window bars with Ram Enterprises invisible grills. The bedroom feels twice as large, sunlight floods the room, and we feel totally secure. Excellent team and fair pricing.",
    },
  ];

  return (
    <section className="py-24 bg-[#06101C] text-white scroll-mt-12" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#B87333]/20 border border-[#B87333]/40 text-[#FDE047] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FDE047]" />
            <span>Verified Customer Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Trusted by 5,000+ Families Across Chennai
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Read firsthand experiences from homeowners, parents, and pet lovers who secured their high-rise apartments with Ram Enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-7 rounded-3xl bg-[#0A1829] border border-[#1A3A5C]/60 flex flex-col justify-between hover:border-[#B87333] transition-all shadow-md group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#B87333]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#1A3A5C] group-hover:text-[#B87333] transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#1A3A5C]/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{review.name}</h4>
                  <div className="flex items-center gap-1 text-slate-400 text-[11px] mt-0.5">
                    <MapPin className="w-3 h-3 text-[#B87333]" />
                    <span>{review.locality}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-[#B87333] bg-[#B87333]/10 px-2 py-1 rounded-md block">
                    {review.service}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
