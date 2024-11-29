// Types for the sustainable brands dataset
export interface SustainableBrand {
  id: string;
  name: string;
  thumbnail: string;
  imageUrl: string;  
  business: BusinessType;
  categories: Category[];
  shortDescription: string;
  description: string;
  url: string;
  themeColor: string;
  dateAdded: string;
  metrics: {
    clicks: number;
    views: number;
    likes: number;
  };
  images: string[];
  trailer?: string;
  contact: {
    email: string;
    phone: string;
  };
}

// Enum for business types
export enum BusinessType {
  B2C = "B2C",
  B2B = "B2B",
  BOTH = "BOTH"
}

// Enum for categories - aligned with QuickFilter
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

// Dataset of sustainable brands
export const sustainableBrands: SustainableBrand[] = [
  {
    id: "no-nasties",
    name: "No Nasties",
    thumbnail: "/brands/no-nasties/thumbnail.jpg",
    imageUrl: "/banners/no-nasties.png",
    business: BusinessType.B2C,
    categories: [Category.CLOTHING], // Updated categories
    shortDescription: "Planet-positive fashion brand turning every purchase into climate action through 300% carbon offset and tree planting",
    description: `No Nasties is a revolutionary eco-conscious fashion brand that goes beyond sustainability to create a positive impact on our planet. Their unique approach combines 100% organic cotton, local supply chains, and a triple carbon offset strategy that removes more CO2 than their products create. For every purchase, they plant 3 trees, contributing to their Mission Million goal of planting one million trees by 2030. Through their "Planet Positive" commitment, they transform everyday fashion choices into meaningful climate action, proving that style and environmental responsibility can go hand in hand. With their motto "Don't Panic. It's 100% Organic," No Nasties demonstrates that fashion can be both ethical and impactful.`,
    url: "https://nonasties.in",
    themeColor: "#2E7D32",
    dateAdded: "2024-01-15",
    metrics: {
      clicks: 1250,
      views: 5000,
      likes: 850
    },
    images: [
      "/brands/no-nasties/collection1.jpg",
      "/brands/no-nasties/workshop.jpg",
      "/brands/no-nasties/process.jpg"
    ],
    trailer: "https://youtube.com/nonasties-story",
    contact: {
      email: "hello@nonasties.in",
      phone: "+91-9876543210"
    }
  },
  {
    id: "ooo-farms",
    name: "Ooo Farms",
    thumbnail: "/brands/ooo-farms/thumbnail.jpg",
    imageUrl: "/banners/ooo-farms.png",
    business: BusinessType.B2C,
    categories: [Category.FOOD], // Updated categories
    shortDescription: "Eco-friendly home products and packaging solutions",
    description: `Earthly Goods is a Mumbai-based sustainable brand focusing on home products 
    and packaging solutions. They create alternatives to single-use plastics using bamboo, 
    coconut fiber, and other biodegradable materials. Their product range includes kitchen items, 
    bathroom accessories, and innovative packaging solutions for businesses.`,
    url: "https://earthlygoods.co.in",
    themeColor: "#8D6E63",
    dateAdded: "2023-11-20",
    metrics: {
      clicks: 2300,
      views: 8500,
      likes: 1200
    },
    images: [
      "/brands/earthlygoods/products.jpg",
      "/brands/earthlygoods/packaging.jpg",
      "/brands/earthlygoods/materials.jpg"
    ],
    trailer: "https://youtube.com/earthlygoods-impact",
    contact: {
      email: "care@earthlygoods.co.in",
      phone: "+91-9876543211"
    }
  },
  {
    id: "the-summer-house",
    name: "The Summer House",
    thumbnail: "/brands/the-summer-house/thumbnail.jpg",
    imageUrl: "/banners/the-summer-house.png",
    business: BusinessType.B2C,
    categories: [Category.CLOTHING],
    shortDescription: "Ayurvedic clothing and wellness textiles",
    description: `Ayurvastra combines ancient Ayurvedic wisdom with modern sustainable fashion. 
    Based in Kerala, they create clothing infused with medicinal herbs using traditional dyeing 
    processes. Their products are completely organic and biodegradable, offering therapeutic 
    benefits while being environmentally conscious.`,
    url: "https://ayurvastra.in",
    themeColor: "#5D4037",
    dateAdded: "2024-02-01",
    metrics: {
      clicks: 980,
      views: 3200,
      likes: 645
    },
    images: [
      "/brands/ayurvastra/clothing.jpg",
      "/brands/ayurvastra/process.jpg",
      "/brands/ayurvastra/herbs.jpg"
    ],
    trailer: "https://youtube.com/ayurvastra-healing-fashion",
    contact: {
      email: "connect@ayurvastra.in",
      phone: "+91-9876543212"
    }
  },
  {
    id: "the-herb-botique",
    name: "The Herb Botique",
    thumbnail: "/brands/the-herb-botique/thumbnail.jpg",
    imageUrl: "/banners/the-herb-botique.png",
    business: BusinessType.BOTH,
    categories: [Category.HOME, Category.HEALTH, Category.FOOD], 
    shortDescription: "Natural and organic personal care products",
    description: `Green Nest creates natural and organic personal care products using traditional 
    Indian ingredients. Their range includes skincare, haircare, and wellness products made from 
    locally sourced ingredients. They work directly with organic farmers and ensure sustainable 
    packaging for all their products.`,
    url: "https://greennest.in",
    themeColor: "#558B2F",
    dateAdded: "2023-12-10",
    metrics: {
      clicks: 1750,
      views: 6800,
      likes: 925
    },
    images: [
      "/brands/greennest/products.jpg",
      "/brands/greennest/ingredients.jpg",
      "/brands/greennest/packaging.jpg"
    ],
    trailer: "https://youtube.com/greennest-natural-beauty",
    contact: {
      email: "care@greennest.in",
      phone: "+91-9876543213"
    }
  },
  {
    id: "i-was-a-saree",
    name: "I was a saree",
    thumbnail: "/brands/i-was-a-saree/thumbnail.jpg",
    imageUrl: "/banners/i-was-a-saree.png",
    business: BusinessType.B2C,
    categories: [Category.CLOTHING],
    shortDescription: "Sustainable food products and zero-waste grocery",
    description: `EcoFeast is revolutionizing the grocery shopping experience in Delhi with their 
    zero-waste stores and organic food products. They source directly from organic farmers and 
    sell products in plastic-free packaging. Their stores feature refill stations and encourage 
    customers to bring their own containers.`,
    url: "https://ecofeast.in",
    themeColor: "#689F38",
    dateAdded: "2024-01-05",
    metrics: {
      clicks: 3200,
      views: 12000,
      likes: 2100
    },
    images: [
      "/brands/ecofeast/store.jpg",
      "/brands/ecofeast/products.jpg",
      "/brands/ecofeast/farmers.jpg"
    ],
    trailer: "https://youtube.com/ecofeast-zerowaste",
    contact: {
      email: "hello@ecofeast.in",
      phone: "+91-9876543214"
    }
  },
  {
    id: "iro-iro",
    name: "Iro Iro",
    thumbnail: "/brands/iro-iro/thumbnail.jpg",
    imageUrl: "/banners/iro-iro.png",
    business: BusinessType.B2C,
    categories: [Category.CLOTHING],
    shortDescription: "Sustainable clothing and home accessories",
    description: `TheSummerHouse creates sustainable fashion and home accessories with a focus on 
    timeless design and ethical production. They work with local artisans and use eco-friendly 
    materials to create their collections.`,
    url: "https://thesummerhouse.in",
    themeColor: "#689F38",
    dateAdded: "2024-01-05",
    metrics: {
      clicks: 3200,
      views: 12000,
      likes: 2100
    },
    images: [
      "/brands/thesummerhouse/store.jpg",
      "/brands/thesummerhouse/products.jpg",
      "/brands/thesummerhouse/process.jpg"
    ],
    trailer: "https://youtube.com/thesummerhouse-story",
    contact: {
      email: "hello@thesummerhouse.in",
      phone: "+91-9876543215"
    }
  },
  
];

export default sustainableBrands;