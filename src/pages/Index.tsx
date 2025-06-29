
import { Phone, MapPin, Clock, Facebook, Star, Sparkles, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  ];

  const serviceImages = [
    {
      title: "Threading & Eyebrow Shaping",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Precision eyebrow threading and shaping"
    },
    {
      title: "Facial Treatments",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Relaxing and rejuvenating facial treatments"
    },
    {
      title: "Makeup & Beauty",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Professional makeup for all occasions"
    },
    {
      title: "Bridal Services",
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Complete bridal beauty packages"
    }
  ];

  const threadingServices = [
    "Eye Brow",
    "Upper Lip", 
    "Chin",
    "Forehead",
    "Neck",
    "Side Face",
    "Full Face"
  ];

  const faceWaxServices = [
    "Eye Brows",
    "Upper Lip",
    "Chin", 
    "Forehead",
    "Neck",
    "Side Face",
    "Full Face"
  ];

  const bodyWaxServices = [
    "Half Arm",
    "Full Arm",
    "Under Arm",
    "Half Leg", 
    "Full Leg",
    "Full Body (Except Bikini)"
  ];

  const additionalServices = [
    { category: "Pedicure & Manicure", services: ["Pedicure", "Manicure"], icon: <Sparkles className="h-5 w-5" /> },
    { category: "Eyelash Extension", services: ["Full Set Cluster - Starting from £18", "Party Lashes - £8"], icon: <Heart className="h-5 w-5" /> },
    { category: "Tinting", services: ["Eye Brows - £6", "Eye Lashes - £8"], icon: <Star className="h-5 w-5" /> },
    { category: "Facial", services: ["Mini Facial - £15", "Full Facial (Cleansing/Whitening/Gold) - £25", "Herbal Facial - £30"], icon: <User className="h-5 w-5" /> },
    { category: "Massage", services: ["Head Massage - £15 (With Herbal Oil / Except Oil)"], icon: <Heart className="h-5 w-5" /> },
    { category: "Henna", services: ["One Hand / Foot - Starting from £5", "Both Hands / Feet - Starting from £10"], icon: <Sparkles className="h-5 w-5" /> },
    { category: "Hair Cut", services: ["Trimming - £7", "Any Other Cut - Starting from £12", "Children (Under 10) - £10"], icon: <Star className="h-5 w-5" /> },
    { category: "Makeup", services: ["Party Makeup - Starting from £30", "Bridal Makeup - Starting from £150"], icon: <Heart className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-rose-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-rose-800 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-rose-600" />
              Femina Beauty Impression
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-rose-700">
                <Phone className="h-4 w-4" />
                <span className="font-medium">07368 594 210</span>
              </div>
              <Button className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Image Carousel */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {heroImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-96 md:h-[500px]">
                    <img 
                      src={image} 
                      alt={`Beauty salon ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-900/60 to-pink-900/40"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
            <CarouselNext className="right-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
          </Carousel>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-rose-800 mb-6 leading-tight animate-fade-in">
              Premium Beauty Services
              <span className="block text-2xl md:text-3xl text-rose-600 mt-2">in the Heart of London</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Experience professional beauty treatments in our welcoming salon. From threading to bridal makeup, we offer comprehensive beauty services with attention to detail.
            </p>
            
            {/* Contact Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/80 backdrop-blur-sm border-rose-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-rose-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-rose-800 mb-2">Location</h3>
                  <p className="text-gray-700 text-sm">
                    21-23 Woodgrange Road<br />
                    London E7 8BA<br />
                    (Inside Post Office)
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-rose-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-rose-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-rose-800 mb-2">Opening Hours</h3>
                  <p className="text-gray-700 text-sm">
                    Monday - Saturday<br />
                    6:00 AM to 8:00 PM<br />
                    <span className="text-rose-600">(9:30 AM to 11 AM by appointment only)</span>
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-rose-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-rose-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-rose-800 mb-2">Contact</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Tel: 07368 594 210
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <Facebook className="h-4 w-4 text-blue-600" />
                    <span className="text-sm text-gray-600">Femina Beauty Impression</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Gallery Section */}
      <section className="py-16 px-4 bg-white/70">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-rose-800 mb-12">Our Beauty Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {serviceImages.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-rose-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container mx-auto">
          <div className="grid gap-8">
            {/* Threading */}
            <Card className="bg-white/90 backdrop-blur-sm border-rose-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-rose-100 to-pink-100">
                <CardTitle className="text-2xl text-rose-800 flex items-center gap-3">
                  <Star className="h-6 w-6 text-rose-600" />
                  Threading
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-4 gap-3">
                  {threadingServices.map((service, index) => (
                    <Badge key={index} variant="secondary" className="text-center p-3 bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors duration-200 cursor-pointer">
                      {service}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Waxing */}
            <Card className="bg-white/90 backdrop-blur-sm border-rose-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100">
                <CardTitle className="text-2xl text-rose-800 flex items-center gap-3">
                  <Sparkles className="h-6 w-6 text-purple-600" />
                  Waxing Services
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-rose-700 mb-3 text-lg flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      Face Wax
                    </h3>
                    <div className="grid gap-2">
                      {faceWaxServices.map((service, index) => (
                        <Badge key={index} variant="outline" className="justify-start p-3 border-purple-200 text-purple-700 hover:bg-purple-50 transition-colors duration-200">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-rose-700 mb-3 text-lg flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      Body Wax
                    </h3>
                    <div className="grid gap-2">
                      {bodyWaxServices.map((service, index) => (
                        <Badge key={index} variant="outline" className="justify-start p-3 border-purple-200 text-purple-700 hover:bg-purple-50 transition-colors duration-200">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {additionalServices.map((serviceGroup, groupIndex) => (
                <Card key={groupIndex} className="bg-white/90 backdrop-blur-sm border-rose-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <CardHeader className="bg-gradient-to-br from-rose-50 to-pink-50 pb-3">
                    <CardTitle className="text-lg text-rose-800 flex items-center gap-2">
                      {serviceGroup.icon}
                      {serviceGroup.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      {serviceGroup.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="text-sm text-gray-700 p-2 bg-gradient-to-r from-rose-25 to-pink-25 rounded border-l-3 border-rose-300 hover:bg-rose-50 transition-colors duration-200">
                          {service}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Appointment?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to schedule your beauty treatment
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50 font-semibold px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Phone className="h-5 w-5 mr-2" />
              Call: 07368 594 210
            </Button>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="font-medium flex items-center gap-2 justify-center">
                <Facebook className="h-5 w-5" />
                Follow us on Facebook
              </p>
              <p className="opacity-90">@feminabeautyimpression</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-rose-300" />
            <h3 className="text-2xl font-bold">Femina Beauty Impression</h3>
            <Sparkles className="h-6 w-6 text-rose-300" />
          </div>
          <p className="mb-2 text-rose-100">21-23 Woodgrange Road, London E7 8BA (Inside Post Office)</p>
          <p className="mb-6 text-rose-100">Tel: 07368 594 210</p>
          <div className="border-t border-rose-800 pt-6">
            <p className="text-rose-200 text-sm">
              © 2024 Femina Beauty Impression. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
