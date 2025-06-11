import React from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from './PropertyCard';
import { Button } from './ui/button';

const PropertiesSection = () => {
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

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ausgewählte <span className="gradient-text">Immobilien</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie unser sorgfältig ausgewähltes Portfolio, um die perfekte Immobilie für Sie zu finden
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-semibold">
            Alle Immobilien anzeigen
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
