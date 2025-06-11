import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

const Kontakt = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      <main className="flex-1 pt-24 pb-12">
        {/* Full-width arka planlı başlık alanı */}
        <section  style={{ backgroundColor: 'rgb(8, 145, 178)' }}  className=" py-12 mb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Kontakt</h1>
            <p className="text-lg text-white text-center">
              Kontaktieren Sie uns für alle Fragen rund um Immobilien – wir freuen uns auf Ihre Nachricht!
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow p-8 flex flex-col justify-center border border-gray-100">
              <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                <Mail className="w-6 h-6 mr-2 text-cyan-600" /> E-Mail
              </h2>
              <p className="mb-4 text-gray-600">info@karim-immobilien.de</p>
              <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                <Phone className="w-6 h-6 mr-2 text-cyan-600" /> Telefon
              </h2>
              <p className="mb-4 text-gray-600">+49 (0) 761 / 152 298 545</p>
              <h2 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-cyan-600" /> Adresse
              </h2>
              <p className="text-gray-600">
                Mühlhauser Straße 10
                <br />
                DE-79110 Freiburg i. Br.
              </p>
            </div>
            <form className="bg-white rounded-2xl shadow p-8 space-y-6 border border-gray-100">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail</label>
                <input
                  type="email"
                  className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                  placeholder="Ihre E-Mail-Adresse"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nachricht</label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none resize-none"
                  rows={5}
                  placeholder="Ihre Nachricht..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full h-12 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors"
              >
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
