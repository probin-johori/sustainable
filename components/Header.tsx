'use client'

import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AddBrandForm } from '@/components/AddBrandForm';
import { sustainableBrands } from '@/lib/brands';
import Link from "next/link";

interface HeaderProps {
  className?: string;
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const slugify = (text: string) => {
  return text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
};

export function Header({
  className = "fixed top-0 left-0 right-0 bg-white z-50",
  searchQuery,
  onSearchChange
}: HeaderProps) {
  const [showAddBrandForm, setShowAddBrandForm] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showHover, setShowHover] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  
  const searchResults = sustainableBrands
    .filter(brand => brand.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice(0, 5);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 7);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowDropdown(false);
        onSearchChange('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onSearchChange]);

  const handleFormSubmit = (data: any) => {
    console.log('Form submitted:', data);
  };

  const handleClearSearch = () => {
    onSearchChange('');
    setShowDropdown(false);
  };

  return (
    <div className={`${className} ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="px-2 sm:px-20">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 h-8">
            <Link 
              href="/" 
              className="flex items-center gap-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 p-1"
            >
              <div className="relative w-8 h-8">
                <Image
                  src={`/logos/sustainable-brands.png`}
                  alt="Sustainable Brands Logo"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <span className="font-semibold text-xl">Eco Stamped</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block" ref={searchRef}>
              <Input 
                placeholder="Search sustainable brands..." 
                className="w-[280px] pl-10 pr-12 h-10 rounded-full bg-neutral-100 border-0 focus:bg-white"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => setShowDropdown(true)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              {(searchQuery || showDropdown) && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-neutral-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <X className="h-4 w-4 text-gray-500" />
                </button>
              )}

              {showDropdown && (
                <div 
                  className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-sm border border-gray-100 h-[240px] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {searchResults.length > 0 ? (
                    <>
                      <div className="pt-2 pb-2 px-4">
                        <span className="text-[12px] text-gray-600 block mb-0">
                          {searchQuery ? 'Search result' : 'Top Sustainable Brands'}
                        </span>
                      </div>
                      <div className="px-2 pb-2">
                        {searchResults.map((brand, index) => (
                          <Link 
                            href={`/${slugify(brand.name)}`}
                            key={brand.id}
                            className={`flex items-center gap-3 p-2 cursor-pointer rounded-md hover:bg-neutral-100 ${index === 0 && !showHover ? 'bg-neutral-100' : ''} focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`}
                            onClick={() => setShowDropdown(false)}
                            onMouseEnter={() => setShowHover(true)}
                            onMouseLeave={() => setShowHover(false)}
                          >
                            <div className="w-8 h-8 relative rounded-lg overflow-hidden flex-shrink-0">
                              <Image
                                src={`/logos/${brand.id}.png`}
                                alt={brand.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="text-sm">{brand.name}</div>
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="h-full flex items-center justify-center">
                      <span className="text-gray-500 text-sm">No brand found</span>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <Button
              onClick={() => setShowAddBrandForm(true)}
              className="rounded-full bg-[#1C6832] text-white hover:bg-[#1C6832]/90"
            >
              Add Brand
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <AddBrandForm 
        isOpen={showAddBrandForm}
        onClose={() => setShowAddBrandForm(false)}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}
