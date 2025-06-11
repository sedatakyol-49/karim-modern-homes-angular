import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapPin, Bed, Bath, Square, ArrowLeft, Mail, Phone } from 'lucide-react';

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Moderne Villa mit Garten in München",
    location: "München, Bayern",
    price: "850.000€",
    beds: 4,
    baths: 3,
    area: 180,
    type: "Zu verkaufen",
    description: "Eine exklusive Villa mit großem Garten, Pool und moderner Ausstattung im Herzen von München.",
    features: [
      { label: 'Baujahr', value: '2018' },
      { label: 'Grundstück', value: '600m²' },
      { label: 'Garage', value: '2 Stellplätze' },
      { label: 'Heizung', value: 'Fußbodenheizung' },
    ]
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Luxus Penthouse in Berlin Mitte",
    location: "Berlin, Deutschland",
    price: "1.200.000€",
    beds: 3,
    baths: 2,
    area: 150,
    type: "Zu verkaufen",
    description: "Ein luxuriöses Penthouse mit Dachterrasse und Blick über Berlin. Hochwertige Materialien und zentrale Lage.",
    features: [
      { label: 'Baujahr', value: '2020' },
      { label: 'Dachterrasse', value: 'Ja' },
      { label: 'Aufzug', value: 'Ja' },
      { label: 'Stellplatz', value: '1 Tiefgarage' },
    ]
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Charmantes Einfamilienhaus",
    location: "Hamburg, Deutschland",
    price: "650.000€",
    beds: 5,
    baths: 2,
    area: 200,
    type: "Zu verkaufen",
    description: "Familienfreundliches Haus mit großem Garten in ruhiger Lage von Hamburg.",
    features: [
      { label: 'Baujahr', value: '2010' },
      { label: 'Grundstück', value: '500m²' },
      { label: 'Garage', value: '1 Stellplatz' },
      { label: 'Keller', value: 'Ja' },
    ]
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Moderne Wohnung in Düsseldorf",
    location: "Düsseldorf, NRW",
    price: "450.000€",
    beds: 2,
    baths: 1,
    area: 85,
    type: "Zu verkaufen",
    description: "Moderne, helle Wohnung mit Balkon und Tiefgaragenstellplatz in Düsseldorf.",
    features: [
      { label: 'Baujahr', value: '2015' },
      { label: 'Balkon', value: 'Ja' },
      { label: 'Stellplatz', value: '1 Tiefgarage' },
      { label: 'Aufzug', value: 'Ja' },
    ]
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Luxuriöse Villa mit Pool",
    location: "Frankfurt, Hessen",
    price: "1.500.000€",
    beds: 6,
    baths: 4,
    area: 350,
    type: "Zu verkaufen",
    description: "Exklusive Villa mit großem Pool, Garten und hochwertiger Ausstattung in Frankfurt.",
    features: [
      { label: 'Baujahr', value: '2019' },
      { label: 'Pool', value: 'Ja' },
      { label: 'Grundstück', value: '900m²' },
      { label: 'Garage', value: '3 Stellplätze' },
    ]
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Renovierte Altbauwohnung",
    location: "Köln, NRW",
    price: "380.000€",
    beds: 3,
    baths: 1,
    area: 95,
    type: "Zu verkaufen",
    description: "Stilvolle Altbauwohnung mit hohen Decken und moderner Ausstattung in Köln.",
    features: [
      { label: 'Baujahr', value: '1920 (renoviert 2020)' },
      { label: 'Deckenhöhe', value: '3,2m' },
      { label: 'Balkon', value: 'Ja' },
      { label: 'Keller', value: 'Ja' },
    ]
  }
];

const ImmobilienDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find(p => p.id === Number(id));

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Immobilie nicht gefunden</h2>
            <button onClick={() => navigate(-1)} className="mt-4 px-6 py-2 bg-cyan-600 text-white rounded-lg font-semibold">Zurück</button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-2 sm:px-4 max-w-6xl">
          <button onClick={() => navigate(-1)} className="flex items-center text-cyan-600 hover:text-cyan-800 mb-6 font-semibold text-base sm:text-lg"><ArrowLeft className="w-5 h-5 mr-2" />Zurück</button>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sol: Büyük görsel */}
            <div className="flex-1 flex flex-col items-center">
              <img src={property.image} alt={property.title} className="w-full max-w-xl h-56 sm:h-80 object-cover rounded-2xl shadow-lg mb-4" />
              <div className="flex flex-wrap gap-4 mt-2 justify-center">
                <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">{property.type}</span>
                <span className="flex items-center text-gray-500 text-sm"><MapPin className="w-4 h-4 mr-1" />{property.location}</span>
              </div>
            </div>
            {/* Sağ: Özet kutusu */}
            <div className="w-full md:w-96 bg-gray-50 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col justify-between mt-4 md:mt-0">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{property.title}</h1>
                <div className="flex flex-wrap gap-4 text-gray-700 mb-4">
                  <div className="flex items-center"><Bed className="w-5 h-5 mr-1" />{property.beds} Zimmer</div>
                  <div className="flex items-center"><Bath className="w-5 h-5 mr-1" />{property.baths} Bad</div>
                  <div className="flex items-center"><Square className="w-5 h-5 mr-1" />{property.area}m²</div>
                </div>
                <div className="text-base sm:text-lg text-gray-700 mb-6">{property.description}</div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-cyan-600 mb-4">{property.price}</div>
              <div className="border-t pt-4 mt-4">
                <h2 className="text-lg font-semibold mb-2 text-gray-800">Kontakt</h2>
                <div className="flex items-center gap-2 text-gray-700 mb-1"><Phone className="w-4 h-4 mr-1" />+49 (0) 761 / 152 298 545</div>
                <div className="flex items-center gap-2 text-gray-700"><Mail className="w-4 h-4 mr-1" />info@karim-immobilien.de</div>
              </div>
            </div>
          </div>
          {/* Alt: Özellikler */}
          {property.features && (
            <div className="mt-8 sm:mt-12 bg-gray-50 rounded-2xl shadow p-6 sm:p-8 max-w-4xl mx-auto">
              <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-900">Spezifikationen</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {property.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="font-semibold w-32">{f.label}:</span>
                    <span>{f.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ImmobilienDetail; 