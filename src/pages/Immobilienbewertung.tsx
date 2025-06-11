import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calculator, FileText, TrendingUp, Mail } from 'lucide-react';

const steps = [
  { icon: Calculator, title: 'Objektaufnahme', desc: 'Erstgespräch & Aufnahme aller relevanten Immobiliendaten.' },
  { icon: TrendingUp, title: 'Marktanalyse', desc: 'Vergleich mit ähnlichen Objekten & aktuelle Marktpreise.' },
  { icon: FileText, title: 'Bewertungsbericht', desc: 'Ausführlicher Bericht & Preisempfehlung für Ihre Immobilie.' },
];

const Immobilienbewertung = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-cyan-50 via-white to-white">
      <Navigation />
      <main className="flex-1 pt-24 pb-12 flex min-h-screen">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center md:items-center">
          {/* Sol: Bilgi kutuları */}
          <div className="flex-1 w-full max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Immobilienbewertung</h1>
            <p className="text-lg text-gray-600 mb-10 max-w-xl">
              Lassen Sie Ihre Immobilie professionell bewerten – für einen realistischen Marktpreis und eine erfolgreiche Vermarktung.
            </p>
            <div className="space-y-6">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white rounded-xl shadow p-5 border border-gray-100">
                  <span className="w-12 h-12 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-700 shadow">
                    <step.icon className="w-7 h-7" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ: Call to action */}
          <div className="flex-1 w-full max-w-md flex flex-col justify-center  item-center h-full ml-40">
            <div className="bg-cyan-600 rounded-2xl shadow-xl p-8 text-white flex flex-col items-center">
              <Mail className="w-10 h-10 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Kostenlose Bewertung anfragen</h2>
              <p className="mb-6 text-cyan-100 text-center">
                Kontaktieren Sie uns für eine unverbindliche und kostenfreie Immobilienbewertung.
              </p>
              <a
                href="mailto:info@karim-immobilien.de"
                className="bg-white text-cyan-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-cyan-50 transition-colors"
              >
                Jetzt anfragen
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Immobilienbewertung;
