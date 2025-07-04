import { useState, useEffect } from "react";
import { X, Mail, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already subscribed or dismissed
    const hasSubscribed = localStorage.getItem('newsletter-subscribed');
    const hasDismissed = localStorage.getItem('newsletter-dismissed');
    
    if (!hasSubscribed && !hasDismissed) {
      // Show popup after 10 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem('newsletter-subscribed', 'true');
      setIsVisible(false);
      setIsSubmitting(false);
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive our latest offers and beauty tips.",
      });
    }, 1000);
  };

  const handleDismiss = () => {
    localStorage.setItem('newsletter-dismissed', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full bg-white shadow-2xl border-rose-200 animate-scale-in">
        <CardHeader className="relative text-center bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-t-lg">
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-2 text-white hover:bg-white/20"
            onClick={handleDismiss}
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Gift className="h-6 w-6" />
            <CardTitle className="text-xl font-playfair">Special Offer!</CardTitle>
          </div>
          <p className="text-rose-100 text-sm">Get 20% off your first visit</p>
        </CardHeader>
        <CardContent className="p-6">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-rose-800 mb-2">
              Stay Beautiful with Our Newsletter
            </h3>
            <p className="text-gray-600 text-sm">
              Get exclusive beauty tips, special offers, and appointment reminders delivered to your inbox.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 border-rose-200 focus:border-rose-400"
                required
              />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-semibold py-2 shadow-lg hover:shadow-xl transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Get 20% Off Now"}
            </Button>
          </form>
          
          <p className="text-xs text-gray-500 text-center mt-3">
            * Valid for first-time customers only. Unsubscribe anytime.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsletterPopup;