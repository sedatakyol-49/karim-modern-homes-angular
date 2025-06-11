import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Home, ClipboardList, CheckCircle, FileText, Users } from 'lucide-react';

const steps = [
  { icon: Home, title: 'Inserat & Vermarktung', desc: 'Wir präsentieren Ihre Immobilie optimal am Markt.' },
  { icon: ClipboardList, title: 'Besichtigungen', desc: 'Wir organisieren und führen alle Besichtigungen durch.' },
  { icon: CheckCircle, title: 'Bonitätsprüfung', desc: 'Sichere Auswahl durch sorgfältige Prüfung der Interessenten.' },
  { icon: FileText, title: 'Mietvertrag', desc: 'Rechtssichere Erstellung und Abwicklung des Mietvertrags.' },
  { icon: Users, title: 'Übergabe & Nachbetreuung', desc: 'Wir begleiten Sie bis zur Schlüsselübergabe und darüber hinaus.' },
];

const Vermietung = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-cyan-50 to-white">
      <Navigation />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 w-full">
          {/* Arka plan rengi ve yazı rengi eklendi */}
          <div className="rounded-xl px-6 py-8 mb-10" style={{ backgroundColor: 'rgb(8, 145, 178)' }}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Vermietung</h1>
            <p className="text-lg text-white text-center max-w-2xl mx-auto">
              Wir finden den passenden Mieter für Ihre Immobilie und übernehmen die gesamte Abwicklung – schnell, zuverlässig und transparent.
            </p>
          </div>
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-[600px] md:min-w-full">
              {steps.map((step, idx) => (
                <div key={idx} className="flex-shrink-0 w-72 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <step.icon className="w-12 h-12 text-cyan-600 mb-4" />
                  <h2 className="text-lg font-semibold mb-2 text-gray-800">{step.title}</h2>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
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

export default Vermietung;
