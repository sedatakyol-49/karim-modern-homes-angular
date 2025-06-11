import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Home, Users, FileText, CheckCircle } from 'lucide-react';

const steps = [
  { icon: Search, title: 'Bedarfsanalyse', desc: 'Individuelle Analyse Ihrer Wünsche & Anforderungen.' },
  { icon: Home, title: 'Immobiliensuche', desc: 'Gezielte Suche nach passenden Objekten.' },
  { icon: Users, title: 'Besichtigungen', desc: 'Organisation & Begleitung bei Besichtigungen.' },
  { icon: FileText, title: 'Kaufabwicklung', desc: 'Unterstützung bei Verhandlungen & Vertragsabschluss.' },
  { icon: CheckCircle, title: 'Schlüsselübergabe', desc: 'Begleitung bis zur erfolgreichen Übergabe.' },
];

const Einkauf = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-cyan-50 to-white">
      <Navigation />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">Einkauf</h1>
          <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">
            Wir unterstützen Sie beim Kauf Ihrer Wunschimmobilie – von der Suche bis zur Schlüsselübergabe.
          </p>
          <div className="flex flex-col items-center">
            <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center relative">
                  <span className="w-14 h-14 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-700 shadow mb-3"><step.icon className="w-7 h-7" /></span>
                  <h2 className="text-base font-semibold mb-1 text-gray-800">{step.title}</h2>
                  <p className="text-gray-600 text-xs mb-2 max-w-[140px]">{step.desc}</p>
                  {idx < steps.length - 1 && (
                    <span className="hidden md:block absolute right-[-32px] top-1/2 transform -translate-y-1/2 w-16 h-1 bg-cyan-100 rounded"></span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Einkauf; 