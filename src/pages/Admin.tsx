import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Camera, Settings, Home, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useAdmin } from "@/contexts/AdminContext";
import { Link } from "react-router-dom";
import AdminLogin from "@/components/AdminLogin";
import AdminPanel from "@/components/AdminPanel";

interface GalleryImage {
  id: string;
  url: string;
  title: string;
  description?: string;
}

const Admin = () => {
  const { isAdminLoggedIn } = useAdmin();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Get images from localStorage
  const getStoredImages = (): GalleryImage[] => {
    try {
      const stored = localStorage.getItem('gallery-images');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  };

  const [images, setImages] = useState<GalleryImage[]>(getStoredImages());
  const [newImageUrl, setNewImageUrl] = useState('');
  const [newImageTitle, setNewImageTitle] = useState('');
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [uploadMethod, setUploadMethod] = useState<'url' | 'file'>('file');

  // Save images to localStorage
  const saveImages = (updatedImages: GalleryImage[]) => {
    localStorage.setItem('gallery-images', JSON.stringify(updatedImages));
    setImages(updatedImages);
  };

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
        title: newImageTitle.trim(),
        description: ''
      };

      const currentImages = getStoredImages();
      const updatedImages = [...currentImages, newImage];
      saveImages(updatedImages);
      
      setNewImageTitle('');
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
      title: newImageTitle.trim(),
      description: ''
    };

    const currentImages = getStoredImages();
    const updatedImages = [...currentImages, newImage];
    saveImages(updatedImages);
    
    setNewImageUrl('');
    setNewImageTitle('');
    toast("Image added to gallery!");
  };

  const handleRemoveImage = (id: string) => {
    const currentImages = getStoredImages();
    const updatedImages = currentImages.filter(img => img.id !== id);
    saveImages(updatedImages);
    toast("Image removed from gallery");
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleSaveImage = () => {
    if (!newImageTitle.trim()) {
      toast("Please enter a title for the image");
      return;
    }
    // The actual file upload is handled by the file input change event
    triggerFileUpload();
  };

  if (!isAdminLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-rose-50 to-pink-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm border-rose-200">
          <CardHeader className="text-center">
            <CardTitle className="text-rose-800 flex items-center justify-center gap-2">
              <Settings className="h-6 w-6" />
              Admin Access Required
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 text-center">
              Please log in to access the admin panel
            </p>
            <Button 
              onClick={() => setShowAdminLogin(true)}
              className="w-full bg-rose-600 hover:bg-rose-700"
            >
              Admin Login
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="w-full border-rose-600 text-rose-600 hover:bg-rose-50"
            >
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </CardContent>
        </Card>
        
        {showAdminLogin && (
          <AdminLogin onClose={() => setShowAdminLogin(false)} />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-rose-50 to-pink-50 py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-rose-800 mb-4 flex items-center justify-center gap-3">
            <Settings className="h-8 w-8 text-rose-600" />
            Admin Panel
            <Camera className="h-8 w-8 text-rose-600" />
          </h1>
          <p className="text-lg text-gray-700">
            Manage your gallery photos
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          <Button asChild variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-50">
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              View Gallery
            </Link>
          </Button>
          <Button
            onClick={() => setShowAdminPanel(true)}
            variant="outline"
            className="border-rose-600 text-rose-600 hover:bg-rose-50"
          >
            <Settings className="h-4 w-4 mr-2" />
            Admin Settings
          </Button>
        </div>

        {/* Upload Form */}
        <Card className="max-w-2xl mx-auto mb-8 bg-white/90 backdrop-blur-sm border-rose-200">
          <CardHeader>
            <CardTitle className="text-rose-800 flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Upload New Photo
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

            {/* Title Input */}
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
                <div className="flex gap-2">
                  <Button
                    type="button"
                    onClick={triggerFileUpload}
                    variant="outline"
                    className="flex-1"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Choose Image File
                  </Button>
                  <Button
                    type="button"
                    onClick={handleSaveImage}
                    className="bg-rose-600 hover:bg-rose-700 px-6"
                    disabled={!newImageTitle.trim()}
                  >
                    Save
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Max size: 5MB. Formats: JPG, PNG, GIF</p>
              </div>
            )}

            {/* URL Input */}
            {uploadMethod === 'url' && (
              <>
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
                <Button onClick={handleAddImage} className="w-full bg-rose-600 hover:bg-rose-700">
                  Add Photo
                </Button>
              </>
            )}
          </CardContent>
        </Card>

        {/* Current Images */}
        <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm border-rose-200">
          <CardHeader>
            <CardTitle className="text-rose-800">Current Gallery Images</CardTitle>
          </CardHeader>
          <CardContent>
            {images.length === 0 ? (
              <div className="text-center py-8">
                <Camera className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No images uploaded yet</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image) => (
                  <div key={image.id} className="relative group">
                    <img 
                      src={image.url} 
                      alt={image.title}
                      className="w-full h-32 object-cover rounded-md"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
                      <Button
                        onClick={() => handleRemoveImage(image.id)}
                        size="sm"
                        variant="destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm font-medium text-gray-700 mt-2">{image.title}</p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Admin Panel Modal */}
      {showAdminPanel && (
        <AdminPanel onClose={() => setShowAdminPanel(false)} />
      )}
    </div>
  );
};

export default Admin;