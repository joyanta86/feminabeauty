
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GalleryHorizontal, Camera } from "lucide-react";
import { toast } from "sonner";

interface GalleryImage {
  id: string;
  url: string;
  title: string;
  description?: string;
}

const Gallery = () => {
  // Get images from localStorage
  const getStoredImages = (): GalleryImage[] => {
    try {
      const stored = localStorage.getItem('gallery-images');
      return stored ? JSON.parse(stored) : [
        {
          id: '1',
          url: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          title: 'Threading Work',
          description: 'Professional eyebrow shaping'
        },
        {
          id: '2',
          url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          title: 'Facial Treatment',
          description: 'Relaxing facial session'
        },
        {
          id: '3',
          url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          title: 'Makeup Application',
          description: 'Professional makeup service'
        }
      ];
    } catch {
      return [];
    }
  };

  const [images, setImages] = useState<GalleryImage[]>(getStoredImages());

  // Refresh images from localStorage when component mounts or when returning from admin
  useEffect(() => {
    const refreshImages = () => {
      setImages(getStoredImages());
    };
    
    refreshImages();
    
    // Listen for storage changes
    window.addEventListener('storage', refreshImages);
    
    return () => {
      window.removeEventListener('storage', refreshImages);
    };
  }, []);


  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 via-rose-50 to-pink-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-rose-800 mb-4 flex items-center justify-center gap-3">
            <GalleryHorizontal className="h-8 w-8 text-rose-600" />
            Our Work Gallery
            <Camera className="h-8 w-8 text-rose-600" />
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Browse through our collection of beauty transformations and workspace highlights
          </p>
        </div>


        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <Card key={image.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/90 backdrop-blur-sm border-rose-200">
              <div className="relative">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-rose-800 mb-2">{image.title}</h3>
                {image.description && (
                  <p className="text-sm text-gray-600">{image.description}</p>
                )}
                <Badge variant="secondary" className="mt-2 bg-rose-100 text-rose-700">
                  Our Work
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {images.length === 0 && (
          <div className="text-center py-12">
            <Camera className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No photos in gallery yet</p>
            <p className="text-gray-400">Add your first photo to get started!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
