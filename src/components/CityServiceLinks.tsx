import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

interface CityServiceLinksProps {
  serviceSlug: string;
  serviceName: string;
}

const cities = [
  { name: 'Mooresville', path: '' },
  { name: 'Kinston', path: 'kinston' },
  { name: 'Wilson', path: 'wilson' },
  { name: 'Mount Olive', path: 'mount-olive' },
  { name: 'Fremont', path: 'fremont' },
  { name: 'La Grange', path: 'la-grange' },
  { name: 'Dudley', path: 'dudley' },
];

const CityServiceLinks: React.FC<CityServiceLinksProps> = ({ serviceSlug, serviceName }) => {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-black mb-4">Local {serviceName} Experts Near You</h2>
          <p className="text-black max-w-2xl mx-auto">We provide professional {serviceName.toLowerCase()} services across Wayne County. Select your city for localized details.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cities.map((city) => (
            <Link
              key={city.name}
              to={city.path === '' ? `/${serviceSlug}` : `/${city.path}/${serviceSlug}`}
              className="flex items-start justify-center space-x-2 p-4 bg-white rounded-2xl border border-gray-100 hover:border-black hover:shadow-lg transition-all group"
            >
              <MapPin className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
              <span className="font-bold text-black">{city.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityServiceLinks;
