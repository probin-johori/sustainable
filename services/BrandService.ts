// BrandService.ts
import { SustainableBrand, Category, Marketplace, MarketplaceAvailability } from '/Users/probinj/sustainable/lib/brands';
import axios from 'axios';

const airtableApiKey = 'your_airtable_api_key';
const airtableBaseId = 'your_airtable_base_id';
const airtableTableName = 'your_airtable_table_name';

export async function getSustainableBrands(): Promise<SustainableBrand[]> {
  const response = await axios.get(`https://api.airtable.com/v0/${airtableBaseId}/${airtableTableName}`, {
    headers: {
      'Authorization': `Bearer ${airtableApiKey}`
    }
  });

  const airtableData = response.data.records;

  return airtableData.map((record: any) => ({
    id: record.id,
    name: record.fields.Name,
    thumbnail: record.fields.Thumbnail,
    imageUrl: record.fields.ImageUrl,
    categories: record.fields.Categories.map((category: string) => Category[category as keyof typeof Category]),
    content: {
      about: record.fields.About,
      impact: record.fields.Impact
    },
    url: record.fields.Url,
    themeColor: record.fields.ThemeColor,
    businessStartDate: record.fields.BusinessStartDate,
    designer: {
      description: record.fields.DesignerDescription,
      location: record.fields.DesignerLocation
    },
    brandTrailerUrl: record.fields.BrandTrailerUrl,
    founder: [
      {
        name: record.fields.FounderName,
        role: record.fields.FounderRole,
        imageUrl: record.fields.FounderImageUrl
      }
    ],
    productRange: record.fields.ProductRange,
    certifications: record.fields.Certifications,
    availableOn: record.fields.AvailableOn.map((availability: any) => ({
      marketplace: Marketplace[availability.Marketplace as keyof typeof Marketplace],
      url: availability.Url
    })),
    metrics: {
      likes: record.fields.Likes
    },
    images: record.fields.Images.map((image: any) => ({
      url: image.url,
      description: image.description
    })),
    contact: {
      email: record.fields.ContactEmail,
      phone: record.fields.ContactPhone
    },
    origin: {
      city: record.fields.OriginCity,
      country: record.fields.OriginCountry
    },
    sustainabilityRatings: {
      environmental: record.fields.EnvironmentalRating,
      social: record.fields.SocialRating,
      ethical: record.fields.EthicalRating,
      durability: record.fields.DurabilityRating,
      innovation: record.fields.InnovationRating
    }
  }));
}
