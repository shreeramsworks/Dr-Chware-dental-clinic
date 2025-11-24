import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { NAV_LINKS, CLINIC_DETAILS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
             <NavLink to="/" className="flex flex-col">
                <span className="font-heading font-bold text-2xl text-teal-600">Dr Chaware’s</span>
                <span className="text-xs text-slate-500 font-medium tracking-wide">DENTAL CARE & IMPLANTS</span>
             </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-teal-600' : 'text-slate-600 hover:text-teal-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="bg-teal-600 text-white px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Calendar size={16} />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-600 hover:text-teal-600 focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-teal-50 text-teal-600'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-teal-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-4 px-3">
                <a
                  href={`tel:${CLINIC_DETAILS.phone}`}
                  className="w-full bg-teal-600 text-white px-5 py-3 rounded-lg font-medium text-base flex justify-center items-center gap-2 hover:bg-teal-700 transition-colors"
                >
                  <Phone size={18} />
                  Call Now
                </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;