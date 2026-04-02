import React from 'react';
import { ArrowRight, Construction, ShieldCheck, Star, MapPin, CheckCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import Logo from '../components/Logo';
import CityServiceLinks from '../components/CityServiceLinks';

const Services: React.FC = () => {
  const services = [
    {
      title: "Concrete Driveways",
      description: "Engineered for durability and curb appeal. We specialize in reinforced slabs that withstand the Eastern NC clay.",
      link: "/driveways",
      image: "/services/driveways/option 1.webp"
    },
    {
      title: "Structural Foundations",
      description: "Precision-poured foundations for residential and commercial builds with 1/8-inch leveling tolerance.",
      link: "/foundations",
      image: "/services/foundations/option 1.jpg"
    },
    {
      title: "Artisan Stamped Patios",
      description: "Luxury outdoor living spaces with custom textures including Union Slate and Rocky River Wood Plank.",
      link: "/patios",
      image: "/services/patios/option 1.jpg"
    },
    {
      title: "Luxury Pool Decks",
      description: "Slip-resistant and cool-touch surfaces designed for salt-water systems and intense NC summers.",
      link: "/pool-decks",
      image: "/services/pool-decks/option 1.jpg"
    },
    {
      title: "Garage Floor Coatings",
      description: "Industrial-grade polyaspartic coatings that are 4x more durable than epoxy and 100% UV stable.",
      link: "/garage-floors",
      image: "/services/garage-floors/option 1.jpg"
    },
    {
      title: "Sidewalks & Walkways",
      description: "ADA-compliant walkways with architectural sweeping curves and precision-graded runoff management.",
      link: "/sidewalks",
      image: "/services/sidewalks/option 1.jpg"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <header className="pt-20 pb-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-gray-200 rounded-full text-sm font-bold tracking-wider uppercase text-black mb-6">Our Full Capabilities</span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8 text-black">
              Elite Concrete <span className="text-black">Solutions</span>
            </h1>
            <p className="text-xl text-black mb-10 leading-relaxed">
              From high-performance structural foundations to artisan decorative finishes, Mooresville Concrete provides the technical expertise and local experience required for excellence in Eastern North Carolina.
            </p>
          </div>
        </div>
      </header>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-[40px] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="relative h-64 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-10 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 text-black">{service.title}</h3>
                  <p className="text-black leading-relaxed mb-8 flex-grow">{service.description}</p>
                  <Link to={service.link} className="inline-flex items-start font-bold text-black group/link">
                    View Full Details <ChevronRight className="ml-2 w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-black mb-4">Regional Service Directory</h2>
            <p className="text-black max-w-2xl mx-auto text-lg">Access dedicated service pages for your specific city to see localized projects and engineering standards.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: 'Driveways', slug: 'driveways' },
              { name: 'Foundations', slug: 'foundations' },
              { name: 'Patios', slug: 'patios' },
              { name: 'Pool Decks', slug: 'pool-decks' },
              { name: 'Garage Floors', slug: 'garage-floors' },
              { name: 'Sidewalks', slug: 'sidewalks' }
            ].map((service) => (
              <div key={service.slug} className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-black border-b border-gray-100 pb-4">{service.name} by City</h3>
                <ul className="grid grid-cols-2 gap-4">
                  {['Kinston', 'Wilson', 'Mount Olive', 'Fremont', 'La Grange', 'Dudley'].map((city) => (
                    <li key={city}>
                      <Link 
                        to={`/${city.toLowerCase().replace(' ', '-')}/${service.slug}`}
                        className="text-black hover:text-black font-medium text-sm flex items-start group"
                      >
                        <MapPin className="w-3 h-3 mr-2 text-black group-hover:scale-110 transition-transform" />
                        {city}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-black overflow-hidden relative">
        <div className="max-w-[1600px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Ready to start your project?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Contact Mooresville's leading concrete team for a detailed consultation and professional estimate.
          </p>
          <Link to="/#contact" className="inline-block bg-white text-black px-12 py-5 rounded-2xl font-bold text-xl hover:bg-gray-200 transition-all">
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;

