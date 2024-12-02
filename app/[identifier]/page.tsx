'use client'

import React from 'react';
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from 'next';
import { sustainableBrands } from "@/lib/brands";
import { ImageGallery } from "@/components/ImageGallery";
import { BrandHeader } from "@/components/BrandHeader";
import BrandRating from "@/components/BrandRating";
import BrandSidebar from "@/components/BrandSidebar";
import CommentSection from "@/components/CommentSection";
import {
  BookmarkPlus,
  Share2,
} from "lucide-react";

const sampleComments: { id: string; author: { name: string; location: string; avatar?: string; }; rating: number; date: string; content: string; }[] = [
  // Your sample comments data
];

const slugify = (text: string) => {
  return text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
};

const getBrandByIdentifier = (identifier: string) => {
  return sustainableBrands.find(
    (brand) => slugify(brand.name) === identifier || brand.id === identifier
  );
};

type Props = {
  params: {
    identifier: string;
  };
};

// Optionally add metadata generation if needed
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const brand = getBrandByIdentifier(params.identifier);
//   if (!brand) {
//     return { title: 'Brand Not Found' };
//   }
//   return {
//     title: brand.name,
//     description: brand.content.about.slice(0, 160),
//   };
// }

export default function BrandPage({ params }: Props) {
  const { identifier } = React.use(params);
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
            <button className="flex items-center gap-2 text-sm hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl p-2">
              <BookmarkPlus className="w-4 h-4" />
              <span className="text-sm">Save</span>
            </button>
            <button className="flex items-center gap-2 text-sm hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl p-2">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 px-2 sm:px-40 mt-8">
          {/* Main content section - 70% width (8 columns) */}
          <div className="lg:col-span-8">
            <div className="space-y-16">
              {/* About Section */}
              <div>
                <p className="text-neutral-800">
                  {brand.content.about}
                </p>
              </div>

              {/* Impact Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Impact</h2>
                <p className="text-neutral-800">
                  {brand.content.impact}
                </p>
              </div>

              {/* Brand Story Video */}
              {brand.brandTrailerUrl && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Brand Story</h3>
                    <div 
                      className="relative pt-[56.25%] group bg-neutral-100 rounded-2xl overflow-hidden" 
                    >
                      <iframe
                        id="vimeo-player"
                        src={`${brand.brandTrailerUrl.replace('vimeo.com', 'player.vimeo.com/video')}?volume=0.001&muted=0&api=1&autopause=0&autoplay=1&loop=1&controls=1&keyboard=1&quality=1080p&transparent=1&portrait=0&byline=0&title=0&texttrack=false&sidedock=1&dnt=1`}
                        className="absolute top-0 left-0 w-full h-full rounded-2xl transition-all duration-300"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      />
                      <div 
                        className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 rounded-2xl pointer-events-none" 
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar section - 30% width (4 columns) */}
          <div className="lg:col-span-4">
            <BrandSidebar 
              founder={brand.founder}
              designer={brand.designer}
              origin={brand.origin}
              businessStartDate={brand.businessStartDate}
              productRange={brand.productRange}
              certifications={brand.certifications}
              availableOn={brand.availableOn}
              contact={brand.contact}
              url={brand.url}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
