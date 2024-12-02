import { ReactNode } from "react";

// Types for the sustainable brands dataset
export interface BrandImage {
  url: string;
  description: string;
}

export interface Founder {
  role: ReactNode;
  name: string;
  imageUrl: string;
}

export interface Designer {
  description: string;
  location?: string;
}

export interface BrandOrigin {
  city: string;
  country: string;
}

export interface BrandContent {
  about: string;
  impact: string;
}

export enum Marketplace {
  AMAZON = "Amazon",
  FLIPKART = "Flipkart",
  WALMART = "Walmart",
  MEESHO = "Meesho",
  SWIFT = "Swift",
  TATA_CLIQ = "Tata CLiQ",
  MYNTRA = "Myntra",
  SNAPDEAL = "Snapdeal",
  PAYTM_MALL = "Paytm Mall"
}

// Helper function to get marketplace base URLs
export const getMarketplaceBaseUrl = (marketplace: Marketplace): string => {
  const urlMap: Record<Marketplace, string> = {
    [Marketplace.AMAZON]: "https://www.amazon.in",
    [Marketplace.FLIPKART]: "https://www.flipkart.com",
    [Marketplace.WALMART]: "https://www.walmart.com",
    [Marketplace.MEESHO]: "https://www.meesho.com",
    [Marketplace.SWIFT]: "https://www.swift.com",
    [Marketplace.TATA_CLIQ]: "https://www.tatacliq.com",
    [Marketplace.MYNTRA]: "https://www.myntra.com",
    [Marketplace.SNAPDEAL]: "https://www.snapdeal.com",
    [Marketplace.PAYTM_MALL]: "https://paytmmall.com"
  };
  return urlMap[marketplace];
};

// Helper function to get logo filename
export const getMarketplaceLogo = (marketplace: Marketplace): string => {
  return `/logos/${marketplace.toLowerCase().replace(/ /g, '-')}.svg`;
};

export interface MarketplaceAvailability {
  marketplace: Marketplace;
  url: string;
}

export interface SustainableBrand {
  id: string;
  name: string;
  thumbnail: string;
  imageUrl: string;
  categories: Category[];
  content: BrandContent;
  url: string;
  themeColor: string;
  businessStartDate: string;
  metrics: {
    likes: number;
  };
  images: BrandImage[];
  founder: Founder[];
  designer?: Designer;
  brandTrailerUrl?: string;
  productRange: string[];
  certifications: string[];
  availableOn: MarketplaceAvailability[];
  contact: {
    email: string;
    phone: string;
  };
  origin: BrandOrigin;
  sustainabilityRatings: {
    environmental: number;
    social: number;
    ethical: number;
    durability: number;
    innovation: number;
  };
}

export enum Category {
  CLOTHING = "Clothing",
  ACCESSORIES = "Accessories",
  FOOD = "Food",
  HOME = "Home",
  BEAUTY = "Beauty",
  ELECTRONICS = "Electronics",
  TOYS = "Toys",
  OUTDOOR = "Outdoor",
  SPORTS = "Sports",
  GIFTS = "Gifts",
  HEALTH = "Health",
  STATIONERY = "Stationery",
  PETS = "Pets",
  TRAVEL = "Travel",
  GARDEN = "Garden",
  BOOKS = "Books",
  AUTOMOTIVE = "Automotive",
  CRAFTS = "Crafts",
  ART = "Art",
  FURNITURE = "Furniture",
  DECOR = "Decor",
  TEXTILES = "Textiles",
  FARMING = "Farming",
  JEWELRY = "Jewelry",
  FOOTWEAR = "Footwear",
  CLEANING = "Cleaning"
}

export const sustainableBrands: SustainableBrand[] = [
  {
    id: "no-nasties",
    name: "No Nasties",
    thumbnail: "/brandimages/no-nasties/thumbnail.jpg",
    imageUrl: "/banners/no-nasties.png",
    categories: [Category.CLOTHING],
    content: {
      about: "No Nasties is a revolutionary eco-conscious fashion brand that goes beyond sustainability to create a positive impact on our planet. Their unique approach combines 100% organic cotton, local supply chains, and a triple carbon offset strategy that removes more CO2 than their products create. For every purchase, they plant 3 trees, contributing to their Mission Million goal of planting one million trees by 2030.",
      impact: "Since 2011, No Nasties has made 100% organic, fair trade, vegan clothing, serving 25K customers across 64 countries. They've saved over 37.7M+ liters of water, offset 697,745 kg CO2e, and planted 189,027 trees. Every product removes more CO2 than it creates through their 300% offset strategy and 3 trees planting initiative. Their commitment extends to plastic-free packaging and carbon-neutral shipping, making them India's most sustainable fashion brand."
    },
    url: "https://nonasties.in",
    themeColor: "#2E7D32",
    businessStartDate: "2011",
    designer: {
      description: "All-women design team",
      location: "Goa"
    },
    brandTrailerUrl: "https://vimeo.com/193521522",
    founder: [
      {
        name: "Apurva Kothari",
        role: "Founder",
        imageUrl: "/brandimages/no-nasties/founder.jpg"
      }
    ],
    productRange: ["T-shirts", "Dresses", "Pajamas", "Loungewear", "Kids Wear"],
    certifications: ["GOTS Certified", "Fair Trade Certified", "Vegan Certified"],
    availableOn: [
      { 
        marketplace: Marketplace.AMAZON,
        url: "https://www.amazon.in/stores/NoNasties/page/5B0BEF85-3D49-4970-AD76-5B8C84F956F6"
      },
      { 
        marketplace: Marketplace.FLIPKART,
        url: "https://www.flipkart.com/no-nasties-store"
      },
      { 
        marketplace: Marketplace.MYNTRA,
        url: "https://www.myntra.com/no-nasties"
      }
    ],
    metrics: {
      likes: 850
    },
    images: [
      {
        url: "/brandimages/no-nasties/CloudSleepShorts4.webp",
        description: "Cloud Sleep Shorts - Crafted from 100% organic cotton, these comfortable sleep shorts feature our signature cloud-soft fabric. Each pair contributes to our triple carbon offset initiative."
      },
      {
        url: "/brandimages/no-nasties/StarlitNightShirt2.webp",
        description: "Starlit Night Shirt - A sustainable sleepwear essential made with eco-conscious materials. This night shirt is part of our carbon-neutral collection, supporting local artisans."
      },
      {
        url: "/brandimages/no-nasties/BlissSleepShorts1.webp",
        description: "Bliss Sleep Shorts - Ethically produced sleepwear featuring our breathable organic cotton. Every purchase of these shorts contributes to planting three trees as part of our Mission Million initiative."
      }
    ],
    contact: {
      email: "betty@nonasties.in",
      phone: "+91-98852-83889"
    },
    origin: {
      city: "Goa",
      country: "India"
    },
    sustainabilityRatings: {
      environmental: 4.2,
      social: 4.5,
      ethical: 4.7,
      durability: 4.2,
      innovation: 4.6
    }
  }
];
