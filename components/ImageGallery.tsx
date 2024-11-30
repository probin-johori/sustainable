'use client'

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Grid } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  brandName: string;
}

export function ImageGallery({ images, brandName }: ImageGalleryProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentFullscreenIndex, setCurrentFullscreenIndex] = useState(0);
  const [showLeftChevron, setShowLeftChevron] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const getImagePath = (path: string) => {
    const cleanPath = path.replace(/^\/brands\//, '');
    return `/brandimages/${cleanPath}`;
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setShowLeftChevron(scrollContainerRef.current.scrollLeft > 0);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && isFullscreen) {
        showNextImage();
      } else if (e.key === 'ArrowLeft' && isFullscreen) {
        showPreviousImage();
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  const showNextImage = () => {
    setCurrentFullscreenIndex((prevIndex) => 
      prevIndex + 1 >= images.length ? 0 : prevIndex + 1
    );
  };

  const showPreviousImage = () => {
    setCurrentFullscreenIndex((prevIndex) => 
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      <div className="relative">
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-2 p-1 mb-3 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative flex-shrink-0 w-[45%] aspect-[3/2]"
            >
              <button 
                className="w-full h-full relative group"
                onClick={() => {
                  setCurrentFullscreenIndex(index);
                  setIsFullscreen(true);
                }}
              >
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <Image
                    src={getImagePath(image)}
                    alt={`${brandName} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
                </div>
              </button>
            </div>
          ))}
        </div>

        {showLeftChevron && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow-md hover:bg-white transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}
        
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow-md hover:bg-white transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <button
          onClick={() => setIsFullscreen(true)}
          className="absolute right-4 bottom-8 flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full shadow-md hover:bg-white transition-colors"
        >
          <Grid className="w-4 h-4" />
          <span className="text-sm font-medium">See more photos</span>
        </button>
      </div>

      {isFullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
          <div className="p-4 flex justify-end">
            <button
              onClick={() => setIsFullscreen(false)}
              className="p-2 rounded-full bg-black/50 hover:bg-black/75 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {images.map((image, index) => (
              <div key={index} className="relative w-full h-screen">
                <Image
                  src={getImagePath(image)}
                  alt={`${brandName} - Image ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
