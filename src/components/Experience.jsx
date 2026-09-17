import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const timeline = [
    {
      year: "2026 - Present",
      company: "Rumooz Smart Solutions",
      role: "Videographer & Graphic Designer",
      location: "Abu Dhabi, UAE",
      description:
        "Producing video content and graphic design for a full-service digital marketing agency — campaigns, brand assets, and social-first content.",
      current: true,
    },
    {
      year: "2025 - 2026",
      company: "Digitally Media",
      role: "Photographer, Videographer & Editor",
      location: "Dubai, UAE",
      description:
        "Produced films and visual content for brands, agencies, and creative campaigns.",
    },
    {
      year: "2024 - 2025",
      company: "Dark Room",
      role: "Photographer, Videographer & Editor",
      location: "Sri Lanka",
      description:
        "Led post-production work for studio clients — color grading, motion design, and final delivery.",
    },
    {
      year: "2022 - 2024",
      company: "Dj Graphy",
      role: "Photographer, Videographer & Editor",
      location: "Sri Lanka",
      description:
        "Expanded into commercial shoots, brand content, and high-volume event coverage across the UAE.",
    },
    {
      year: "2017 - 2022",
      company: "Sumudu Indrajith Photography",
      role: "Photographer & Editor",
      location: "Sri Lanka",
      description:
        "Started my professional journey in photography and video editing — covering events, portraits, and short-form productions.",
    },
  ];

  const strengths = [
    "Cinematic storytelling",
    "Brand & commercial content",
    "Post-production & color grading",
    "Social-first short form",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="experience" className="overflow-hidden bg-black">
      <div className="relative py-24 md:py-32 bg-black">
        {/* Ambient glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(251,191,36,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,255,255,0.02),transparent_50%)]" />

        {/* Fine grain lines */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 3px)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section label */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-amber-400" />
              <span className="text-xs font-medium tracking-[0.4em] text-amber-400 uppercase">
                Experience
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* ================= LEFT PANEL ================= */}
            <motion.div
              variants={leftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:sticky lg:top-28"
            >
              <div className="relative">
                {/* Giant year watermark — smaller on mobile */}
                <span className="absolute -top-8 md:-top-12 -left-2 md:-left-3 text-[100px] sm:text-[140px] lg:text-[200px] font-bold text-white/[0.03] leading-none select-none pointer-events-none tracking-tighter">
                  2017
                </span>

                <div className="relative">
                  {/* Headline */}
                  <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-white">
                    A visual journey
                    <br />
                    <span className="font-bold text-amber-400 italic">
                      built over 8 years.
                    </span>
                  </h2>

                  {/* Three-segment gold underline */}
                  <div className="mt-7 flex items-center gap-2">
                    <span className="w-14 h-[2px] bg-amber-400 rounded-full" />
                    <span className="w-3 h-[2px] bg-amber-400/40 rounded-full" />
                    <span className="w-1.5 h-[2px] bg-amber-400/20 rounded-full" />
                  </div>

                  {/* Paragraph */}
                  <div className="relative mt-7 pl-5 max-w-md">
                    <span className="absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-amber-400 via-amber-400/40 to-transparent" />
                    <p className="text-base md:text-lg text-slate-400 leading-relaxed">
                      From portrait and event photography in 2017 to full-scale
                      commercial video production today — every studio, every
                      shoot, and every edit has shaped how I tell stories on
                      camera.
                    </p>
                  </div>

                  {/* What I bring — strengths list (now visible on all screens) */}
                  <div className="mt-10">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="w-6 h-px bg-amber-400" />
                      <span className="text-[11px] tracking-[0.3em] uppercase text-slate-400">
                        What I bring
                      </span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 max-w-md">
                      {strengths.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: 0.1 + i * 0.08,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="group flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors duration-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400/60 group-hover:bg-amber-400 group-hover:shadow-[0_0_8px_rgba(251,191,36,0.8)] transition-all duration-300" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline strip — visible on all screens */}
                  <div className="mt-10 flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-slate-500">
                    <span className="text-amber-400 font-medium">2017</span>
                    <div className="flex-1 relative h-px bg-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.8,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-400 to-amber-400/0"
                      />
                      <motion.span
                        initial={{ left: "0%" }}
                        whileInView={{ left: "100%" }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.8,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="absolute -top-[2.5px] w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.7)]"
                      />
                    </div>
                    <span className="text-amber-400 font-medium">Now</span>
                  </div>

                  {/* Stats panel — visible on all screens */}
                  <div className="mt-8 grid grid-cols-2 rounded-2xl border border-slate-800/80 overflow-hidden bg-gradient-to-br from-white/[0.02] to-transparent max-w-md">
                    <div className="p-5 sm:p-6 border-r border-slate-800/80">
                      <span className="block text-2xl sm:text-3xl font-light text-white">
                        8<span className="text-amber-400">+</span>
                      </span>
                      <span className="text-[10px] tracking-[0.25em] uppercase text-slate-500 mt-1.5 block">
                        Years Active
                      </span>
                    </div>
                    <div className="p-5 sm:p-6">
                      <span className="block text-2xl sm:text-3xl font-light text-white">
                        5
                      </span>
                      <span className="text-[10px] tracking-[0.25em] uppercase text-slate-500 mt-1.5 block">
                        Studios
                      </span>
                    </div>
                  </div>

     
                </div>
              </div>
            </motion.div>

            {/* ================= RIGHT TIMELINE ================= */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute left-[7px] md:left-[9px] top-3 w-px bg-slate-800 h-[calc(100%-0.75rem)]">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 2.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute top-0 left-0 w-full bg-gradient-to-b from-amber-400 via-amber-400/40 to-transparent"
                />
              </div>

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group relative pl-10 md:pl-12"
                  >
                    {/* Node */}
                    <span
                      className={`absolute left-0 top-1.5 w-[15px] h-[15px] md:w-[19px] md:h-[19px] rounded-full border-2 flex items-center justify-center transition-all duration-500 bg-black ${
                        item.current
                          ? "border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.6)]"
                          : "border-slate-700 group-hover:border-amber-400 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.5)]"
                      }`}
                    >
                      {item.current ? (
                        <motion.span
                          animate={{
                            scale: [1, 1.4, 1],
                            opacity: [1, 0.6, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="w-2 h-2 rounded-full bg-amber-400"
                        />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-amber-400 transition-colors duration-500" />
                      )}
                    </span>

                    {/* Year + location + current badge */}
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-sm font-medium tracking-wider text-amber-400">
                        {item.year}
                      </span>

                      {item.current && (
                        <span className="text-[9px] tracking-[0.25em] uppercase text-black bg-amber-400 px-2 py-[3px] rounded-full font-semibold">
                          Current
                        </span>
                      )}

                      <span className="w-6 h-px bg-slate-700 group-hover:w-12 group-hover:bg-amber-400/50 transition-all duration-500" />
                      <span className="text-[10px] tracking-[0.2em] uppercase text-slate-500">
                        {item.location}
                      </span>
                    </div>

                    {/* Company */}
                    <h3 className="text-lg md:text-xl font-medium text-white group-hover:text-amber-400 transition-colors duration-500">
                      {item.company}
                    </h3>

                    {/* Role */}
                    <p className="text-sm text-amber-400/80 mt-1">
                      {item.role}
                    </p>

                    {/* Description */}
                    <p className="text-sm md:text-base text-slate-400 leading-relaxed mt-2.5 max-w-xl group-hover:text-slate-300 transition-colors duration-500">
                      {item.description}
                    </p>

                    {/* Divider */}
                    {index < timeline.length - 1 && (
                      <div className="mt-6 h-px bg-gradient-to-r from-slate-800 via-slate-800 to-transparent w-full" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
