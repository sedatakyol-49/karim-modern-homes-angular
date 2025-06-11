import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Search, Calculator, FileText, Users, CheckCircle } from 'lucide-react';

const steps = [
  { icon: Search, title: 'Erstberatung & Marktanalyse', desc: 'Wir analysieren Ihre Immobilie und beraten Sie individuell.' },
  { icon: Calculator, title: 'Bewertung', desc: 'Professionelle Wertermittlung für einen optimalen Verkaufspreis.' },
  { icon: FileText, title: 'Exposé & Vermarktung', desc: 'Erstellung eines hochwertigen Exposés und gezielte Vermarktung.' },
  { icon: Users, title: 'Besichtigungen', desc: 'Organisation und Durchführung aller Besichtigungen.' },
  { icon: CheckCircle, title: 'Verkauf & Abschluss', desc: 'Verkaufsverhandlungen und sichere Vertragsabwicklung.' },
];

const Immobilienverkauf = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-cyan-50 via-white to-white">
      <Navigation />
      <main className="flex-1 pt-24 pb-12 flex flex-col justify-center">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          {/* Illustration */}
          <div className="flex-1 flex justify-center mb-8 lg:mb-0">
            <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Immobilienverkauf" className="rounded-3xl shadow-2xl w-full max-w-md object-cover" />
          </div>
          {/* Timeline */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Immobilienverkauf</h1>
            <p className="text-lg text-gray-600 mb-10 max-w-xl">Wir begleiten Sie professionell durch den gesamten Verkaufsprozess Ihrer Immobilie – von der Bewertung bis zum Vertragsabschluss.</p>
            <ol className="relative border-l-2 border-cyan-200 pl-6 space-y-8">
              {steps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-700 mb-1 shadow"><step.icon className="w-6 h-6" /></span>
                    {idx < steps.length - 1 && <span className="h-8 w-1 bg-cyan-100 rounded-full"></span>}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Immobilienverkauf; 