import { assets } from "../../assets/assets";

export const GALLERY_DATA = {
  marketing: {
    title: "Marketing",
    description: "Professional visual content for marketing",
    categories: [
      {
        id: "videography",
        title: "Videography",
        items: [
          {
            id: "marketing-video-01",
            type: "video",
            src: assets.m1,
            title: "Marketing Video 01",
          },
          {
            id: "marketing-video-02",
            type: "video",
            src: assets.m2,
            title: "Marketing Video 02",
          },
          {
            id: "marketing-video-03",
            type: "video",
            src: assets.m3,
            title: "Marketing Video 03",
          },
          {
            id: "marketing-video-04",
            type: "video",
            src: assets.m4,
            title: "Marketing Video 04",
          },
        ],
      },
      {
        id: "photography",
        title: "Photography",
        items: [],
      },

      {
        id: "design-posters",
        title: "Design & Posters",
        items: [],
      },
    ],
  },

  "car-rentals": {
    title: "Car Rentals",
    description: "Professional visual content for car rental brands",
    categories: [
      {
        id: "videography",
        title: "Videography",
        items: [
          {
            id: "car-rentals-video-01",
            type: "video",
            src: assets.rent01,
            title: "Car Rental Video 01",
          },
        ],
      },
      {
        id: "photography",
        title: "Photography",
        items: [],
      },

      {
        id: "design-posters",
        title: "Design & Posters",
        items: [
          {
            id: "car-rentals-design-01",
            type: "design",
            src: assets.rentD1,
            title: "Car Rental Design 01",
          },
          {
            id: "car-rentals-design-02",
            type: "design",
            src: assets.rentD2,
            title: "Car Rental Design 02",
          },
          {
            id: "car-rentals-design-03",
            type: "design",
            src: assets.rentD3,
            title: "Car Rental Design 03",
          },
          {
            id: "car-rentals-design-04",
            type: "design",
            src: assets.rentD4,
            title: "Car Rental Design 04",
          },
          {
            id: "car-rentals-design-05",
            type: "design",
            src: assets.rentD5,
            title: "Car Rental Design 05",
          },
        ],
      },
    ],
  },

  "car-care": {
    title: "Car Care",
    description: "Visual content for car care and detailing services",
    categories: [
      {
        id: "videography",
        title: "Videography",
        items: [
          {
            id: "car-care-video-01",
            type: "video",
            src: assets.care03,
            title: "Car Care Video",
          },
          {
            id: "car-care-video-02",
            type: "video",
            src: assets.care01,
            title: "Car Care Video",
          },
          {
            id: "car-care-video-03",
            type: "video",
            src: assets.care02,
            title: "Car Care Video",
          },
        ],
      },
      {
        id: "photography",
        title: "Photography",
        items: [],
      },

      {
        id: "design-posters",
        title: "Design & Posters",
        items: [
          {
            id: "car-care-design-01",
            type: "design",
            src: assets.careD1,
            title: "Car Care Design 01",
          },
          {
            id: "car-care-design-02",
            type: "design",
            src: assets.careD2,
            title: "Car Care Design 02",
          },
          {
            id: "car-care-design-03",
            type: "design",
            src: assets.careD3,
            title: "Car Care Design 03",
          },
          {
            id: "car-care-design-04",
            type: "design",
            src: assets.careD4,
            title: "Car Care Design 04",
          },
          {
            id: "car-care-design-05",
            type: "design",
            src: assets.careD5,
            title: "Car Care Design 05",
          },
          {
            id: "car-care-design-06",
            type: "design",
            src: assets.careD6,
            title: "Car Care Design 06",
          },
        ],
      },
    ],
  },

  restaurants: {
    title: "Restaurants",
    description: "Food photography and restaurant visual content",
    categories: [
      {
        id: "videography",
        title: "Videography",
        items: [
          {
            id: "restaurant-video-01",
            type: "video",
            src: assets.rest01,
            title: "Restaurant Experience",
          },
          {
            id: "restaurant-video-01",
            type: "video",
            src: assets.rest02,
            title: "Restaurant Experience",
          },
        ],
      },
      {
        id: "photography",
        title: "Photography",
        items: [],
      },
      {
        id: "design-posters",
        title: "Design & Posters",
        items: [],
      },
    ],
  },

  coffee: {
    title: "Coffee",
    description: "Coffee photography and visual content for cafés",
    categories: [
      // VIDEO ALWAYS FIRST
      {
        id: "videography",
        title: "Videography",
        items: [],
      },

      {
        id: "photography",
        title: "Photography",
        items: [],
      },

      {
        id: "design-posters",
        title: "Design & Posters",
        items: [
          {
            id: "coffee-design-01",
            type: "design",
            src: assets.coffeeD1,
            title: "Coffee Design 01",
          },
          {
            id: "coffee-design-02",
            type: "design",
            src: assets.coffeeD2,
            title: "Coffee Design 02",
          },
          {
            id: "coffee-design-03",
            type: "design",
            src: assets.coffeeD3,
            title: "Coffee Design 03",
          },
          {
            id: "coffee-design-04",
            type: "design",
            src: assets.coffeeD4,
            title: "Coffee Design 04",
          },
          {
            id: "coffee-design-05",
            type: "design",
            src: assets.coffeeD5,
            title: "Coffee Design 05",
          },
          {
            id: "coffee-design-06",
            type: "design",
            src: assets.coffeeD6,
            title: "Coffee Design 06",
          },
          {
            id: "coffee-design-07",
            type: "design",
            src: assets.coffeeD7,
            title: "Coffee Design 07",
          },
          {
            id: "coffee-design-08",
            type: "design",
            src: assets.coffeeD8,
            title: "Coffee Design 08",
          },
          {
            id: "coffee-design-09",
            type: "design",
            src: assets.coffeeD9,
            title: "Coffee Design 09",
          },
        ],
      },
    ],
  },

  fashion: {
    title: "Fashion",
    description: "Fashion photography and creative visual production",
    categories: [
      {
        id: "videography",
        title: "Videography",
        items: [
          {
            id: "fashion-video-01",
            type: "video",
            src: assets.f1,

            title: "Fashion Video 01",
          },
          {
            id: "fashion-video-02",
            type: "video",
            src: assets.f2,

            title: "Fashion Video 02",
          },
          {
            id: "fashion-video-03",
            type: "video",
            src: assets.f3,

            title: "Fashion Video 03",
          },
        ],
      },
      {
        id: "photography",
        title: "Photography",
        items: [
          {
            id: "fashion-photo-01",
            type: "photography",
            src: assets.fashionP1,
            title: "Fashion Photographs",
          },
          {
            id: "fashion-photo-02",
            type: "photography",
            src: assets.fashionP2,
            title: "Fashion Photographs",
          },
          {
            id: "fashion-photo-03",
            type: "photography",
            src: assets.fashionP3,
            title: "Fashion Photographs",
          },
          {
            id: "fashion-photo-04",
            type: "photography",
            src: assets.fashionP4,
            title: "Fashion Photographs",
          },
          {
            id: "fashion-photo-05",
            type: "photography",
            src: assets.fashionP5,
            title: "Fashion Photographs",
          },
          {
            id: "fashion-photo-06",
            type: "photography",
            src: assets.fashionP6,
            title: "Fashion Photographs",
          },
          {
            id: "fashion-photo-07",
            type: "photography",
            src: assets.fashionP7,
            title: "Fashion Photographs",
          },
          {
            id: "fashion-photo-08",
            type: "photography",
            src: assets.fashionP8,
            title: "Fashion Photographs",
          },
          {
            id: "fashion-photo-09",
            type: "photography",
            src: assets.fashionP11,
            title: "Fashion Photographs",
          },
          {
            id: "fashion-photo-10",
            type: "photography",
            src: assets.fashionP12,
            title: "Fashion Photographs",
          },
          {
            id: "fashion-photo-11",
            type: "photography",
            src: assets.fashionP13,
            title: "Fashion Photographs",
          },
          {
            id: "fashion-photo-12",
            type: "photography",
            src: assets.fashionP14,
            title: "Fashion Photographs",
          },
          {
            id: "fashion-photo-13",
            type: "photography",
            src: assets.fashionP15,
            title: "Fashion Photographs",
          },
          {
            id: "fashion-photo-14",
            type: "photography",
            src: assets.fashionP16,
            title: "Fashion Photographs",
          },
          {
            id: "fashion-photo-15",
            type: "photography",
            src: assets.fashionP17,
            title: "Fashion Photographs",
          },
          {
            id: "fashion-photo-16",
            type: "photography",
            src: assets.fashionP10,
            title: "Fashion Photographs",
          },
          {
            id: "fashion-photo-17",
            type: "photography",
            src: assets.fashionP9,
            title: "Fashion Photographs",
          },
        ],
      },
      {
        id: "design-posters",
        title: "Design & Posters",
        items: [],
      },
    ],
  },

  events: {
    title: "Events",
    description: "Professional photography and videography for events",
    categories: [
      {
        id: "videography",
        title: "Videography",
        items: [
          {
            id: "event-video-01",
            type: "video",
            src: assets.e1,
            title: "Event Highlights",
          },
          {
            id: "event-video-02",
            type: "video",
            src: assets.e2,
            title: "Event Highlights",
          },
          {
            id: "event-video-03",
            type: "video",
            src: assets.e3,
            title: "Event Highlights",
          },
        ],
      },
      {
        id: "photography",
        title: "Photography",
        items: [
          {
            id: "events-photo-01",
            type: "photography",
            src: assets.eventsP1,
            title: "events Photographs",
          },
          {
            id: "events-photo-02",
            type: "photography",
            src: assets.eventsP2,
            title: "events Photographs",
          },
          {
            id: "events-photo-03",
            type: "photography",
            src: assets.eventsP3,
            title: "events Photographs",
          },
          {
            id: "events-photo-04",
            type: "photography",
            src: assets.eventsP4,
            title: "events Photographs",
          },
          {
            id: "events-photo-05",
            type: "photography",
            src: assets.eventsP5,
            title: "events Photographs",
          },
          {
            id: "events-photo-06",
            type: "photography",
            src: assets.eventsP6,
            title: "events Photographs",
          },
          {
            id: "events-photo-07",
            type: "photography",
            src: assets.eventsP7,
            title: "events Photographs",
          },
          {
            id: "events-photo-08",
            type: "photography",
            src: assets.eventsP8,
            title: "events Photographs",
          },
        ],
      },
      {
        id: "design-posters",
        title: "Design & Posters",
        items: [],
      },
    ],
  },

  "real-estate": {
    title: "Real Estate",
    description: "Property photography and professional real estate visuals",
    categories: [
      {
        id: "videography",
        title: "Videography",
        items: [
          {
            id: "real-estate-video-01",
            type: "video",
            src: assets.realV1,
            title: "Real Estate videograph",
          },
          {
            id: "real-estate-video-02",
            type: "video",
            src: assets.realV2,
            title: "Real Estate videograph",
          },
          {
            id: "real-estate-video-03",
            type: "video",
            src: assets.realV3,
            title: "Real Estate videograph",
          },
          {
            id: "real-estate-video-04",
            type: "video",
            src: assets.realV4,
            title: "Real Estate videograph",
          },
        ],
      },
      {
        id: "photography",
        title: "Photography",
        items: [
          {
            id: "real-estate-photo-01",
            type: "photography",
            src: assets.realestateP1,
            title: "Real Estate Photograph",
          },
          {
            id: "real-estate-photo-02",
            type: "photography",
            src: assets.realestateP2,
            title: "Real Estate Photograph",
          },
          {
            id: "real-estate-photo-03",
            type: "photography",
            src: assets.realestateP3,
            title: "Real Estate Photograph",
          },
          {
            id: "real-estate-photo-04",
            type: "photography",
            src: assets.realestateP4,
            title: "Real Estate Photograph",
          },
          {
            id: "real-estate-photo-05",
            type: "photography",
            src: assets.realestateP5,
            title: "Real Estate Photograph",
          },
          {
            id: "real-estate-photo-06",
            type: "photography",
            src: assets.realestateP6,
            title: "Real Estate Photograph",
          },
          {
            id: "real-estate-photo-07",
            type: "photography",
            src: assets.realestateP7,
            title: "Real Estate Photograph",
          },
          {
            id: "real-estate-photo-08",
            type: "photography",
            src: assets.realestateP8,
            title: "Real Estate Photograph",
          },
          {
            id: "real-estate-photo-09",
            type: "photography",
            src: assets.realestateP10,
            title: "Real Estate Photograph",
          },
          {
            id: "real-estate-photo-10",
            type: "photography",
            src: assets.realestateP9,
            title: "Real Estate Photograph",
          },
          {
            id: "real-estate-photo-11",
            type: "photography",
            src: assets.realestateP11,
            title: "Real Estate Photograph",
          },
          {
            id: "real-estate-photo-12",
            type: "photography",
            src: assets.realestateP12,
            title: "Real Estate Photograph",
          },
          {
            id: "real-estate-photo-13",
            type: "photography",
            src: assets.realestateP13,
            title: "Real Estate Photograph",
          },
        ],
      },
      {
        id: "design-posters",
        title: "Design & Posters",
        items: [],
      },
    ],
  },
};
