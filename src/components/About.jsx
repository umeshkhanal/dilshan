import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { Camera, PenTool, Scissors, Sparkles, Video } from "lucide-react";

const About = () => {
  const education = [
    {
      year: "2007 - 2020",
      degree: "O/L & A/L",
      school: "A/Basthiyansilwa Maha Viduhala",
    },
    {
      year: "2021 - 2023",
      degree: "Higher Diploma in Multimedia",
      school: "Wijaya Graphics, Sri Lanka",
    },
  ];

  const skills = [
    { name: "Cinematography", level: 95 },
    { name: "Video Editing", level: 92 },
    { name: "Color Grading", level: 88 },
    { name: "Motion Graphics", level: 85 },
    { name: "Photography", level: 90 },
    { name: "Graphic Design", level: 80 },
  ];

  const expertise = [
    {
      icon: Video,
      title: "Videography",
      focus: "Cinematic films & brand content",
    },
    {
      icon: Scissors,
      title: "Video Editing",
      focus: "Cut, pace, sound & delivery",
    },
    {
      icon: Camera,
      title: "Photography",
      focus: "Portrait, event & commercial",
    },
    {
      icon: PenTool,
      title: "Graphic Design",
      focus: "Branding, layouts & visuals",
    },
    {
      icon: Sparkles,
      title: "AI Video & Photo",
      focus: "Generative & enhanced media",
    },
  ];

  const tools = [
    "Premiere Pro",
    "After Effects",
    "DaVinci Resolve",
    "Photoshop",
    "Lightroom",
    "Illustrator",
    "Figma",
    "Blender",
  ];

  const platforms = [
    { name: "YouTube", role: "Content Production" },
    { name: "Instagram", role: "Reels & Short Form" },
    { name: "Vimeo", role: "Film Showcase" },
    { name: "Behance", role: "Design Portfolio" },
  ];

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-slate-950">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* ============ HEADING ============ */}
        <motion.div variants={itemVariants} className="mb-16">
          <span className="text-xs font-medium tracking-[0.35em] text-amber-400 uppercase">
            About
          </span>
          <div className="w-12 h-0.5 bg-amber-400/40 mt-2 mb-6" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.15] text-white">
            Thanuja Dilshan —{" "}
            <span className="font-bold text-amber-400 italic">
              Visual Storyteller
            </span>
          </h2>
        </motion.div>

        {/* ============ INTRO + PORTRAIT ============ */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-24">
          {/* Portrait */}
          <motion.div
            variants={imageVariants}
            className="lg:col-span-2 relative"
          >
            <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden bg-slate-800">
              <img
                src={assets.photo}
                alt="Thanuja Dilshan"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />

              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-amber-400/20" />

              <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5">
                <p className="text-white text-sm sm:text-base font-medium">
                  Thanuja Dilshan
                </p>

                <p className="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-amber-400/80 mt-1">
                  Videographer
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-5">
              Hi, I'm Thanuja Dilshan.
              <br />
              <span className="text-amber-400 font-semibold italic">
                I turn moments into films.
              </span>
            </h3>

            <div className="space-y-4 text-slate-300 leading-relaxed text-base">
              <p>
                I'm a videographer, editor, and self-taught graphic designer
                with a passion for creating visuals that tell compelling
                stories. I work across video, photography, and design, turning
                ideas into engaging content for brands, social media, and
                digital platforms.
              </p>

              <p>
                From editing fast-paced social content to developing brand
                visuals, I combine creativity with precision and a strong eye
                for detail. Skilled in Adobe Illustrator, Photoshop, After
                Effects, Premiere Pro, and CapCut, I bring fresh ideas, speed,
                and thoughtful visual storytelling to every project.
              </p>
            </div>

            {/* ============ EDUCATION ============ */}
            <motion.div variants={itemVariants} className="pt-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-8">
                Education &{" "}
                <span className="text-amber-400 font-semibold italic">
                  Certificates
                </span>
              </h3>

              <div className="border-t border-slate-700/50">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 items-baseline py-6 border-b border-slate-700/50 transition-colors duration-500 hover:border-amber-400/40 active:border-amber-400/40"
                  >
                    {/* Gold slide-in bar — animates in on scroll, stays on hover/active */}
                    <motion.span
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.12 + 0.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute left-0 top-0 bottom-0 w-0.5 bg-amber-400 origin-top transition-transform duration-500 group-hover:scale-y-100 group-active:scale-y-100"
                    />

                    {/* Year */}
                    <div className="md:col-span-3 pl-4 md:pl-5">
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.12 + 0.15,
                        }}
                        className="text-xs tracking-[0.2em] uppercase text-amber-400/70 font-medium transition-colors duration-500 group-hover:text-amber-400 group-active:text-amber-400"
                      >
                        {item.year}
                      </motion.span>
                    </div>

                    {/* Degree */}
                    <div className="md:col-span-5 pl-4 md:pl-0">
                      <h4 className="text-base md:text-lg font-medium text-white transition-colors duration-500 group-hover:text-amber-400 group-active:text-amber-400">
                        {item.degree}
                      </h4>
                    </div>

                    {/* School */}
                    <div className="md:col-span-4 pl-4 md:pl-0 md:text-right">
                      <p className="text-sm text-slate-400 transition-colors duration-500 group-hover:text-slate-300 group-active:text-slate-300">
                        {item.school}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ============ AREA OF EXPERTISE ============ */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-10">
            Area of{" "}
            <span className="text-amber-400 font-semibold italic">
              Expertise
            </span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-6 lg:gap-4">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex flex-col items-center text-center"
                >
                  {/* Big icon — no box */}
                  <div className="relative mb-5">
                    {/* Amber glow behind on hover */}
                    <span className="absolute inset-0 rounded-full bg-amber-400/0 group-hover:bg-amber-400/10 blur-2xl transition-all duration-500" />

                    <Icon
                      size={40}
                      strokeWidth={1.2}
                      className="relative text-slate-400 transition-all duration-500 group-hover:text-amber-400 group-hover:-translate-y-1"
                    />
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-medium text-white mb-1.5 transition-colors duration-500 group-hover:text-amber-400">
                    {item.title}
                  </h4>

                  {/* Focus */}
                  <p className="text-xs text-slate-500 leading-relaxed transition-colors duration-500 group-hover:text-slate-400 max-w-[180px]">
                    {item.focus}
                  </p>

                  {/* Small gold underline on hover */}
                  <span className="mt-3 h-px w-0 bg-amber-400 group-hover:w-8 transition-all duration-500" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        {/* ============ SKILLS / TOOLS / PLATFORMS ============ */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-12">
            Skills, Tools &{" "}
            <span className="text-amber-400 font-semibold italic">
              Platforms
            </span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-12">
            {/* ============ SKILLS ============ */}
            <div>
              <div className="flex items-center gap-3 mb-7">
                <span className="w-6 h-px bg-amber-400" />
                <h4 className="text-sm tracking-[0.25em] uppercase text-white">
                  Skills
                </h4>
                <span className="text-xs text-slate-500 ml-auto">
                  {skills.length} areas
                </span>
              </div>

              <div className="space-y-6">
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-sm text-slate-300 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-xs font-medium text-amber-400/70 group-hover:text-amber-400 transition-colors duration-300 tabular-nums">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative h-1 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.4,
                          delay: 0.2 + i * 0.1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 rounded-full"
                      >
                        {/* Shine sweep on the bar */}
                        <motion.span
                          initial={{ x: "-100%" }}
                          whileInView={{ x: "200%" }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.6,
                            delay: 1.2 + i * 0.1,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-y-0 w-8 bg-white/40 blur-sm"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ============ TOOLS ============ */}
            <div>
              <div className="flex items-center gap-3 mb-7">
                <span className="w-6 h-px bg-amber-400" />
                <h4 className="text-sm tracking-[0.25em] uppercase text-white">
                  Tools
                </h4>
                <span className="text-xs text-slate-500 ml-auto">
                  {tools.length} apps
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {tools.map((tool, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 12, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.45,
                      delay: i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileTap={{ scale: 0.92 }}
                    className="group relative px-4 py-2 text-sm text-slate-300 bg-slate-800/60 border border-slate-700/50 rounded-full transition-all duration-300 cursor-default hover:border-amber-400/60 hover:text-amber-400 hover:bg-slate-800 hover:shadow-[0_0_20px_rgba(251,191,36,0.15)] hover:-translate-y-0.5"
                  >
                    <span className="relative z-10">{tool}</span>
                    {/* Subtle glow dot */}
                    <span className="absolute inset-0 rounded-full ring-0 group-hover:ring-1 group-hover:ring-amber-400/20 transition-all duration-500" />
                  </motion.span>
                ))}
              </div>

              <p className="text-xs text-slate-500 leading-relaxed mt-6">
                Full pipeline coverage — from capture and edit to color, sound,
                and delivery.
              </p>
            </div>

            {/* ============ PLATFORMS ============ */}
            <div>
              <div className="flex items-center gap-3 mb-7">
                <span className="w-6 h-px bg-amber-400" />
                <h4 className="text-sm tracking-[0.25em] uppercase text-white">
                  Platforms
                </h4>
                <span className="text-xs text-slate-500 ml-auto">
                  {platforms.length} channels
                </span>
              </div>

              <div className="space-y-2.5">
                {platforms.map((platform, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex items-center justify-between p-4 rounded-xl border border-slate-700/40 transition-all duration-500 hover:border-amber-400/40 hover:bg-slate-800/50 cursor-default overflow-hidden"
                  >
                    {/* Gold left bar */}
                    <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-amber-400 scale-y-0 group-hover:scale-y-100 origin-center transition-transform duration-500" />

                    <span className="relative z-10 text-base text-white group-hover:text-amber-400 transition-colors duration-500">
                      {platform.name}
                    </span>
                    <span className="relative z-10 text-xs text-slate-500 group-hover:text-amber-400/80 transition-colors duration-500">
                      {platform.role}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
