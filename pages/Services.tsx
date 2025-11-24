import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-heading font-bold text-white">Our Treatments</h1>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
             Combining art and science to create healthy, beautiful smiles.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`scroll-mt-24 flex flex-col lg:flex-row gap-10 items-center bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2">
                <div className="bg-teal-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="text-teal-600" size={32} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">{service.title}</h2>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <h4 className="font-bold text-slate-900 mb-3">What to expect:</h4>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="bg-green-100 p-1 rounded-full mt-1">
                        <Check size={14} className="text-green-600" />
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className="inline-block bg-slate-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition"
                >
                  Book Consultation
                </Link>
              </div>
              
              <div className="lg:w-1/2 w-full h-full min-h-[300px]">
                 <img 
                    src={`https://picsum.photos/seed/${service.id}/800/600`} 
                    alt={service.title} 
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                 />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;