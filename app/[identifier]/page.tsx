'use client'

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sustainableBrands } from "@/lib/brands";
import { Card } from "@/components/ui/card";
import { ImageGallery } from "@/components/ImageGallery";
import { BrandHeader } from "@/components/BrandHeader";
import BrandRating from "@/components/BrandRating";
import {
  Calendar,
  BookmarkPlus,
  Share2,
  Mail,
  Phone,
  Globe,
  ShoppingBag,
  Award,
  Users
} from "lucide-react";

const slugify = (text: string) => {
  return text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
};

const getBrandByIdentifier = (identifier: string) => {
  return sustainableBrands.find(
    (brand) => slugify(brand.name) === identifier
  );
};

type PageProps = {
  params: Promise<{
    identifier: string
  }>
};

export default function BrandPage({ params }: PageProps) {
  const { identifier } = use(params);
  const brand = getBrandByIdentifier(identifier);

  if (!brand) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <BrandHeader />

      <div className="pt-24 pb-16">
        <div className="flex justify-between mb-8 px-2 sm:px-40">
          <div>
            <h1 className="text-4xl font-bold text-left" style={{ color: '#163400' }}>{brand.name}</h1>
            <div className="mt-0">
              {brand.categories.map((category, index) => (
                <span key={category} className="text-gray-600">
                  {category}{index < brand.categories.length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6 translate-y-4">
            <button className="flex items-center gap-2 text-sm hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg p-2">
              <BookmarkPlus className="w-4 h-4" />
              <span className="text-sm">Save</span>
            </button>
            <button className="flex items-center gap-2 text-sm hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg p-2">
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
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Quick Information</h3>
              <div className="space-y-4">
                {/* Cofounders */}
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground mb-1">Cofounders</div>
                    {brand.cofounders.map((cofounder, index) => (
                      <div key={cofounder.name}>
                        {cofounder.name}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Launch Date */}
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground mb-1">Launched</div>
                    <div>{new Date(brand.businessStartDate).toLocaleDateString()}</div>
                  </div>
                </div>

                {/* Product Range */}
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <ShoppingBag className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground mb-1">Product Range</div>
                    <div>{brand.productRange.join(", ")}</div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Award className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground mb-1">Certifications</div>
                    <div>{brand.certifications.join(", ")}</div>
                  </div>
                </div>

                {/* Available On */}
                <div className="space-y-2">
                  <div className="font-medium text-sm">Available On</div>
                  <div className="flex gap-4">
                    {brand.availableOn.map((platform) => (
                      <Link
                        key={platform.name}
                        href={platform.url}
                        target="_blank"
                        className="hover:opacity-80"
                      >
                        <Image
                          src={`/logos/${platform.name.toLowerCase()}.svg`}
                          alt={platform.name}
                          width={24}
                          height={24}
                        />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2">
                  <Link
                    href={brand.url}
                    target="_blank"
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <Globe className="w-4 h-4" />
                    Visit Website
                  </Link>
                  <Link
                    href={`mailto:${brand.contact.email}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Mail className="w-4 h-4" />
                    {brand.contact.email}
                  </Link>
                  <Link
                    href={`tel:${brand.contact.phone}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Phone className="w-4 h-4" />
                    {brand.contact.phone}
                  </Link>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Engagement</h3>
              <div className="text-center">
                <div className="text-2xl font-bold">{brand.metrics.likes.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Likes</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
