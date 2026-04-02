import React from 'react';
import { useDesign } from '../../context/DesignContext';
import { ArrowRight, ShieldCheck, CheckCircle, Star, ChevronRight, HardHat, Droplets, Ruler, Truck, Shield, Clock, MapPin, Zap, Construction, Waves, Gauge, Lightbulb, Recycle, Palette, Flame, Sun, Sparkles, Thermometer, Anchor, Accessibility, Mountain, TreePine, Info } from 'lucide-react';
import LeadForm from '../../components/LeadForm';
import CityServiceLinks from '../../components/CityServiceLinks';

const Driveways: React.FC = () => {
  const { design } = useDesign();

  if (design === 2) {
    return (
      <div className="font-playfair bg-white overflow-x-hidden pt-20">
        <section className="px-8 py-20 text-center border-b border-gray-100">
          <span className="text-[10px] uppercase tracking-[0.5em] text-black mb-8 block">Project • Driveways</span>
          <h1 className="text-6xl font-bold text-black mb-12 leading-tight italic">Structural Permanence.</h1>
          <p className="text-xl text-black max-w-2xl mx-auto font-light leading-relaxed">
            Durable, high-end concrete entryways engineered for the unique soil dynamics of East NC.
          </p>
        </section>
        <section className="max-w-7xl mx-auto px-8 py-32 grid lg:grid-cols-3 gap-32">
          <div className="lg:col-span-2 space-y-16 text-black">
            <h2 className="text-4xl font-bold text-black italic">Engineering for Life.</h2>
            <p className="text-lg text-black font-light leading-relaxed text-justify">
              Every driveway we install in Mooresville is a masterpiece of geotechnical engineering. We begin with a deep analysis of the local East NC soil, which is notorious for its high clay content and expansive nature. Standard concrete pours often fail within a few years due to the "shrink-swell" cycles of this clay. Our solution involves a multi-layered approach: deep excavation, a 6-inch compacted ABC stone base, and a high-density concrete mix reinforced with both grade-60 steel rebar and synthetic fibers. This ensures that your driveway doesn't just look good on day one—it remains a structural asset for your property for the next 40 to 50 years.
            </p>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold italic">The Art of the Finish</h3>
              <p className="text-lg text-black font-light leading-relaxed text-justify">
                Beyond the structural integrity, we focus on the aesthetic value of your home. A driveway is the literal red carpet to your residence. We offer signature "picture frame" borders that provide a sophisticated, architectural look. Our broom finishes are applied with precise timing to ensure maximum slip resistance without sacrificing the clean, uniform appearance that high-end homes in neighborhoods like Seymour Johnson and Berkeley Manor demand. We manage all aspects of the project, from initial grading and local Mooresville permitting to the final high-solids solvent sealing that protects your investment from oil spills, UV damage, and the intense humidity of NC summers.
              </p>
            </div>
          </div>
          <div className="lg:col-span-1">
            <LeadForm title="Inquiry" />
          </div>
        </section>
        <CityServiceLinks serviceSlug="driveways" serviceName="Concrete Driveways" />
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden bg-white">
      <header className="pt-20 pb-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div data-aos="fade-right">
              <span className="inline-block px-4 py-1.5 bg-white rounded-full text-sm font-bold tracking-wider uppercase text-black mb-6 border border-gray-200">Mooresville, NC Driveway Specialists</span>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8 text-black">
                Durable, High-End <span className="text-black">Concrete Driveways</span>.
              </h1>
              <p className="text-xl text-black mb-10 leading-relaxed text-justify">
                Your driveway is the first impression your property makes. At Mooresville Concrete Contractor, we don't just pour concrete; we build reinforced, architecturally significant entryways designed to handle heavy loads, extreme NC weather, and the test of time.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#contact" className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-center hover:bg-gray-800 transition-all flex items-start justify-center group shadow-xl shadow-black/5">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <img src="/services/driveways/option 1.webp" alt="Custom Concrete Driveway Mooresville NC" className="rounded-[40px] shadow-2xl w-full h-[500px] object-cover border-8 border-white" />
            </div>
          </div>
        </div>
      </header>

      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <div className="prose prose-xl prose-slate max-w-none text-black">
                <h2 className="text-5xl font-extrabold text-black mb-10 leading-tight">The Definitive Guide to Mooresville Driveway Construction</h2>
                
                <p className="text-xl leading-relaxed text-black mb-10 text-justify">
                  Building a concrete driveway in East NC requires more than just a truck and a crew. It requires a deep understanding of the local environment. Mooresville sits in a unique geographic position where the soil is dominated by heavy, expansive red clay. This clay is notorious among engineers for its "shrink-swell" capacity—expanding when wet and shrinking during dry spells. This constant movement is the #1 cause of driveway cracking and failure in NC. 
                </p>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16">Phase 1: Geotechnical Foundation & Sub-Base</h3>
                <p className="text-lg leading-relaxed text-black mb-8 text-justify">
                  Most contractors cut corners where you can't see them: the base. We do the opposite. Our process begins with a 6-to-8 inch excavation of the existing topsoil and organic material. We then install a 6-inch layer of compacted ABC (Aggregate Base Course) stone. This stone base is mechanically compacted to a 98% Proctor density, creating a stable, non-expansive platform that bridges the gaps in the underlying clay. This is the difference between a driveway that lasts 10 years and one that lasts 50.
                </p>

                <div className="grid md:grid-cols-2 gap-12 my-16">
                  <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100">
                    <Ruler className="w-10 h-10 text-black mb-6" />
                    <h4 className="text-2xl font-bold text-black mb-4 text-justify">Precision Grading</h4>
                    <p className="text-black leading-relaxed text-justify">
                      Water is the enemy of concrete. We use advanced laser-leveling technology to ensure a minimum 2% grade. This directs all surface runoff away from your garage and home foundation, preventing the hydrostatic pressure that causes basement leaks and slab heaving.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100">
                    <ShieldCheck className="w-10 h-10 text-black mb-6" />
                    <h4 className="text-2xl font-bold text-black mb-4">Steel Reinforcement</h4>
                    <p className="text-black leading-relaxed text-justify">
                      While some use thin wire mesh, we set a grid of #3 (3/8") grade-60 rebar on 18-inch centers. The rebar is lifted onto high-density plastic chairs to ensure it stays in the center of the slab—where it provides the most structural tension strength—rather than sinking to the bottom.
                    </p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">Phase 2: The Mooresville Mix Design</h3>
                <p className="text-lg leading-relaxed text-black mb-8 text-justify">
                  Not all concrete is created equal. For Mooresville driveways, we specify a custom 4,000 PSI mix with a low water-to-cement ratio. We infuse this mix with synthetic micro-fibers. These millions of tiny fibers act as internal "mini-rebar," catching micro-cracks before they become visible surface cracks. We also incorporate air-entrainment chemicals, which create billions of microscopic bubbles in the concrete. This allows the slab to expand and contract during NC's winter freeze-thaw cycles without scaling or spalling.
                </p>

                <div className="bg-black text-white p-8 md:p-16 rounded-[60px] my-20 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                  <h4 className="text-4xl font-bold mb-8 italic relative z-10 text-justify">Engineered for the 50-Year Lifecycle</h4>
                  <div className="space-y-10 relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-start justify-center shrink-0">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xl font-bold mb-2">High-Density Mix</p>
                        <p className="text-gray-400">4,000 PSI minimum compressive strength with fiber-mesh infusion for ultimate crack resistance.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-start justify-center shrink-0">
                        <Droplets className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xl font-bold mb-2">Advanced Curing</p>
                        <p className="text-gray-400">We apply a chemical curing compound immediately after finishing to lock in moisture and maximize hydration.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-start justify-center shrink-0">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xl font-bold mb-2">Vapor Barrier</p>
                        <p className="text-gray-400">Standard 10-mil poly vapor barrier to prevent moisture from wicking up into the slab from the ground.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">Phase 3: Architectural Aesthetics & Curb Appeal</h3>
                <p className="text-lg leading-relaxed text-black mb-8 text-justify">
                  A driveway should complement your home's architecture. We offer several signature finishes that are popular in Mooresville's premier neighborhoods:
                </p>
                <ul className="space-y-6 my-12">
                  <li className="flex items-start gap-4">
                    <Star className="w-6 h-6 text-black shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-xl block mb-1">Picture Frame Border</span>
                      <p className="text-black">We tool a smooth, 6-inch troweled border around every slab section. This creates a high-end, masonry-style look that makes a standard broom finish look like a custom installation.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Star className="w-6 h-6 text-black shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-xl block mb-1">Deep-Textured Broom Finish</span>
                      <p className="text-black">Essential for Mooresville's hilly terrain. Our specialized brooming technique provides maximum traction for vehicles during wet or icy NC conditions while maintaining a beautiful, uniform texture.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Star className="w-6 h-6 text-black shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-xl block mb-1">Expansion Joint Logic</span>
                      <p className="text-black">We calculate thermal expansion rates to place control joints at precise intervals. These joints aren't just for function—they are aligned with the home's features to create pleasing geometric lines.</p>
                    </div>
                  </li>
                </ul>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">Long-Term Maintenance & Protection</h3>
                <p className="text-lg leading-relaxed text-black mb-8 text-justify">
                  To ensure your driveway maintains its "new" look, we finish every project with a high-solids, UV-stable solvent sealer. This sealer penetrates the pores of the concrete, creating a hydrophobic barrier. Water, oil, and automotive fluids will bead up on the surface rather than soaking in and causing permanent stains. This also protects the color of the concrete from the bleaching effects of the intense Southern sun. We recommend a simple re-sealing every 3-5 years to keep the protection at its peak.
                </p>

                <div className="my-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center p-8 bg-gray-50 rounded-3xl">
                    <Truck className="w-12 h-12 mx-auto mb-4" />
                    <p className="font-bold text-lg mb-2 text-justify">Heavy Load Ready</p>
                    <p className="text-sm text-gray-600 text-justify">Designed for delivery trucks and multiple SUVs.</p>
                  </div>
                  <div className="text-center p-8 bg-gray-50 rounded-3xl text-justify">
                    <Shield className="w-12 h-12 mx-auto mb-4" />
                    <p className="font-bold text-lg mb-2 text-justify">Weather Guard</p>
                    <p className="text-sm text-gray-600 text-justify">Engineered for NC freeze-thaw and humidity cycles.</p>
                  </div>
                  <div className="text-center p-8 bg-gray-50 rounded-3xl">
                    <Clock className="w-12 h-12 mx-auto mb-4" />
                    <p className="font-bold text-lg mb-2 text-justify">Fast Completion</p>
                    <p className="text-sm text-gray-600 text-justify">Most standard residential driveways completed in 3-5 days.</p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">Why Choose Mooresville Concrete Contractor?</h3>
                <p className="text-lg leading-relaxed text-black mb-12 text-justify">
                  We are a locally owned and operated team that understands Mooresville's building codes and neighborhood standards better than anyone. We handle the entire permitting process with the City of Mooresville and Mooresville County, including all 811 utility locates and mandatory inspections. Our crews are uniformed, professional, and we maintain a clean job site from day one to final walkthrough. When you choose us, you are choosing a partner dedicated to adding permanent value to your home.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1" id="contact">
              <div className="sticky top-32">
                <LeadForm title="Driveway Quote" />
                
                <div className="mt-12 space-y-8 p-8 bg-gray-50 rounded-[40px] border border-gray-100">
                  <h4 className="text-2xl font-bold text-black">Local Expert Insights</h4>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <MapPin className="w-6 h-6 text-black shrink-0" />
                      <p className="text-sm leading-relaxed text-justify"><strong>Mooresville Clay:</strong> We excavate deeper than our competitors to ensure the expansive red clay doesn't buckle your new driveway.</p>
                    </div>
                    <div className="flex gap-4">
                      <Construction className="w-6 h-6 text-black shrink-0" />
                      <p className="text-sm leading-relaxed text-justify"><strong>Steel Over Fiber:</strong> Many use fiber only. We use both. Rebar provides structural tension, while fiber prevents surface crazing.</p>
                    </div>
                    <div className="flex gap-4">
                      <HardHat className="w-6 h-6 text-black shrink-0" />
                      <p className="text-sm leading-relaxed text-justify"><strong>Mooresville Permits:</strong> We handle all city and county documentation to ensure your project is 100% compliant.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CityServiceLinks serviceSlug="driveways" serviceName="Concrete Driveways" />
    </div>
  );
};

export default Driveways;
