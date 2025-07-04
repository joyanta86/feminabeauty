import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Amazing service! The eyebrow threading was perfect and the staff was so friendly. Highly recommended!",
      service: "Eyebrow Threading",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Priya Patel",
      rating: 5,
      comment: "The bridal makeup was absolutely stunning! I felt like a princess on my wedding day. Thank you so much!",
      service: "Bridal Makeup",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Emma Wilson",
      rating: 5,
      comment: "Best facial treatment I've ever had! My skin feels amazing and the atmosphere was so relaxing.",
      service: "Facial Treatment",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Aisha Khan",
      rating: 5,
      comment: "Professional service and great value for money. The location inside the post office is convenient too!",
      service: "Beauty Package",
      avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-12 lg:py-16 px-4 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-playfair text-rose-800 mb-4 flex items-center justify-center gap-3">
            <Quote className="h-8 w-8 text-rose-600" />
            What Our Clients Say
            <Quote className="h-8 w-8 text-rose-600 transform rotate-180" />
          </h2>
          <p className="text-gray-600 font-poppins max-w-2xl mx-auto">
            Real feedback from our satisfied customers who trust us with their beauty needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-rose-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-rose-800">{testimonial.name}</h4>
                    <div className="flex items-center gap-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-3 font-poppins italic">
                  "{testimonial.comment}"
                </p>
                <div className="text-xs text-rose-600 font-medium bg-rose-50 px-2 py-1 rounded-full inline-block">
                  {testimonial.service}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;