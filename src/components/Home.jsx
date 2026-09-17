import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { Link } from "react-scroll";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";

const Home = () => {
  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    satisfaction: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 },
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { experience: 8, projects: 320, satisfaction: 99 };
    const duration = 2200;
    const steps = 70;
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        experience: Math.min(
          Math.round(progress * targets.experience),
          targets.experience,
        ),
        projects: Math.min(
          Math.round(progress * targets.projects),
          targets.projects,
        ),
        satisfaction: Math.min(
          Math.round(progress * targets.satisfaction),
          targets.satisfaction,
        ),
      });

      if (currentStep >= steps) clearInterval(timer);
    }, interval);
  };

  // Framer Motion Variants — cinematic, slow reveals
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-4 sm:px-6 lg:px-8 pt-32 "
    >
      {/* Mobile background — cinematic dark grade */}
      <div className="absolute inset-0 lg:hidden overflow-hidden">
        <motion.img
          src={assets.photo}
          alt=""
          className="w-full h-full object-cover"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

        {/* Slow cinematic light sweep */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ x: ["-120%", "120%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-yellow-300/6 to-transparent transform -skew-x-12" />
        </motion.div>

        {/* Subtle vignette pulse */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]" />
        </motion.div>
      </div>

      {/* Desktop background — cinematic dark grade */}
      <div className="hidden absolute inset-0 lg:flex overflow-hidden">
        <motion.img
          src={assets.bg}
          alt=""
          className="w-full h-full object-cover"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-black/85" />

        {/* Slow cinematic light sweep */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ x: ["-120%", "120%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-yellow-300/6 to-transparent transform -skew-x-12" />
        </motion.div>

        {/* Subtle vignette pulse */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]" />
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Text content */}
        <motion.div
          className="text-left relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Minimal label — single line, no bullet clutter */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="text-[10px] md:text-xs font-medium tracking-[0.35em] text-white/50 uppercase">
              Videographer · Editor · Graphic Designer
            </span>
          </motion.div>

          {/* Name — cinematic scale */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-5xl sm:text-8xl font-light leading-[0.95] text-white">
              <span className="font-semibold block">Thanuja <span className="italic font-bold text-amber-400"> Dilshan</span></span>
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-white/40 block mt-4 tracking-wide italic">
                Visual Storyteller
              </span>
            </h1>
          </motion.div>

          {/* Thin divider — like a film strip line */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-12 h-px bg-amber-400/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
            <span className="flex-1 h-px bg-gradient-to-r from-amber-400/40 to-transparent max-w-[80px]" />
          </motion.div>

          {/* Supporting line */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl font-light text-white/80 mb-6 leading-relaxed max-w-lg"
          >
            Every frame tells a story.{" "}
            <span className="text-amber-400/90 font-semibold italic">
              I make yours unforgettable.
            </span>
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-white/50 leading-relaxed max-w-md mb-10 md:mb-14"
          >
            I craft compelling visuals through videography, photography, and
            graphic design, turning ideas into engaging stories for brands,
            social media, and digital platforms.
          </motion.p>
          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-3 sm:gap-4 mb-12 md:mb-16 w-full max-w-md"
          >
            <Link
              to="contact"
              smooth={true}
              duration={700}
              offset={-40}
              className="group relative w-full px-4 sm:px-8 py-3.5 sm:py-4 bg-amber-400 text-black text-sm sm:text-base font-semibold rounded-full cursor-pointer transition-all duration-500 hover:bg-amber-300 hover:shadow-2xl hover:shadow-amber-400/20 hover:-translate-y-0.5 active:scale-95"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Contact Me
                <ArrowUpRight
                  size={18}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
              </span>
            </Link>

            <Link
              to="works"
              smooth={true}
              duration={700}
              offset={-40}
              className="group w-full px-4 sm:px-8 py-3.5 sm:py-4 text-white text-sm sm:text-base font-medium rounded-full border border-white/20 cursor-pointer transition-all duration-500 hover:border-amber-400/60 hover:bg-white/5 hover:-translate-y-0.5 active:scale-95"
            >
              <span className="relative z-10 flex items-center justify-center">
                View Work
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Portrait — Desktop only, cinematic ring */}
        <div className="hidden lg:flex justify-center items-center relative">
          <div className="relative w-full max-w-md lg:max-w-lg">
            {/* Deep glow */}
            <div className="absolute w-136 h-136 rounded-full bg-amber-400/10 blur-3xl animate-[pulse_5s_ease-in-out_infinite]" />

            {/* Expanding rings — like lens flares */}
            <div className="absolute w-124 h-124 rounded-full border border-white/8 animate-[ping_5s_ease-out_infinite]" />
            <div
              className="absolute w-124 h-124 rounded-full border border-amber-400/30 animate-[ping_5s_ease-out_infinite_2s]"
              style={{ animationDelay: "2s" }}
            />

            {/* Slow rotating ring */}
            <div className="absolute w-122 h-122 rounded-full border border-dashed border-white/10 animate-[spin_20s_linear_infinite]" />

            {/* Portrait container */}
            <div
              className="relative w-120 h-120 rounded-full overflow-hidden bg-black"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.08), 0 40px 80px -20px rgba(0,0,0,0.8)",
              }}
            >
              <img
                src={assets.photo}
                alt="Thanuja Dilshan — Photographer, Videographer & Designer"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />

              {/* Cinematic grade overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Light sweep — cinematic */}
              <motion.div
                className="absolute inset-0 pointer-events-none mix-blend-soft-light"
                animate={{ x: ["-120%", "120%"] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12" />
              </motion.div>

              {/* Thin amber ring */}
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-amber-400/20" />
            </div>

            {/* Minimal name badge */}
            <div className="absolute bottom-8 right-8 bg-black/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10">
              <span className="text-sm font-medium text-white">Thanuja Dilshan</span>
              <span className="text-xs text-white/40 mx-1.5">·</span>
              <span className="text-xs text-white/40">Filmmaker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
