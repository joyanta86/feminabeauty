import { ExternalLink, MapPin, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GoogleReviews = () => {
  const googleReviews = [
    {
      author: "Local Customer",
      rating: 5,
      text: "Excellent service and very professional staff. The threading was perfect!",
      date: "2 weeks ago"
    },
    {
      author: "Beauty Enthusiast",
      rating: 5,
      text: "Amazing experience! The facial treatment was so relaxing and my skin looks great.",
      date: "1 month ago"
    },
    {
      author: "Satisfied Client",
      rating: 5,
      text: "Best beauty salon in the area. Great value for money and friendly service.",
      date: "3 weeks ago"
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

  const handleViewAllReviews = () => {
    // This would typically link to your Google Business profile
    // Replace with your actual Google Business URL
    window.open('https://www.google.com/search?q=femina+beauty+impression+london', '_blank');
  };

  return (
    <section className="py-12 lg:py-16 px-4 bg-white/70">
      <div className="container mx-auto">
        <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm border-rose-200 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl lg:text-3xl font-bold font-playfair text-rose-800 flex items-center justify-center gap-3">
              <MapPin className="h-6 w-6 text-rose-600" />
              Google Reviews
            </CardTitle>
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="flex items-center gap-1">
                {renderStars(5)}
              </div>
              <span className="text-lg font-semibold text-rose-800">5.0</span>
              <span className="text-gray-600">• Based on Google Reviews</span>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {googleReviews.map((review, index) => (
                <div key={index} className="bg-rose-50 p-4 rounded-lg border border-rose-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2 font-poppins">"{review.text}"</p>
                  <p className="text-xs font-medium text-rose-800">- {review.author}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button
                onClick={handleViewAllReviews}
                className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View All Reviews on Google
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GoogleReviews;