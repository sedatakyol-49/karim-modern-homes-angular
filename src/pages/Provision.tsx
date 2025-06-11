import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Percent, Home, FileText } from 'lucide-react';

const provisions = [
  { icon: Percent, title: 'Verkauf', desc: '3,57% inkl. MwSt. vom Kaufpreis', badge: 'Beliebt' },
  { icon: Home, title: 'Vermietung', desc: '2,38 Monatsmieten inkl. MwSt.', badge: null },
  { icon: FileText, title: 'Individuell', desc: 'Individuelle Vereinbarungen möglich', badge: null },
];

const Provision = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-cyan-50 to-white">
      <Navigation />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">Provision</h1>
          <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">
            Transparente Informationen zu unseren Maklerprovisionen – fair und nachvollziehbar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {provisions.map((prov, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition-shadow relative">
                {prov.badge && <span className="absolute top-4 right-4 bg-cyan-100 text-cyan-700 text-xs font-bold px-3 py-1 rounded-full">{prov.badge}</span>}
                <prov.icon className="w-12 h-12 text-cyan-600 mb-4" />
                <h2 className="text-lg font-semibold mb-2 text-gray-800">{prov.title}</h2>
                <p className="text-gray-600 mb-2">{prov.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Provision; 