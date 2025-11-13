import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="دهانات تايم - شعار الشركة" className="h-12 w-12" />
              <div>
                <h3 className="text-lg font-bold">دهانات تايم</h3>
                <p className="text-xs opacity-80">TIME PAINTS</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              نقدم أفضل أنواع الدهانات بجودة عالية وألوان متنوعة للمنازل والمباني في المملكة العربية السعودية
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="فيسبوك">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="تويتر">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="انستقرام">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="لينكد إن">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollToSection('products')} className="hover:underline opacity-90 text-right">المنتجات</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:underline opacity-90 text-right">خدماتنا</button></li>
              <li><button onClick={() => scrollToSection('why-us')} className="hover:underline opacity-90 text-right">لماذا نحن</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:underline opacity-90 text-right">اتصل بنا</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">معلومات مفيدة</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline opacity-90">نصائح الدهانات</a></li>
              <li><a href="#" className="hover:underline opacity-90">دليل الألوان</a></li>
              <li><a href="#" className="hover:underline opacity-90">الأسئلة الشائعة</a></li>
              <li><a href="#" className="hover:underline opacity-90">سياسة الخصوصية</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">تواصل معنا</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+966XXXXXXXXX" dir="ltr" className="opacity-90 hover:underline">+966 XX XXX XXXX</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@timepaints.com" className="opacity-90 hover:underline">info@timepaints.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="opacity-90">الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-80">
          <p>© 2024 دهانات تايم. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};
