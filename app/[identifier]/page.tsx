'use client'

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sustainableBrands } from "@/lib/brands";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { BrandActions } from "./BrandActions";
import { ImageGallery } from "@/components/ImageGallery";
import { BrandHeader } from "@/components/BrandHeader";
import BrandRating from "@/components/BrandRating";
import {
  Calendar,
  Mail,
  Phone,
  BookmarkPlus,
  Share2
} from "lucide-react";

const slugify = (text: string) => {
  return text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
};

const getBrandByIdentifier = (identifier: string) => {
  return sustainableBrands.find(
    (brand) => slugify(brand.name) === identifier
  );
};

type PageParams = { params: { identifier: string } };

export default function BrandPage({ params }: PageParams) {
  const { identifier } = params;
  const brand = getBrandByIdentifier(identifier);

  if (!brand) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <BrandHeader searchQuery={""} onSearchChange={function (value: string): void {
        throw new Error("Function not implemented.");
      } } />

      <div className="pt-24 pb-16">
        <div className="flex justify-between mb-8 px-2 sm:px-40">
          <div>
            <h1 className="text-4xl font-bold text-left" style={{ color: '#163400' }}>{brand.name}</h1>
            <div className="mt-0">
              {brand.categories.map((category) => (
                <span key={category} className="mr-2 text-gray-600">{category}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6 translate-y-4">
            <button className="flex items-center gap-2 text-sm hover:text-gray-600">
              <BookmarkPlus className="w-4 h-4" />
              <span className="text-sm">Save</span>
            </button>
            <button className="flex items-center gap-2 text-sm hover:text-gray-600">
              <Share2 className="w-4 h-4" />
              <span className="text-sm">Share</span>
            </button>
          </div>
        </div>

        <div className="px-2 sm:px-40">
          <ImageGallery images={brand.images} brandName={brand.name} />
        </div>

        <div className="mt-5 px-2 sm:px-40">
          <BrandRating ratings={brand.sustainabilityRatings} />
          <div className="h-px w-full bg-neutral-200 mt-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-2 sm:px-40 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">About</h2>
              <p className="text-neutral-800">
                {brand.description}
              </p>
            </div>

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

          <div className="space-y-6">
            <BrandActions brand={brand} />

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
