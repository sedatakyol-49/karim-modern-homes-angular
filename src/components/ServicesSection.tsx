
import React from 'react';
import { Home, Calculator, FileText, Users, TrendingUp, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Gayrimenkul Satışı",
      description: "Evinizi en iyi fiyata satmanız için profesyonel destek ve pazar analizi"
    },
    {
      icon: Calculator,
      title: "Emlak Değerlendirmesi",
      description: "Gayrimenkulünüzün gerçek pazar değerini belirleme hizmeti"
    },
    {
      icon: FileText,
      title: "Hukuki Danışmanlık",
      description: "Alım-satım sürecinde tüm hukuki işlemleriniz için uzman desteği"
    },
    {
      icon: Users,
      title: "Kiralama Hizmetleri",
      description: "Gayrimenkulünüz için en uygun kiracıyı bulma ve yönetim hizmetleri"
    },
    {
      icon: TrendingUp,
      title: "Yatırım Danışmanlığı",
      description: "Karlı gayrimenkul yatırımları için profesyonel rehberlik"
    },
    {
      icon: Shield,
      title: "Sigorta Hizmetleri",
      description: "Gayrimenkulünüzü koruma altına alan kapsamlı sigorta çözümleri"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">Hizmetlerimiz</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Gayrimenkul ihtiyaçlarınız için kapsamlı çözümler sunuyoruz
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
