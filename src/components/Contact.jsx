import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Calendar, Globe } from "lucide-react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    inquiryType: "",
    details: "",
  });

  const phoneNumber = "+971 54 285 5881";
  const email = "thanujadilshan1091rajapaksha@gmail.com";

  const inquiryTypes = [
    "Videography",
    "Video Editing",
    "Photography",
    "Graphic Design",
    "AI Video & Photo",
    "General Inquiry",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*Name:* ${formData.fullName}
*Phone:* ${formData.phone}
*Inquiry:* ${formData.inquiryType}
*Details:* ${formData.details}`;
    const encoded = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber.replace(/\s/g, "").replace("+", "")}?text=${encoded}`,
      "_blank",
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-black">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(251,191,36,0.06),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,255,255,0.02),transparent_55%)] pointer-events-none" />

      {/* ===== Heading ===== */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12"
      >
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
              Contact
            </span>
          </div>
        </motion.div>
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white"
        >
          Let's{" "}
          <span className="font-bold text-amber-400 italic">
            work together.
          </span>
        </motion.h2>
      </motion.div>

      {/* ===== Two columns on one canvas ===== */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* ================= LEFT — INFO ================= */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Let's start a<br />
              <span className="text-amber-400 font-semibold italic">
                conversation.
              </span>
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-10 max-w-sm">
              Have a project in mind? Reach out — I usually reply within 24
              hours.
            </p>

            {/* Contact rows */}
            <div className="space-y-7">
              <a
                href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                className="group flex items-center gap-5"
              >
                <Phone
                  size={18}
                  className="text-slate-500 group-hover:text-amber-400 transition-colors duration-300 flex-shrink-0"
                />
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-slate-500 mb-0.5">
                    Phone
                  </p>
                  <p className="text-base text-white group-hover:text-amber-400 transition-colors duration-300">
                    +971 54 285 5881
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${email}`}
                className="group flex items-center gap-5"
              >
                <Mail
                  size={18}
                  className="text-slate-500 group-hover:text-amber-400 transition-colors duration-300 flex-shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-slate-500 mb-0.5">
                    Email
                  </p>
                  <p className="text-base text-white group-hover:text-amber-400 transition-colors duration-300 break-all">
                    {email}
                  </p>
                </div>
              </a>

              <a
                href={`https://wa.me/${phoneNumber.replace(/\s/g, "").replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5"
              >
                <FaWhatsapp
                  size={18}
                  className="text-green-400 flex-shrink-0"
                />
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-slate-500 mb-0.5">
                    WhatsApp
                  </p>
                  <p className="text-base text-green-400 group-hover:text-green-300 transition-colors duration-300">
                    Chat now
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-5">
                <MapPin size={18} className="text-slate-500 flex-shrink-0" />
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-slate-500 mb-0.5">
                    Based in
                  </p>
                  <p className="text-base text-white">Abu Dhabi, UAE</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Al Wahda Mall area
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <Calendar size={18} className="text-slate-500 flex-shrink-0" />
                <div>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-slate-500 mb-0.5">
                    Born
                  </p>
                  <p className="text-base text-white">29 March 2001</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-12 pt-6 border-t border-slate-800/60">
              <p className="text-[10px] tracking-[0.25em] uppercase text-slate-500 mb-4">
                Follow
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/____4cus.by.kp.officially_"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group flex items-center gap-2 text-sm text-pink-500 hover:text-pink-400 transition-colors duration-300"
                >
                  <FaInstagram
                    size={24}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>

 

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/people/4CUS-BY-KP/61590682251142/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="group flex items-center gap-2 text-sm text-blue-600 hover:text-blue-500 transition-colors duration-300"
                >
                  <FaFacebookF
                    size={24}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
                {/* Portfolio */}
                <a
                  href="https://www.behance.net/gallery/218162807/Thanuja-Dilshan-Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Portfolio"
                  className="group flex items-center gap-2 text-sm text-white hover:text-blue-600 transition-colors duration-300"
                >
                  <Globe
                    size={24}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/thanuja-rajapaksha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group flex items-center gap-2 text-sm text-blue-700 hover:text-blue-600 transition-colors duration-300"
                >
                  <FaLinkedinIn
                    size={24}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
                
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT — FORM ================= */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-light text-white mb-3">
              Tell me about
              <br />
              <span className="text-amber-400 font-normal">your project.</span>
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-10 max-w-sm">
              Fill in the details and I'll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-7">
              {/* Name */}
              <div>
                <label className="block text-[10px] tracking-[0.25em] uppercase text-white/70 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full bg-transparent border-0 border-b border-slate-700 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[10px] tracking-[0.25em] uppercase text-white/70 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+971 ..."
                  className="w-full bg-transparent border-0 border-b border-slate-700 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
              {/* Service — chip buttons instead of dropdown */}
              <div>
                <label className="block text-[10px] tracking-[0.25em] uppercase text-white/70 mb-3">
                  Service
                </label>
                <div className="flex flex-wrap gap-2">
                  {inquiryTypes.map((type) => {
                    const isActive = formData.inquiryType === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            inquiryType: type,
                          }))
                        }
                        className={`px-3.5 py-1.5 rounded-full text-xs border transition-all duration-300 cursor-pointer ${
                          isActive
                            ? "bg-amber-400 text-black border-amber-400 font-medium"
                            : "bg-transparent text-slate-400 border-slate-700 hover:border-amber-400/40 hover:text-white"
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>

                {/* Hidden input so `required` still works on submit */}
                <input
                  type="text"
                  name="inquiryType"
                  value={formData.inquiryType}
                  required
                  readOnly
                  className="sr-only"
                  tabIndex={-1}
                />
              </div>

              {/* Details */}
              <div>
                <label className="block text-[10px] tracking-[0.25em] uppercase text-white/70 mb-2">
                  Project details
                </label>
                <textarea
                  name="details"
                  required
                  rows={3}
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and any references..."
                  className="w-full bg-transparent border-0 border-b border-slate-700 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-white/80 hover:text-amber-400 transition-colors duration-300 pt-2"
              >
                <FaWhatsapp size={18} className="text-green-400" />
                <span>Send via WhatsApp</span>
                <span className="w-6 h-px bg-white group-hover:w-10 group-hover:bg-amber-400 transition-all duration-500" />
              </button>

              <p className="text-[11px] text-slate-500 leading-relaxed pt-2">
                Your details stay private and are only used to reply to your
                inquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
