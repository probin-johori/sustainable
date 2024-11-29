"use client"

import { useRef, useState, useEffect } from 'react';
import { Category } from '@/lib/brands';
import {
  Shirt, Soup, Home, EyeClosed, Baby, Gift, Heart, Pencil, Dog, Plane,
  Flower2, BookOpen, Car, Scissors, Palette, Sofa, ScrollText, Tractor,
  Gem, Footprints, Sparkles, Monitor, MountainSnow, ChevronRight, ChevronLeft,
  X, Glasses, Volleyball, SwatchBook
} from "lucide-react";

interface QuickFilterProps {
  activeCategories: Category[];
  onCategoryChange: (categories: Category[]) => void;
}

export const QuickFilter = ({ activeCategories = [], onCategoryChange }: QuickFilterProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [hasScrollShadow, setHasScrollShadow] = useState(false);

  const categories = [
    { id: "Clothing", label: 'Clothing', icon: Shirt },
    { id: "Accessories", label: 'Accessories', icon: Glasses },
    { id: "Food", label: 'Food', icon: Soup },
    { id: "Home", label: 'Home', icon: Home },
    { id: "Beauty", label: 'Beauty', icon: EyeClosed },
    { id: "Electronics", label: 'Electronics', icon: Monitor },
    { id: "Toys", label: 'Toys', icon: Baby },
    { id: "Outdoor", label: 'Outdoor', icon: MountainSnow },
    { id: "Sports", label: 'Sports', icon: Volleyball },
    { id: "Gifts", label: 'Gifts', icon: Gift },
    { id: "Health", label: 'Health', icon: Heart },
    { id: "Stationery", label: 'Stationery', icon: Pencil },
    { id: "Pets", label: 'Pets', icon: Dog },
    { id: "Travel", label: 'Travel', icon: Plane },
    { id: "Garden", label: 'Garden', icon: Flower2 },
    { id: "Books", label: 'Books', icon: BookOpen },
    { id: "Automotive", label: 'Automotive', icon: Car },
    { id: "Crafts", label: 'Crafts', icon: Scissors },
    { id: "Art", label: 'Art', icon: Palette },
    { id: "Furniture", label: 'Furniture', icon: Sofa },
    { id: "Decor", label: 'Decor', icon: SwatchBook },
    { id: "Textiles", label: 'Textiles', icon: ScrollText },
    { id: "Farming", label: 'Farming', icon: Tractor },
    { id: "Jewelry", label: 'Jewelry', icon: Gem },
    { id: "Footwear", label: 'Footwear', icon: Footprints },
    { id: "Cleaning", label: 'Cleaning', icon: Sparkles }
  ] as const;

  const handleCategoryClick = (categoryId: Category) => {
    const newCategories = activeCategories.includes(categoryId)
      ? activeCategories.filter(c => c !== categoryId)
      : [...activeCategories, categoryId];
    onCategoryChange(newCategories);
  };

  const checkFilterScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 12);
    }
  };

  const checkPageScroll = () => {
    if (typeof window !== 'undefined') {
      setHasScrollShadow(window.scrollY > 0);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkFilterScroll);
      // Initial check for filter scroll
      setTimeout(checkFilterScroll, 100);
    }

    // Add page scroll listener
    window.addEventListener('scroll', checkPageScroll);
    // Initial check for page scroll
    checkPageScroll();

    return () => {
      if (container) {
        container.removeEventListener('scroll', checkFilterScroll);
      }
      window.removeEventListener('scroll', checkPageScroll);
    };
  }, []);

  useEffect(() => {
    checkFilterScroll();
  }, [activeCategories]);

  return (
    <div ref={containerRef} className={`transition-shadow duration-200 ${hasScrollShadow ? "shadow-[0_1px_3px_0_rgba(0,0,0,0.1)]" : ""}`}>
      <div className="border-t border-neutral-200" />
      <div className={`relative bg-white py-4 ${activeCategories.length > 0 ? 'pr-44 pl-20' : 'px-20'}`}>
        {showLeftArrow && (
          <div className="absolute left-20 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/70 to-transparent z-20" />
        )}

        {showRightArrow && (
          <div className={`absolute top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/70 to-transparent z-20 ${activeCategories.length > 0 ? 'right-44' : 'right-20'}`} />
        )}
        
        {showLeftArrow && (
          <button 
            onClick={() => scroll('left')}
            className="absolute left-20 top-1/2 -translate-y-1/2 z-30 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1C6832] focus-visible:ring-offset-2"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}
        
        <div 
          ref={scrollContainerRef}
          className="flex gap-2 overflow-x-auto no-scrollbar px-1 py-1"
          style={{ 
            scrollBehavior: 'smooth',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {categories.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => handleCategoryClick(id as Category)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors
                ${activeCategories.includes(id as Category)
                  ? 'bg-[#f5f5f5] border-[#062900] text-[#062900]' 
                  : 'border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-black'
                } focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1C6832] focus-visible:ring-offset-2`}
            >
              <Icon className="h-4 w-4" />
              <span className="text-sm whitespace-nowrap">{label}</span>
            </button>
          ))}
        </div>

        <div className={`absolute top-1/2 -translate-y-1/2 z-30 flex items-center gap-4 ${activeCategories.length > 0 ? 'right-20' : 'right-20'}`}>
          {showRightArrow && (
            <button 
              onClick={() => scroll('right')}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1C6832] focus-visible:ring-offset-2"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          )}
          
          {activeCategories.length > 0 && (
            <button 
              onClick={() => onCategoryChange([])}
              className="flex items-center gap-2 text-[#1C6832] hover:text-[#062900] transition-colors ml-4"
            >
              <X className="h-4 w-4" />
              <span className="text-sm font-medium">Clear</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuickFilter;
