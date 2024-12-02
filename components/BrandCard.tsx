// BrandCard.tsx
import { SustainableBrand } from '@/lib/brands';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { useState } from 'react';

interface BrandCardProps {
  brand: SustainableBrand;
}

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')     
    .replace(/[^\w-]+/g, ''); 
};

export const BrandCard = ({ brand }: BrandCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const logoPath = `/logos/${slugify(brand.name)}.png`;
  const detailsPath = `/${slugify(brand.name)}`;

  return (
    <div className="relative w-full">
      <Link 
        href={detailsPath}
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1C6832] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-xl block"
      >
        <Card className="relative rounded-xl border-0 overflow-hidden">
          <div className="relative w-full pt-[100%]">
            <div className="absolute inset-0 w-full h-full" style={{ backgroundColor: '#F4F3E8' }}>
              {brand.imageUrl && !imageError ? (
                <Image
                  src={brand.imageUrl}
                  alt={`${brand.name} banner`}
                  fill
                  quality={100}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-neutral-100">
                  <span className="text-neutral-400">{brand.name}</span>
                </div>
              )}
            </div>
            
            <div className="absolute inset-x-6 bottom-6">
              <div 
                className="relative"
                onMouseEnter={() => setIsFlipped(true)}
                onMouseLeave={() => setIsFlipped(false)}
              >
                <div className={`bg-white rounded-full transition-all duration-500 ${
                  isFlipped ? 'opacity-0' : 'opacity-100'
                }`}>
                  <div className="flex items-center justify-center p-2 gap-2">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-neutral-100 rounded-full">
                      <Image
                        src={logoPath}
                        alt={`${brand.name} logo`}
                        width={40}
                        height={40}
                        className="object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm text-gray-900" style={{ lineHeight: '20px' }}>
                        {brand.name}
                      </h3>
                      <p className="text-sm text-gray-500 truncate" style={{ lineHeight: '18px' }}>
                        {brand.categories.join(', ')}
                      </p>
                    </div>

                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4 text-[#1C6832]" />
                    </div>
                  </div>
                </div>

                <div className={`absolute inset-0 bg-white rounded-full transition-all duration-500 ${
                  isFlipped ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="p-2 h-full flex items-center justify-center gap-2">
                    <span className="text-[#1C6832] font-semibold text-sm">About brand</span>
                    <ArrowUpRight className="w-4 h-4 text-[#1C6832]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
};
