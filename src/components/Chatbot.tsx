import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send, MapPin, Sparkles } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when chatbot opens for the first time
      addBotMessage("Hi! I'm your beauty assistant 💄 I can help you with beauty tips and our store information. How can I help you today?");
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    const botMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, botMessage]);
  };

  const addUserMessage = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    // Store address responses
    if (input.includes('address') || input.includes('location') || input.includes('where') || input.includes('store')) {
      return "📍 Our store is located at:\n\n🏪 Femina Beauty Impression\n21-23 Woodgrange Road\nLondon E7 8BA\n(Inside Post Office)\n\n📞 Phone: +44 7368 594210\n⏰ Hours: Monday-Saturday 11:00 AM to 6:00 PM\n🕙 By appointment: 10:00-11:00 AM & 6:00-7:00 PM";
    }

    // Beauty facts and tips
    if (input.includes('skincare') || input.includes('skin')) {
      return "✨ Skincare Tip: Always cleanse your face twice daily and don't forget sunscreen! SPF 30+ is essential even on cloudy days. Hydration is key - drink plenty of water! 💧";
    }

    if (input.includes('eyebrow') || input.includes('threading')) {
      return "🪡 Threading Tips: Threading is perfect for precise eyebrow shaping! It's gentle on sensitive skin and lasts 3-4 weeks. Book your appointment for the best results! ✨";
    }

    if (input.includes('facial') || input.includes('face')) {
      return "🧴 Facial Benefits: Regular facials (monthly) help deep clean pores, improve circulation, and give you that healthy glow! Perfect for all skin types. ✨";
    }

    if (input.includes('makeup') || input.includes('cosmetic')) {
      return "💄 Makeup Tip: Always start with a good primer! It helps your makeup last longer. Don't forget to remove makeup before bed to keep your skin healthy! 🌙";
    }

    if (input.includes('hair') || input.includes('style')) {
      return "💇‍♀️ Hair Care: Use a heat protectant before styling! Deep condition weekly and trim every 6-8 weeks to maintain healthy hair. ✂️";
    }

    if (input.includes('appointment') || input.includes('book') || input.includes('schedule')) {
      return "📅 To book an appointment, please call us at +44 7368 594210 or visit our store! We offer threading, waxing, facials, nails, makeup services, and more. Walk-ins welcome! 💖";
    }

    if (input.includes('service') || input.includes('price') || input.includes('cost')) {
      return "💅 Our Services:\n• Eyebrow Threading: $15-25\n• Facial Treatments: $50-80\n• Makeup Application: $30-50\n• Hair Styling: $40-70\n\nCall for detailed pricing and packages! 📞";
    }

    if (input.includes('hours') || input.includes('open') || input.includes('time')) {
      return "⏰ Store Hours:\nMonday - Saturday: 11:00 AM to 6:00 PM\n🕙 By appointment only:\n  • 10:00 AM - 11:00 AM\n  • 6:00 PM - 7:00 PM\n\nWe're here to make you beautiful! 💫";
    }

    // General beauty facts
    if (input.includes('tip') || input.includes('advice') || input.includes('beauty')) {
      const tips = [
        "✨ Beauty Fact: Did you know drinking green tea can help improve your skin's elasticity? Antioxidants work wonders! 🍃",
        "💫 Beauty Tip: Sleep on a silk pillowcase to reduce hair breakage and skin irritation. Beauty sleep is real! 😴",
        "🌟 Fun Fact: Honey is a natural humectant that draws moisture to your skin. Perfect for DIY face masks! 🍯",
        "✨ Pro Tip: Apply eye cream with your ring finger - it applies the gentlest pressure! 👁️",
        "💖 Beauty Secret: Exfoliate 2-3 times a week for smoother, brighter skin. Don't overdo it though! 🧖‍♀️"
      ];
      return tips[Math.floor(Math.random() * tips.length)];
    }

    // Greetings
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello beautiful! 💖 How can I help you today? I can share beauty tips, store information, or help you with our services! ✨";
    }

    if (input.includes('thank') || input.includes('thanks')) {
      return "You're so welcome! 💕 Feel free to ask me anything about beauty or our store. Have a gorgeous day! ✨";
    }

    // Default response
    return "I'd love to help! 💫 You can ask me about:\n• Beauty tips and skincare advice ✨\n• Our store location and hours 📍\n• Services and pricing 💅\n• Booking appointments 📅\n\nWhat would you like to know? 😊";
  };

  const handleSendMessage = () => {
    if (inputText.trim()) {
      addUserMessage(inputText);
      
      // Simulate bot typing delay
      setTimeout(() => {
        const response = getBotResponse(inputText);
        addBotMessage(response);
      }, 500);
      
      setInputText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 h-96 bg-white shadow-xl border-rose-200 z-50 flex flex-col">
          <CardHeader className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Beauty Assistant
              </CardTitle>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm whitespace-pre-wrap ${
                      message.sender === 'user'
                        ? 'bg-rose-600 text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about beauty tips or store info..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-rose-600 hover:bg-rose-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;