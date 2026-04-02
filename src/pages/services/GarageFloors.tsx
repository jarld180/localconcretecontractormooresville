import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle, Star, ChevronRight, HardHat, Droplets, Ruler, Truck, Shield, Clock, MapPin, Zap, Construction, Waves, Gauge, Lightbulb, Recycle, Palette, Flame, Sun, Sparkles, Thermometer, Anchor, Accessibility, Mountain, TreePine, Info } from 'lucide-react';
import LeadForm from '../../components/LeadForm';
import CityServiceLinks from '../../components/CityServiceLinks';

const GarageFloors: React.FC = () => {
  return (
    <div className="bg-white">
      <header className="pt-20 pb-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start text-black">
            <div data-aos="fade-right">
              <span className="inline-block px-4 py-1.5 bg-white rounded-full text-sm font-bold tracking-wider uppercase text-black mb-6 border border-gray-200">Mooresville, NC Flooring Specialists</span>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8 text-black">Professional <span className="text-black">Garage Floors</span> in Mooresville, NC.</h1>
              <p className="text-xl text-black mb-10 leading-relaxed text-justify">
                Your garage is one of the most demanding environments in your home. From heavy vehicle loads to chemical spills and thermal cycling, the concrete floor needs to be engineered for survival. At Mooresville Concrete Contractor, we specialize in high-strength structural garage slabs and premium industrial coatings.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#contact" className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-center hover:bg-gray-800 transition-all flex items-start justify-center group shadow-xl shadow-black/5 text-white">
                  Get Your Flooring Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <img src="/services/garage-floors/option 1.jpg" alt="Garage Floor Coating Mooresville NC" className="rounded-[40px] shadow-2xl w-full h-[500px] object-cover border-8 border-white" />
            </div>
          </div>
        </div>
      </header>

      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 text-black">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              <div className="prose prose-xl prose-slate max-w-none text-black">
                <h2 className="text-5xl font-extrabold text-black mb-10 leading-tight">Mastering Garage Floor Systems in East NC</h2>
                <p className="text-xl leading-relaxed text-black mb-10 text-justify">
                  A garage floor in Mooresville faces a specific set of challenges. The high humidity of the East NC summers can cause "sweating slab syndrome," where moisture from the air condenses on the cool concrete surface. Additionally, the region's winter freeze-thaw cycles can wreak havoc on non-reinforced slabs. At Mooresville Concrete Contractor, we offer a comprehensive suite of solutions ranging from structural slab replacement to industrial-grade Polyaspartic coatings.
                </p>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">Phase 1: Structural Slab Engineering</h3>
                <p className="text-lg leading-relaxed text-black mb-8 text-justify">
                  For many Mooresville homeowners, the existing garage floor is cracked beyond repair or settling due to poor initial compaction. We provide complete removal and replacement services. Our process involves excavating down to stable soil, installing a 6-inch compacted stone base, and pouring a 4,000 PSI high-strength concrete slab reinforced with #3 rebar on 12-inch centers. This creates a floor that can handle the heaviest full-size SUVs and workshop equipment without cracking or shifting.
                </p>

                <div className="grid md:grid-cols-2 gap-12 my-16 text-black">
                  <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100">
                    <Gauge className="w-10 h-10 text-black mb-6" />
                    <h4 className="text-2xl font-bold text-black mb-4 text-justify">Impact Resistance</h4>
                    <p className="text-black leading-relaxed text-justify">
                      Our floors are engineered to withstand the weight of car lifts, heavy machinery, and constant vehicle traffic. We utilize fiber-mesh reinforcement to provide superior surface toughness.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100">
                    <Droplets className="w-10 h-10 text-black mb-6" />
                    <h4 className="text-2xl font-bold text-black mb-4 text-justify">MVT Mitigation</h4>
                    <p className="text-black leading-relaxed text-justify">
                      Moisture Vapor Transmission (MVT) is the silent killer of garage coatings. We use specialized primers that create a permanent moisture block, preventing the coating from bubbling or peeling over time.
                    </p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">Phase 2: Industrial Polyaspartic Coatings</h3>
                <p className="text-lg leading-relaxed text-black mb-8 text-justify">
                  While many big-box stores sell DIY epoxy kits, these often fail within a year. We utilize industrial-grade Polyaspartic systems that are 4 times more durable than standard epoxy and 100% UV stable. This means your garage floor won't yellow or fade even if it's exposed to direct sunlight through an open garage door. Our professional installation process includes diamond-grinding the concrete to ensure a perfect mechanical bond, resulting in a floor that is virtually indestructible.
                </p>

                <div className="bg-black text-white p-8 md:p-16 rounded-[60px] my-20 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl text-justify"></div>
                  <h4 className="text-4xl font-bold mb-8 italic relative z-10 text-justify">The Mooresville Performance Standard</h4>
                  <div className="space-y-10 relative z-10 text-justify">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-start justify-center shrink-0">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xl font-bold mb-2 text-justify">Chemical Immunity</p>
                        <p className="text-gray-400 text-justify">Our coatings are resistant to road salt, oil, gasoline, and brake fluid. Spills wipe away with a simple paper towel without leaving permanent stains.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-start justify-center shrink-0">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xl font-bold mb-2">1-Day Installation</p>
                        <p className="text-gray-400">Our advanced systems cure fast. We can diamond grind, repair micro-cracks, and apply the full multi-layer system in just one day.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-start justify-center shrink-0">
                        <Lightbulb className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xl font-bold mb-2">Reflective Finish</p>
                        <p className="text-gray-400">The high-gloss finish of our garage systems increases light levels by up to 30%, making your garage a safer and brighter workspace.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">Customization & Aesthetics</h3>
                <p className="text-lg leading-relaxed text-black mb-8 text-justify">
                  Your garage doesn't have to be grey. We offer dozens of decorative chip blends, from subtle granite-like patterns to bold, high-contrast combinations. We also specialize in metallic marble finishes for "man caves" and high-end showrooms. Every coated floor includes an anti-slip additive, ensuring that your garage remains safe even during wet Mooresville weather.
                </p>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">The Preparation Advantage</h3>
                <p className="text-lg leading-relaxed text-black mb-8 text-justify">
                  The secret to a lifelong garage floor is the preparation. We use heavy-duty planetary diamond grinders with industrial vacuums to remove the surface "laitance" and open the pores of the concrete. This creates a CSP-2 (Concrete Surface Profile) that allows our resins to penetrate deep into the slab. We also use specialized carbon-fiber stitching to repair structural cracks before the coating is applied, ensuring that old cracks never reappear in the new surface.
                </p>

                <div className="my-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center p-8 bg-gray-50 rounded-3xl">
                    <Recycle className="w-12 h-12 mx-auto mb-4" />
                    <p className="font-bold text-lg mb-2 text-justify">Low VOC</p>
                    <p className="text-sm text-gray-600 text-justify">Our resins are environmentally friendly and safe for indoor use with minimal odor.</p>
                  </div>
                  <div className="text-center p-8 bg-gray-50 rounded-3xl">
                    <ShieldCheck className="w-12 h-12 mx-auto mb-4" />
                    <p className="font-bold text-lg mb-2 text-justify">UV Stable</p>
                    <p className="text-sm text-gray-600 text-justify">Will not yellow or peel when exposed to the intense NC sun.</p>
                  </div>
                  <div className="text-center p-8 bg-gray-50 rounded-3xl text-justify">
                    <Truck className="w-12 h-12 mx-auto mb-4" />
                    <p className="font-bold text-lg mb-2">Tire Proof</p>
                    <p className="text-sm text-gray-600 text-justify">Engineered to prevent "hot tire pick-up" even with high-performance summer tires.</p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">Why Choose Mooresville Concrete Contractor?</h3>
                <p className="text-lg leading-relaxed text-black mb-12 text-justify">
                  We are Mooresville's authority on garage floor transformation. From historic Downtown Mooresville restorations to new developments in Berkeley Manor, we have installed over 500,000 square feet of high-performance flooring. Our commitment to using only the highest quality industrial-grade materials means your floor will look just as good in 10 years as it does today. Contact us for a detailed evaluation of your slab and a professional estimate for your project.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1" id="contact">
              <div className="sticky top-32">
                <LeadForm title="Flooring Quote" />
                
                <div className="mt-12 space-y-8 p-8 bg-gray-50 rounded-[40px] border border-gray-100 text-black">
                  <h4 className="text-2xl font-bold text-black">Professional Insights</h4>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <MapPin className="w-6 h-6 text-black shrink-0" />
                      <p className="text-sm leading-relaxed text-justify"><strong>Humidity Control:</strong> We test the moisture content of every slab before application to ensure permanent adhesion in Mooresville's damp climate.</p>
                    </div>
                    <div className="flex gap-4">
                      <Lightbulb className="w-6 h-6 text-black shrink-0" />
                      <p className="text-sm leading-relaxed text-justify"><strong>Design Choice:</strong> We carry the largest selection of custom color chips in East NC, allowing you to match your floor to your car or cabinetry.</p>
                    </div>
                    <div className="flex gap-4">
                      <Construction className="w-6 h-6 text-black shrink-0" />
                      <p className="text-sm leading-relaxed text-justify"><strong>Expert Grind:</strong> Our diamond grinding process is dust-free, keeping your home clean while we transform your garage.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CityServiceLinks serviceSlug="garage-floors" serviceName="Garage Floor Coatings" />
    </div>
  );
};

export default GarageFloors;
