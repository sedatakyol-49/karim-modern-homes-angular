import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
    type: "Zu verkaufen"
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
    type: "Zu verkaufen"
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
    type: "Zu verkaufen"
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
    type: "Zu verkaufen"
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
    type: "Zu verkaufen"
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
    type: "Zu verkaufen"
  }
];

const ImmobilienPortfolio = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">Immobilien-Portfolio</h1>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Entdecken Sie unser exklusives Immobilien-Portfolio mit einer Auswahl an hochwertigen Objekten in ganz Deutschland.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-0 flex flex-col border border-gray-100">
                <img src={property.image} alt={property.title} className="h-56 w-full object-cover rounded-t-2xl" />
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-semibold mb-1 text-primary">{property.title}</h2>
                  <p className="text-sm text-gray-500 mb-1">{property.location}</p>
                  <p className="text-base font-semibold text-gray-800 mb-2">{property.price}</p>
                  <p className="text-sm text-gray-500 mb-4">
                    🛏 {property.beds} · 🛁 {property.baths} · 📐 {property.area} m²
                  </p>
                  <button className="mt-auto bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold shadow transition-colors">
                    Details ansehen
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ImmobilienPortfolio;
