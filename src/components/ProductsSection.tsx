import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "دهانات خارجية",
    description: "مقاومة للعوامل الجوية",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop"
  },
  {
    title: "دهانات داخلية",
    description: "ألوان زاهية ومتنوعة",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop"
  },
  {
    title: "دهانات ديكورية",
    description: "لمسات فنية مميزة",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=400&h=300&fit=crop"
  }
];

export const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">منتجاتنا</h2>
          <p className="text-muted-foreground text-lg">أنواع دهانات متعددة تناسب جميع الاحتياجات</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 hover:border-primary"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={`${product.title} - دهانات تايم`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{product.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground text-lg">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
