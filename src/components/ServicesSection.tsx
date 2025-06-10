
import React from 'react';
import { Home, Calculator, FileText, Users, TrendingUp, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Immobilienverkauf",
      description: "Professionelle Unterstützung und Marktanalyse für den besten Verkaufspreis Ihrer Immobilie"
    },
    {
      icon: Calculator,
      title: "Immobilienbewertung",
      description: "Ermittlung des realen Marktwerts Ihrer Immobilie durch unsere Experten"
    },
    {
      icon: FileText,
      title: "Rechtsberatung",
      description: "Expertenhilfe für alle rechtlichen Angelegenheiten im Kauf- und Verkaufsprozess"
    },
    {
      icon: Users,
      title: "Vermietungsservice",
      description: "Wir finden den passenden Mieter für Ihre Immobilie und übernehmen die Verwaltung"
    },
    {
      icon: TrendingUp,
      title: "Investmentberatung",
      description: "Professionelle Beratung für rentable Immobilieninvestitionen"
    },
    {
      icon: Shield,
      title: "Versicherungsservice",
      description: "Umfassende Versicherungslösungen zum Schutz Ihrer Immobilie"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">Unsere Dienstleistungen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Wir bieten umfassende Lösungen für alle Ihre Immobilienbedürfnisse
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
