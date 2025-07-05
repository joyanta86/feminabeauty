import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ContactMap = () => {
  const businessLocation = {
    lat: 51.5414,
    lng: 0.0247,
    address: "21-23 Woodgrange Road, London E7 8BA (Inside Post Office)"
  };

  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.8!2d${businessLocation.lng}!3d${businessLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a6e9b8e9e9e9%3A0x1234567890123456!2s21-23%20Woodgrange%20Road%2C%20London%20E7%208BA!5e0!3m2!1sen!2suk!4v1234567890123`;

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-playfair text-rose-800 mb-4 flex items-center justify-center gap-3">
            <MapPin className="h-8 w-8 text-rose-600" />
            Find Us
            <MapPin className="h-8 w-8 text-rose-600" />
          </h2>
          <p className="text-lg font-poppins text-gray-700 max-w-2xl mx-auto">
            Visit our beautiful salon conveniently located in the heart of London
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-rose-200">
            <CardContent className="p-0">
              <div className="relative h-80 lg:h-96">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Femina Beauty Impression Location"
                  className="rounded-lg"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm border-rose-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-playfair text-rose-800 text-lg mb-2">Our Location</h3>
                    <p className="text-gray-700 font-poppins">
                      21-23 Woodgrange Road<br />
                      London E7 8BA<br />
                      (Inside Post Office)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-rose-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-playfair text-rose-800 text-lg mb-2">Contact Us</h3>
                    <p className="text-gray-700 font-poppins mb-2">
                      <strong>Phone:</strong> +44 7368 594210<br />
                      <strong>Phone:</strong> +44 7440 157297
                    </p>
                    <p className="text-gray-600 font-poppins text-sm">
                      Call us to book your appointment or ask any questions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-rose-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-playfair text-rose-800 text-lg mb-2">Opening Hours</h3>
                    <div className="space-y-1 font-poppins">
                      <p className="text-gray-700"><strong>Monday - Saturday:</strong> 11:00 AM - 6:00 PM</p>
                      <p className="text-rose-600 text-sm">By appointment only:</p>
                      <p className="text-rose-600 text-sm">• 10:00 AM - 11:00 AM</p>
                      <p className="text-rose-600 text-sm">• 6:00 PM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;