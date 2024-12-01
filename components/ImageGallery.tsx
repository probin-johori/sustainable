'use client'

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Grid } from 'lucide-react';
import { type BrandImage } from '@/lib/brands';

interface ImageGalleryProps {
  images: BrandImage[];
  brandName: string;
}

export function ImageGallery({ images, brandName }: ImageGalleryProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentFullscreenIndex, setCurrentFullscreenIndex] = useState(0);
  const [showLeftChevron, setShowLeftChevron] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const fullscreenThumbnailsRef = useRef<HTMLDivElement>(null);

  const getImagePath = (image: BrandImage) => {
    if (!image?.url) return '';
    return image.url.replace('/brands/', '/brandimages/');
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

  const scrollToFullscreenThumbnail = (index: number) => {
    if (fullscreenThumbnailsRef.current) {
      const thumbnail = fullscreenThumbnailsRef.current.children[index] as HTMLElement;
      if (thumbnail) {
        const containerWidth = fullscreenThumbnailsRef.current.clientWidth;
        const thumbnailLeft = thumbnail.offsetLeft;
        const thumbnailWidth = thumbnail.clientWidth;
        const scrollLeft = thumbnailLeft - (containerWidth / 2) + (thumbnailWidth / 2);
        fullscreenThumbnailsRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
      scrollToFullscreenThumbnail(currentFullscreenIndex);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [currentFullscreenIndex, isFullscreen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFullscreen) return;
      
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
      }
      
      switch (e.key) {
        case 'ArrowRight':
          if (currentFullscreenIndex < images.length - 1) {
            setCurrentFullscreenIndex(prev => prev + 1);
          }
          break;
        case 'ArrowLeft':
          if (currentFullscreenIndex > 0) {
            setCurrentFullscreenIndex(prev => prev - 1);
          }
          break;
        case 'Escape':
          setIsFullscreen(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, currentFullscreenIndex, images.length]);

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentFullscreenIndex < images.length - 1) {
      setCurrentFullscreenIndex(currentFullscreenIndex + 1);
    }
  };

  const showPreviousImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentFullscreenIndex > 0) {
      setCurrentFullscreenIndex(currentFullscreenIndex - 1);
    }
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
                className="w-full h-full relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl"
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
            onClick={(e) => {
              e.stopPropagation();
              scroll('left');
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow-md hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            scroll('right');
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow-md hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFullscreen(true);
          }}
          className="absolute right-4 bottom-8 flex items-center gap-2 px-4 py-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <Grid className="w-4 h-4" />
          <span className="text-sm font-medium">Gallery</span>
        </button>
      </div>

      {isFullscreen && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-4 flex justify-between items-center">
            <span className="text-white/80 text-sm">
              {currentFullscreenIndex + 1} / {images.length}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFullscreen(false);
              }}
              className="p-2 rounded-full hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col">
            <div className="flex-1 relative py-8">
              {currentFullscreenIndex > 0 && (
                <button
                  onClick={showPreviousImage}
                  className="absolute left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/75 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <ChevronLeft className="h-8 w-8 text-white" />
                </button>
              )}

              <div className="mx-auto px-20 h-full flex items-center">
                <div className="w-[calc(100%-8rem)] mx-auto flex">
                  <div className="w-[70%] h-[70vh] relative rounded-lg overflow-hidden">
                    <Image
                      src={getImagePath(images[currentFullscreenIndex])}
                      alt={`${brandName} - Image ${currentFullscreenIndex + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="flex-1 flex items-center ml-8">
                    <div className="w-full rounded-lg p-6">
                      <p className="text-white/90 text-sm">
                        {images[currentFullscreenIndex].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {currentFullscreenIndex < images.length - 1 && (
                <button
                  onClick={showNextImage}
                  className="absolute right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/75 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <ChevronRight className="h-8 w-8 text-white" />
                </button>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 flex justify-center">
              <div 
                ref={fullscreenThumbnailsRef}
                className="flex gap-2 p-2 bg-neutral-800 rounded-2xl overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
              >
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentFullscreenIndex(index);
                    }}
                    className={`relative h-16 aspect-square flex-shrink-0 rounded-lg overflow-hidden transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-800 ${
                      index === currentFullscreenIndex 
                        ? 'ring-2 ring-white ring-offset-2 ring-offset-neutral-800 scale-105' 
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={getImagePath(image)}
                      alt={`${brandName} - Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageGallery;
