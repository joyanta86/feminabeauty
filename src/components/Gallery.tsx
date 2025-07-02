
import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, X, Camera, GalleryHorizontal, Shield, Settings, Upload } from "lucide-react";
import { toast } from "sonner";
import { useAdmin } from "@/contexts/AdminContext";
import AdminLogin from "./AdminLogin";
import AdminPanel from "./AdminPanel";

interface GalleryImage {
  id: string;
  url: string;
  title: string;
  description?: string;
}

const Gallery = () => {
  const { isAdminLoggedIn } = useAdmin();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<GalleryImage[]>([
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
  ]);

  const [newImageUrl, setNewImageUrl] = useState('');
  const [newImageTitle, setNewImageTitle] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [uploadMethod, setUploadMethod] = useState<'url' | 'file'>('url');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      toast("Please select an image file");
      return;
    }

    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast("Image size must be less than 5MB");
      return;
    }

    if (!newImageTitle.trim()) {
      toast("Please enter a title for the image");
      return;
    }

    // Convert file to base64 for persistent storage
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      
      const newImage: GalleryImage = {
        id: Date.now().toString(),
        url: imageUrl,
        title: newImageTitle,
        description: ''
      };

      setImages(prevImages => [...prevImages, newImage]);
      setNewImageTitle('');
      setShowAddForm(false);
      toast("Image uploaded successfully!");
      
      // Reset the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    };
    
    reader.onerror = () => {
      toast("Error reading file. Please try again.");
    };
    
    reader.readAsDataURL(file);
  };

  const handleAddImage = () => {
    if (!newImageUrl || !newImageTitle) {
      toast("Please fill in both URL and title");
      return;
    }

    const newImage: GalleryImage = {
      id: Date.now().toString(),
      url: newImageUrl,
      title: newImageTitle,
      description: ''
    };

    setImages([...images, newImage]);
    setNewImageUrl('');
    setNewImageTitle('');
    setShowAddForm(false);
    toast("Image added to gallery!");
  };

  const handleRemoveImage = (id: string) => {
    setImages(images.filter(img => img.id !== id));
    toast("Image removed from gallery");
  };

  const handleAdminAccess = () => {
    if (isAdminLoggedIn) {
      setShowAddForm(true);
    } else {
      setShowAdminLogin(true);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

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

        {/* Admin Controls */}
        <div className="mb-8 text-center">
          <div className="flex justify-center gap-4 mb-4">
            {!showAddForm ? (
              <Button
                onClick={handleAdminAccess}
                className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Shield className="h-4 w-4 mr-2" />
                {isAdminLoggedIn ? 'Add New Photo' : 'Admin Login'}
              </Button>
            ) : null}
            
            {isAdminLoggedIn && (
              <Button
                onClick={() => setShowAdminPanel(true)}
                variant="outline"
                className="border-rose-600 text-rose-600 hover:bg-rose-50"
              >
                <Settings className="h-4 w-4 mr-2" />
                Admin Panel
              </Button>
            )}
          </div>

          {/* Add New Image Form - Only visible to logged-in admins */}
          {showAddForm && isAdminLoggedIn && (
            <Card className="max-w-md mx-auto bg-white/90 backdrop-blur-sm border-rose-200">
              <CardHeader>
                <CardTitle className="text-rose-800 flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  Add New Photo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Upload Method Selection */}
                <div className="flex gap-2 mb-4">
                  <Button
                    type="button"
                    onClick={() => setUploadMethod('file')}
                    variant={uploadMethod === 'file' ? 'default' : 'outline'}
                    className="flex-1"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Upload File
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setUploadMethod('url')}
                    variant={uploadMethod === 'url' ? 'default' : 'outline'}
                    className="flex-1"
                  >
                    URL
                  </Button>
                </div>

                {/* Title Input (always visible) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={newImageTitle}
                    onChange={(e) => setNewImageTitle(e.target.value)}
                    placeholder="Photo title"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                {/* File Upload */}
                {uploadMethod === 'file' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Image</label>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      onClick={triggerFileUpload}
                      variant="outline"
                      className="w-full"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Choose Image File
                    </Button>
                    <p className="text-xs text-gray-500 mt-1">Max size: 5MB. Formats: JPG, PNG, GIF</p>
                  </div>
                )}

                {/* URL Input */}
                {uploadMethod === 'url' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                    <input
                      type="url"
                      value={newImageUrl}
                      onChange={(e) => setNewImageUrl(e.target.value)}
                      placeholder="https://example.com/image.jpg"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>
                )}

                <div className="flex gap-2">
                  {uploadMethod === 'url' && (
                    <Button onClick={handleAddImage} className="flex-1 bg-rose-600 hover:bg-rose-700">
                      Add Photo
                    </Button>
                  )}
                  <Button 
                    onClick={() => {
                      setShowAddForm(false);
                      setNewImageUrl('');
                      setNewImageTitle('');
                      setUploadMethod('url');
                    }} 
                    variant="outline" 
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
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
                {/* Remove button - Only visible to logged-in admins */}
                {isAdminLoggedIn && (
                  <Button
                    onClick={() => handleRemoveImage(image.id)}
                    size="sm"
                    variant="destructive"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
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

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <AdminLogin onClose={() => setShowAdminLogin(false)} />
      )}

      {/* Admin Panel Modal */}
      {showAdminPanel && (
        <AdminPanel onClose={() => setShowAdminPanel(false)} />
      )}
    </section>
  );
};

export default Gallery;
