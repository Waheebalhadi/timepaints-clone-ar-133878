import logo from "@/assets/logo.png";

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">اتصل بنا</button>
            <button onClick={() => scrollToSection('why-us')} className="hover:text-primary transition-colors">لماذا نحن</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">خدماتنا</button>
            <button onClick={() => scrollToSection('products')} className="hover:text-primary transition-colors">منتجاتنا</button>
          </nav>

          <div className="flex items-center gap-4">
            <img src={logo} alt="دهانات تايم - أفضل دهانات في السعودية" className="h-12 w-12" />
            <div className="text-right">
              <h1 className="text-xl font-bold text-primary">دهانات تايم</h1>
              <p className="text-xs text-muted-foreground">TIME PAINTS</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
