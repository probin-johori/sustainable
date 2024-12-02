import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { SustainableBrand, Category, Marketplace } from '@/types/brands';

const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
const SHEET_ID = '0'; // First sheet in the spreadsheet
const CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');

const jwt = new JWT({
  email: CLIENT_EMAIL,
  key: PRIVATE_KEY,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

export async function getBrandsData(): Promise<SustainableBrand[]> {
  try {
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, jwt);
    await doc.loadInfo();
    
    const sheet = doc.sheetsById[SHEET_ID];
    const rows = await sheet.getRows();
    
    return rows.map(row => {
      // Split comma-separated values into arrays
      const productRange = row.productRange?.split(',').map(item => item.trim()) || [];
      const certifications = row.certifications?.split(',').map(item => item.trim()) || [];
      const marketplaceNames = row.marketplace_name?.split(',').map(item => item.trim()) || [];
      const marketplaceUrls = row.marketplace_url?.split(',').map(item => item.trim()) || [];

      // Create marketplace availability array
      const availableOn = marketplaceNames.map((name, index) => ({
        marketplace: name as Marketplace,
        url: marketplaceUrls[index] || ''
      }));

      return {
        id: row.id,
        name: row.name,
        thumbnail: row.thumbnail,
        imageUrl: row.imageUrl,
        categories: [row.categories as Category],
        content: {
          about: row.about,
          impact: row.impact
        },
        url: row.url,
        themeColor: row.themeColor,
        businessStartDate: row.businessStartDate,
        metrics: {
          likes: parseInt(row.likes) || 0
        },
        founder: [{
          name: row.founder_name,
          role: row.founder_role,
          imageUrl: row.founder_imageUrl
        }],
        productRange,
        certifications,
        availableOn,
        contact: {
          email: row.contact_email,
          phone: row.contact_phone
        },
        origin: {
          city: row.origin_city,
          country: row.origin_country
        },
        sustainabilityRatings: {
          environmental: parseFloat(row.environmental_rating) || 0,
          social: parseFloat(row.social_rating) || 0,
          ethical: parseFloat(row.ethical_rating) || 0,
          durability: parseFloat(row.durability_rating) || 0,
          innovation: parseFloat(row.innovation_rating) || 0
        }
      };
    });
  } catch (error) {
    console.error('Error fetching Google Sheets data:', error);
    return [];
  }
}
