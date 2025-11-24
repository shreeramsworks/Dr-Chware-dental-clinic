import React, { useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Phone, Calendar } from 'lucide-react';
import { CLINIC_DETAILS } from '../constants';

const Layout: React.FC = () => {
  const { pathname, hash } = useLocation();

  // Handle scroll on route or hash change
  useEffect(() => {
    if (hash) {
      // If there is a hash, wait a moment for render then scroll to element
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
      {/* Mobile Floating Action Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-3 flex gap-3 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a 
          href={`tel:${CLINIC_DETAILS.phone}`}
          className="flex-1 flex items-center justify-center gap-2 bg-teal-600 text-white py-3 rounded-lg font-semibold active:bg-teal-700 transition"
        >
          <Phone size={18} /> Call Now
        </a>
        <Link 
          to="/contact"
          className="flex-1 flex items-center justify-center gap-2 bg-slate-800 text-white py-3 rounded-lg font-semibold active:bg-slate-900 transition"
        >
          <Calendar size={18} /> Book Appt
        </Link>
      </div>
    </div>
  );
};

export default Layout;