import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { TEAM } from '../constants';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-heading font-bold text-slate-900">About Us</h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Dedicated to providing comprehensive, quality dental care for the whole family in a comfortable setting.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
             <div className="md:w-1/2">
               <img 
                 src="https://images.unsplash.com/photo-1579684385183-1b60fe7614a9?auto=format&fit=crop&q=80&w=1000" 
                 alt="Dental Clinic Interior" 
                 className="rounded-2xl shadow-xl"
               />
             </div>
             <div className="md:w-1/2">
                <h3 className="text-teal-600 font-bold tracking-wide uppercase text-sm mb-2">Our Story</h3>
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-6">A Legacy of Smiles in Latur</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Founded by Dr. Chaware, our clinic has been serving the Latur community for over 15 years. We started with a simple mission: to make high-quality dentistry accessible and painless for everyone.
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Today, we are a multispeciality centre equipped with digital OPG, intraoral cameras, and laser dentistry tools. Whether it's a simple cleaning or a complex full-mouth implant rehabilitation, we treat every patient like family.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {["15+ Years Experience", "Advanced Technology", "Certified Specialists", "Family Environment"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                       <CheckCircle size={18} className="text-teal-500" />
                       <span className="text-slate-800 font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Meet Our Doctors" subtitle="Expert Care" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="h-64 overflow-hidden bg-slate-200">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                  <p className="text-teal-600 font-medium mb-2">{member.role}</p>
                  <p className="text-slate-500 text-sm">{member.qualification}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;