import { Star, Sparkles, Heart, User, PoundSterling, Scissors } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ServicesSection = () => {
  const serviceCategories = [
    {
      id: "threading",
      name: "Threading",
      icon: <Star className="h-5 w-5" />,
      services: [
        { name: "Eye Brow", price: "£5" },
        { name: "Upper Lip", price: "£3" },
        { name: "Chin", price: "£3" },
        { name: "Forehead", price: "£3" },
        { name: "Neck", price: "£3" },
        { name: "Side Face", price: "£5" },
        { name: "Full Face", price: "£15" }
      ]
    },
    {
      id: "waxing",
      name: "Waxing",
      icon: <Sparkles className="h-5 w-5" />,
      subcategories: [
        {
          name: "Face Waxing",
          services: [
            { name: "Eye Brows", price: "£6" },
            { name: "Upper Lip", price: "£4" },
            { name: "Chin", price: "£4" },
            { name: "Forehead", price: "£4" },
            { name: "Neck", price: "£4" },
            { name: "Side Face", price: "£6" },
            { name: "Full Face", price: "£18" }
          ]
        },
        {
          name: "Body Waxing",
          services: [
            { name: "Half Arm", price: "£12" },
            { name: "Full Arm", price: "£18" },
            { name: "Under Arm", price: "£8" },
            { name: "Half Leg", price: "£15" },
            { name: "Full Leg", price: "£25" },
            { name: "Full Body (Except Bikini)", price: "£60" }
          ]
        }
      ]
    },
    {
      id: "nails",
      name: "Nails",
      icon: <Heart className="h-5 w-5" />,
      services: [
        { name: "Pedicure", price: "£25" },
        { name: "Manicure", price: "£20" }
      ]
    },
    {
      id: "facial",
      name: "Facial & Massage",
      icon: <User className="h-5 w-5" />,
      subcategories: [
        {
          name: "Eyelash & Tinting",
          services: [
            { name: "Full Set Cluster", price: "From £18" },
            { name: "Party Lashes", price: "£8" },
            { name: "Eye Brows Tinting", price: "£6" },
            { name: "Eye Lashes Tinting", price: "£8" }
          ]
        },
        {
          name: "Facial & Massage",
          services: [
            { name: "Mini Facial", price: "£15" },
            { name: "Full Facial (Cleansing/Whitening/Gold)", price: "£25" },
            { name: "Herbal Facial", price: "£30" },
            { name: "Head Massage (With/Without Herbal Oil)", price: "£15" }
          ]
        }
      ]
    },
    {
      id: "other",
      name: "Other Services",
      icon: <Scissors className="h-5 w-5" />,
      subcategories: [
        {
          name: "Henna & Hair",
          services: [
            { name: "One Hand / Foot Henna", price: "From £5" },
            { name: "Both Hands / Feet Henna", price: "From £10" },
            { name: "Hair Trimming", price: "£7" },
            { name: "Any Other Cut", price: "From £12" },
            { name: "Children (Under 10)", price: "£10" }
          ]
        },
        {
          name: "Makeup",
          services: [
            { name: "Party Makeup", price: "From £30" },
            { name: "Bridal Makeup", price: "From £150" }
          ]
        }
      ]
    }
  ];

  const renderServiceCard = (service: { name: string; price: string }) => (
    <div key={service.name} className="flex justify-between items-center p-4 bg-gradient-to-r from-rose-25 to-pink-25 rounded-lg border-l-4 border-rose-300 hover:bg-rose-50 transition-colors duration-200">
      <span className="text-gray-700 font-medium">{service.name}</span>
      <div className="flex items-center gap-1 text-rose-600 font-semibold">
        <PoundSterling className="h-4 w-4" />
        {service.price.replace('£', '')}
      </div>
    </div>
  );

  const renderAllServices = () => {
    const allServices: { name: string; price: string; category: string }[] = [];
    
    serviceCategories.forEach(category => {
      if (category.services) {
        category.services.forEach(service => {
          allServices.push({ ...service, category: category.name });
        });
      }
      if (category.subcategories) {
        category.subcategories.forEach(subcategory => {
          subcategory.services.forEach(service => {
            allServices.push({ ...service, category: `${category.name} - ${subcategory.name}` });
          });
        });
      }
    });

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allServices.map((service, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-sm border border-rose-100 hover:shadow-md transition-shadow duration-200">
            <div className="text-xs text-rose-500 font-medium mb-1">{service.category}</div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">{service.name}</span>
              <div className="flex items-center gap-1 text-rose-600 font-semibold">
                <PoundSterling className="h-4 w-4" />
                {service.price.replace('£', '')}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-rose-800 mb-4 flex items-center justify-center gap-3">
            <Star className="h-8 w-8 text-rose-600" />
            Our Beauty Services
            <Star className="h-8 w-8 text-rose-600" />
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of professional beauty services designed to enhance your natural beauty.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="all" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span className="hidden sm:inline">All Services</span>
              <span className="sm:hidden">All</span>
            </TabsTrigger>
            {serviceCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                {category.icon}
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <Card className="bg-white/90 backdrop-blur-sm border-rose-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-rose-100 to-pink-100">
                <CardTitle className="text-2xl text-rose-800 flex items-center gap-3">
                  <Sparkles className="h-6 w-6 text-rose-600" />
                  All Services
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {renderAllServices()}
              </CardContent>
            </Card>
          </TabsContent>

          {serviceCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <Card className="bg-white/90 backdrop-blur-sm border-rose-200 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-rose-100 to-pink-100">
                  <CardTitle className="text-2xl text-rose-800 flex items-center gap-3">
                    {category.icon}
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {category.services && (
                    <div className="space-y-3">
                      {category.services.map(renderServiceCard)}
                    </div>
                  )}
                  
                  {category.subcategories && (
                    <div className="space-y-8">
                      {category.subcategories.map((subcategory, index) => (
                        <div key={index}>
                          <h3 className="text-lg font-semibold text-rose-700 mb-4 flex items-center gap-2">
                            <Heart className="h-5 w-5" />
                            {subcategory.name}
                          </h3>
                          <div className="space-y-3">
                            {subcategory.services.map(renderServiceCard)}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSection;
