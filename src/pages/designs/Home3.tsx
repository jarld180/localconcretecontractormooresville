import React, { useEffect } from 'react';
import { ArrowRight, ShieldCheck, MapPin, Star, ChevronRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import LeadForm from '../../components/LeadForm';
import Logo from '../../components/Logo';

interface HomeProps {
  cityName?: string;
}

const Home3: React.FC<HomeProps> = ({ cityName = "Mooresville" }) => {
  const mapUrl = cityName === "Mooresville" 
    ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.1!2d-80.7128!3d35.1167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8854210909090909%3A0x8854210909090909!2sMooresville%2C%20NC!5e0!3m2!1sen!2sus!4v1704576000000!5m2!1sen!2sus"
    : `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000!2d-80.7!3d35.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8854000000000000%3A0x0000000000000000!2s${encodeURIComponent(cityName)}%2C%20NC!5e0!3m2!1sen!2sus!4v1704576000000!5m2!1sen!2sus`;

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>{cityName} Concrete | #1 Concrete Contractors in {cityName}, NC</title>
        <meta name="description" content={`Top-rated concrete contractors in ${cityName}, NC. Specializing in driveways, foundations, and decorative patios for residential and commercial projects in ${cityName} and surrounding areas.`} />
      </Helmet>
      {/* Background Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="floating-shape bg-blue-100 w-[500px] h-[500px] -top-20 -left-20 animate-float"></div>
        <div className="floating-shape bg-gray-100 w-[600px] h-[600px] top-1/2 -right-20 animate-float" style={{ animationDelay: '-2s' }}></div>
        <div className="floating-shape bg-gray-50 w-[400px] h-[400px] bottom-0 left-1/3 animate-float" style={{ animationDelay: '-4s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-20 lg:pt-24 lg:pb-32 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div data-aos="fade-right" data-aos-duration="1000">
              <span className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-sm font-bold tracking-wider uppercase text-black mb-6">Expert {cityName}, NC Concrete Contractors</span>
              <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.1] mb-8 gradient-text-animated">
                Premium Concrete Services in {cityName}, NC.
              </h1>
              <p className="text-xl text-black mb-10 leading-relaxed max-w-lg">
                Premium concrete services for residential and commercial projects. From decorative patios to heavy-duty driveways, we deliver excellence that lasts a lifetime.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#contact" className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-center hover:bg-gray-800 transition-all flex items-start justify-center group">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link to={cityName === "Mooresville" ? "/driveways" : `/${cityName.toLowerCase().replace(" ", "-")}/driveways`} className="bg-white border-2 border-black text-black px-8 py-4 rounded-2xl font-bold text-center hover:border-black transition-all">
                  Our Work
                </Link>
              </div>
            </div>
            <div className="relative" data-aos="fade-left" data-aos-duration="1000">
              <div className="absolute -inset-4 bg-gray-100 rounded-3xl -rotate-2"></div>
              <img src="/services/driveways/option 2.png" alt="Modern Concrete Driveway" className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6" data-aos="fade-up">Precision Engineered Concrete for {cityName}</h2>
            <p className="text-xl text-black" data-aos="fade-up" data-aos-delay="100">
              We specialize in high-performance concrete solutions tailored for the unique soil conditions and climate of Eastern North Carolina.
            </p>
          </div>

          <div className="space-y-32">
            {/* Driveways */}
            <div className="grid md:grid-cols-2 gap-16 items-start" data-aos="fade-up">
              <div className="order-2 md:order-1">
                <div className="flex items-start space-x-3 mb-6">
                  <Logo className="text-black w-8 h-8" />
                  <h3 className="text-3xl font-bold">Concrete Driveways</h3>
                </div>
                <p className="text-black text-lg leading-relaxed mb-6">
                  Our premium concrete driveways are engineered to withstand the expansive clay soils of Wayne County. We go beyond industry standards by utilizing a high-density mix reinforced with synthetic fibers, ensuring a 30-50 year lifecycle for your {cityName} home.
                </p>
                <p className="text-black text-lg leading-relaxed mb-8">
                  From traditional broom finishes to sophisticated "picture frame" borders, we enhance curb appeal in neighborhoods like Berkeley Manor and Seymour Johnson with architectural precision and expert water management.
                </p>
                <div className="bg-blue-600/5 p-8 rounded-[32px] mb-8 border border-blue-600/5">
                  <h4 className="font-bold mb-3 flex items-start text-black"><CheckCircle className="w-5 h-5 mr-2" /> The {cityName} Engineering Standard</h4>
                  <p className="text-black text-sm leading-relaxed">
                    We utilize a 6-inch compacted stone base (ABC stone) to prevent the "shrink-swell" cracking common in NC red clay. Our laser-level grading ensures 100% water runoff protection for your foundation.
                  </p>
                </div>
                <Link to={cityName === "Mooresville" ? "/driveways" : `/${cityName.toLowerCase().replace(" ", "-")}/driveways`} className="font-bold flex items-start group text-black">
                  Explore Driveway Solutions <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="order-1 md:order-2 overflow-hidden rounded-[40px] shadow-2xl">
                <img src="/services/driveways/option 2.png" alt="Concrete Driveway Mooresville NC" className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

            {/* Foundations */}
            <div className="grid md:grid-cols-2 gap-16 items-start" data-aos="fade-up">
              <div className="overflow-hidden rounded-[40px] shadow-2xl">
                <img src="/services/foundations/option 2.jpg" alt="Foundations Mooresville NC" className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div>
                <div className="flex items-start space-x-3 mb-6">
                  <ShieldCheck className="text-black w-8 h-8" />
                  <h3 className="text-3xl font-bold">Structural Foundations</h3>
                </div>
                <p className="text-black text-lg leading-relaxed mb-6">
                  The strength of your building starts with the slab. We provide precision-engineered foundations for custom homes in Kinston and Wilson, utilizing industrial-grade geotechnical preparation to achieve 98% Proctor density.
                </p>
                <p className="text-black text-lg leading-relaxed mb-8">
                  Our foundation services include slab-on-grade, monolithic pours, and specialized underpinning for historic restorations in Downtown {cityName}. We manage all Wayne County inspections to ensure your project stays on schedule.
                </p>
                <div className="bg-gray-900 text-white p-8 rounded-[32px] mb-8 shadow-xl">
                  <h4 className="font-bold mb-3 flex items-start text-white"><CheckCircle className="w-5 h-5 mr-2 text-green-400" /> Structural Protection</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We incorporate high-grade poly vapor barriers as standard practice, protecting your structure from the high water tables of Eastern NC.
                  </p>
                </div>
                <Link to={cityName === "Mooresville" ? "/foundations" : `/${cityName.toLowerCase().replace(" ", "-")}/foundations`} className="font-bold flex items-start group text-black">
                  Get Foundation Expertise <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Patios */}
            <div className="grid md:grid-cols-2 gap-16 items-start" data-aos="fade-up">
              <div className="order-2 md:order-1">
                <div className="flex items-start space-x-3 mb-6">
                  <Star className="text-black w-8 h-8" />
                  <h3 className="text-3xl font-bold">Artisan Stamped Patios</h3>
                </div>
                <p className="text-black text-lg leading-relaxed mb-6">
                  Elevate your outdoor living with artisan stamped concrete that rivals luxury resorts. Our seamless, reinforced slabs eliminate the weed growth and shifting issues common with traditional pavers in Kinston and Wilson.
                </p>
                <p className="text-black text-lg leading-relaxed mb-8">
                  Choose from our signature {cityName} collections, including Historic Mooresville Slate and Six-Mile Wood Plank, all finished with UV-resistant pigments and high-solids solvent sealers.
                </p>
                <Link to={cityName === "Mooresville" ? "/patios" : `/${cityName.toLowerCase().replace(" ", "-")}/patios`} className="font-bold flex items-start group text-black">
                  Design Your Outdoor Oasis <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="order-1 md:order-2 overflow-hidden rounded-[40px] shadow-2xl">
                <img src="/services/patios/option 2.jpg" alt="Stamped Patios Mooresville NC" className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

            {/* Pool Decks */}
            <div className="grid md:grid-cols-2 gap-16 items-start" data-aos="fade-up">
              <div className="overflow-hidden rounded-[40px] shadow-2xl">
                <img src="/services/pool-decks/option 2.jpg" alt="Pool Decks Mooresville NC" className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div>
                <div className="flex items-start space-x-3 mb-6">
                  <Logo className="text-black w-8 h-8" />
                  <h3 className="text-3xl font-bold">Luxury Pool Decks</h3>
                </div>
                <p className="text-black text-lg leading-relaxed mb-6">
                  Safety meets style with our slip-resistant, cool-touch concrete pool surrounds. Specifically engineered for salt-water systems common in Wayne County, our decks utilize silane-siloxane sealers to prevent the surface pitting.
                </p>
                <p className="text-black text-lg leading-relaxed mb-8">
                  Our heat-reflective technology keeps surfaces up to 20% cooler, making it perfect for bare feet during North Carolina's intense 90-degree July afternoons.
                </p>
                <Link to={cityName === "Mooresville" ? "/pool-decks" : `/${cityName.toLowerCase().replace(" ", "-")}/pool-decks`} className="font-bold flex items-start group text-black">
                  Create Your Backyard Resort <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Garage Floors */}
            <div className="grid md:grid-cols-2 gap-16 items-start" data-aos="fade-up">
              <div className="order-2 md:order-1">
                <div className="flex items-start space-x-3 mb-6">
                  <ShieldCheck className="text-black w-8 h-8" />
                  <h3 className="text-3xl font-bold">Garage Floor Coatings</h3>
                </div>
                <p className="text-black text-lg leading-relaxed mb-6">
                  Transform your garage into a high-performance showroom. We specialize in industrial-grade Polyaspartic coatings that are 4x more durable than standard epoxy and 100% UV stable for {cityName} car enthusiasts.
                </p>
                <p className="text-black text-lg leading-relaxed mb-8">
                  Our process includes professional diamond grinding and MVT-mitigation primers to solve the "sweating slab" issues common in Wayne County homes.
                </p>
                <Link to={cityName === "Mooresville" ? "/garage-floors" : `/${cityName.toLowerCase().replace(" ", "-")}/garage-floors`} className="font-bold flex items-start group text-black">
                  Upgrade Your Garage <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="order-1 md:order-2 overflow-hidden rounded-[40px] shadow-2xl">
                <img src="/services/garage-floors/option 2.jpg" alt="Garage Floors Mooresville NC" className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

            {/* Sidewalks */}
            <div className="grid md:grid-cols-2 gap-16 items-start" data-aos="fade-up">
              <div className="overflow-hidden rounded-[40px] shadow-2xl">
                <img src="/services/sidewalks/option 2.jpg" alt="Sidewalks Mooresville NC" className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div>
                <div className="flex items-start space-x-3 mb-6">
                  <MapPin className="text-black w-8 h-8" />
                  <h3 className="text-3xl font-bold">Sidewalks & Walkways</h3>
                </div>
                <p className="text-black text-lg leading-relaxed mb-6">
                  Enhance accessibility and curb appeal with ADA-compliant architectural walkways. We handle all Town of {cityName} Right-of-Way permits and design precision-graded paths that guide guests with elegance.
                </p>
                <p className="text-black text-lg leading-relaxed mb-8">
                  Whether it's a historic manor path in Downtown Mooresville or a modern winding entry in Berkeley Manor, our "broom-and-border" finishes provide the perfect blend of safety and masonry-style aesthetics.
                </p>
                <Link to={cityName === "Mooresville" ? "/sidewalks" : `/${cityName.toLowerCase().replace(" ", "-")}/sidewalks`} className="font-bold flex items-start group text-black">
                  Plan Your Walkway <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="relative" data-aos="fade-right">
              <div className="absolute -inset-10 bg-gray-50 rounded-full blur-3xl opacity-50"></div>
              <img src="/services/foundations/option 3.jpg" alt="{cityName} Concrete Team" className="relative rounded-[40px] shadow-2xl w-full h-[600px] object-cover" />
              <div className="absolute -bottom-10 -right-10 bg-black text-white p-10 rounded-3xl hidden md:block" data-aos="zoom-in" data-aos-delay="200">
                <p className="text-5xl font-extrabold mb-2 text-white">15+</p>
                <p className="text-white font-bold uppercase tracking-widest text-sm">Years of Excellence</p>
              </div>
            </div>
            <div data-aos="fade-left">
              <span className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-sm font-bold tracking-wider uppercase text-black mb-6">Our Local Legacy</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-black">The Standard of Concrete Excellence in {cityName}.</h2>
              <p className="text-xl text-black mb-6 leading-relaxed">
                Founded on the principles of integrity and technical mastery, Mooresville Concrete has grown into Wayne County's most trusted partner for high-end residential and commercial builds.
              </p>
              <p className="text-lg text-black mb-10 leading-relaxed">
                Our team combines decades of artisanal experience with modern engineering standards. We don't just pour slabs; we build the reinforced foundations that local families and businesses rely on for generations.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-4xl font-extrabold mb-2 text-black">1.2M</h4>
                  <p className="text-black font-bold uppercase tracking-wider text-xs">Square Feet Poured</p>
                </div>
                <div>
                  <h4 className="text-4xl font-extrabold mb-2 text-black">100%</h4>
                  <p className="text-black font-bold uppercase tracking-wider text-xs">Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black" data-aos="fade-up">Trusted by the {cityName} Community</h2>
            <p className="text-xl text-black" data-aos="fade-up" data-aos-delay="100">See why your neighbors in Wayne County choose Mooresville Concrete.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Their team handled the foundation for our custom home in Mount Olive perfectly. The level of communication was outstanding.", author: "Michael S., Mooresville, NC" },
              { text: "The new stamped patio they designed for us in Kinston is beautiful. It's completely changed how we use our backyard.", author: "Sarah J., Mooresville, NC" },
              { text: "Professional, clean, and fast. They replaced our long driveway in Berkeley Manor in just three days. Highly recommend.", author: "Robert D., Mooresville, NC" },
              { text: "Best concrete contractors in Mooresville. They did our garage floor with polyaspartic coating and it looks like a showroom.", author: "James L., Mooresville, NC" },
              { text: "Very impressed with their attention to detail on our pool deck. It's slip-resistant and stays cool in the sun.", author: "Emily W., Wilson, NC" },
              { text: "High quality work and very professional crew. They handled all the permitting for our new sidewalk on Trade St.", author: "David K., Downtown Mooresville" },
              { text: "We've used them for three different projects now. They are the only concrete team we trust in Wayne County.", author: "Linda M., Fremont, NC" },
              { text: "The foundation they poured for our addition was perfect. Passed all inspections without a single issue.", author: "Chris P., La Grange, NC" },
              { text: "Amazing transformation of our old cracked driveway. The new finish with the picture frame border is stunning.", author: "Nancy T., Mooresville, NC" },
              { text: "Great experience from start to finish. The quote was transparent and the work was completed on schedule.", author: "Kevin B., Wilson, NC" },
              { text: "Their knowledge of local soil conditions really showed. They took extra steps to ensure our slab won't crack.", author: "Patricia G., Dudley, NC" },
              { text: "Excellent customer service. They took the time to explain all our decorative options for the back patio.", author: "Steven R., Mooresville, NC" }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-[32px] shadow-sm border border-black/5 hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
                <div className="flex text-yellow-400 mb-4"><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /></div>
                <p className="text-black mb-6 italic text-md leading-relaxed">"{t.text}"</p>
                <p className="font-bold text-black text-sm">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black" data-aos="fade-up">Common Questions</h2>
            <p className="text-xl text-black" data-aos="fade-up" data-aos-delay="100">Everything you need to know about our process in Wayne County.</p>
          </div>
          <div className="space-y-6">
            {[
              { q: "How long does a standard driveway project take?", a: "Typically, a full driveway replacement in Mooresville takes between 3 to 5 days, depending on weather and site preparation requirements." },
              { q: "What concrete mix do you use for foundations?", a: "We utilize a high-density certified mix as our structural standard, exceeding local building codes for maximum durability." },
              { q: "Do you handle local permits and inspections?", a: "Yes, we manage all coordination with the City of Mooresville and Wayne County building departments, including 811 utility locates and final inspections." },
              { q: "Is stamped concrete slippery when wet?", a: "We incorporate specialized anti-slip additives into our high-solids solvent sealers to ensure a safe, slip-resistant surface even in rainy NC weather." }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-colors cursor-pointer group" data-aos="fade-up">
                <h4 className="text-xl font-bold mb-4 flex items-start justify-between text-black">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </h4>
                <p className="text-black leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="service-areas" className="py-32 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Serving {cityName} & Wayne County</h2>
              <p className="text-xl text-black mb-12">
                We are proud to be the premier concrete choice for the entire region. From historic downtowns to new developments.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {[
                  { name: 'Downtown Mooresville', path: '/' },
                  { name: 'Kinston', path: '/kinston' },
                  { name: 'Wilson', path: '/wilson' },
                  { name: 'Mount Olive', path: '/mount-olive' },
                  { name: 'Fremont', path: '/fremont' },
                  { name: 'La Grange', path: '/la-grange' },
                  { name: 'Dudley', path: '/dudley' },
                ].map((city) => (
                  <Link key={city.name} to={city.path} className="flex items-start space-x-3 text-black font-semibold hover:text-black transition-colors group">
                    <MapPin className="w-5 h-5 text-black group-hover:text-black transition-colors" />
                    <span>{city.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="bg-gray-100 rounded-[40px] h-[500px] w-full relative overflow-hidden group shadow-2xl">
                <iframe 
                  src={mapUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
                <div className="absolute bottom-6 left-6 bg-black text-white px-6 py-3 rounded-2xl font-bold shadow-xl flex items-start space-x-2 pointer-events-none">
                  <MapPin className="w-5 h-5" />
                  <span>Serving {cityName}, NC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 relative z-10">
          <div className="bg-black rounded-[40px] overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
            <div className="p-6 md:p-20 text-white">
              <h2 className="text-4xl font-extrabold mb-8 text-white">Let's build something solid.</h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Ready to start your project? Contact us today for a free estimate. Our team is ready to bring your vision to life with professional concrete work in {cityName}, NC.
              </p>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-start justify-center">
                    <Logo className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Call us directly</p>
                    <p className="text-xl font-bold text-white">(984) 253-1031</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-start justify-center">
                    <MapPin className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Serving Area</p>
                    <p className="text-xl font-bold text-white">{cityName}, NC & Surrounding Areas</p>
                  </div>
                </div>
              </div>
            </div>
              <div className="p-6 md:p-20 bg-gray-50">
                <LeadForm title="Claim Your Free Quote" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home3;

