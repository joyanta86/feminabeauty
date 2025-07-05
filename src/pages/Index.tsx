import { Phone, MapPin, Clock, Facebook, Instagram, Star, Sparkles, Heart, User, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ServicesSection from "@/components/ServicesSection";
import Gallery from "@/components/Gallery";
import Chatbot from "@/components/Chatbot";
import ContactMap from "@/components/ContactMap";
import WhatsAppButton from "@/components/WhatsAppButton";
import Testimonials from "@/components/Testimonials";
import GoogleReviews from "@/components/GoogleReviews";

const Index = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  ];

  const serviceImages = [
    {
      title: "Threading & Eyebrow Shaping",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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

  const handleBookNow = () => {
    window.location.href = "tel:+447368594210";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-rose-100">
        <div className="container mx-auto px-4 py-3 lg:py-4">
          <div className="flex items-center justify-between">
            <div className="text-lg sm:text-xl md:text-2xl font-bold font-playfair text-rose-800 flex items-center gap-1 sm:gap-2">
              <img 
                src="/lovable-uploads/a37d99a7-55e8-421a-931e-19e46973c3ab.png" 
                alt="Femina Beauty Impression" 
                className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain"
              />
              <span className="hidden sm:inline">Femina Beauty Impression</span>
              <span className="sm:hidden">Femina Beauty</span>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <div className="hidden md:flex items-center gap-2 text-rose-700">
                <Phone className="h-4 w-4" />
                <span className="font-medium text-sm lg:text-base">+44 7368 594210</span>
              </div>
              <Button 
                size="sm"
                className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6"
                onClick={handleBookNow}
              >
                <span className="hidden sm:inline">Book Now</span>
                <span className="sm:hidden">Book</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Image Carousel */}
      <section className="relative py-10 sm:py-16 lg:py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {heroImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
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
            <CarouselPrevious className="left-2 lg:left-4 bg-white/20 border-white/30 text-white hover:bg-white/30 h-8 w-8 sm:h-10 sm:w-10" />
            <CarouselNext className="right-2 lg:right-4 bg-white/20 border-white/30 text-white hover:bg-white/30 h-8 w-8 sm:h-10 sm:w-10" />
          </Carousel>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="bg-white/90 backdrop-blur-md rounded-xl lg:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-playfair text-rose-800 mb-4 lg:mb-6 leading-tight animate-fade-in">
              Premium Beauty Services
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl text-rose-600 mt-1 lg:mt-2 font-poppins">in the Heart of London</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8 max-w-2xl mx-auto font-poppins">
              Experience professional beauty treatments in our welcoming salon. From threading to bridal makeup, we offer comprehensive beauty services with attention to detail.
            </p>
            
            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
              <Card className="bg-white/80 backdrop-blur-sm border-rose-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-rose-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-rose-800 mb-2 flex items-center justify-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Location
                  </h3>
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
                  <h3 className="font-semibold text-rose-800 mb-2 flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4" />
                    Opening Hours
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Monday - Saturday<br />
                    11:00 AM to 6:00 PM<br />
                    <span className="text-rose-600 block mt-1">By appointment: 10:00 AM - 11:00 AM</span>
                    <span className="text-rose-600 block">By appointment: 6:00 PM - 7:00 PM</span>
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-rose-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-rose-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-rose-800 mb-2 flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    Contact
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Tel: +44 7368 594210
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <a href="https://www.facebook.com/profile.php?id=100066574856943" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200">
                      <Facebook className="h-5 w-5" />
                      <span className="text-sm">Facebook</span>
                    </a>
                    <a href="https://www.instagram.com/feminabeautyimpression1?igsh=MXB1MHNjdjVscGhoZg%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-pink-600 hover:text-pink-800 transition-colors duration-200">
                      <Instagram className="h-5 w-5" />
                      <span className="text-sm">Instagram</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Gallery Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 bg-white/70">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-playfair text-center text-rose-800 mb-8 lg:mb-12 flex items-center justify-center gap-2 lg:gap-3">
            <Star className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-rose-600" />
            <span className="px-2">Our Beauty Services</span>
            <Star className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-rose-600" />
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16">
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

      {/* Dynamic Services Section */}
      <ServicesSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Google Reviews Section */}
      <GoogleReviews />

      <Gallery />
      <ContactMap />
      <Chatbot />
      <WhatsAppButton />

      {/* Call to Action */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-playfair mb-4 lg:mb-6">Ready to Book Your Appointment?</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 opacity-90 font-poppins px-4">
            Contact us today to schedule your beauty treatment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
            <Button 
              size="default"
              className="bg-white text-rose-600 hover:bg-rose-50 font-semibold px-6 lg:px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto text-sm lg:text-base"
              onClick={handleBookNow}
            >
              <Phone className="h-4 w-4 lg:h-5 lg:w-5 mr-2" />
              <span className="hidden sm:inline">Call: </span>+44 7368 594210
            </Button>
            <div className="flex gap-3 lg:gap-4">
              <a href="https://www.facebook.com/profile.php?id=100066574856943" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm rounded-lg p-3 lg:p-4 flex items-center gap-2 hover:bg-white/20 transition-all duration-300">
                <Facebook className="h-4 w-4 lg:h-5 lg:w-5" />
                <span className="hidden sm:inline text-sm lg:text-base">Facebook</span>
              </a>
              <a href="https://www.instagram.com/feminabeautyimpression1?igsh=MXB1MHNjdjVscGhoZg%3D%3D" target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-sm rounded-lg p-3 lg:p-4 flex items-center gap-2 hover:bg-white/20 transition-all duration-300">
                <Instagram className="h-4 w-4 lg:h-5 lg:w-5" />
                <span className="hidden sm:inline text-sm lg:text-base">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-900 text-white py-8 sm:py-10 lg:py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3 lg:mb-4">
            <Sparkles className="h-5 w-5 lg:h-6 lg:w-6 text-rose-300" />
            <h3 className="text-xl sm:text-2xl font-bold font-playfair">Femina Beauty Impression</h3>
            <Sparkles className="h-5 w-5 lg:h-6 lg:w-6 text-rose-300" />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-2 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-rose-300" />
              <p className="text-rose-100">21-23 Woodgrange Road, London E7 8BA</p>
            </div>
            <span className="hidden sm:inline text-rose-300">•</span>
            <p className="text-rose-100">(Inside Post Office)</p>
          </div>
          <div className="flex items-center justify-center gap-2 mb-4 lg:mb-6">
            <Phone className="h-4 w-4 text-rose-300" />
            <p className="text-rose-100 text-sm sm:text-base">Tel: +44 7368 594210</p>
          </div>
          <div className="border-t border-rose-800 pt-4 lg:pt-6">
            <p className="text-rose-200 text-xs sm:text-sm">
              © {new Date().getFullYear()} Femina Beauty Impression. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
