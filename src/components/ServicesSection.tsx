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
        { name: "Eye Brow", price: "£4" },
        { name: "Upper Lip", price: "£2" },
        { name: "Chin", price: "£3" },
        { name: "Forehead", price: "£3" },
        { name: "Neck", price: "£3" },
        { name: "Side Face", price: "£6" },
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
            { name: "Eye Brows", price: "£5" },
            { name: "Upper Lip", price: "£3" },
            { name: "Chin", price: "£4" },
            { name: "Forehead", price: "£3" },
            { name: "Neck", price: "£5" },
            { name: "Side Face", price: "£6" },
            { name: "Full Face", price: "£15" }
          ]
        },
        {
          name: "Body Waxing",
          services: [
            { name: "Half Arm", price: "£10" },
            { name: "Full Arm", price: "£15" },
            { name: "Under Arm", price: "£6" },
            { name: "Half Leg", price: "£12" },
            { name: "Full Leg", price: "£20" },
            { name: "Inside Nose", price: "£6" },
            { name: "Full Body", price: "£50" }
          ]
        }
      ]
    },
    {
      id: "nails",
      name: "Nails & Lashes",
      icon: <Heart className="h-5 w-5" />,
      subcategories: [
        {
          name: "Nails",
          services: [
            { name: "Manicure", price: "£15" }
          ]
        },
        {
          name: "Eyelash Extensions",
          services: [
            { name: "Full Set", price: "£18" },
            { name: "Party Lashes", price: "£8" }
          ]
        },
        {
          name: "Tinting",
          services: [
            { name: "Eye Brows Tinting", price: "£6" },
            { name: "Eye Lashes Tinting", price: "£8" }
          ]
        }
      ]
    },
    {
      id: "facial",
      name: "Facials",
      icon: <User className="h-5 w-5" />,
      services: [
        { name: "Mini Facial", price: "£15" },
        { name: "Full Facial", price: "£25" },
        { name: "Gold Facial", price: "£30" }
      ]
    },
    {
      id: "other",
      name: "Hair & Makeup",
      icon: <Scissors className="h-5 w-5" />,
      subcategories: [
        {
          name: "Hair Services",
          services: [
            { name: "Hair Trimming", price: "From £12" },
            { name: "Children Cut", price: "From £12" },
            { name: "Any Other Cut with Blow Dry", price: "£25" },
            { name: "Blow Dry", price: "£15" }
          ]
        },
        {
          name: "Makeup Services",
          services: [
            { name: "Party Makeup", price: "£45" },
            { name: "Hair and Makeup", price: "£60" },
            { name: "Wedding Makeup", price: "From £160" }
          ]
        }
      ]
    }
  ];

  const renderServiceCard = (service: { name: string; price: string }) => (
    <div key={service.name} className="group flex justify-between items-center p-5 bg-gradient-to-r from-white via-rose-50/50 to-pink-50/50 rounded-xl border border-rose-200/60 hover:border-rose-300 hover:shadow-lg hover:shadow-rose-100/50 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <span className="text-gray-800 font-semibold text-sm relative z-10 group-hover:text-rose-800 transition-colors duration-200">{service.name}</span>
      <div className="flex items-center gap-1 text-rose-600 font-bold text-lg relative z-10 group-hover:text-rose-700 transition-colors duration-200">
        <PoundSterling className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
        <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent group-hover:from-rose-700 group-hover:to-pink-700">
          {service.price.replace('£', '')}
        </span>
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allServices.map((service, index) => (
          <div key={index} className="group p-5 bg-gradient-to-br from-white via-rose-50/30 to-pink-50/30 rounded-xl shadow-md border border-rose-200/50 hover:shadow-lg hover:shadow-rose-100/40 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/3 to-pink-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="text-xs text-rose-600 font-semibold mb-2 uppercase tracking-wide relative z-10">{service.category}</div>
            <div className="flex justify-between items-center relative z-10">
              <span className="text-gray-800 font-semibold text-sm group-hover:text-rose-800 transition-colors duration-200">{service.name}</span>
              <div className="flex items-center gap-1 text-rose-600 font-bold text-lg group-hover:text-rose-700 transition-colors duration-200">
                <PoundSterling className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent group-hover:from-rose-700 group-hover:to-pink-700">
                  {service.price.replace('£', '')}
                </span>
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
