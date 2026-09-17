// Works.jsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

/* ==================================================================== */
/*  FEATURED WORK — 3 real assets
 * ==================================================================== */

const FEATURED_WORK = [
  {
    id: "work-1",
    title: "Automotive Detailing Film",
    subtitle: "Car Care",
    tag: "Video",
    src: assets?.care03,      // ← should be a .mp4 / .webm
    poster: null,             // optional: add a thumbnail image if you have one
  },
  {
    id: "work-2",
    title: "Brand Story & Event Coverage",
    subtitle: "Events",
    tag: "Video",
    src: assets?.e2,
    poster: null,
  },
  {
    id: "work-3",
    title: "Fashion Editorial",
    subtitle: "Fashion",
    tag: "Video",
    src: assets?.f3,
    poster: null,
  },
];

/* ==================================================================== */
/*  MEDIA — renders <video> or <img> depending on tag
 * ==================================================================== */

const Media = ({ item }) => {
  const videoRef = useRef(null);
  const [hover, setHover] = useState(false);

  if (item.tag === "Video") {
    return (
      <video
        ref={videoRef}
        src={item.src}
        poster={item.poster || undefined}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
      />
    );
  }

  return (
    <img
      src={item.src}
      alt={item.title}
      loading="lazy"
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
    />
  );
};

/* ==================================================================== */
/*  MAIN
 * ==================================================================== */

const Works = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="works" className="py-24 md:py-32 bg-slate-950">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* ============ HEADING ============ */}
        <motion.div
          variants={itemVariants}
          className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <span className="text-xs font-medium tracking-[0.35em] text-amber-400 uppercase">
              Selected Work
            </span>
            <div className="w-12 h-0.5 bg-amber-400/40 mt-2 mb-6" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.15] text-white">
              Some of My{" "}
              <span className="font-bold text-amber-400 italic">Work</span>
            </h2>
            <p className="text-slate-400 mt-5 max-w-2xl leading-relaxed">
              I work across video production, photography, editing and graphic
              design, motion graphics, and animation — turning ideas into
              visuals that tell a story. Here are a few recent pieces.
            </p>
          </div>

          <Link
            to="/works"
            className="group hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-full border border-amber-400/40 text-amber-400 text-sm font-medium hover:bg-amber-400 hover:text-slate-950 transition-all duration-300 whitespace-nowrap"
          >
            View Full Portfolio
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* ============ FEATURED GRID ============ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {FEATURED_WORK.map((item, i) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900 ring-1 ring-inset ring-slate-700/40 hover:ring-amber-400/50 transition-all duration-500 hover:shadow-[0_20px_50px_-15px_rgba(251,191,36,0.3)]"
            >
              <Media item={item} />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500 pointer-events-none" />

              {/* Tag */}
              <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-[9px] tracking-[0.2em] uppercase text-amber-400/90 font-medium">
                {item.tag}
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-amber-400 text-[10px] tracking-[0.25em] uppercase font-medium mb-2">
                  {item.subtitle}
                </p>
                <h3 className="text-white text-lg font-semibold leading-tight">
                  {item.title}
                </h3>
              </div>

              {/* Corner icon */}
              <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-amber-400/90 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg shadow-amber-400/40">
                {item.tag === "Video" ? (
                  <Play
                    size={13}
                    className="text-slate-950 ml-0.5"
                    fill="currentColor"
                  />
                ) : (
                  <Camera size={14} className="text-slate-950" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ============ MOBILE CTA ============ */}
        <motion.div variants={itemVariants} className="sm:hidden mt-10">
          <Link
            to="/works"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-amber-400/40 text-amber-400 text-sm font-medium hover:bg-amber-400 hover:text-slate-950 transition-all duration-300"
          >
            View Full Portfolio <ArrowRight size={16} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Works;