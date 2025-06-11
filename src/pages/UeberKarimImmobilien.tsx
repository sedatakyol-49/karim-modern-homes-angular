import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users } from 'lucide-react';

const team = [
  { name: 'Karim Mustermann', role: 'Geschäftsführer', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Anna Beispiel', role: 'Immobilienberaterin', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Max Muster', role: 'Marketing', img: 'https://randomuser.me/api/portraits/men/65.jpg' },
];

const UeberKarimImmobilien = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-cyan-50 via-white to-white">
      <Navigation />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Über Karim Immobilien</h1>
            <p className="text-lg text-gray-600 mb-6">Mit über 25 Jahren Erfahrung stehen wir für Vertrauen, Transparenz und höchste Servicequalität im deutschen Immobilienmarkt.</p>
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-cyan-600" />
            </div>
            <p className="text-base text-gray-500">Unser engagiertes Team begleitet Sie von der ersten Beratung bis zum erfolgreichen Abschluss – persönlich, kompetent und zuverlässig.</p>
          </div>
          <h2 className="text-2xl font-bold text-center mb-8">Unser Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition-shadow">
                <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-cyan-100" />
                <h3 className="text-lg font-semibold mb-1 text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UeberKarimImmobilien; 