import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Startseite', href: '#startseite' },
    { label: 'Immobilien-Portfolio', href: '#immobilien-portfolio' },
    { label: 'Verkauf', href: '#immobilienverkauf' },
    { label: 'Vermietung', href: '#vermietung' },
    { label: 'Bewertung', href: '#immobilienbewertung' },
    { label: 'Einkauf', href: '#einkauf' },
    { label: 'Diskret Sale', href: '#discrete-sale' },
    { label: 'Provision', href: '#provision' },
    { label: 'Über Uns', href: '#ueber-karim-immobilien' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm" style={{ scrollBehavior: 'smooth' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 bg-white rounded-lg px-2 py-1 shadow-md">
            <img
              src="https://www.karim-immobilien.de/media/logo_karim_immobilien_weiss_farbe.svg"
              alt="Karim Immobilien Logo"
              className="h-12 w-auto drop-shadow-lg"
            />
          </div>

          {/* Desktop Menu - Scrollable */}
          <div className="hidden lg:flex overflow-x-auto scrollbar-none whitespace-nowrap space-x-1 flex-1 justify-center px-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href.replace('#', '/')}
                className="text-foreground font-medium px-3 py-2 rounded-lg transition-colors border-b-2 border-transparent hover:border-black text-sm"
                style={{scrollBehavior:'smooth'}}
              >
                {item.label}
              </Link>
            ))}
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
          <div className="lg:hidden py-4 border-t border-border bg-white/95 rounded-b-xl shadow-md">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href.replace('#', '/')}
                className="block py-3 px-4 text-foreground hover:text-primary font-semibold rounded-lg hover:bg-primary/10 focus:bg-primary/20 focus:text-primary active:bg-primary/20 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
