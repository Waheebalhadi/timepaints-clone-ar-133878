import { CheckCircle, Clock, ThumbsUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: CheckCircle,
    title: "جودة مضمونة",
    description: "منتجاتنا معتمدة ومطابقة لأعلى المعايير العالمية"
  },
  {
    icon: Clock,
    title: "خبرة طويلة",
    description: "أكثر من 15 عاماً في مجال الدهانات والألوان"
  },
  {
    icon: ThumbsUp,
    title: "رضا العملاء",
    description: "أكثر من 10,000 عميل راضٍ عن خدماتنا"
  },
  {
    icon: Users,
    title: "فريق محترف",
    description: "خبراء متخصصون لتقديم أفضل الاستشارات"
  }
];

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">لماذا تختار دهانات تايم؟</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نحن نقدم أكثر من مجرد دهانات، نحن نقدم تجربة متكاملة من الجودة والاحترافية
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            نحن ملتزمون بتحقيق رؤيتك
          </h3>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-6">
            من اختيار اللون المثالي إلى تطبيق الدهان، نحن معك في كل خطوة. فريقنا المتخصص جاهز لتقديم الاستشارات المجانية ومساعدتك في تحويل مساحتك إلى تحفة فنية.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">سنة خبرة</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">عميل راضٍ</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">لون متاح</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">ضمان الجودة</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};