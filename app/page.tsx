"use client"

import { sustainableBrands, Category } from '@/lib/brands';
import { BrandCard } from '@/components/BrandCard';
import { Button } from "@/components/ui/button";
import { Header } from '@/components/Header';
import QuickFilter from '@/components/QuickFilter';
import { useState, useMemo, useEffect } from 'react';
import Link from "next/link";

export default function Home() {
  const [activeCategories, setActiveCategories] = useState<Category[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setShowShadow(scrollPercentage >= 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredBrands = useMemo(() => {
    return sustainableBrands.filter(brand => {
      if (activeCategories.length === 0) return true;
      return activeCategories.some(category => brand.categories.includes(category));
    });
  }, [activeCategories]);

  return (
    <main className="min-h-screen bg-white">
      <Header 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <div className={`fixed top-16 left-0 right-0 bg-white z-40 ${showShadow ? 'shadow-xs' : ''}`}>
        <QuickFilter 
          activeCategories={activeCategories}
          onCategoryChange={setActiveCategories}
        />
      </div>

      <div className="pt-40 mx-auto px-2 sm:px-20 pb-10">
        {activeCategories.length === 0 && (
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold" style={{ color: '#163400' }}>
              Discover India's Tomorrow
              <br />
              with Eco-Champions
            </h1>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-2">
          {filteredBrands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
        
        {activeCategories.length === 0 && filteredBrands.length > 0 && (
          <div className="mt-16 text-center">
            <h3 className="text-lg font-medium text-neutral-800 mb-4">
              Building something sustainable? Let's grow together
            </h3>
            <Button
              asChild
              variant="default"
              className="bg-black text-white hover:bg-neutral-900 rounded-full px-8"
            >
              <Link href="mailto:connect@sustainablebrands.in">
                Add Brand
              </Link>
            </Button>
          </div>
        )}
        
        {activeCategories.length > 0 && filteredBrands.length === 0 && (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <h3 className="text-lg font-medium text-neutral-800 mb-4">
              Building something sustainable? Let's grow together
            </h3>
            <Button
              asChild
              variant="default"
              className="bg-black text-white hover:bg-neutral-900 rounded-full px-8"
            >
              <Link href="mailto:connect@sustainablebrands.in">
                Add Brand
              </Link>
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
