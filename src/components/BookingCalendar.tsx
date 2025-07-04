import { Calendar, Clock, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BookingCalendar = () => {
  const handleBookNow = () => {
    window.location.href = "tel:+447368594210";
  };

  const handleCalendlyBook = () => {
    // You can replace this with your actual Calendly link
    window.open('https://calendly.com/feminabeauty', '_blank');
  };

  return (
    <section className="py-12 lg:py-16 px-4 bg-gradient-to-br from-purple-50 to-rose-50">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold font-playfair text-rose-800 mb-4 flex items-center justify-center gap-3">
            <Calendar className="h-8 w-8 text-rose-600" />
            Book Your Appointment
          </h2>
          <p className="text-gray-600 font-poppins max-w-2xl mx-auto">
            Choose your preferred way to book your beauty treatment with us
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Quick Phone Booking */}
          <Card className="bg-white/80 backdrop-blur-sm border-rose-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-playfair text-rose-800 flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                Quick Phone Booking
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-center">
              <p className="text-gray-600 mb-4 font-poppins">
                Call us directly for immediate booking and personalized service
              </p>
              <div className="mb-4">
                <div className="flex items-center justify-center gap-2 text-rose-700 mb-2">
                  <Clock className="h-4 w-4" />
                  <span className="font-medium">Available Hours</span>
                </div>
                <p className="text-sm text-gray-600">
                  Monday - Saturday: 11:00 AM - 6:00 PM<br />
                  By appointment: 10:00 AM - 11:00 AM & 6:00 PM - 7:00 PM
                </p>
              </div>
              <Button
                onClick={handleBookNow}
                className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-semibold px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now: +44 7368 594210
              </Button>
            </CardContent>
          </Card>

          {/* Online Booking */}
          <Card className="bg-white/80 backdrop-blur-sm border-rose-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-playfair text-rose-800 flex items-center justify-center gap-2">
                <Calendar className="h-5 w-5" />
                Online Booking
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-center">
              <p className="text-gray-600 mb-4 font-poppins">
                Book online 24/7 and choose your preferred time slot
              </p>
              <div className="mb-4">
                <div className="bg-rose-50 p-4 rounded-lg border border-rose-200 mb-4">
                  <p className="text-sm text-rose-800 font-medium">
                    📅 View available slots<br />
                    ⏰ Book at your convenience<br />
                    📧 Automatic confirmations
                  </p>
                </div>
              </div>
              <Button
                onClick={handleCalendlyBook}
                className="bg-gradient-to-r from-purple-600 to-rose-600 hover:from-purple-700 hover:to-rose-700 text-white font-semibold px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Book Online Now
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Embedded Calendar Placeholder */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm border-rose-200 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-lg font-playfair text-rose-800">
                Quick View - Available This Week
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center text-gray-600">
                <p className="mb-4">
                  For the full booking calendar and real-time availability, please call us or use our online booking system.
                </p>
                <div className="bg-rose-50 p-4 rounded-lg border border-rose-200">
                  <p className="text-sm text-rose-800">
                    💡 <strong>Tip:</strong> Book in advance to secure your preferred time slot!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;