"use client"

import { sustainableBrands, Category } from '@/lib/brands';
import { BrandCard } from '@/components/BrandCard';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu } from "lucide-react"
import Image from "next/image";
import QuickFilter from '@/components/QuickFilter';
import { useState, useMemo, useEffect } from 'react';
import Link from "next/link";

export default function Home() {
  const [activeCategories, setActiveCategories] = useState<Category[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNav = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNav);
      return () => window.removeEventListener('scroll', controlNav);
    }
  }, [lastScrollY]);

  const filteredBrands = useMemo(() => {
    return sustainableBrands
      .filter(brand => {
        if (activeCategories.length === 0) return true;
        return activeCategories.some(category => brand.categories.includes(category));
      })
      .filter(brand => {
        if (!searchQuery.trim()) return true;
        const searchLower = searchQuery.toLowerCase();
        return (
          brand.name.toLowerCase().includes(searchLower) ||
          brand.description.toLowerCase().includes(searchLower)
        );
      });
  }, [activeCategories, searchQuery]);

  return (
    <main className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 bg-white z-50">
        <div className="px-2 sm:px-20">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 h-8">
              <Image
                src="/logos/sustainable-brands.svg"
                alt="Sustainable Brands Logo"
                width={32}
                height={32}
              />
              <span className="font-semibold text-xl">EcoStamped</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden sm:block">
                <Input 
                  placeholder="Search sustainable brands..." 
                  className="w-[280px] pl-10 pr-4 h-10 rounded-full bg-neutral-100 border-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1C6832] focus-visible:ring-offset-2"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <QuickFilter 
          activeCategories={activeCategories} 
          onCategoryChange={setActiveCategories} 
        />
      </div>

      <div className={`pt-24 ${activeCategories.length > 0 || searchQuery ? 'mt-12' : ''}`}>
        <div className={`mx-auto px-2 sm:px-20 pb-10 ${activeCategories.length === 0 && !searchQuery ? 'mt-24' : ''}`}>
          {activeCategories.length === 0 && !searchQuery && (
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold" style={{ color: '#163400' }}>
                Discover India's Tomorrow
                <br />
                with Eco-Champions
              </h1>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
            {filteredBrands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
          
          {/* Add Brand CTA Section */}
          {(activeCategories.length === 0 && !searchQuery && filteredBrands.length > 0) && (
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
          
          {/* Show CTA when filtered results are empty */}
          {(activeCategories.length > 0 || searchQuery) && filteredBrands.length === 0 && (
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
      </div>
    </main>
  );
}
