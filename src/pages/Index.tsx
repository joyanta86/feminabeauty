
import { Phone, MapPin, Clock, Facebook, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
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
    { category: "Pedicure & Manicure", services: ["Pedicure", "Manicure"] },
    { category: "Eyelash Extension", services: ["Full Set Cluster - Starting from £18", "Party Lashes - £8"] },
    { category: "Tinting", services: ["Eye Brows - £6", "Eye Lashes - £8"] },
    { category: "Facial", services: ["Mini Facial - £15", "Full Facial (Cleansing/Whitening/Gold) - £25", "Herbal Facial - £30"] },
    { category: "Massage", services: ["Head Massage - £15 (With Herbal Oil / Except Oil)"] },
    { category: "Henna", services: ["One Hand / Foot - Starting from £5", "Both Hands / Feet - Starting from £10"] },
    { category: "Hair Cut", services: ["Trimming - £7", "Any Other Cut - Starting from £12", "Children (Under 10) - £10"] },
    { category: "Makeup", services: ["Party Makeup - Starting from £30", "Bridal Makeup - Starting from £150"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-rose-800">
              Femina Beauty Impression
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-rose-700">
                <Phone className="h-4 w-4" />
                <span className="font-medium">07368 594 210</span>
              </div>
              <Button className="bg-rose-600 hover:bg-rose-700 text-white">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-rose-800 mb-6 leading-tight">
            Premium Beauty Services
            <span className="block text-3xl text-rose-600 mt-2">in the Heart of London</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Experience professional beauty treatments in our welcoming salon. From threading to bridal makeup, we offer comprehensive beauty services with attention to detail.
          </p>
          
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Card className="bg-white/70 backdrop-blur-sm border-rose-200 hover:shadow-lg transition-shadow">
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

            <Card className="bg-white/70 backdrop-blur-sm border-rose-200 hover:shadow-lg transition-shadow">
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

            <Card className="bg-white/70 backdrop-blur-sm border-rose-200 hover:shadow-lg transition-shadow">
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
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-rose-800 mb-12">Our Beauty Services</h2>
          
          <div className="grid gap-8">
            {/* Threading */}
            <Card className="bg-white/80 backdrop-blur-sm border-rose-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-rose-100 to-pink-100">
                <CardTitle className="text-2xl text-rose-800 flex items-center gap-3">
                  <Star className="h-6 w-6 text-rose-600" />
                  Threading
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-4 gap-3">
                  {threadingServices.map((service, index) => (
                    <Badge key={index} variant="secondary" className="text-center p-2 bg-rose-50 text-rose-700 hover:bg-rose-100">
                      {service}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Waxing */}
            <Card className="bg-white/80 backdrop-blur-sm border-rose-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100">
                <CardTitle className="text-2xl text-rose-800 flex items-center gap-3">
                  <Star className="h-6 w-6 text-purple-600" />
                  Waxing Services
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-rose-700 mb-3 text-lg">Face Wax</h3>
                    <div className="grid gap-2">
                      {faceWaxServices.map((service, index) => (
                        <Badge key={index} variant="outline" className="justify-start p-2 border-purple-200 text-purple-700">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-rose-700 mb-3 text-lg">Body Wax</h3>
                    <div className="grid gap-2">
                      {bodyWaxServices.map((service, index) => (
                        <Badge key={index} variant="outline" className="justify-start p-2 border-purple-200 text-purple-700">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((serviceGroup, groupIndex) => (
                <Card key={groupIndex} className="bg-white/80 backdrop-blur-sm border-rose-200 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="bg-gradient-to-br from-rose-50 to-pink-50">
                    <CardTitle className="text-lg text-rose-800">{serviceGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      {serviceGroup.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="text-sm text-gray-700 p-2 bg-rose-25 rounded border-l-2 border-rose-300">
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
      <section className="py-16 px-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Book Your Appointment?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to schedule your beauty treatment
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50 font-semibold px-8">
              <Phone className="h-5 w-5 mr-2" />
              Call: 07368 594 210
            </Button>
            <div className="text-center">
              <p className="font-medium">Follow us on Facebook</p>
              <p className="opacity-90">@feminabeautyimpression</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Femina Beauty Impression</h3>
          <p className="mb-2">21-23 Woodgrange Road, London E7 8BA (Inside Post Office)</p>
          <p className="mb-4">Tel: 07368 594 210</p>
          <p className="text-rose-200 text-sm">
            © 2024 Femina Beauty Impression. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
