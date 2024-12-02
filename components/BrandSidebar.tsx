import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  Calendar,
  Share2,
  Mail,
  Phone,
  Globe,
  ShoppingBag,
  Award,
  MapPin,
  Scissors,
} from "lucide-react";

type Founder = {
  name: string;
  imageUrl: string;
};

type Designer = {
  description: string;
  location?: string;
};

type Origin = {
  city: string;
  country: string;
};

type Contact = {
  email: string;
  phone: string;
};

type Marketplace = {
  marketplace: string;
  url: string;
};

type BrandSidebarProps = {
  founder: Founder[];
  designer?: Designer;
  origin: Origin;
  businessStartDate: string;
  productRange: string[];
  certifications: string[];
  availableOn: Marketplace[];
  contact: Contact;
  url: string;
};

const BrandSidebar = ({
  founder,
  designer,
  origin,
  businessStartDate,
  productRange,
  certifications,
  availableOn,
  contact,
  url,
}: BrandSidebarProps) => {
  return (
    <Card className="p-6 rounded-3xl shadow-none">
      <div className="space-y-4">
        {/* Founders section */}
        {founder.map((founder) => (
          <div key={founder.name} className="flex gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={founder.imageUrl}
                alt={founder.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-sm text-neutral-500 mb-0.5">Founder</div>
              <div className="text-sm font-medium text-neutral-800">{founder.name}</div>
            </div>
          </div>
        ))}

        {/* Designer section */}
        {designer && (
          <>
            <div className="h-px w-full bg-neutral-200" />
            <div className="flex gap-3">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                <Scissors className="w-6 h-6 text-neutral-500" />
              </div>
              <div>
                <div className="text-sm text-neutral-500 mb-0.5">Design Team</div>
                <div className="text-sm font-medium text-neutral-800">
                  {designer.description}
                  {designer.location && ` · ${designer.location}`}
                </div>
              </div>
            </div>
          </>
        )}

        <div className="h-px w-full bg-neutral-200" />

        {/* Origin */}
        <div className="flex gap-3">
          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
            <MapPin className="w-6 h-6 text-neutral-500" />
          </div>
          <div>
            <div className="text-sm text-neutral-500 mb-0.5">Origin</div>
            <div className="text-sm font-medium text-neutral-800">
              {origin.city}, {origin.country}
            </div>
          </div>
        </div>

        {/* Launch Date */}
        <div className="flex gap-3">
          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
            <Calendar className="w-6 h-6 text-neutral-500" />
          </div>
          <div>
            <div className="text-sm text-neutral-500 mb-0.5">Launched</div>
            <div className="text-sm font-medium text-neutral-800">{businessStartDate}</div>
          </div>
        </div>

        {/* Product Range */}
        <div className="flex gap-3">
          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
            <ShoppingBag className="w-6 h-6 text-neutral-500" />
          </div>
          <div>
            <div className="text-sm text-neutral-500 mb-0.5">Product Range</div>
            <div className="text-sm font-medium text-neutral-800">{productRange.join(", ")}</div>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex gap-3">
          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
            <Award className="w-6 h-6 text-neutral-500" />
          </div>
          <div>
            <div className="text-sm text-neutral-500 mb-0.5">Certifications</div>
            <div className="text-sm font-medium text-neutral-800">{certifications.join(", ")}</div>
          </div>
        </div>

        {/* First Divider */}
        <div className="h-px w-full bg-neutral-200" />

        {/* Available On */}
        <div className="space-y-3">
          <div className="text-sm text-neutral-500">Available On</div>
          <div className="grid grid-cols-2 gap-2">
            {availableOn.map(({ marketplace, url }) => (
              <Link
                key={marketplace}
                href={url || '#'}
                target="_blank"
                className="flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 bg-neutral-50 rounded-xl p-2 transition-colors"
              >
                <Image
                  src={`/logos/${marketplace.toLowerCase().replace(/ /g, '-')}.svg`}
                  alt={marketplace}
                  width={20}
                  height={20}
                  className="flex-shrink-0"
                />
                <span className="truncate">{marketplace}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Second Divider */}
        <div className="h-px w-full bg-neutral-200" />

        {/* Contact Info */}
        <div className="space-y-2">
          <Link
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Mail className="w-4 h-4" />
            {contact.email}
          </Link>
          <Link
            href={`tel:${contact.phone}`}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Phone className="w-4 h-4" />
            {contact.phone}
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          <Link
            href={url}
            target="_blank"
            className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">Visit Website</span>
          </Link>
          <button
            className="flex items-center justify-center gap-2 bg-neutral-100 text-neutral-800 px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors"
            onClick={() => {/* Add share functionality */}}
          >
            <Share2 className="w-4 h-4" />
            <span className="text-sm font-medium">Share</span>
          </button>
        </div>
      </div>
    </Card>
  );
};

export default BrandSidebar;