'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Header } from "@/components/Header";
import { useRouter } from 'next/navigation';

export function BrandHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > (document.documentElement.scrollHeight * 0.07));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <Header
      searchQuery={searchQuery}
      onSearchChange={handleSearchChange}
      className={`fixed top-0 left-0 right-0 bg-white z-50 ${isScrolled ? 'shadow-sm' : ''}`}
    />
  );
}
