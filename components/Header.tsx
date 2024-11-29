"use client"

import { useState, useEffect } from 'react';
import Image from "next/image";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import QuickFilter from '@/components/QuickFilter';
import { Category } from '@/lib/brands';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  activeCategories: Category[];
  onCategoryChange: (categories: Category[]) => void;
}

export function Header({
  searchQuery,
  onSearchChange,
  activeCategories,
  onCategoryChange
}: HeaderProps) {
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

  return (
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
            <span className="font-semibold text-xl">Sustainable Brands</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Input 
                placeholder="Search sustainable brands..." 
                className="w-[280px] pl-10 pr-4 h-10 rounded-full bg-neutral-100 border-0"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
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
        onCategoryChange={onCategoryChange} 
      />
    </div>
  );
}
