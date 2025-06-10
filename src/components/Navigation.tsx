
import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menuItems = [
    { label: 'Ana Sayfa', href: '#home' },
    { 
      label: 'Satılık', 
      href: '#satilik',
      submenu: [
        { label: 'Daireler', href: '#satilik-daireler' },
        { label: 'Villalar', href: '#satilik-villalar' },
        { label: 'Arsalar', href: '#satilik-arsalar' },
        { label: 'Ticari', href: '#satilik-ticari' }
      ]
    },
    { 
      label: 'Kiralık', 
      href: '#kiralik',
      submenu: [
        { label: 'Daireler', href: '#kiralik-daireler' },
        { label: 'Villalar', href: '#kiralik-villalar' },
        { label: 'Ticari', href: '#kiralik-ticari' }
      ]
    },
    { 
      label: 'Hizmetler', 
      href: '#hizmetler',
      submenu: [
        { label: 'Emlak Değerleme', href: '#degerleme' },
        { label: 'Emlak Danışmanlığı', href: '#danismanlik' },
        { label: 'Yatırım Danışmanlığı', href: '#yatirim' },
        { label: 'Emlak Yönetimi', href: '#yonetim' }
      ]
    },
    { label: 'Hakkımızda', href: '#hakkimizda' },
    { label: 'İletişim', href: '#iletisim' },
  ];

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://www.karim-immobilien.de/media/logo_karim_immobilien_weiss_farbe.svg" 
              alt="Karim Immobilien Logo"
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold gradient-text hidden sm:block">Karim Immobilien</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-300 font-medium px-4 py-2 rounded-lg hover:bg-accent/10"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {openDropdown === item.label && (
                      <div 
                        className="absolute top-full left-0 mt-1 bg-white border border-border rounded-lg shadow-lg py-2 min-w-48 z-50"
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent/10 transition-colors"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-300 font-medium px-4 py-2 rounded-lg hover:bg-accent/10"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden xl:flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+49 123 456 789</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>info@karim-immobilien.de</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className="flex items-center justify-between w-full py-3 text-foreground hover:text-primary transition-colors"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 pb-2">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block py-3 text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-border space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+49 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@karim-immobilien.de</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
