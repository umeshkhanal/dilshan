// NavBar.jsx — fixed
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { assets } from "../assets/assets";

export default function NavBar() {
  const sections = ["home", "about", "experience", "works", "contact"];
  const [active, setActive] = useState("home");

  const navigate = useNavigate();
  const location = useLocation();

  // ================= SCROLL FUNCTION =================
  const scrollToSection = (id) => {
    const doScroll = () => {
      const el = document.getElementById(id);
      if (!el) return;

      const offset = window.innerWidth < 768 ? 40 : 0;
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({ top: y, behavior: "smooth" });
    };

    if (location.pathname !== "/") {
      navigate("/");

      const waitForElement = () => {
        const el = document.getElementById(id);
        if (el) doScroll();
        else requestAnimationFrame(waitForElement);
      };

      requestAnimationFrame(waitForElement);
    } else {
      doScroll();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let current = null;
      const contactEl = document.getElementById("contact");

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
          current = section;
        }
      });

      if (contactEl) {
        const contactRect = contactEl.getBoundingClientRect();
        if (contactRect.top <= viewportCenter) current = "contact";
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      {/* ================= TOP BAR ================= */}
      <div className="max-w-7xl mx-auto px-2 h-16 flex items-center justify-between gap-3">
        {/* LOGO */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 sm:gap-3 select-none cursor-pointer min-w-0"
        >
          <img
            src={assets.logo}
            alt="Thanuja Dilshan Logo"
            className="h-7 sm:h-9 w-auto object-contain flex-shrink-0"
          />
          <div className="flex flex-col leading-none w-fit min-w-0">
            <span className="text-sm sm:text-base font-medium tracking-wider text-slate-800 whitespace-nowrap">
              Thanuja Dilshan
            </span>
            <span className=" text-[8px] tracking-[0.3em] uppercase text-slate-400 mt-0.5 whitespace-nowrap">
              Visual Creative
            </span>
          </div>
        </div>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden lg:flex items-center gap-8 text-sm">
          {sections.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className={`relative transition cursor-pointer font-light ${
                  active === item
                    ? "text-slate-900"
                    : "text-slate-700 hover:text-slate-900"
                }`}
              >
                {item === "home" && "Home"}
                {item === "about" && "About"}
                {item === "experience" && "Experience"}
                {item === "works" && "Works"}
                {item === "contact" && "Contact"}

                {active === item && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-slate-950 rounded-full" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* ================= CTA ================= */}
        <div className="flex items-center flex-shrink-0">
          <Link
            to="/works"
            className="
              inline-flex items-center
              px-3 sm:px-5 py-1.5 sm:py-2
              text-[10px] sm:text-xs font-medium
              text-white bg-slate-900 rounded-full
              hover:bg-slate-800
              transition cursor-pointer
              whitespace-nowrap
            "
          >
            Explore Work
          </Link>
        </div>
      </div>

      {/* ================= MOBILE PILLS ================= */}
      <div className="lg:hidden border-t border-slate-200 py-2 bg-white">
        <div className="flex justify-center  gap-2 px-4 no-scrollbar">
          {sections.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`
                whitespace-nowrap flex-shrink-0
                px-3 py-1.5 rounded-full text-xs border
                transition cursor-pointer
                ${
                  active === item
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50 hover:text-slate-800"
                }
              `}
            >
              {item === "home" && "Home"}
              {item === "about" && "About"}
              {item === "experience" && "Experience"}
              {item === "works" && "Works"}
              {item === "contact" && "Contact"}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}