
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img 
                src="https://www.karim-immobilien.de/media/logo_karim_immobilien_weiss_farbe.svg" 
                alt="Karim Immobilien Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Mit 25 Jahren Erfahrung sind wir Ihr vertrauensvoller Partner im deutschen Immobilienmarkt. 
              Wir helfen Ihnen dabei, Ihr Traumhaus zu finden.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Schnelllinks</h3>
            <ul className="space-y-3">
              <li><a href="#startseite" className="text-gray-400 hover:text-white transition-colors">Startseite</a></li>
              <li><a href="#immobilien-portfolio" className="text-gray-400 hover:text-white transition-colors">Immobilien-Portfolio</a></li>
              <li><a href="#immobilienverkauf" className="text-gray-400 hover:text-white transition-colors">Immobilienverkauf</a></li>
              <li><a href="#vermietung" className="text-gray-400 hover:text-white transition-colors">Vermietung</a></li>
              <li><a href="#kontakt" className="text-gray-400 hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Unsere Dienstleistungen</h3>
            <ul className="space-y-3">
              <li><a href="#immobilienverkauf" className="text-gray-400 hover:text-white transition-colors">Immobilienverkauf</a></li>
              <li><a href="#immobilienbewertung" className="text-gray-400 hover:text-white transition-colors">Immobilienbewertung</a></li>
              <li><a href="#vermietung" className="text-gray-400 hover:text-white transition-colors">Vermietungsservice</a></li>
              <li><a href="#einkauf" className="text-gray-400 hover:text-white transition-colors">Einkauf</a></li>
              <li><a href="#discrete-sale" className="text-gray-400 hover:text-white transition-colors">Discrete Sale</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-400">+49 (0) 761 / 152 298 545</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-400">+49 (0) 179 / 618 77 00</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-400">info@karim-immobilien.de</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div className="text-gray-400">
                  <p>Mühlhauser Straße 10</p>
                  <p>DE-79110 Freiburg i. Br.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Karim Immobilien. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
