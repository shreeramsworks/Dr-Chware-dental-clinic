import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, ThumbsUp, Clock, Star } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { SERVICES, TESTIMONIALS, CLINIC_DETAILS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-900 h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000"
            alt="Dental Clinic" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <span className="bg-teal-500/20 text-teal-300 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide border border-teal-500/30 mb-6 inline-block">
              #1 Dental Clinic in Latur
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6">
              World-Class Dentistry <br/>
              <span className="text-teal-400">Right Here in Latur</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              Experience painless treatments, advanced dental implants, and smile makeovers with Dr. Chaware and his expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-bold text-center transition shadow-lg hover:shadow-teal-500/25 flex items-center justify-center gap-2">
                Book Appointment <ArrowRight size={20} />
              </Link>
              <a href={`tel:${CLINIC_DETAILS.phone}`} className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg font-bold text-center transition shadow-lg flex items-center justify-center gap-2">
                Call: {CLINIC_DETAILS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-teal-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full"><ShieldCheck size={24} /></div>
              <div>
                <h4 className="font-bold text-lg">Sterilized & Safe</h4>
                <p className="text-teal-100 text-sm">International hygiene protocols</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full"><ThumbsUp size={24} /></div>
              <div>
                <h4 className="font-bold text-lg">Painless Dentistry</h4>
                <p className="text-teal-100 text-sm">Advanced anesthesia techniques</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full"><Clock size={24} /></div>
              <div>
                <h4 className="font-bold text-lg">Latest Technology</h4>
                <p className="text-teal-100 text-sm">Digital X-rays & Implants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Services" subtitle="Comprehensive Care" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
                <div className="bg-teal-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors">
                  <service.icon className="text-teal-600 group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <Link to={`/services#${service.id}`} className="text-teal-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="inline-block border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-3 rounded-lg font-bold transition">
              View All Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" alt="Doctor" className="rounded-2xl shadow-2xl z-10 relative" />
                  <div className="absolute -bottom-6 -right-6 bg-teal-600 p-8 rounded-xl z-20 text-white hidden md:block">
                     <p className="text-4xl font-bold mb-1">15+</p>
                     <p className="text-sm opacity-90">Years Experience</p>
                  </div>
                  <div className="absolute top-[-20px] left-[-20px] w-40 h-40 bg-slate-100 rounded-full -z-0"></div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <SectionHeading title="Why Choose Dr Chaware?" subtitle="The Best Choice" center={false} />
                <p className="text-slate-600 mb-6 text-lg">
                  We combine clinical expertise with state-of-the-art technology to deliver the best dental care in Latur. Our patient-centric approach ensures you feel comfortable and confident in your smile.
                </p>
                <ul className="space-y-4">
                  {[
                    "Expert team of MDS Doctors",
                    "Strict Sterilization Protocols (Autoclave Class B)",
                    "Digital Smile Design Technology",
                    "Affordable & Transparent Pricing"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="bg-teal-100 p-1 rounded-full"><ShieldCheck className="text-teal-600" size={16} /></div>
                      <span className="text-slate-800 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link to="/about" className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition">
                    Meet Our Doctors
                  </Link>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Patient Stories" subtitle="Testimonials" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-xl shadow-md border border-teal-100">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                </div>
                <p className="text-slate-600 italic mb-6">"{t.text}"</p>
                <div>
                  <h5 className="font-bold text-slate-900">{t.name}</h5>
                  <p className="text-sm text-teal-600">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Ready for your new smile?</h2>
          <p className="text-xl text-slate-400 mb-10">Schedule your consultation today at Latur's most trusted dental clinic.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/contact" className="bg-teal-500 hover:bg-teal-600 text-white px-10 py-4 rounded-lg font-bold text-lg transition shadow-lg">
                Book Appointment
             </Link>
             <a href={`tel:${CLINIC_DETAILS.phone}`} className="bg-transparent border-2 border-slate-600 hover:border-white text-white px-10 py-4 rounded-lg font-bold text-lg transition">
                Call Us Now
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;