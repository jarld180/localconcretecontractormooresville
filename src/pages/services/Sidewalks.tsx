import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle, Star, ChevronRight, HardHat, Droplets, Ruler, Truck, Shield, Clock, MapPin, Zap, Construction, Waves, Gauge, Lightbulb, Recycle, Palette, Flame, Sun, Sparkles, Thermometer, Anchor, Accessibility, Mountain, TreePine, Info } from 'lucide-react';
import LeadForm from '../../components/LeadForm';
import CityServiceLinks from '../../components/CityServiceLinks';

const Sidewalks: React.FC = () => {
  return (
    <div className="bg-white">
      <header className="pt-20 pb-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 relative z-10 text-black">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div data-aos="fade-right">
              <span className="inline-block px-4 py-1.5 bg-white rounded-full text-sm font-bold tracking-wider uppercase text-black mb-6 border border-gray-200">Mooresville, NC Walkway Specialists</span>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8 text-black">Professional <span className="text-black">Sidewalks</span> in Mooresville, NC.</h1>
              <p className="text-xl text-black mb-10 leading-relaxed text-justify">
                Enhance accessibility and curb appeal with ADA-compliant architectural walkways. We handle all Mooresville Right-of-Way permits and design precision-graded paths that guide guests with elegance and safety.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#contact" className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-center hover:bg-gray-800 transition-all flex items-start justify-center group shadow-xl shadow-black/5 text-white">
                  Plan Your Walkway
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <img src="/services/sidewalks/option 1.jpg" alt="Sidewalk Installation Mooresville NC" className="rounded-[40px] shadow-2xl w-full h-[500px] object-cover border-8 border-white" />
            </div>
          </div>
        </div>
      </header>

      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 text-black">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              <div className="prose prose-xl prose-slate max-w-none text-black">
                <h2 className="text-5xl font-extrabold text-black mb-10 leading-tight">Precision Walkway Construction in Mooresville</h2>
                <p className="text-xl leading-relaxed text-black mb-10 text-justify">
                  A well-designed sidewalk is the connecting thread of your property, guiding guests and residents safely through your landscape while adding a clean, professional finish to your home or business. In Mooresville's varied terrain, walkway construction requires a deep understanding of slope management, soil stability, and local regulations. At Mooresville Concrete Contractor, we ensure that every path we pour is structurally sound, properly graded for water management, and visually integrated with your property's architecture.
                </p>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">Phase 1: Engineering for Accessibility & Safety</h3>
                <p className="text-lg leading-relaxed text-black mb-8 text-justify">
                  Whether you're building a residential path in Berkeley Manor or a commercial walkway near Downtown Mooresville, accessibility is paramount. We follow all federal ADA guidelines and local Mooresville regulations for cross-slope and width. Our team is expert at creating smooth transitions that are safe for strollers, wheelchairs, and guests of all mobility levels. We also utilize a 4-inch compacted aggregate base to prevent the common settlement issues that lead to "trip hazards" over time.
                </p>

                <div className="grid md:grid-cols-2 gap-12 my-16 text-black text-justify">
                  <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100">
                    <Accessibility className="w-10 h-10 text-black mb-6" />
                    <h4 className="text-2xl font-bold text-black mb-4">ADA Compliance</h4>
                    <p className="text-black leading-relaxed">
                      We ensure every public-facing walkway meets strict ADA standards for grade, width, and surface texture, protecting your business from liability and ensuring universal access.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100">
                    <Ruler className="w-10 h-10 text-black mb-6" />
                    <h4 className="text-2xl font-bold text-black mb-4">Precision Grading</h4>
                    <p className="text-black leading-relaxed">
                      Mooresville's hilly geography demands expert grading. We use laser-levels to design paths that follow the natural contour of the land while ensuring perfect water runoff.
                    </p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">Phase 2: Permitting & Regulatory Management</h3>
                <p className="text-lg leading-relaxed text-black mb-8 text-justify">
                  The City of Mooresville and Mooresville County have specific standards for any sidewalk that enters the public right-of-way. We handle the entire regulatory process for our clients, from obtaining the required permits to coordinating the mandatory pre-pour and final inspections. Our deep knowledge of local municipal codes ensures that your project is completed on time and in full compliance with all local ordinances.
                </p>

                <div className="bg-black text-white p-8 md:p-16 rounded-[60px] my-20 shadow-2xl relative overflow-hidden text-justify">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                  <h4 className="text-4xl font-bold mb-8 italic relative z-10 text-justify">The Mooresville Walkway Standard</h4>
                  <div className="space-y-10 relative z-10 text-justify">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-start justify-center shrink-0">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xl font-bold mb-2">High-Traction Finish</p>
                        <p className="text-gray-400">Our specialized "medium-broom" finish provides maximum safety for pedestrians during rainy East NC conditions.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-start justify-center shrink-0">
                        <Construction className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xl font-bold mb-2">Reinforced Joints</p>
                        <p className="text-gray-400">We use deeper control joints and high-quality expansion material to prevent the irregular cracking common in hillsides.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-start justify-center shrink-0 text-justify">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xl font-bold mb-2">Fast Permitting</p>
                        <p className="text-gray-400">Our established relationship with the Mooresville building department allows for rapid approval of right-of-way projects.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">Aesthetic Finishes: From Broom to Exposed Aggregate</h3>
                <p className="text-lg leading-relaxed text-black mb-8 text-justify">
                  A sidewalk doesn't have to be boring. While our standard broom finish is popular for its safety and clean lines, we also offer premium decorative options. Exposed aggregate walkways, featuring natural local NC river stones, are a favorite for mountain-style homes. We also provide "picture-frame" trowel finishes and stamped borders that add a touch of masonry-style elegance to a standard concrete path.
                </p>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">Root Mitigation & Urban Forestry</h3>
                <p className="text-lg leading-relaxed text-black mb-8 text-justify">
                  Mooresville's beautiful tree canopy can present a challenge for sidewalks. We specialize in root-safe construction techniques, utilizing gravel "bridging" and specialized reinforcement to allow tree roots to grow without lifting the concrete panels. This protects the city's urban forest while ensuring a long-lasting, flat walkway surface for pedestrians.
                </p>

                <div className="my-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center p-8 bg-gray-50 rounded-3xl">
                    <TreePine className="w-12 h-12 mx-auto mb-4" />
                    <p className="font-bold text-lg mb-2 text-justify">Root Protection</p>
                    <p className="text-sm text-gray-600 text-justify">Specialized designs to prevent sidewalk lifting near large trees.</p>
                  </div>
                  <div className="text-center p-8 bg-gray-50 rounded-3xl text-justify">
                    <Shield className="w-12 h-12 mx-auto mb-4" />
                    <p className="font-bold text-lg mb-2 text-justify">Liability Guard</p>
                    <p className="text-sm text-gray-600 text-justify">Perfectly flat, trip-free surfaces meeting all insurance standards.</p>
                  </div>
                  <div className="text-center p-8 bg-gray-50 rounded-3xl">
                    <Mountain className="w-12 h-12 mx-auto mb-4 text-justify" />
                    <p className="font-bold text-lg mb-2">Terrain Ready</p>
                    <p className="text-sm text-gray-600 text-justify">Expert construction on Mooresville's challenging slopes and hills.</p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">Why Choose Mooresville Concrete Contractor?</h3>
                <p className="text-lg leading-relaxed text-black mb-12 text-justify">
                  We are Mooresville's trusted partner for high-quality public and private walkways. From the historicTrade Street Trade Street manor paths to modern neighborhood developments in Farragut, we have built miles of safe, beautiful sidewalks across Mooresville County. Our commitment to ADA standards, proper geotechnical preparation, and professional permitting means your project is handled with total expertise from start to finish. Let's design a path that guides you home.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1" id="contact">
              <div className="sticky top-32">
                <LeadForm title="Walkway Quote" />
                
                <div className="mt-12 space-y-8 p-8 bg-gray-50 rounded-[40px] border border-gray-100 text-black text-justify">
                  <h4 className="text-2xl font-bold text-black">Walkway Insights</h4>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <MapPin className="w-6 h-6 text-black shrink-0" />
                      <p className="text-sm leading-relaxed text-justify"><strong>City Standards:</strong> We follow the specific 4,000 PSI and 4-inch thickness requirements set by the City of Mooresville for all public paths.</p>
                    </div>
                    <div className="flex gap-4">
                      <Accessibility className="w-6 h-6 text-black shrink-0" />
                      <p className="text-sm leading-relaxed text-justify"><strong>Inclusion First:</strong> We specialize in ramp designs and tactile warning pads for multi-family and commercial walkways.</p>
                    </div>
                    <div className="flex gap-4">
                      <Info className="w-6 h-6 text-black shrink-0" />
                      <p className="text-sm leading-relaxed text-justify"><strong>Permit Pros:</strong> We handle the entire encroachment permit process for you, saving you hours of city hall bureaucracy.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CityServiceLinks serviceSlug="sidewalks" serviceName="Sidewalks & Walkways" />
    </div>
  );
};

export default Sidewalks;
