'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Header } from "@/components/Header";

interface BrandHeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export function BrandHeader({ searchQuery, onSearchChange }: BrandHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > (document.documentElement.scrollHeight * 0.07));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Header
      searchQuery={searchQuery}
      onSearchChange={onSearchChange}
      className={`fixed top-0 left-0 right-0 bg-white z-50 ${isScrolled ? 'shadow-sm' : ''}`}
    />
  );
}