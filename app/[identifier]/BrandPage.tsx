// app/[identifier]/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sustainableBrands } from "@/lib/brands";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { BrandActions } from "./BrandActions";
import {
  Calendar,
  Mail,
  Phone,
} from "lucide-react";

// Helper function to slugify text
const slugify = (text: string) => {
  return text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
};

// Find brand by identifier
const getBrandByIdentifier = (identifier: string) => {
  return sustainableBrands.find(
    (brand) => slugify(brand.name) === identifier
  );
};

export async function generateMetadata({
  params,
}: {
  params: { identifier: string };
}): Promise<Metadata> {
  const brand = getBrandByIdentifier(params.identifier);

  if (!brand) {
    return {
      title: "Brand Not Found",
    };
  }

  return {
    title: `${brand.name} - Sustainable Brands India`,
    description: brand.shortDescription,
  };
}

export default function BrandPage({
  params,
}: {
  params: { identifier: string };
}) {
  const brand = getBrandByIdentifier(params.identifier);

  if (!brand) {
    notFound();
  }

  const logoPath = `/logos/${slugify(brand.name)}.svg`;

  return (
    <div className="min-h-screen">
      {/* Hero Section with Brand Color */}
      <div
        className="h-64 relative flex items-center justify-center"
        style={{ backgroundColor: brand.themeColor }}
      >
        <div className="absolute -bottom-16 w-32 h-32 bg-white rounded-xl shadow-lg flex items-center justify-center p-3">
          <Image
            src={logoPath}
            alt={`${brand.name} logo`}
            width={96}
            height={96}
            className="object-contain"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{brand.name}</h1>
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {brand.categories.map((category) => (
              <Badge
                key={category}
                variant="secondary"
                className="rounded-full"
              >
                {category}
              </Badge>
            ))}
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {brand.shortDescription}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">About</h2>
              <p className="text-muted-foreground whitespace-pre-line">
                {brand.description}
              </p>
            </Card>

            {/* Gallery */}
            {brand.images.length > 0 && (
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {brand.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-video rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt={`${brand.name} gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Video Trailer */}
            {brand.trailer && (
              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Watch Our Story</h2>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={brand.trailer}
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                  />
                </div>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <BrandActions brand={brand} />

            {/* Info Card */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Badge variant="outline" className="rounded-full">
                    {brand.business}
                  </Badge>
                </div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Added on {new Date(brand.dateAdded).toLocaleDateString()}</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                  <Link href={`tel:${brand.contact.phone}`} className="hover:underline">
                    {brand.contact.phone}
                  </Link>
                </div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                  <Link href={`mailto:${brand.contact.email}`} className="hover:underline">
                    {brand.contact.email}
                  </Link>
                </div>
              </div>
            </Card>

            {/* Stats Card */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Engagement</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">{brand.metrics.views.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Views</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{brand.metrics.likes.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Likes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{brand.metrics.clicks.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Clicks</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}