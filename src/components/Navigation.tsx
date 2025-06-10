
import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menuItems = [
    { label: 'STARTSEITE', href: '#startseite' },
    { label: 'IMMOBILIEN-PORTFOLIO', href: '#immobilien-portfolio' },
    { label: 'IMMOBILIENVERKAUF', href: '#immobilienverkauf' },
    { label: 'VERMIETUNG', href: '#vermietung' },
    { label: 'IMMOBILIENBEWERTUNG', href: '#immobilienbewertung' },
    { label: 'EINKAUF', href: '#einkauf' },
    { label: 'DISCRETE SALE', href: '#discrete-sale' },
    { label: 'PROVISION', href: '#provision' },
    { label: 'ÜBER KARIM IMMOBILIEN', href: '#ueber-karim-immobilien' },
    { label: 'KONTAKT', href: '#kontakt' },
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
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-accent/10 text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden xl:flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+49 (0) 761 / 152 298 545</span>
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
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-border space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+49 (0) 761 / 152 298 545</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@karim-immobilien.de</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <div>
                  <p>Mühlhauser Straße 10</p>
                  <p>DE-79110 Freiburg i. Br.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
