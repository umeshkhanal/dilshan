/* ==================================================================== */
/*  CONTENT PRODUCTION GALLERY COMPONENT — Dark Amber Theme
 * ==================================================================== */

import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
  lazy,
  Suspense,
} from "react";
import {
  motion,
  AnimatePresence,
  LayoutGroup,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  Car,
  Shield,
  Utensils,
  Layout,
  Home,
  Calendar,
  X,
  Play,
  Image as ImageIcon,
  Coffee,
  Shirt,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Loader2,
  Megaphone,
} from "lucide-react";
import { GALLERY_DATA } from "./GalleryData";

const CONTENT_CATEGORIES = [
  { id: "car-care", label: "Car Care", icon: Shield },
  { id: "marketing", label: "Marketing", icon: Megaphone },
  { id: "car-rentals", label: "Car Rentals", icon: Car },
  { id: "coffee", label: "Coffee", icon: Coffee },
  { id: "restaurants", label: "Restaurants", icon: Utensils },
  { id: "fashion", label: "Fashion", icon: Shirt },
  { id: "events", label: "Events", icon: Calendar },
  { id: "real-estate", label: "Real Estate", icon: Home },
];

/* ---------- DATA ENRICHMENT (unchanged) ---------- */

const slugify = (str) =>
  String(str || "item")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const enrichGalleryData = (data) => {
  const enriched = {};
  Object.keys(data).forEach((catKey) => {
    const catData = data[catKey];
    const next = { ...catData };

    if (Array.isArray(catData.categories)) {
      next.categories = catData.categories.map((sub) => ({
        ...sub,
        items: (sub.items || []).map((item, idx) => ({
          ...item,
          id: item.id || `${catKey}__${sub.id}__${idx}__${slugify(item.title)}`,
        })),
      }));
    } else if (Array.isArray(catData.items)) {
      next.items = catData.items.map((item, idx) => ({
        ...item,
        id: item.id || `${catKey}__root__${idx}__${slugify(item.title)}`,
      }));
    }

    enriched[catKey] = next;
  });
  return enriched;
};

const ENRICHED_GALLERY_DATA = enrichGalleryData(GALLERY_DATA);

const getAllItems = (categoryData) => {
  if (!categoryData) return [];
  if (categoryData.items) return categoryData.items;
  if (categoryData.categories) {
    return categoryData.categories.flatMap((cat) => cat.items || []);
  }
  return [];
};

/* ---------- MASONRY PATTERNS (unchanged) ---------- */

const PATTERN_SEQUENCE = [
  "portrait",
  "square",
  "landscape",
  "square",
  "tall",
  "portrait",
  "wide",
  "square",
  "landscape",
  "portrait",
  "square",
  "tall",
];

const getCardPattern = (index, type) => {
  if (index === 0) return "large";
  let pattern = PATTERN_SEQUENCE[(index - 1) % PATTERN_SEQUENCE.length];
  if (type === "video" && pattern === "tall") pattern = "landscape";
  return pattern;
};

const getPatternClasses = (pattern) => {
  switch (pattern) {
    case "portrait":
      return "col-span-1 row-span-2";
    case "landscape":
      return "col-span-2 row-span-1";
    case "square":
      return "col-span-1 row-span-1";
    case "tall":
      return "col-span-1 row-span-3";
    case "large":
      return "col-span-2 row-span-2";
    case "wide":
      return "col-span-2 row-span-1";
    default:
      return "col-span-1 row-span-1";
  }
};

/* ---------- LAZY LOAD HOOK (unchanged) ---------- */

const useIntersectionObserver = (ref, options = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px", ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref, options]);

  return isVisible;
};

/* ==================================================================== */
/*  GalleryMedia — themed error state
 * ==================================================================== */

const GalleryMedia = ({ item, hasError, onError, videoRef }) => {
  const mediaRef = useRef(null);
  const isVisible = useIntersectionObserver(mediaRef);

  if (item.type === "video") {
    return (
      <video
        ref={(el) => {
          videoRef.current = el;
          mediaRef.current = el;
        }}
        src={isVisible ? item.src : undefined}
        poster={isVisible ? item.thumb : undefined}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        muted
        loop
        playsInline
        preload="metadata"
      />
    );
  }

  if (hasError || !item.src) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-slate-600 bg-gradient-to-br from-amber-400/5 to-transparent">
        <ImageIcon size={24} />
        <span className="text-[9px] mt-1 text-slate-700">Unavailable</span>
      </div>
    );
  }

  return (
    <motion.img
      ref={mediaRef}
      layoutId={`media-${item.id}`}
      src={isVisible ? item.src : undefined}
      alt={item.title}
      loading="lazy"
      onError={onError}
      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
    />
  );
};

/* ==================================================================== */
/*  GalleryCard — dark amber theme
 * ==================================================================== */

const GalleryCard = ({
  item,
  index,
  patternClass,
  hasError,
  onImageError,
  onClick,
}) => {
  const videoRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);

  const rotateX = useSpring(rotateXRaw, { stiffness: 300, damping: 22 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 300, damping: 22 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateYRaw.set(px * 8);
    rotateXRaw.set(py * -8);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (
      item.type === "video" &&
      videoRef.current &&
      videoRef.current.readyState >= 2
    ) {
      videoRef.current.currentTime = 0;
      const p = videoRef.current.play();
      if (p && p.catch) p.catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    rotateXRaw.set(0);
    rotateYRaw.set(0);
    if (item.type === "video" && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const getMediaLabel = () => {
    if (item.type === "video") return "VIDEO";
    if (item.type === "design") return "DESIGN";
    return "PHOTO";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{
        duration: 0.4,
        delay: (index % 12) * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      whileTap={{ scale: 0.98 }}
      className={`group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer ring-1 ring-inset ring-slate-700/40 transition-all duration-300 hover:ring-amber-400/50 hover:shadow-[0_20px_50px_-15px_rgba(251,191,36,0.3)] ${patternClass}`}
    >
      <GalleryMedia
        item={item}
        hasError={hasError}
        onError={onImageError}
        videoRef={videoRef}
      />

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent opacity-40 group-hover:opacity-90 transition-opacity duration-300" />

      {/* Hover content */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-2.5 sm:p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-white text-[11px] sm:text-sm font-semibold leading-tight truncate">
          {item.title}
        </p>
        <p className="text-amber-400/80 text-[9px] sm:text-[11px] mt-0.5 tracking-wide">
          {getMediaLabel()}
        </p>
      </div>

      {/* Type badge */}
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex items-center gap-1.5">
        {item.type === "video" && (
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              isHovering ? "bg-amber-400 animate-pulse" : "bg-white/50"
            }`}
          />
        )}
        <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-[7px] sm:text-[9px] font-semibold tracking-wide border border-white/10">
          {getMediaLabel()}
        </span>
      </div>

      {/* Open icon */}
      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-amber-400/90 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg shadow-amber-400/40">
        <Maximize2 size={12} className="text-slate-950 sm:w-3.5 sm:h-3.5" />
      </div>

      {/* Video play button */}
      {item.type === "video" && (
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-200 ${
            isHovering ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <Play
              size={16}
              className="sm:w-5 sm:h-5 text-white ml-0.5"
              fill="currentColor"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

/* ==================================================================== */
/*  ViewerControls — amber hover
 * ==================================================================== */

const ViewerControls = ({ onPrev, onNext, className = "" }) => (
  <>
    <button
      onClick={(e) => {
        e.stopPropagation();
        onPrev();
      }}
      className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:text-amber-400 hover:bg-black/70 hover:border-amber-400/40 transition-all duration-300 ${className}`}
    >
      <ChevronLeft size={20} />
    </button>
    <button
      onClick={(e) => {
        e.stopPropagation();
        onNext();
      }}
      className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:text-amber-400 hover:bg-black/70 hover:border-amber-400/40 transition-all duration-300 ${className}`}
    >
      <ChevronRight size={20} />
    </button>
  </>
);

/* ==================================================================== */
/*  MediaStage — dark slate background
 * ==================================================================== */

const MediaStage = ({ item, onPrev, onNext, onClose }) => {
  const [zoom, setZoom] = useState(1);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const stageRef = useRef(null);

  useEffect(() => {
    setZoom(1);
    x.set(0);
    y.set(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.id]);

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.5, 3));
  const handleZoomOut = () =>
    setZoom((z) => {
      const nz = Math.max(z - 0.5, 1);
      if (nz === 1) {
        x.set(0);
        y.set(0);
      }
      return nz;
    });
  const handleReset = () => {
    setZoom(1);
    x.set(0);
    y.set(0);
  };
  const handleToggleZoom = () => {
    setZoom((z) => {
      const nz = z > 1 ? 1 : 2;
      if (nz === 1) {
        x.set(0);
        y.set(0);
      }
      return nz;
    });
  };

  const handleDragEnd = (e, info) => {
    if (zoom > 1) return;
    const threshold = 70;
    if (info.offset.x < -threshold) onNext();
    else if (info.offset.x > threshold) onPrev();
  };

  return (
    <div
      ref={stageRef}
      className="relative flex-1 min-h-0 flex items-center justify-center overflow-hidden bg-slate-950"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <ViewerControls onPrev={onPrev} onNext={onNext} />

      <AnimatePresence mode="wait">
        <motion.div
          key={item.id}
          drag={zoom > 1 ? true : "x"}
          dragConstraints={zoom > 1 ? stageRef : { left: 0, right: 0 }}
          dragElastic={zoom > 1 ? 0.05 : 0.6}
          onDragEnd={handleDragEnd}
          style={zoom > 1 ? { x, y } : undefined}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full h-full flex items-center justify-center px-3 md:px-10 py-6"
        >
          {item.type === "video" ? (
            <video
              key={item.id}
              src={item.src}
              poster={item.thumb}
              controls
              autoPlay
              playsInline
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          ) : (
            <motion.img
              layoutId={`media-${item.id}`}
              src={item.src}
              alt={item.title}
              onClick={handleToggleZoom}
              onDoubleClick={handleToggleZoom}
              draggable={false}
              style={{ scale: zoom }}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl select-none cursor-zoom-in"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {item.type === "image" && (
        <div className="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1 bg-black/60 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/10">
          <button
            onClick={handleZoomOut}
            className="w-7 h-7 flex items-center justify-center text-white/80 hover:text-amber-400 rounded-full hover:bg-white/10 transition-colors"
          >
            <ZoomOut size={14} />
          </button>
          <span className="text-amber-400/80 text-[10px] w-9 text-center select-none tabular-nums">
            {Math.round(zoom * 100)}%
          </span>
          <button
            onClick={handleZoomIn}
            className="w-7 h-7 flex items-center justify-center text-white/80 hover:text-amber-400 rounded-full hover:bg-white/10 transition-colors"
          >
            <ZoomIn size={14} />
          </button>
          <div className="w-px h-4 bg-white/10 mx-0.5" />
          <button
            onClick={handleReset}
            className="w-7 h-7 flex items-center justify-center text-white/80 hover:text-amber-400 rounded-full hover:bg-white/10 transition-colors"
          >
            <RotateCcw size={12} />
          </button>
        </div>
      )}
    </div>
  );
};

/* ==================================================================== */
/*  MediaInfoPanel — slate-900 panel + amber accent
 * ==================================================================== */

const MediaInfoPanel = ({
  item,
  categoryTitle,
  currentIndex,
  total,
  onPrev,
  onNext,
}) => {
  return (
    <div className="w-full md:w-[320px] lg:w-[360px] flex-shrink-0 bg-slate-900 border-t md:border-t-0 md:border-l border-slate-700/50 flex flex-col max-h-[42vh] md:max-h-none overflow-y-auto">
      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-[1.5px] bg-amber-400" />
          <span className="text-[10px] tracking-[0.2em] uppercase text-slate-500 font-medium">
            {categoryTitle}
          </span>
        </div>

        <h3 className="text-white text-base sm:text-lg font-semibold leading-snug">
          {item.title}
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm mt-1">
          {item.type === "video" ? "Video Content" : "Photography"}
        </p>

        <div className="flex items-center gap-2 mt-3">
          <span className="px-2.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-[10px] sm:text-xs font-medium">
            {currentIndex + 1} / {total}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-2 mt-5">
          <button
            onClick={onPrev}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-white/10 text-white/70 hover:text-amber-400 hover:border-amber-400/40 text-xs font-medium transition-all duration-300"
          >
            <ChevronLeft size={14} /> Previous
          </button>
          <button
            onClick={onNext}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-white/10 text-white/70 hover:text-amber-400 hover:border-amber-400/40 text-xs font-medium transition-all duration-300"
          >
            Next <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

/* ==================================================================== */
/*  MediaViewer — slate-950 background
 * ==================================================================== */

const MediaViewer = ({
  items,
  currentIndex,
  onIndexChange,
  onClose,
  categoryTitle,
}) => {
  const item = items[currentIndex];
  const total = items.length;
  const viewerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (currentIndex !== null && items.length > 0) {
      const nextIndex = (currentIndex + 1) % items.length;
      const prevIndex = (currentIndex - 1 + items.length) % items.length;

      [nextIndex, prevIndex].forEach((idx) => {
        const it = items[idx];
        if (it && it.type !== "video") {
          const img = new Image();
          img.src = it.src;
        }
      });
    }
  }, [currentIndex, items]);

  const goPrev = useCallback(
    () => onIndexChange((currentIndex - 1 + total) % total),
    [currentIndex, total, onIndexChange]
  );
  const goNext = useCallback(
    () => onIndexChange((currentIndex + 1) % total),
    [currentIndex, total, onIndexChange]
  );

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  if (!item) return null;

  return (
    <motion.div
      ref={viewerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-2xl flex flex-col md:flex-row"
    >
      <button
        onClick={onClose}
        className="absolute top-3 right-3 sm:top-4 sm:right-4 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:text-amber-400 hover:border-amber-400/40 transition-all duration-300"
      >
        <X size={18} />
      </button>

      <div className="md:hidden absolute top-3 left-3 z-40 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-amber-400 text-[10px] font-medium">
        {currentIndex + 1} / {total}
      </div>

      <MediaStage item={item} onPrev={goPrev} onNext={goNext} onClose={onClose} />

      <MediaInfoPanel
        item={item}
        categoryTitle={categoryTitle}
        currentIndex={currentIndex}
        total={total}
        onPrev={goPrev}
        onNext={goNext}
      />
    </motion.div>
  );
};

/* ==================================================================== */
/*  ContentProductionGallery — main component
 * ==================================================================== */

const ContentProductionGallery = () => {
  const [activeCategory, setActiveCategory] = useState("car-care");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
  const [likedIds, setLikedIds] = useState(() => new Set());
  const galleryRef = useRef(null);

  const categories = CONTENT_CATEGORIES;
  const currentCategory = ENRICHED_GALLERY_DATA[activeCategory];
  const currentItems = useMemo(
    () => getAllItems(currentCategory),
    [currentCategory]
  );

  const handleCategoryClick = useCallback((categoryId) => {
    setActiveCategory(categoryId);
    setImageErrors({});
    setSelectedIndex(null);

    requestAnimationFrame(() => {
      if (galleryRef.current) {
        const yOffset = -180;
        const y =
          galleryRef.current.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  }, []);

  const handleMediaClick = (index) => setSelectedIndex(index);
  const handleCloseViewer = () => setSelectedIndex(null);

  const handleImageError = (id) =>
    setImageErrors((prev) => ({ ...prev, [id]: true }));

  const handleToggleLike = (id) =>
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") handleCloseViewer();
      if (e.key === "ArrowLeft") {
        setSelectedIndex(
          (i) => (i - 1 + currentItems.length) % currentItems.length
        );
      }
      if (e.key === "ArrowRight") {
        setSelectedIndex((i) => (i + 1) % currentItems.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, currentItems.length]);

  const getItemCount = (categoryId) => {
    const data = ENRICHED_GALLERY_DATA[categoryId];
    if (!data) return 0;
    if (data.items) return data.items.length;
    if (data.categories) {
      return data.categories.reduce(
        (sum, cat) => sum + (cat.items?.length || 0),
        0
      );
    }
    return 0;
  };

  return (
    <LayoutGroup>
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mb-6 md:mb-10">
            <div className="flex items-center gap-4 mb-3">
              <span className="w-12 h-[2px] bg-amber-400/60" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-amber-400 font-medium">
                Content Production
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Visual Storytelling
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-1">
              Professional photography and videography for brands that want to
              stand out
            </p>
          </div>

          {/* 2-COLUMN LAYOUT */}
          <div className="flex gap-4 sm:gap-6">
            {/* LEFT COLUMN: FILTER */}
            <div className="w-14 sm:w-48 lg:w-56 flex-shrink-0">
              <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-1.5 sm:p-4 shadow-lg shadow-black/20 sticky top-28 lg:top-20">
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-2 hidden sm:block">
                  Categories
                </h3>

                {/* Mobile */}
                <div className="sm:hidden flex flex-col items-center gap-1.5">
                  {categories.map((cat) => {
                    const isActive = activeCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryClick(cat.id)}
                        className={`relative flex flex-col items-center justify-center w-full px-3 py-2 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "text-amber-400"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <span
                          className={`text-[8px] font-medium leading-tight text-center ${
                            isActive ? "text-amber-400" : "text-slate-500"
                          }`}
                        >
                          {cat.label}
                        </span>
                        {isActive && (
                          <span className="absolute -top-0.25 -right-0.25 w-1 h-1 rounded-full bg-amber-400" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Desktop */}
                <nav className="hidden sm:block space-y-1">
                  {categories.map((cat) => {
                    const IconComp = cat.icon;
                    const isActive = activeCategory === cat.id;
                    const itemCount = getItemCount(cat.id);

                    return (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryClick(cat.id)}
                        className={`w-full cursor-pointer flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 text-left ${
                          isActive
                            ? "bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20"
                            : "text-slate-400 hover:bg-amber-400/5 hover:text-white"
                        }`}
                      >
                        <IconComp
                          size={18}
                          className={
                            isActive ? "text-slate-950" : "text-slate-500"
                          }
                        />
                        <span className="flex-1">{cat.label}</span>
                        <span
                          className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full ${
                            isActive
                              ? "bg-slate-950/20 text-slate-950"
                              : "bg-amber-400/10 text-slate-500"
                          }`}
                        >
                          {itemCount}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* RIGHT COLUMN: GALLERY */}
            <div ref={galleryRef} className="flex-1 min-w-0">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {currentCategory?.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  {currentCategory?.description} • {currentItems.length} items
                </p>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 auto-rows-[110px] sm:auto-rows-[130px] lg:auto-rows-[150px]"
                  style={{ gridAutoFlow: "dense" }}
                >
                  {currentItems.map((item, index) => (
                    <GalleryCard
                      key={item.id}
                      item={item}
                      index={index}
                      patternClass={getPatternClasses(
                        getCardPattern(index, item.type)
                      )}
                      hasError={!!imageErrors[item.id]}
                      onImageError={() => handleImageError(item.id)}
                      onClick={() => handleMediaClick(index)}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* IMMERSIVE VIEWER */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <Suspense
              fallback={
                <div className="fixed inset-0 z-50 bg-slate-950 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <Loader2 className="w-12 h-12 text-amber-400 animate-spin" />
                    <span className="text-slate-500 text-sm">Loading...</span>
                  </div>
                </div>
              }
            >
              <MediaViewer
                items={currentItems}
                currentIndex={selectedIndex}
                onIndexChange={setSelectedIndex}
                onClose={handleCloseViewer}
                categoryTitle={currentCategory?.title}
              />
            </Suspense>
          )}
        </AnimatePresence>
      </div>
    </LayoutGroup>
  );
};

export default ContentProductionGallery;