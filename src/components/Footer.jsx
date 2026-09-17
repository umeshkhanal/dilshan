// Footer.jsx
import React from "react";
import { ArrowUp, Phone, Mail, MapPin, Calendar, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  const sections = ["home", "about", "experience", "works", "contact"];
  const sectionNames = {
    home: "Home",
    about: "About",
    experience: "Experience",
    works: "Works",
    contact: "Contact",
  };

  const services = [
    "Video Production",
    "Photography",
    "Editing & Color",
    "Graphic Design",
    "Motion Graphics",
    "Animation",
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = window.innerWidth < 768 ? 40 : 0;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-slate-950 text-slate-400 pt-16 border-t border-slate-800">
      {/* Ambient amber glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-amber-400/5 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= TOP BRAND ================= */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 pb-12 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div className="h-12 md:h-14 flex items-center justify-center">
              <img
                src={assets.logo}
                alt="Thanuja Dilshan"
                className="w-full h-full object-contain p-1.5"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl md:text-2xl font-medium text-white tracking-wide">
                Thanuja Dilshan
              </h2>
              <p className="text-[10px] tracking-[0.3em] uppercase text-amber-400/70 mt-1">
                Visual Creative
              </p>
            </div>
          </div>

          <p className="text-sm md:text-base text-slate-500 max-w-md leading-relaxed">
            Videographer, editor, and visual storyteller — creating films,
            photography, and design that help brands and people tell their
            story.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 py-12">
          {/* ABOUT */}
          <div className="space-y-4">
            <span className="text-xs tracking-[0.25em] uppercase font-medium text-amber-400">
              About
            </span>
            <p className="text-sm text-slate-500 leading-relaxed">
              Based in Abu Dhabi, UAE. Working with brands, creators, and
              businesses worldwide on video, photo, and design projects.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="space-y-4">
            <span className="text-xs tracking-[0.25em] uppercase font-medium text-amber-400">
              Navigate
            </span>
            <div className="space-y-2 text-sm">
              {sections.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block text-slate-500 hover:text-amber-400 transition duration-300"
                >
                  {sectionNames[item]}
                </button>
              ))}
              <Link
                to="/works"
                className="block text-slate-500 hover:text-amber-400 transition duration-300"
              >
                Full Portfolio
              </Link>
            </div>
          </div>

          {/* SERVICES */}
          <div className="space-y-4">
            <span className="text-xs tracking-[0.25em] uppercase font-medium text-amber-400">
              Services
            </span>
            <div className="space-y-2 text-sm text-slate-500">
              {services.map((s) => (
                <p key={s}>{s}</p>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="space-y-4">
            <span className="text-xs tracking-[0.25em] uppercase font-medium text-amber-400">
              Contact
            </span>

            <div className="space-y-3 text-sm">
              {/* Phone */}
              <a
                href="tel:+971542855881"
                className="flex items-start gap-2 text-slate-500 hover:text-amber-400 transition group"
              >
                <Phone size={14} className="text-amber-400/60 mt-0.5 flex-shrink-0" />
                <span>+971 54 285 5881</span>
              </a>

              {/* Email */}
              <a
                href="mailto:thanujadilshan1091rajapaksha@gmail.com"
                className="flex items-start gap-2 text-slate-500 hover:text-amber-400 transition group break-all"
              >
                <Mail size={14} className="text-amber-400/60 mt-0.5 flex-shrink-0" />
                <span>thanujadilshan1091rajapaksha@gmail.com</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/971542855881"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-slate-500 hover:text-amber-400 transition group"
              >
                <FaWhatsapp size={14} className="text-amber-400/60 mt-0.5 flex-shrink-0" />
                <span>Chat now</span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-2 text-slate-500">
                <MapPin size={14} className="text-amber-400/60 mt-0.5 flex-shrink-0" />
                <div className="leading-snug">
                  <p className="text-slate-400">Abu Dhabi, UAE</p>
                  <p className="text-slate-600 text-xs mt-0.5">Al Wahda Mall area</p>
                </div>
              </div>

              {/* Born */}
              <div className="flex items-start gap-2 text-slate-500">
                <Calendar size={14} className="text-amber-400/60 mt-0.5 flex-shrink-0" />
                <div className="leading-snug">
                  <p className="text-slate-400">29 March 2001</p>
                  <p className="text-slate-600 text-xs mt-0.5">Born</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-slate-800 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-3">
          <p>
            &copy; {new Date().getFullYear()} Thanuja Dilshan. All rights reserved.
          </p>

       
        </div>
      </div>
    </footer>
  );
};

export default Footer;