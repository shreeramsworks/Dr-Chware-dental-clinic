import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { CLINIC_DETAILS } from '../constants';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white placeholder-white focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition";

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-heading font-bold text-white">Contact Us</h1>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            We are here to help. Reach out to book an appointment or ask a question.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <SectionHeading title="Get In Touch" subtitle="Visit Us" center={false} />
            <p className="text-slate-600 mb-8">
              Conveniently located in the heart of Latur. Ample parking available.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-teal-50 p-3 rounded-lg text-teal-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Our Location</h4>
                  <p className="text-slate-600 w-3/4">{CLINIC_DETAILS.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-50 p-3 rounded-lg text-teal-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Phone Number</h4>
                  <a href={`tel:${CLINIC_DETAILS.phone}`} className="text-slate-600 hover:text-teal-600">{CLINIC_DETAILS.phone}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-50 p-3 rounded-lg text-teal-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Address</h4>
                  <a href={`mailto:${CLINIC_DETAILS.email}`} className="text-slate-600 hover:text-teal-600">{CLINIC_DETAILS.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-50 p-3 rounded-lg text-teal-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Working Hours</h4>
                  <p className="text-slate-600">Mon - Sat: 10:00 AM - 8:00 PM</p>
                  <p className="text-slate-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Book an Appointment</h3>
            
            {formStatus === 'success' ? (
              <div className="bg-green-50 text-green-700 p-4 rounded-lg text-center">
                <p className="font-bold">Thank you!</p>
                <p>We have received your request and will call you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                    <input type="text" required className={inputClasses} placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                    <input type="tel" required className={inputClasses} placeholder="+91 99999 99999" />
                  </div>
                </div>

                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Email (Optional)</label>
                   <input type="email" className={inputClasses} placeholder="john@example.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Date</label>
                      <input 
                        type="date" 
                        className={inputClasses} 
                        style={{ colorScheme: 'dark' }}
                      />
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Service Interest</label>
                      <select className={inputClasses}>
                         <option className="text-slate-900 bg-white">General Checkup</option>
                         <option className="text-slate-900 bg-white">Implant Consultation</option>
                         <option className="text-slate-900 bg-white">Root Canal</option>
                         <option className="text-slate-900 bg-white">Braces / Orthodontics</option>
                         <option className="text-slate-900 bg-white">Teeth Whitening</option>
                         <option className="text-slate-900 bg-white">Other</option>
                      </select>
                   </div>
                </div>

                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                   <textarea rows={4} className={inputClasses} placeholder="Tell us about your dental concern..."></textarea>
                </div>

                <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-lg transition shadow-md hover:shadow-lg">
                   Book Appointment
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-lg h-[400px]">
          <iframe 
            src={CLINIC_DETAILS.mapUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Clinic Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;