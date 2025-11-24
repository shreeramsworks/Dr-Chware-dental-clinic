import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CLINIC_DETAILS, NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-white text-xl font-heading font-bold mb-4">Dr Chaware’s<br/>Dental Care</h3>
            <p className="text-sm leading-relaxed mb-4 text-slate-400">
              Providing world-class dental treatments with advanced technology in a safe and hygienic environment. Your smile is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-teal-400 transition"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-teal-400 transition"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <NavLink to={link.path} className="text-sm hover:text-teal-400 transition-colors block py-1">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-teal-500 shrink-0 mt-1" size={18} />
                <span className="text-sm">{CLINIC_DETAILS.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-teal-500 shrink-0" size={18} />
                <a href={`tel:${CLINIC_DETAILS.phone}`} className="text-sm hover:text-teal-400">{CLINIC_DETAILS.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-teal-500 shrink-0" size={18} />
                <a href={`mailto:${CLINIC_DETAILS.email}`} className="text-sm hover:text-teal-400">{CLINIC_DETAILS.email}</a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Working Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>Mon - Sat</span>
                <span className="text-teal-400 font-medium">10:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2 pt-2">
                <span>Sunday</span>
                <span className="text-rose-400 font-medium">Closed</span>
              </li>
            </ul>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
               <Clock size={14} />
               <span>Emergency appointments available</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Dr Chaware’s Multispeciality Dental Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;