
import React from 'react';
import { Search, MapPin, Home, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg"></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hayalinizdeki Evi
            <span className="block text-yellow-300">Birlikte Bulalım</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
            25 yıllık deneyimimizle Almanya'da gayrimenkul sektöründe güvenilir ortağınız
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Konum</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input 
                    placeholder="Şehir veya bölge" 
                    className="pl-10 h-12 border-gray-200 focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Emlak Tipi</label>
                <div className="relative">
                  <Home className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <select className="w-full h-12 pl-10 pr-4 border border-gray-200 rounded-lg focus:border-primary focus:outline-none">
                    <option>Daire</option>
                    <option>Villa</option>
                    <option>Ofis</option>
                    <option>Arsa</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Fiyat Aralığı</label>
                <div className="relative">
                  <TrendingUp className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <select className="w-full h-12 pl-10 pr-4 border border-gray-200 rounded-lg focus:border-primary focus:outline-none">
                    <option>0 - 200.000€</option>
                    <option>200.000 - 500.000€</option>
                    <option>500.000 - 1.000.000€</option>
                    <option>1.000.000€+</option>
                  </select>
                </div>
              </div>
              
              <Button className="h-12 bg-primary hover:bg-primary/90 text-white font-semibold">
                <Search className="w-5 h-5 mr-2" />
                Ara
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">500+</div>
              <div className="text-blue-100">Satılan Emlak</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">25+</div>
              <div className="text-blue-100">Yıl Deneyim</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">100+</div>
              <div className="text-blue-100">Mutlu Müşteri</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">50+</div>
              <div className="text-blue-100">Şehir</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
