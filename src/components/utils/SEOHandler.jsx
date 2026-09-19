// SEOHandler.jsx
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SEO_MAP = {
  "/": {
    title: "Thanuja Dilshan | Visual Storyteller — Video, Photo & Design",
    description:
      "Thanuja Dilshan — Videographer, editor, and visual storyteller based in Abu Dhabi. Creating films, photography, motion graphics, and design that help brands tell their story.",
    keywords:
      "Thanuja Dilshan, videographer Abu Dhabi, video editor UAE, photographer, motion graphics, visual storyteller, content production, cinematography, video production, graphic design",
  },

  "/works": {
    title: "Portfolio | Thanuja Dilshan — Selected Video & Photo Work",
    description:
      "Explore the full portfolio of Thanuja Dilshan — automotive films, event coverage, fashion editorials, and brand storytelling through video and photography.",
    keywords:
      "Thanuja Dilshan portfolio, video portfolio Abu Dhabi, photography portfolio, event videography, automotive films, fashion photography, brand content UAE",
  },

};

export default function SEOHandler() {
  const location = useLocation();
  const path = location.pathname;

  const seo = SEO_MAP[path] || SEO_MAP["/"];

  const baseUrl = "https://thanujadilshan.vercel.app";
  const url = `${baseUrl}${path}`;

  const { title, description, keywords } = seo;
  const image = `${baseUrl}/preview.png`;

  // STRUCTURED DATA — Person + ProfessionalService
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Thanuja Dilshan",
    alternateName: "Thanuja Dilshan Rajapaksha",
    url: baseUrl,
    image: image,
    description:
      "Videographer, editor, and visual storyteller based in Abu Dhabi, UAE — specializing in video production, photography, editing, graphic design, motion graphics, and animation.",
    jobTitle: "Videographer & Visual Storyteller",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abu Dhabi",
      addressCountry: "AE",
    },
    areaServed: "Worldwide",
    telephone: "+971542855881",
    email: "thanujadilshan1091rajapaksha@gmail.com",
    nationality: {
      "@type": "Country",
      name: "Sri Lanka",
    },
    knowsAbout: [
      "Videography",
      "Photography",
      "Video Editing",
      "Graphic Design",
      "Motion Graphics",
      "Animation",
      "Color Grading",
      "Content Production",
    ],
    sameAs: [
      // Add your social profiles when ready
      // "https://instagram.com/yourhandle",
      // "https://youtube.com/@yourchannel",
      // "https://vimeo.com/yourhandle",
    ],
  };

  return (
    <Helmet key={path}>
      {/* ================= BASIC SEO ================= */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Umesh Khanal" />
      <meta
        name="generator"
        content="React | Developed by Umesh Khanal"
      />

      {/* ================= GEO TARGETING ================= */}
      <meta name="geo.region" content="AE-AZ" />
      <meta name="geo.placename" content="Abu Dhabi, United Arab Emirates" />

      {/* ================= OPEN GRAPH ================= */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Thanuja Dilshan" />
      <meta property="og:locale" content="en_US" />

      {/* ================= TWITTER ================= */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* ================= CANONICAL ================= */}
      <link rel="canonical" href={url} />

      {/* ================= STRUCTURED DATA ================= */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>

      {/* ================= ROBOTS ================= */}
      <meta name="robots" content="index, follow" />

      {/* ================= VIEWPORT ================= */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* ================= THEME COLOR ================= */}
      <meta name="theme-color" content="#020617" />

      {/* ================= LANGUAGE ================= */}
      <meta httpEquiv="Content-Language" content="en" />
    </Helmet>
  );
}
