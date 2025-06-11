import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Users, FileText } from 'lucide-react';

const steps = [
  { icon: Shield, title: 'Diskrete Vermarktung', desc: 'Verkauf ohne öffentliche Inserate für maximale Diskretion.' },
  { icon: Users, title: 'Gezielte Ansprache', desc: 'Nur geprüfte, vorgemerkte Interessenten werden kontaktiert.' },
  { icon: FileText, title: 'Vertrauliche Abwicklung', desc: 'Sichere und anonyme Vertragsabwicklung.' },
];

const DiscreteSale = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">Discrete Sale</h1>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Diskreter Immobilienverkauf für höchste Diskretion und Sicherheit – wir vermitteln Ihre Immobilie vertraulich und anonym.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl shadow p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-lg transition-shadow">
                <step.icon className="w-12 h-12 text-cyan-600 mb-4" />
                <h2 className="text-lg font-semibold mb-2 text-gray-800">{step.title}</h2>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DiscreteSale; 