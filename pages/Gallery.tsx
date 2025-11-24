import React from 'react';
import SectionHeading from '../components/SectionHeading';

const Gallery: React.FC = () => {
  // Using picsum for placeholder gallery images
  const images = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    url: `https://picsum.photos/600/400?random=${i + 10}`,
    category: i % 2 === 0 ? 'Clinic' : 'Smiles'
  }));

  return (
    <div className="bg-white min-h-screen">
       <div className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-heading font-bold text-slate-900">Smile Gallery</h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Take a tour of our modern facility and see the smiles we've transformed.
          </p>
        </div>
      </div>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <SectionHeading title="Clinic & Patients" center />
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img) => (
              <div key={img.id} className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer aspect-video bg-slate-200">
                 <img 
                   src={img.url} 
                   alt="Gallery" 
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-lg border-2 border-white px-6 py-2 rounded-full">
                      {img.category}
                    </span>
                 </div>
              </div>
            ))}
         </div>
      </section>

      <section className="bg-teal-600 py-16 text-white text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Want a smile like this?</h2>
            <p className="mb-8 opacity-90">Book an appointment today to discuss your smile makeover.</p>
            <a href="#/contact" className="bg-white text-teal-700 px-8 py-3 rounded-lg font-bold hover:bg-teal-50 transition">
               Get Started
            </a>
         </div>
      </section>
    </div>
  );
};

export default Gallery;