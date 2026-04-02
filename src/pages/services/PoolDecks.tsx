import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle, Star, ChevronRight, HardHat, Droplets, Ruler, Truck, Shield, Clock, MapPin, Zap, Construction, Waves, Gauge, Lightbulb, Recycle, Palette, Flame, Sun, Sparkles, Thermometer, Anchor, Accessibility, Mountain, TreePine, Info } from 'lucide-react';
import LeadForm from '../../components/LeadForm';
import CityServiceLinks from '../../components/CityServiceLinks';

const PoolDecks: React.FC = () => {
  return (
    <div className="bg-white">
      <header className="pt-20 pb-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 relative z-10 text-black">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div data-aos="fade-right">
              <span className="inline-block px-4 py-1.5 bg-white rounded-full text-sm font-bold tracking-wider uppercase text-black mb-6 border border-gray-200">Mooresville, NC Pool Surround Experts</span>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8 text-black">Premium <span className="text-black">Pool Decks</span> in Mooresville, NC.</h1>
              <p className="text-xl text-black mb-10 leading-relaxed text-justify">
                Safety meets style with our slip-resistant, cool-touch concrete pool surrounds. Specifically engineered for the Mooresville climate, our decks combine world-class aesthetics with the durability required for salt-water and chlorinated systems.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#contact" className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-center hover:bg-gray-800 transition-all flex items-start justify-center group shadow-xl shadow-black/5 text-white">
                  Create Your Backyard Resort
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <img src="/services/pool-decks/option 1.jpg" alt="Pool Deck Installation Mooresville NC" className="rounded-[40px] shadow-2xl w-full h-[500px] object-cover border-8 border-white" />
            </div>
          </div>
        </div>
      </header>

      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 text-black">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              <div className="prose prose-xl prose-slate max-w-none text-black">
                <h2 className="text-5xl font-extrabold text-black mb-10 leading-tight">Mastering Pool Deck Construction in East NC</h2>
                <p className="text-xl leading-relaxed text-black mb-10 text-justify">
                  A pool deck is more than just a surface; it's a critical safety feature and a centerpiece of outdoor entertainment. In the Mooresville area, where summer temperatures often exceed 90 degrees and winter freezes are common, your pool surround needs to be engineered for safety, comfort, and chemical resistance. At Mooresville Concrete Contractor, we specialize in high-performance concrete decks that stand up to the most demanding aquatic environments.
                </p>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">Phase 1: Structural Integrity & Drainage</h3>
                <p className="text-lg leading-relaxed text-black mb-8 text-justify">
                  The area surrounding a pool is prone to extreme moisture fluctuations. We begin by excavating down to stable sub-grade and installing a 6-inch compacted aggregate base. This allows for superior drainage and prevents the hydrostatic pressure that causes pool decks to lift or shift. We utilize a high-density 4,000 PSI concrete mix reinforced with both #3 rebar and polypropylene fibers to ensure that your deck remains a monolithic, stable structure even in the expansive clay soils of Mooresville County.
                </p>

                <div className="grid md:grid-cols-2 gap-12 my-16 text-black text-justify">
                  <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100">
                    <Thermometer className="w-10 h-10 text-black mb-6" />
                    <h4 className="text-2xl font-bold text-black mb-4">Cool-Touch Tech</h4>
                    <p className="text-black leading-relaxed">
                      We utilize specialized heat-reflective pigments and textures that keep your pool deck up to 20% cooler than standard concrete. This is essential for bare feet during intense July afternoons in Mooresville.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100 text-justify">
                    <Zap className="w-10 h-10 text-black mb-6" />
                    <h4 className="text-2xl font-bold text-black mb-4">Slip-Resistant Texture</h4>
                    <p className="text-black leading-relaxed">
                      Safety is our #1 priority. We apply specialized micro-textures and clear anti-slip additives to our sealers, providing a high-traction surface even when wet with splashed pool water.
                    </p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">Phase 2: Chemical & Salt Protection</h3>
                <p className="text-lg leading-relaxed text-black mb-8 text-justify">
                  Modern salt-water pool systems are incredibly popular in Mooresville, but they can be corrosive to standard concrete. We utilize silane-siloxane penetrating sealers that create a chemical-resistant barrier within the pores of the slab. This prevents salt-scaling and surface pitting, ensuring that your decorative finish remains vibrant and intact for years. Our sealers are also resistant to common pool chemicals like chlorine and muriatic acid.
                </p>

                <div className="bg-black text-white p-8 md:p-16 rounded-[60px] my-20 shadow-2xl relative overflow-hidden text-justify">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl text-justify"></div>
                  <h4 className="text-4xl font-bold mb-8 italic relative z-10 text-justify">The Mooresville Pool Side Standard</h4>
                  <div className="space-y-10 relative z-10 text-justify">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-start justify-center shrink-0">
                        <Waves className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xl font-bold mb-2">Advanced Drainage</p>
                        <p className="text-gray-400">Custom-sloped deck drains and perimeter channels to ensure zero standing water around your pool.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-start justify-center shrink-0">
                        <Anchor className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xl font-bold mb-2">Anchor Integration</p>
                        <p className="text-gray-400">Professional drilling and setting of anchors for pool covers, handrails, and diving boards.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-start justify-center shrink-0 text-justify">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xl font-bold mb-2 text-justify">Artisan Coping</p>
                        <p className="text-gray-400 text-justify">Seamless integration of cantilever or brick coping for a smooth, high-end edge around the pool's rim.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">Aesthetic Curation: From Slate to Travertine</h3>
                <p className="text-lg leading-relaxed text-black mb-8 text-justify">
                  A pool deck should be as beautiful as it is functional. We offer a wide range of decorative options, including stamped concrete that mimics Italian travertine, natural Mooresville fieldstone, and modern slate. Our "Spray-Deck" overlays are also a popular choice for existing pools, providing a slip-resistant, cool-touch surface that can be applied directly over old concrete to provide a complete resort-style makeover.
                </p>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">The Preparation Advantage</h3>
                <p className="text-lg leading-relaxed text-black mb-8 text-justify">
                  The longevity of a pool deck depends on the quality of the soil preparation around the pool shell. We work closely with pool installers to ensure that backfill is properly compacted before our stone base is installed. We also utilize specialized expansion joints that isolate the deck from the pool beam, preventing the tile-line cracking that occurs when decks and pool shells shift independently.
                </p>

                <div className="my-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center p-8 bg-gray-50 rounded-3xl">
                    <Sun className="w-12 h-12 mx-auto mb-4" />
                    <p className="font-bold text-lg mb-2 text-justify">Heat Guard</p>
                    <p className="text-sm text-gray-600 text-justify">Reflective technology for bare-foot comfort in NC summer heat.</p>
                  </div>
                  <div className="text-center p-8 bg-gray-50 rounded-3xl text-justify">
                    <ShieldCheck className="w-12 h-12 mx-auto mb-4" />
                    <p className="font-bold text-lg mb-2 text-justify">Chemical Armor</p>
                    <p className="text-sm text-gray-600 text-justify">Advanced sealers resistant to salt, chlorine, and UV rays.</p>
                  </div>
                  <div className="text-center p-8 bg-gray-50 rounded-3xl">
                    <Star className="w-12 h-12 mx-auto mb-4" />
                    <p className="font-bold text-lg mb-2 text-justify">Resort Grade</p>
                    <p className="text-sm text-gray-600 text-justify">Artisan finishes that turn your backyard into a destination.</p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">Why Choose Mooresville Concrete Contractor?</h3>
                <p className="text-lg leading-relaxed text-black mb-12 text-justify">
                  We are Mooresville's authority on luxury pool surrounds. From the hillside estates of Fountain City to new developments in Oak Ridge, we have built a reputation for delivering the highest-quality aquatic concrete work in East NC. Our team handles everything from structural engineering and drainage design to final decorative sealing. When you choose us, you're investing in a pool deck that will provide decades of safe, beautiful summer memories.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1" id="contact">
              <div className="sticky top-32">
                <LeadForm title="Pool Deck Quote" />
                
                <div className="mt-12 space-y-8 p-8 bg-gray-50 rounded-[40px] border border-gray-100 text-black">
                  <h4 className="text-2xl font-bold text-black">Pool Side Insights</h4>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <MapPin className="w-6 h-6 text-black shrink-0" />
                      <p className="text-sm leading-relaxed text-justify"><strong>NC Summer Tech:</strong> We recommend our "Cool-Step" additive for any deck facing direct Southern sun to prevent surface overheating.</p>
                    </div>
                    <div className="flex gap-4">
                      <Droplets className="w-6 h-6 text-black shrink-0" />
                      <p className="text-sm leading-relaxed text-justify"><strong>Salt-Safe Mix:</strong> We use a specialized low-porosity mix design for all decks surrounding salt-water pool systems.</p>
                    </div>
                    <div className="flex gap-4">
                      <Construction className="w-6 h-6 text-black shrink-0" />
                      <p className="text-sm leading-relaxed text-justify"><strong>Zero-Trip Edge:</strong> Our precision finishing ensures perfectly flush transitions between the deck and pool coping.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CityServiceLinks serviceSlug="pool-decks" serviceName="Pool Decks" />
    </div>
  );
};

export default PoolDecks;
