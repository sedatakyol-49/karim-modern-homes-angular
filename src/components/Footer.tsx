
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
              <span className="text-xl font-bold">Karim Immobilien</span>
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
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Startseite</a></li>
              <li><a href="#properties" className="text-gray-400 hover:text-white transition-colors">Immobilien</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Dienstleistungen</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Über uns</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Unsere Dienstleistungen</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Immobilienverkauf</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Immobilienbewertung</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Vermietungsservice</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Investmentberatung</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Rechtsberatung</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-400">+49 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-400">info@karim-immobilien.de</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div className="text-gray-400">
                  <p>Hauptstraße 123</p>
                  <p>10115 Berlin, Deutschland</p>
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
