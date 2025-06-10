
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">Kontaktieren Sie uns</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kontaktieren Sie uns jetzt für Ihre Immobilienbedürfnisse
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Kontaktinformationen</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Telefon</h4>
                    <p className="text-gray-600">+49 123 456 789</p>
                    <p className="text-gray-600">+49 987 654 321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">E-Mail</h4>
                    <p className="text-gray-600">info@karim-immobilien.de</p>
                    <p className="text-gray-600">karim@karim-immobilien.de</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Adresse</h4>
                    <p className="text-gray-600">Hauptstraße 123</p>
                    <p className="text-gray-600">10115 Berlin, Deutschland</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Öffnungszeiten</h4>
                    <p className="text-gray-600">Montag - Freitag: 09:00 - 18:00</p>
                    <p className="text-gray-600">Samstag: 10:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Senden Sie uns eine Nachricht</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vorname</label>
                  <Input placeholder="Ihr Vorname" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nachname</label>
                  <Input placeholder="Ihr Nachname" className="h-12" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail</label>
                <Input type="email" placeholder="Ihre E-Mail-Adresse" className="h-12" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                <Input placeholder="Ihre Telefonnummer" className="h-12" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Betreff</label>
                <select className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:border-primary focus:outline-none">
                  <option>Immobilienverkauf</option>
                  <option>Immobilienkauf</option>
                  <option>Vermietung</option>
                  <option>Bewertung</option>
                  <option>Sonstiges</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nachricht</label>
                <textarea 
                  rows={5}
                  placeholder="Schreiben Sie hier Ihre Nachricht..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none resize-none"
                ></textarea>
              </div>
              
              <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold">
                Nachricht senden
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
