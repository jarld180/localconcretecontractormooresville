import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle, Star, MapPin, ChevronRight, Construction, Zap, Droplets, Ruler } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import LeadForm from '../components/LeadForm';
import Logo from '../components/Logo';

const CityService: React.FC = () => {
  const { city, service } = useParams<{ city: string; service: string }>();

  const cap = (s: string | undefined) => s ? s.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : '';
  const cityName = cap(city);
  const serviceName = cap(service);

  const serviceImages: Record<string, string> = {
    'driveways': '/services/driveways/option 1.webp',
    'foundations': '/services/foundations/option 1.jpg',
    'patios': '/services/patios/option 1.jpg',
    'pool-decks': '/services/pool-decks/option 1.jpg',
    'garage-floors': '/services/garage-floors/option 1.jpg',
    'sidewalks': '/services/sidewalks/option 1.jpg'
  };

  const heroImage = service && serviceImages[service] ? serviceImages[service] : serviceImages['driveways'];

  const contentData: Record<string, any> = {
    'mint-hill-driveways': {
      heroDesc: `Premium concrete driveway installation and replacement for Kinston homeowners. Engineered for the heavy clay soils of Wayne County.`,
      articleTitle: `Mastering Driveway Construction in Kinston`,
      articleText: `A driveway in Kinston is more than just a place to park; it's a critical component of your property's structural integrity. Near the historic downtown and newer developments, the soil requires expert-level stabilization. We utilize a 6-inch compacted ABC stone base and high-density fiber-reinforced concrete to ensure your driveway lasts for decades without the common cracking seen in standard pours.`,
      features: [
        { title: "Clay Soil Stabilization", desc: "Deep excavation and engineered stone base to prevent shrink-swell cracking." },
        { title: "Neighborhood Matching", desc: "Artisan finishes that complement the unique aesthetic of Kinston." },
        { title: "Precision Grading", desc: "Laser-leveled slope management to protect your home's foundation from runoff." }
      ],
      reviews: [
        { text: "They replaced our long driveway in Kinston. The crew was professional and the finish is flawless.", author: "Michael R., Kinston, NC" },
        { text: "Best concrete work we've seen in the area. They matched our existing walkway perfectly.", author: "Sarah W., Kinston, NC" }
      ],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.1!2d-80.6467!3d35.1751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8854180909090909%3A0x8854180909090909!2sMint%20Hill%2C%20NC!5e0!3m2!1sen!2sus!4v1704576000000!5m2!1sen!2sus"
    },
    'weddington-patios': {
      heroDesc: `Luxury artisan stamped patios for Mount Olive estates. High-end decorative finishes designed for ultimate outdoor living.`,
      articleTitle: `High-Performance Patios for Mount Olive Living`,
      articleText: `Estate living in Mount Olive demands a higher standard of concrete artistry. Our stamped patios utilize UV-stable pigments and high-solids solvent sealers to prevent the fading and wear common in large-scale outdoor projects. Whether you're in Dudley or La Grange, our heat-reflective technology options keep surfaces comfortable, making your outdoor oasis the centerpiece of your property.`,
      features: [
        { title: "Estate Grade Tech", desc: "Specialized overlays and textures that stay comfortable and look premium." },
        { title: "Weather Resistance", desc: "Industrial-grade sealers that protect against intense NC sun and storms." },
        { title: "Artisan Textures", desc: "Custom hand-staining and textures for maximum visual depth and luxury." }
      ],
      reviews: [
        { text: "Our new patio in Mount Olive is amazing. The detail in the stamping is incredible.", author: "Jennifer L., Mount Olive, NC" },
        { text: "Professional team. They handled our large-scale project with absolute precision.", author: "Robert P., Mount Olive, NC" }
      ],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.8!2d-78.0656!3d35.1965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ae8888888888%3A0x88888888888888!2sMount%20Olive%2C%20NC!5e0!3m2!1sen!2sus!4v1704576000000!5m2!1sen!2sus"
    }
  };

  const current = contentData[`${city}-${service}`] || {
    heroDesc: `Elite ${serviceName} solutions for residential and commercial properties in ${cityName}, NC. Engineered for structural integrity and premium aesthetics.`,
    articleTitle: `Professional ${serviceName} Services in ${cityName}`,
    articleText: `A ${serviceName} project in ${cityName} requires a deep understanding of North Carolina's regional variables. At Mooresville Concrete, we provide high-end craftsmanship designed specifically for the ${cityName} environment. Our team utilizes high-density mixes and advanced reinforcement to ensure your project stands the test of time in the Wayne County region.`,
    features: [
      { title: "Technical Precision", desc: `Laser-guided accuracy ensuring perfect levels for every ${serviceName} in ${cityName}.` },
      { title: "Structural Integrity", desc: `High-density reinforced concrete designed for ${cityName}'s specific soil dynamics.` },
      { title: "Local Standards", desc: `Full compliance with ${cityName} building codes and environmental regulations.` }
    ],
    reviews: [
      { text: `Exceptional quality on our ${serviceName} project. The team in ${cityName} was professional and fast.`, author: `James D., ${cityName}, NC` },
      { text: `The best concrete contractors in the ${cityName} area. We couldn't be happier with the results.`, author: `Linda M., ${cityName}, NC` }
    ],
    mapUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000!2d-80.7!3d35.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8854000000000000%3A0x0000000000000000!2s${cityName}%2C%20NC!5e0!3m2!1sen!2sus!4v1704576000000!5m2!1sen!2sus`
  };

  return (
    <div className="overflow-x-hidden bg-white">
      <Helmet>
        <title>{serviceName} in {cityName}, NC | #1 Local Concrete Contractor</title>
        <meta name="description" content={`Top-rated ${serviceName} services in ${cityName}, NC. Professional concrete installation, local expertise, and free estimates for ${cityName} residents and businesses.`} />
        <link rel="canonical" href={`https://matthewsconcretecontractor.com/${city}/${service}`} />
      </Helmet>
      <section className="pt-20 pb-20 lg:pt-24 lg:pb-32 relative overflow-hidden bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-6 relative z-10 text-black">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div data-aos="fade-right">
              <span className="inline-block px-4 py-1.5 bg-white rounded-full text-sm font-bold tracking-wider uppercase text-black mb-6 border border-gray-200">{cityName} {serviceName} Experts</span>
              <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.1] mb-8 gradient-text-animated text-black">
                Elite <span className="text-black">{serviceName}</span> in {cityName}.
              </h1>
              <p className="text-xl text-black mb-10 leading-relaxed max-w-lg text-black">{current.heroDesc}</p>
              <a href="#contact" className="bg-black text-white px-8 py-4 rounded-2xl font-bold inline-flex items-start hover:bg-gray-800 transition-all text-white shadow-xl shadow-black/5">
                Get Your {cityName} Quote <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-white rounded-3xl -rotate-2 border border-gray-100 shadow-sm"></div>
              <img src={heroImage} className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover" alt={serviceName} />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-32 bg-white text-black">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="lg:col-span-2 space-y-12">
              <h2 className="text-5xl font-extrabold text-black mb-8 leading-tight">{current.articleTitle}</h2>
              <p className="text-xl leading-relaxed text-black mb-12">{current.articleText}</p>
              <div className="grid md:grid-cols-3 gap-8">
                {current.features.map((f: any, i: number) => (
                  <div key={i} className="p-8 bg-gray-50 rounded-[32px] border border-gray-100">
                    <CheckCircle className="w-8 h-8 text-black mb-4" />
                    <h4 className="font-bold text-lg mb-2 text-black">{f.title}</h4>
                    <p className="text-black text-sm leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-3xl font-bold text-black mt-16 mb-6">Advanced Engineering Standards in {cityName}</h3>
              <p className="text-lg leading-relaxed text-black mb-8 text-black">
                We have set a higher bar for {cityName} property owners. Every {serviceName} project we undertake in {cityName} includes structural reinforcement that exceeds local industry standards. We don't just pour concrete; we build the lasting foundations of your property's value.
              </p>

              <div className="bg-black text-white p-6 md:p-12 rounded-[50px] my-16 text-white shadow-2xl shadow-black/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-black rounded-full blur-[120px] opacity-20 -mr-32 -mt-32"></div>
                <div className="relative z-10">
                  <h4 className="text-3xl font-bold mb-6 italic text-white">The {cityName} Technical Edge</h4>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    Our team understands the specific hydraulic and geotechnical variables of the {cityName} region. From managing the dense North red clay to ensuring perfect water runoff, we are the authority on {serviceName}.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10 text-center">
                    <div><p className="text-3xl font-bold text-white">100%</p><p className="text-xs uppercase tracking-widest text-gray-300">Certified</p></div>
                    <div><p className="text-3xl font-bold text-white">15+</p><p className="text-xs uppercase tracking-widest text-gray-300">Years Exp</p></div>
                    <div><p className="text-3xl font-bold text-white">#1</p><p className="text-xs uppercase tracking-widest text-gray-300">Local Rank</p></div>
                    <div><p className="text-3xl font-bold text-white">0</p><p className="text-xs uppercase tracking-widest text-gray-300">Compromise</p></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1" id="contact">
              <div className="sticky top-32">
                <LeadForm title={`${cityName} ${serviceName} Quote`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-16 text-center text-black">Local Feedback from {cityName}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {current.reviews.map((r: any, i: number) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-5 h-5" />)}
                </div>
                <p className="text-black text-lg italic mb-8 leading-relaxed">"{r.text}"</p>
                <p className="font-bold text-black">— {r.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white text-black">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="bg-gray-100 rounded-[50px] h-[500px] w-full relative overflow-hidden shadow-2xl">
            <iframe 
              src={current.mapUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-32 bg-black text-white rounded-t-[60px] mt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold mb-8 text-white">Ready to start in {cityName}?</h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Contact the #1 concrete team for {serviceName} in {cityName}, NC. We are ready to bring your vision to life with technical excellence.
          </p>
          <a href="#contact" className="inline-block bg-white text-black px-12 py-5 rounded-2xl font-bold text-xl hover:bg-gray-200 transition-all">Get Your Free Estimate</a>
        </div>
      </section>
    </div>
  );
};

export default CityService;

