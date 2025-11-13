import { Palette, Shield, Headphones, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Palette,
    title: "ألوان متنوعة",
    description: "مئات الألوان والتدرجات المبتكرة"
  },
  {
    icon: Shield,
    title: "ضمان الجودة",
    description: "منتجات مضمونة وموثوقة"
  },
  {
    icon: Headphones,
    title: "دعم فني متميز",
    description: "فريق محترف لخدمتك على مدار الساعة"
  },
  {
    icon: Award,
    title: "خبرة وتميز",
    description: "سنوات من الخبرة والتفوق"
  }
];

export const ServiceCards = () => {
  return (
    <section id="services" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">خدماتنا</h2>
          <p className="text-muted-foreground text-lg">نقدم لك أفضل الحلول لتلبية احتياجاتك</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="flex flex-col items-center text-center p-8">
                  <div className="bg-primary/10 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
