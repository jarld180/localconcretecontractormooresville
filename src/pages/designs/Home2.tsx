import React from 'react';
import { ArrowRight, MapPin, Star, ShieldCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LeadForm from '../../components/LeadForm';
import Logo from '../../components/Logo';
import { motion } from 'framer-motion';

interface HomeProps {
  cityName?: string;
}

const Home2: React.FC<HomeProps> = ({ cityName = "Mooresville" }) => {
  const isMooresville = cityName === "Mooresville";

  return (
    <div className="font-playfair bg-[#FAFAFA] text-black overflow-x-hidden">
      {/* Design 2: The Architectural Boutique */}
      
      {/* Minimalist Hero */}
      <section className="min-h-screen flex flex-col px-6 md:px-20 pt-20">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-black mb-10 block">{cityName} • North Carolina</span>
              <h1 className="text-8xl md:text-[10rem] font-light tracking-tighter leading-[0.85] mb-12">
                Pure <br/>
                <span className="italic font-normal">Form.</span> <br/>
                Lasting <br/>
                <span className="italic font-normal">Function.</span>
              </h1>
              <p className="text-xl text-black max-w-sm leading-relaxed font-light mb-16">
                Redefining the regional landscape through a lens of architectural minimalism and technical mastery.
              </p>
              <div className="flex items-start gap-12">
                <a href="#contact" className="group flex items-start gap-4 text-[10px] uppercase tracking-[0.5em] font-black">
                  <span className="relative">
                    Inquire
                    <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-blue-600 scale-x-100 group-hover:scale-x-0 transition-transform duration-500 origin-left"></span>
                    <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100 origin-right"></span>
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                </a>
              </div>
            </motion.div>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden group border border-gray-100">
            <motion.img 
              initial={{ scale: 1.3, filter: 'grayscale(100%)' }}
              animate={{ scale: 1, filter: 'grayscale(100%)' }}
              whileHover={{ filter: 'grayscale(0%)', scale: 1.05 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              src="/services/driveways/option 2.png" 
              className="absolute inset-0 w-full h-full object-cover transition-all duration-1000" 
              alt="Architecture"
            />
            <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay"></div>
          </div>
        </div>
      </section>

      {/* Philosophy - Text Heavy & High White Space */}
      <section className="py-60 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-16">
          <h2 className="text-6xl font-light tracking-tight leading-tight italic" data-aos="fade-up">"Concrete is the silent partner of architectural vision."</h2>
          <div className="w-px h-24 bg-blue-600 mx-auto" data-aos="scale-y"></div>
          <p className="text-2xl font-light leading-relaxed text-black max-w-3xl mx-auto" data-aos="fade-up">
            Our approach in {cityName} is singular: we treat every project as a permanent installation. By balancing the geotechnical realities of the Coastal Plain with a commitment to pure aesthetic form, we build foundations that endure both time and scrutiny.
          </p>
        </div>
      </section>

      {/* Grid Portfolio - High End Gallery Style */}
      <section className="pb-60 px-6 md:px-20">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-7 space-y-8" data-aos="fade-right">
              <div className="overflow-hidden aspect-video border border-gray-100">
                <img src="/services/foundations/option 2.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Foundations" />
              </div>
              <div className="flex justify-between items-start pt-20">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight">Structural Foundations</h3>
                  <p className="text-black text-[10px] uppercase tracking-[0.4em] mt-2">TECHNICAL ENGINEERING benchmark 98% proctor</p>
                </div>
                <Link to={isMooresville ? "/foundations" : `/${cityName.toLowerCase().replace(' ', '-')}/foundations`} className="text-[10px] font-black uppercase tracking-widest border-b border-blue-600 pb-1 hover:text-black hover:border-gray-400 transition-all">Details</Link>
              </div>
            </div>
            <div className="md:col-span-5 space-y-8 pt-20" data-aos="fade-left">
              <div className="overflow-hidden aspect-[4/5] border border-gray-100">
                <img src="/services/patios/option 2.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt="Patios" />
              </div>
              <div className="flex justify-between items-start pt-20">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight">Artisan Stamped Patios</h3>
                  <p className="text-black text-[10px] uppercase tracking-[0.4em] mt-2">DECORATIVE CURATION UV-STABLE PIGMENTS</p>
                </div>
                <Link to={isMooresville ? "/patios" : `/${cityName.toLowerCase().replace(' ', '-')}/patios`} className="text-[10px] font-black uppercase tracking-widest border-b border-blue-600 pb-1 hover:text-black hover:border-gray-400 transition-all">Details</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Ghost Layout */}
      <section className="py-40 border-y border-gray-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-20 grid grid-cols-2 md:grid-cols-4 gap-20">
          {[
            { label: "Experience", val: "15Y" },
            { label: "Projects", val: "1.2M" },
            { label: "Tolerance", val: "1/8\"" },
            { label: "Retention", val: "100%" }
          ].map(stat => (
            <div key={stat.label} className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.4em] text-black font-bold">{stat.label}</p>
              <p className="text-6xl font-light tracking-tighter italic">{stat.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Locations - Minimalist List */}
      <section className="py-60 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between items-start gap-20">
          <h2 className="text-5xl font-light tracking-tight md:w-1/3">Regional <br/>Presence.</h2>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-12">
            {['Kinston', 'Wilson', 'Mount Olive', 'Fremont', 'La Grange', 'Dudley'].map((city, i) => (
              <Link key={city} to={`/${city.toLowerCase().replace(' ', '-')}`} className="group flex items-start justify-between border-b border-gray-100 pb-8 overflow-hidden">
                <div className="flex items-start gap-6">
                  <span className="text-[10px] font-bold text-black">0{i + 1}</span>
                  <h4 className="text-2xl font-bold tracking-tight group-hover:italic group-hover:translate-x-4 transition-all duration-500 text-black">{city}</h4>
                </div>
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact - The Consultation */}
      <section id="contact" className="py-60 bg-[#FAFAFA]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-20 grid lg:grid-cols-2 gap-40 items-start">
          <div className="space-y-20">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <h2 className="text-8xl font-light tracking-tighter leading-[0.85] text-black">Begin the <br/><span className="italic">Dialogue.</span></h2>
              <p className="text-xl text-black font-light mt-16 leading-relaxed max-w-sm">Detailed technical assessments and design curation available by appointment in {cityName}.</p>
            </motion.div>
            <div className="flex flex-col gap-12 border-t border-gray-200 pt-20">
              <div className="group">
                <p className="text-[10px] uppercase tracking-[0.5em] font-black text-black mb-4">CONNECT</p>
                <a href="tel:984-253-1031" className="text-4xl font-light hover:italic transition-all text-black underline underline-offset-[12px] decoration-blue-200">(984) 253-1031</a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-12 border border-blue-600/5 rounded-[60px] pointer-events-none"></div>
            <div className="bg-white p-2 rounded-[40px] shadow-2xl shadow-black/[0.02]">
              <LeadForm title="Inquiry Portfolio" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home2;

