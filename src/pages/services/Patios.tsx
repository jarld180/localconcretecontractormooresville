import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle, Star, ChevronRight, HardHat, Droplets, Ruler, Truck, Shield, Clock, MapPin, Zap, Construction, Waves, Gauge, Lightbulb, Recycle, Palette, Flame, Sun, Sparkles, Thermometer, Anchor, Accessibility, Mountain, TreePine, Info } from 'lucide-react';
import LeadForm from '../../components/LeadForm';
import CityServiceLinks from '../../components/CityServiceLinks';

const Patios: React.FC = () => {
  return (
    <div className="bg-white">
      <header className="pt-20 pb-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 relative z-10 text-black">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div data-aos="fade-right">
              <span className="inline-block px-4 py-1.5 bg-white rounded-full text-sm font-bold tracking-wider uppercase text-black mb-6 border border-gray-200">Mooresville, NC Patio Artisans</span>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8 text-black">Designer <span className="text-black">Stamped Patios</span> in Mooresville.</h1>
              <p className="text-xl text-black mb-10 leading-relaxed text-justify">
                A patio should be an extension of your indoor living space—a seamless transition from the comfort of your home to the beauty of the Mooresville landscape. At Mooresville Concrete Contractor, we treat every patio as a work of art, combining structural permanence with world-class decorative finishes.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#contact" className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-center hover:bg-gray-800 transition-all flex items-start justify-center group shadow-xl shadow-black/5">
                  Design Your Outdoor Oasis
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <img src="/services/patios/option 1.jpg" alt="Stamped Concrete Patio Mooresville NC" className="rounded-[40px] shadow-2xl w-full h-[500px] object-cover border-8 border-white" />
            </div>
          </div>
        </div>
      </header>

      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 text-black">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              <div className="prose prose-xl prose-slate max-w-none text-black">
                <h2 className="text-5xl font-extrabold text-black mb-10 leading-tight">Elite Decorative Concrete in East NC</h2>
                <p className="text-xl leading-relaxed text-black mb-10 text-justify">
                  Building a stamped concrete patio in Mooresville requires a delicate balance of artistic vision and technical mastery. The local soil, often high in heavy clay, requires a robust structural base, while the intense NC sun and humidity demand high-performance decorative products. At Mooresville Concrete Contractor, we specialize in creating custom outdoor living environments that mimic natural stone, slate, and exotic hardwoods while providing the durability and low maintenance of reinforced concrete.
                </p>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">Phase 1: Structural Curation</h3>
                <p className="text-lg leading-relaxed text-black mb-8 text-justify">
                  Unlike many decorative contractors who focus only on the surface, we begin with the structural foundation. We excavate the area to a minimum of 8 inches, installing a 6-inch compacted stone base to prevent the differential settlement that causes decorative slabs to crack. We utilize a specialized 4,000 PSI concrete mix with a higher cement content and micro-fiber reinforcement, ensuring that your patio remains as stable as it is beautiful.
                </p>

                <div className="grid md:grid-cols-2 gap-12 my-16 text-black">
                  <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100">
                    <Palette className="w-10 h-10 text-black mb-6" />
                    <h4 className="text-2xl font-bold text-black mb-4">Integral Color Tech</h4>
                    <p className="text-black leading-relaxed text-justify">
                      We use integral coloring—mixing the pigment throughout the entire slab—not just on the surface. This ensures that even if the concrete is chipped, the color remains consistent, providing a lifelong aesthetic baseline.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100">
                    <Sparkles className="w-10 h-10 text-black mb-6" />
                    <h4 className="text-2xl font-bold text-black mb-4">Artisan Texturing</h4>
                    <p className="text-black leading-relaxed text-justify">
                      Our stamping mats are sourced from world-class manufacturers, featuring high-relief textures that perfectly mimic natural materials. We utilize a secondary "release" color to add visual depth and antiquing effects.
                    </p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">Phase 2: The Stamping Process</h3>
                <p className="text-lg leading-relaxed text-black mb-8 text-justify">
                  The window for perfect stamping is measured in minutes, not hours. Our experienced crews work in synchronized teams to apply the texture while the concrete is at the ideal "plastic" state. This precision timing ensures that every square inch of your patio features a consistent, deep texture without the "crusting" or shallow imprints common in amateur work. We offer a variety of patterns, including Ashlar Slate, Random Stone, and our signature Rocky Hill Wood Plank finish.
                </p>

                <div className="bg-black text-white p-8 md:p-16 rounded-[60px] my-20 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                  <h4 className="text-4xl font-bold mb-8 italic relative z-10 text-justify">Luxury Outdoor Living Standards</h4>
                  <div className="space-y-10 relative z-10 text-justify">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-start justify-center shrink-0">
                        <Sun className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xl font-bold mb-2">UV-Stable Pigments</p>
                        <p className="text-gray-400">We utilize high-grade iron oxide pigments that are chemically resistant to fading, even under the intense direct sun of East NC.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-start justify-center shrink-0">
                        <Droplets className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xl font-bold mb-2">Multi-Stage Sealing</p>
                        <p className="text-gray-400">Our patios receive two coats of high-solids solvent sealer, protecting against water penetration, salt, and staining.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-start justify-center shrink-0">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xl font-bold mb-2">Anti-Slip Safety</p>
                        <p className="text-gray-400">We incorporate specialized clear additives into our final sealer coat to provide a safe, slip-resistant surface when wet.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">Advanced Features: Fire & Water</h3>
                <p className="text-lg leading-relaxed text-black mb-8 text-justify">
                  A modern Mooresville patio is often the base for additional luxury features. We specialize in the structural integration of built-in fire pits, outdoor kitchens, and seating walls. By pouring these elements as part of a unified structural system, we ensure they won't shift or settle independently of the patio slab. We also offer specialized "cool-touch" textures for sun-exposed areas, keeping your outdoor space comfortable even in the height of July.
                </p>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">Longevity & Protection</h3>
                <p className="text-lg leading-relaxed text-black mb-8 text-justify">
                  The secret to a lifelong decorative patio is the maintenance. While traditional pavers will shift, grow weeds, and harbor ant colonies, our reinforced monolithic slabs provide a seamless, weed-free environment. We use specialized expansion joint logic, cutting our control joints along the natural lines of the pattern to make them virtually invisible. This allows the concrete to breathe and move during temperature changes without disrupting the visual flow of the artwork.
                </p>

                <div className="my-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center p-8 bg-gray-50 rounded-3xl">
                    <Flame className="w-12 h-12 mx-auto mb-4" />
                    <p className="font-bold text-lg mb-2 text-justify">Fire Integration</p>
                    <p className="text-sm text-gray-600 text-justify">Structural footers designed for fire pits and outdoor fireplaces.</p>
                  </div>
                  <div className="text-center p-8 bg-gray-50 rounded-3xl">
                    <Waves className="w-12 h-12 mx-auto mb-4" />
                    <p className="font-bold text-lg mb-2 text-justify">Drainage Experts</p>
                    <p className="text-sm text-gray-600 text-justify">Laser-leveled grading ensures zero standing water on your patio.</p>
                  </div>
                  <div className="text-center p-8 bg-gray-50 rounded-3xl">
                    <ShieldCheck className="w-12 h-12 mx-auto mb-4" />
                    <p className="font-bold text-lg mb-2 text-justify">Low Maintenance</p>
                    <p className="text-sm text-gray-600 text-justify">A simple re-seal every 3-5 years keeps it looking brand new.</p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">Why Choose Mooresville Concrete Contractor?</h3>
                <p className="text-lg leading-relaxed text-black mb-12 text-justify">
                  We are Mooresville's authority on decorative concrete artistry. From the historic estates of Downtown Mooresville to the modern backyards of Berkeley Manor, we have built a reputation for excellence through technical precision and unmatched creative vision. Our team manages every detail, from design curation and permitting to the final high-gloss seal. When you choose us, you're not just getting a patio—you're getting a permanent upgrade to your lifestyle.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1" id="contact">
              <div className="sticky top-32">
                <LeadForm title="Patio Quote" />
                
                <div className="mt-12 space-y-8 p-8 bg-gray-50 rounded-[40px] border border-gray-100 text-black">
                  <h4 className="text-2xl font-bold text-black">Artisan Insights</h4>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <MapPin className="w-6 h-6 text-black shrink-0" />
                      <p className="text-sm leading-relaxed text-justify"><strong>Local Style:</strong> Our "Appalachian Valley Slate" pattern is our most popular choice, perfectly complementing Mooresville's natural mountain aesthetics.</p>
                    </div>
                    <div className="flex gap-4">
                      <Palette className="w-6 h-6 text-black shrink-0" />
                      <p className="text-sm leading-relaxed text-justify"><strong>Custom Staining:</strong> We offer hand-staining services for individual "stones" in the pattern to provide the most realistic finish possible.</p>
                    </div>
                    <div className="flex gap-4">
                      <Construction className="w-6 h-6 text-black shrink-0" />
                      <p className="text-sm leading-relaxed text-justify"><strong>Reinforced Edge:</strong> We thicken the perimeter of every patio slab to 8 inches to ensure the edges never settle or break.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CityServiceLinks serviceSlug="patios" serviceName="Stamped Patios" />
    </div>
  );
};

export default Patios;
