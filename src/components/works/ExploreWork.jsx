// ExploreWork.jsx
import React from "react";
import { motion } from "framer-motion";
import ContentProductionGallery from "./ContentProductionGallery";

const ExploreWork = () => {
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
    <main
      id="explore-work"
      className="min-h-screen bg-black pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          
          {/* ============ PAGE HEADING ============ */}
          <motion.div variants={itemVariants} className="mb-16">
            <span className="text-xs font-medium tracking-[0.35em] text-amber-400 uppercase">
              All Work
            </span>
            <div className="w-12 h-0.5 bg-amber-400/40 mt-2 mb-6" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.15] text-white">
              Explore Every{" "}
              <span className="font-bold text-amber-400 italic">Project</span>
            </h1>
            <p className="text-slate-400 mt-4 max-w-2xl text-base leading-relaxed">
              The complete library — filtered by category. Browse films,
              photography, and design work produced for brands across
              automotive, hospitality, fashion, real estate, and more. Click any
              tile to open the immersive viewer.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-slate-500">Categories</span>
                <span className="text-white font-medium">8</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-slate-500">Media Types</span>
                <span className="text-white font-medium">
                  Video · Photo · Design
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-slate-500">Viewer</span>
                <span className="text-white font-medium">
                  Zoom · Swipe · Keys
                </span>
              </div>
            </div>
          </motion.div>
          {/* ============ GALLERY ============ */}
          <motion.div variants={itemVariants}>
            <ContentProductionGallery />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default ExploreWork;
