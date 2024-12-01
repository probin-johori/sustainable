// Types for the sustainable brands dataset
export interface BrandImage {
  url: string;
  description: string;
}

export interface Cofounder {
  name: string;
  imageUrl?: string;
}

export interface SustainableBrand {
  id: string;
  name: string;
  thumbnail: string;
  imageUrl: string;
  categories: Category[];
  shortDescription: string;
  description: string;
  url: string;
  themeColor: string;
  businessStartDate: string;
  metrics: {
    likes: number;
  };
  images: BrandImage[];
  cofounders: Cofounder[];
  productRange: string[];
  certifications: string[];
  availableOn: {
    name: string;
    url: string;
  }[];
  contact: {
    email: string;
    phone: string;
  };
  sustainabilityRatings: {
    environmental: number;
    social: number;
    ethical: number;
    durability: number;
    innovation: number;
  };
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
    thumbnail: "/brandimages/no-nasties/thumbnail.jpg",
    imageUrl: "/banners/no-nasties.png",
    categories: [Category.CLOTHING],
    shortDescription: "Planet-positive fashion brand turning every purchase into climate action through 300% carbon offset and tree planting",
    description: `No Nasties is a revolutionary eco-conscious fashion brand that goes beyond sustainability to create a positive impact on our planet. Their unique approach combines 100% organic cotton, local supply chains, and a triple carbon offset strategy that removes more CO2 than their products create. For every purchase, they plant 3 trees, contributing to their Mission Million goal of planting one million trees by 2030.`,
    url: "https://nonasties.in",
    themeColor: "#2E7D32",
    businessStartDate: "2011-05-15",
    cofounders: [
      {
        name: "Apurva Kothari"
      },
      {
        name: "Diti Kothari"
      }
    ],
    productRange: ["T-shirts", "Dresses", "Pajamas", "Loungewear", "Kids Wear"],
    certifications: ["GOTS Certified", "Fair Trade Certified", "Vegan Certified"],
    availableOn: [
      {
        name: "Amazon",
        url: "https://amazon.com/no-nasties"
      },
      {
        name: "Flipkart",
        url: "https://flipkart.com/no-nasties"
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
      email: "hello@nonasties.in",
      phone: "+91-9876543210"
    },
    sustainabilityRatings: {
      environmental: 4.8,
      social: 4.5,
      ethical: 4.7,
      durability: 4.2,
      innovation: 4.6
    }
  },
  {
    id: "ooo-farms",
    name: "Ooo Farms",
    thumbnail: "/brandimages/ooo-farms/thumbnail.jpg",
    imageUrl: "/banners/ooo-farms.png",
    categories: [Category.FOOD],
    shortDescription: "Sustainable agriculture and organic farming initiative promoting local biodiversity",
    description: `Ooo Farms leads sustainable agriculture practices while preserving local biodiversity. They work directly with small-scale farmers to maintain traditional farming methods and protect indigenous crop varieties. Their community-supported agriculture program connects consumers directly with local farmers.`,
    url: "https://ooofarms.org",
    themeColor: "#8D6E63",
    businessStartDate: "2015-08-20",
    cofounders: [
      {
        name: "Rahul Sharma"
      },
      {
        name: "Priya Patel"
      }
    ],
    productRange: ["Organic Vegetables", "Indigenous Grains", "Seasonal Fruits", "Organic Seeds", "Farm Fresh Herbs"],
    certifications: ["Organic Certified", "Non-GMO Verified", "Biodiversity Alliance Certified"],
    availableOn: [
      {
        name: "Amazon",
        url: "https://amazon.com/ooo-farms"
      },
      {
        name: "BigBasket",
        url: "https://bigbasket.com/ooo-farms"
      }
    ],
    metrics: {
      likes: 1200
    },
    images: [
      {
        url: "/brandimages/ooo-farms/farm1.jpg",
        description: "Our organic farm during harvest season, showcasing sustainable farming practices and diverse crop cultivation. This field demonstrates our commitment to maintaining soil health and biodiversity."
      },
      {
        url: "/brandimages/ooo-farms/produce.jpg",
        description: "Fresh organic produce harvested from our farms. Every vegetable is grown without chemical pesticides and fertilizers, ensuring the highest quality and nutritional value."
      },
      {
        url: "/brandimages/ooo-farms/farmers.jpg",
        description: "Local farmers implementing traditional and sustainable farming methods. Our partnership with these farmers helps preserve indigenous agricultural knowledge and promotes fair trade practices."
      }
    ],
    contact: {
      email: "connect@ooofarms.org",
      phone: "+91-9876543211"
    },
    sustainabilityRatings: {
      environmental: 4.9,
      social: 4.7,
      ethical: 4.8,
      durability: 4.6,
      innovation: 4.5
    }
  },
  {
    id: "the-summer-house",
    name: "The Summer House",
    thumbnail: "/brandimages/summer-house/thumbnail.jpg",
    imageUrl: "/banners/the-summer-house.png",
    categories: [Category.CLOTHING, Category.HOME],
    shortDescription: "Sustainable fashion and lifestyle brand creating timeless pieces with natural materials",
    description: `The Summer House creates sustainable fashion and home accessories that stand the test of time. Using natural fabrics and traditional craftsmanship, they produce clothing and home items that are both beautiful and environmentally responsible.`,
    url: "https://thesummerhouse.in",
    themeColor: "#5D4037",
    businessStartDate: "2012-03-01",
    cofounders: [
      {
        name: "Shivani Poddar"
      },
      {
        name: "Rekha Datla"
      }
    ],
    productRange: ["Dresses", "Tops", "Home Textiles", "Accessories", "Sustainable Homewares"],
    certifications: ["GOTS Certified", "Fair Trade Certified", "Handloom Mark"],
    availableOn: [
      {
        name: "Myntra",
        url: "https://myntra.com/the-summer-house"
      },
      {
        name: "Nykaa Fashion",
        url: "https://nykaafashion.com/the-summer-house"
      }
    ],
    metrics: {
      likes: 945
    },
    images: [
      {
        url: "/brandimages/summer-house/dress1.jpg",
        description: "Handcrafted organic cotton dress featuring natural dyes and traditional textile techniques. This piece represents our commitment to sustainable fashion and timeless design."
      },
      {
        url: "/brandimages/summer-house/home1.jpg",
        description: "Sustainable home collection made from natural materials. Each piece is carefully crafted to combine functionality with environmental consciousness."
      },
      {
        url: "/brandimages/summer-house/artisans.jpg",
        description: "Our skilled artisans at work, preserving traditional craftsmanship while creating contemporary designs. Their expertise ensures each piece meets our high standards of quality and sustainability."
      }
    ],
    contact: {
      email: "hello@thesummerhouse.in",
      phone: "+91-9876543212"
    },
    sustainabilityRatings: {
      environmental: 4.7,
      social: 4.8,
      ethical: 4.9,
      durability: 4.5,
      innovation: 4.6
    }
  },
  {
    id: "ooo-farms",
    name: "Ooo Farms",
    thumbnail: "/brandimages/ooo-farms/thumbnail.jpg",
    imageUrl: "/banners/ooo-farms.png",
    categories: [Category.FOOD],
    shortDescription: "Sustainable agriculture and organic farming initiative promoting local biodiversity",
    description: `Ooo Farms leads sustainable agriculture practices while preserving local biodiversity. They work directly with small-scale farmers to maintain traditional farming methods and protect indigenous crop varieties. Their community-supported agriculture program connects consumers directly with local farmers.`,
    url: "https://ooofarms.org",
    themeColor: "#8D6E63",
    businessStartDate: "2015-08-20",
    cofounders: [
      {
        name: "Rahul Sharma"
      },
      {
        name: "Priya Patel"
      }
    ],
    productRange: ["Organic Vegetables", "Indigenous Grains", "Seasonal Fruits", "Organic Seeds", "Farm Fresh Herbs"],
    certifications: ["Organic Certified", "Non-GMO Verified", "Biodiversity Alliance Certified"],
    availableOn: [
      {
        name: "Amazon",
        url: "https://amazon.com/ooo-farms"
      },
      {
        name: "BigBasket",
        url: "https://bigbasket.com/ooo-farms"
      }
    ],
    metrics: {
      likes: 1200
    },
    images: [
      {
        url: "/brandimages/ooo-farms/farm1.jpg",
        description: "Our organic farm during harvest season, showcasing sustainable farming practices and diverse crop cultivation. This field demonstrates our commitment to maintaining soil health and biodiversity."
      },
      {
        url: "/brandimages/ooo-farms/produce.jpg",
        description: "Fresh organic produce harvested from our farms. Every vegetable is grown without chemical pesticides and fertilizers, ensuring the highest quality and nutritional value."
      },
      {
        url: "/brandimages/ooo-farms/farmers.jpg",
        description: "Local farmers implementing traditional and sustainable farming methods. Our partnership with these farmers helps preserve indigenous agricultural knowledge and promotes fair trade practices."
      }
    ],
    contact: {
      email: "connect@ooofarms.org",
      phone: "+91-9876543211"
    },
    sustainabilityRatings: {
      environmental: 4.9,
      social: 4.7,
      ethical: 4.8,
      durability: 4.6,
      innovation: 4.5
    }
  },
  {
    id: "the-summer-house",
    name: "The Summer House",
    thumbnail: "/brandimages/summer-house/thumbnail.jpg",
    imageUrl: "/banners/the-summer-house.png",
    categories: [Category.CLOTHING, Category.HOME],
    shortDescription: "Sustainable fashion and lifestyle brand creating timeless pieces with natural materials",
    description: `The Summer House creates sustainable fashion and home accessories that stand the test of time. Using natural fabrics and traditional craftsmanship, they produce clothing and home items that are both beautiful and environmentally responsible.`,
    url: "https://thesummerhouse.in",
    themeColor: "#5D4037",
    businessStartDate: "2012-03-01",
    cofounders: [
      {
        name: "Shivani Poddar"
      },
      {
        name: "Rekha Datla"
      }
    ],
    productRange: ["Dresses", "Tops", "Home Textiles", "Accessories", "Sustainable Homewares"],
    certifications: ["GOTS Certified", "Fair Trade Certified", "Handloom Mark"],
    availableOn: [
      {
        name: "Myntra",
        url: "https://myntra.com/the-summer-house"
      },
      {
        name: "Nykaa Fashion",
        url: "https://nykaafashion.com/the-summer-house"
      }
    ],
    metrics: {
      likes: 945
    },
    images: [
      {
        url: "/brandimages/summer-house/dress1.jpg",
        description: "Handcrafted organic cotton dress featuring natural dyes and traditional textile techniques. This piece represents our commitment to sustainable fashion and timeless design."
      },
      {
        url: "/brandimages/summer-house/home1.jpg",
        description: "Sustainable home collection made from natural materials. Each piece is carefully crafted to combine functionality with environmental consciousness."
      },
      {
        url: "/brandimages/summer-house/artisans.jpg",
        description: "Our skilled artisans at work, preserving traditional craftsmanship while creating contemporary designs. Their expertise ensures each piece meets our high standards of quality and sustainability."
      }
    ],
    contact: {
      email: "hello@thesummerhouse.in",
      phone: "+91-9876543212"
    },
    sustainabilityRatings: {
      environmental: 4.7,
      social: 4.8,
      ethical: 4.9,
      durability: 4.5,
      innovation: 4.6
    }
  },
  {
    id: "the-herb-boutique",
    name: "The Herb Boutique",
    thumbnail: "/brandimages/the-herb-boutique/thumbnail.jpg",
    imageUrl: "/banners/the-herb-boutique.png",
    categories: [Category.BEAUTY, Category.HEALTH],
    shortDescription: "Organic skincare and wellness products made from traditional herbs",
    description: `The Herb Boutique creates natural skincare and wellness products using traditional herbal knowledge and modern science. Their products combine ancient Ayurvedic wisdom with contemporary research to deliver effective, chemical-free solutions.`,
    url: "https://herbboutique.in",
    themeColor: "#558B2F",
    businessStartDate: "2014-09-10",
    cofounders: [
      {
        name: "Dr. Meera Iyer"
      },
      {
        name: "Sanjay Kumar"
      }
    ],
    productRange: ["Face Care", "Body Care", "Hair Care", "Wellness Supplements", "Aromatherapy"],
    certifications: ["Made Safe Certified", "Cruelty-Free", "Ayurvedic License", "ISO 22716:2007"],
    availableOn: [
      {
        name: "Amazon",
        url: "https://amazon.com/the-herb-boutique"
      },
      {
        name: "Nykaa",
        url: "https://nykaa.com/the-herb-boutique"
      }
    ],
    metrics: {
      likes: 1625
    },
    images: [
      {
        url: "/brandimages/herb-boutique/products1.jpg",
        description: "Our signature range of organic skincare products, featuring carefully selected herbs and natural ingredients. Each product is formulated to provide effective, chemical-free skincare solutions."
      },
      {
        url: "/brandimages/herb-boutique/herbs.jpg",
        description: "Fresh herbs from our organic garden used in our products. We grow and harvest our own herbs to ensure the highest quality and potency in our formulations."
      },
      {
        url: "/brandimages/herb-boutique/process.jpg",
        description: "Our natural product creation process, combining traditional knowledge with modern techniques. This careful approach ensures both effectiveness and sustainability in our products."
      }
    ],
    contact: {
      email: "care@herbboutique.in",
      phone: "+91-9876543213"
    },
    sustainabilityRatings: {
      environmental: 4.8,
      social: 4.6,
      ethical: 4.7,
      durability: 4.4,
      innovation: 4.5
    }
  },
  {
    id: "i-was-a-saree",
    name: "I Was A Saree",
    thumbnail: "/brandimages/i-was-a-saree/thumbnail.jpg",
    imageUrl: "/banners/i-was-a-saree.png",
    categories: [Category.CLOTHING, Category.ACCESSORIES],
    shortDescription: "Upcycled fashion brand transforming pre-loved saris into contemporary designs",
    description: `I Was A Sari gives new life to pre-loved saris by transforming them into contemporary fashion pieces. This innovative approach to sustainable fashion combines traditional Indian textiles with modern design while providing employment to local artisans.`,
    url: "https://iwasasaree.com",
    themeColor: "#689F38",
    businessStartDate: "2013-11-15",
    cofounders: [
      {
        name: "Stefano Funari"
      },
      {
        name: "Poornima Pande"
      }
    ],
    productRange: ["Upcycled Dresses", "Accessories", "Bags", "Scarves", "Home Decor"],
    certifications: ["B Corp Certified", "Social Enterprise Mark", "Craftmark Certified"],
    availableOn: [
      {
        name: "Ajio",
        url: "https://ajio.com/i-was-a-saree"
      },
      {
        name: "Myntra",
        url: "https://myntra.com/i-was-a-saree"
      }
    ],
    metrics: {
      likes: 1450
    },
    images: [
      {
        url: "/brandimages/i-was-a-saree/collection1.jpg",
        description: "Our latest collection of upcycled fashion pieces, each created from pre-loved saris. Every item tells a unique story while contributing to sustainable fashion."
      },
      {
        url: "/brandimages/i-was-a-saree/workshop.jpg",
        description: "Our workshop where skilled artisans transform vintage saris into contemporary fashion pieces. This process combines traditional craftsmanship with modern design."
      },
      {
        url: "/brandimages/i-was-a-saree/accessories.jpg",
        description: "Handcrafted accessories made from upcycled sari fabrics. Each piece is unique and demonstrates our commitment to zero-waste fashion."
      }
    ],
    contact: {
      email: "hello@iwasasari.com",
      phone: "+91-9876543214"
    },
    sustainabilityRatings: {
      environmental: 4.9,
      social: 4.8,
      ethical: 4.7,
      durability: 4.5,
      innovation: 4.8
    }
  }
];

export default sustainableBrands;
