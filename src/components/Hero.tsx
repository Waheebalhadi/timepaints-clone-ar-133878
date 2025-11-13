import heroImage from "@/assets/hero-paint.jpg";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] via-[hsl(var(--hero-gradient-mid))] to-[hsl(var(--hero-gradient-end))] overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold text-primary mb-6 drop-shadow-lg">
            لك وللزمن
          </h2>
          <p className="text-2xl md:text-3xl text-foreground/90 mb-8 font-medium">
            نحول أحلامك إلى واقع بألوان تدوم للأبد
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Phone className="ml-2 h-5 w-5" />
              احصل على استشارة مجانية
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-6 text-lg border-2 hover:bg-background/90"
            >
              استكشف منتجاتنا
            </Button>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <img 
            src={heroImage} 
            alt="دهانات تايم - منتجات دهانات عالية الجودة للمنازل والمباني في السعودية" 
            className="max-w-3xl w-full h-auto rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};
