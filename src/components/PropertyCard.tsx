import React from 'react';
import { MapPin, Bed, Bath, Square, Heart, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PropertyCardProps {
  id: number;
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: number;
  type: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  title,
  location,
  price,
  beds,
  baths,
  area,
  type
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden property-card-hover">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {type}
          </span>
        </div>
        <div className="absolute top-4 right-4 flex space-x-2">
          <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
            <Heart className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
            <Share className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          {location}
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              {beds}
            </div>
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              {baths}
            </div>
            <div className="flex items-center">
              <Square className="w-4 h-4 mr-1" />
              {area}m²
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between flex-col sm:flex-row gap-4 sm:gap-0">
          <div className="text-2xl font-bold text-cyan-600">
            {price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
