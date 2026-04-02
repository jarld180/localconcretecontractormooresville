import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle, Star, ChevronRight, HardHat, Droplets, Ruler, Truck, Shield, Clock, MapPin, Zap, Construction, Waves, Gauge, Lightbulb, Recycle, Palette, Flame, Sun, Sparkles, Thermometer, Anchor, Accessibility, Mountain, TreePine, Info } from 'lucide-react';
import LeadForm from '../../components/LeadForm';
import CityServiceLinks from '../../components/CityServiceLinks';

const Foundations: React.FC = () => {
  return (
    <div className="bg-white">
      <header className="pt-20 pb-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 relative z-10 text-black">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div data-aos="fade-right">
              <span className="inline-block px-4 py-1.5 bg-white rounded-full text-sm font-bold tracking-wider uppercase text-black mb-6 border border-gray-200 text-black">Structural Integrity First</span>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8 text-black">Foundation Experts in <span className="text-black">Mooresville, NC.</span></h1>
              <p className="text-xl text-black mb-10 leading-relaxed text-justify">
                The strength of your building starts with the slab. We provide precision-engineered foundations for new homes and commercial structures in East NC, utilizing advanced geotechnical science to ensure lifelong structural permanence.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#contact" className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-center hover:bg-gray-800 transition-all flex items-start justify-center group shadow-xl shadow-black/5">
                  Get Your Foundation Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <img src="/services/foundations/option 1.jpg" alt="Foundation Pouring Mooresville NC" className="rounded-[40px] shadow-2xl w-full h-[500px] object-cover border-8 border-white" />
            </div>
          </div>
        </div>
      </header>

      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 text-black">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              <div className="prose prose-xl prose-slate max-w-none text-black">
                <h2 className="text-5xl font-extrabold text-black mb-10 leading-tight">Elite Foundation Engineering in Mooresville County</h2>
                <p className="text-xl leading-relaxed text-black mb-10 text-justify">
                  Every structure is only as strong as its foundation. In the Mooresville region, where soil composition can vary significantly from dense red clay to sandy loam and karst limestone features, achieving a stable, perfectly level slab requires more than just pouring concrete. It requires a comprehensive geotechnical strategy. At Mooresville Concrete Contractor, we specialize in delivering the most reliable structural concrete solutions in NC.
                </p>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">Geotechnical Excellence & Site Preparation</h3>
                <p className="text-lg leading-relaxed text-black mb-8 text-justify">
                  We go beyond standard site prep by achieving 98% Proctor density on our sub-base compaction. This ensures that the weight of your building is distributed evenly, preventing the differential settlement that leads to structural cracks and costly future repairs. Our team carefully analyzes the topography of East NC to design drainage systems that handle the region's high annual rainfall, keeping your foundation dry and secure for decades.
                </p>

                <div className="grid md:grid-cols-2 gap-12 my-16 text-black">
                  <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100">
                    <Ruler className="w-10 h-10 text-black mb-6" />
                    <h4 className="text-2xl font-bold text-black mb-4 text-justify">Karst Topography Management</h4>
                    <p className="text-black leading-relaxed text-justify">
                      Mooresville is known for its limestone karst features. We utilize specialized foundation designs, including thickened slabs and reinforced footers, to mitigate the risks associated with potential sinkholes and underground voids.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-100">
                    <Droplets className="w-10 h-10 text-black mb-6" />
                    <h4 className="text-2xl font-bold text-black mb-4">Structural Protection</h4>
                    <p className="text-black leading-relaxed text-justify">
                      We incorporate high-grade 15-mil poly vapor barriers as standard practice, protecting your structure from the high water tables of East NC. This prevents moisture from wicking into the slab, protecting your interior flooring from dampness and mold.
                    </p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">Precision Concrete Mix Designs</h3>
                <p className="text-lg leading-relaxed text-black mb-8 text-justify">
                  The chemistry of your foundation is just as important as the physics. We specify custom high-strength concrete mixes, typically starting at 4,000 PSI, with specialized additives to reduce shrinkage and improve workability. For homes in mountain-side locations or areas with steep slopes, we utilize specialized monolithic pours that anchor the structure directly into the stable soil layers.
                </p>

                <div className="bg-black text-white p-8 md:p-16 rounded-[60px] my-20 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl text-justify"></div>
                  <h4 className="text-4xl font-bold mb-8 italic relative z-10 text-justify">Mooresville Foundation Benchmarks</h4>
                  <div className="space-y-10 relative z-10 text-justify">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-start justify-center shrink-0">
                        <Construction className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xl font-bold mb-2">Laser-Level Tolerance</p>
                        <p className="text-gray-400">We achieve a 1/8-inch leveling tolerance across the entire slab, ensuring your framing and flooring crews have a perfect canvas.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-start justify-center shrink-0">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xl font-bold mb-2">Steel-Reinforced Grid</p>
                        <p className="text-gray-400">We utilize #4 or #5 rebar grids, never settling for thin wire mesh, to provide maximum structural tension strength.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-start justify-center shrink-0">
                        <Waves className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xl font-bold mb-2">Hydraulic Drainage</p>
                        <p className="text-gray-400">Integrated French drains and gravel perimeter systems to manage the intense groundwater of East NC.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">The Life-Cycle of a Quality Foundation</h3>
                <p className="text-lg leading-relaxed text-black mb-8 text-justify">
                  A foundation should last as long as the building it supports. We focus on the "hydration window"—the critical first 7 days after a pour—by applying high-end curing compounds that lock in moisture and allow the concrete to reach its maximum chemical strength. This prevents the surface dusting and micro-cracking common in lower-tier installations.
                </p>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">Commercial & Industrial Foundations</h3>
                <p className="text-lg leading-relaxed text-black mb-8 text-justify">
                  Beyond residential projects, we provide specialized foundations for Mooresville's growing commercial sector. From post-tensioned slabs for warehouse environments to complex multi-story footers, our engineering team manages the entire process from soil testing to final certification. We understand the tight schedules of modern development and maintain a 99% on-time pour rate.
                </p>

                <div className="my-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-justify">
                  <div className="text-center p-8 bg-gray-50 rounded-3xl">
                    <Shield className="w-12 h-12 mx-auto mb-4" />
                    <p className="font-bold text-lg mb-2 text-justify">Certified Slabs</p>
                    <p className="text-sm text-gray-600 text-justify">Every structural pour meets or exceeds ACI standards.</p>
                  </div>
                  <div className="text-center p-8 bg-gray-50 rounded-3xl">
                    <HardHat className="w-12 h-12 mx-auto mb-4" />
                    <p className="font-bold text-lg mb-2 text-justify">Expert Supervision</p>
                    <p className="text-sm text-gray-600 text-justify">On-site project management for every structural project.</p>
                  </div>
                  <div className="text-center p-8 bg-gray-50 rounded-3xl">
                    <Star className="w-12 h-12 mx-auto mb-4 text-justify" />
                    <p className="font-bold text-lg mb-2">Premium Finish</p>
                    <p className="text-sm text-gray-600 text-justify">Smooth, mirror-finished slabs ready for any flooring type.</p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-black mb-6 mt-16 text-justify">Why Choose Mooresville Concrete Contractor for Your Foundation?</h3>
                <p className="text-lg leading-relaxed text-black mb-12 text-justify">
                  We are Mooresville's authority on structural concrete. We manage all Mooresville County and City of Mooresville inspections, coordinate with local utility providers for 811 locates, and provide detailed as-built documentation for your records. Our commitment to geotechnical science and artisan execution means your project starts on a solid base. When you build with us, you are building for generations.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1" id="contact">
              <div className="sticky top-32">
                <LeadForm title="Foundation Quote" />
                
                <div className="mt-12 space-y-8 p-8 bg-gray-50 rounded-[40px] border border-gray-100">
                  <h4 className="text-2xl font-bold text-black">Geotechnical Insights</h4>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <MapPin className="w-6 h-6 text-black shrink-0 text-justify" />
                      <p className="text-sm leading-relaxed text-justify"><strong>Karst Zones:</strong> We understand the limestone geology of Mooresville and design footers that bridge potential voids.</p>
                    </div>
                    <div className="flex gap-4">
                      <ShieldCheck className="w-6 h-6 text-black shrink-0 text-justify" />
                      <p className="text-sm leading-relaxed text-justify"><strong>Heavy Steel:</strong> We use higher rebar density than industry standard to ensure structural longevity.</p>
                    </div>
                    <div className="flex gap-4 text-justify">
                      <Construction className="w-6 h-6 text-black shrink-0" />
                      <p className="text-sm leading-relaxed text-justify"><strong>Mooresville Codes:</strong> Our team manages all building permits and structural certifications for your peace of mind.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CityServiceLinks serviceSlug="foundations" serviceName="Structural Foundations" />
    </div>
  );
};

export default Foundations;
