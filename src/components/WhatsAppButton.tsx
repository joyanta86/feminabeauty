import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "447368594210"; // Remove the + for WhatsApp URL
    const message = "Hi! I'd like to book an appointment at Femina Beauty Impression.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-pulse">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        size="lg"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Contact via WhatsApp</span>
      </Button>
    </div>
  );
};

export default WhatsAppButton;