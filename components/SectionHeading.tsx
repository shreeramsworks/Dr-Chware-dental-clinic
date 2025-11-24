import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeading: React.FC<Props> = ({ title, subtitle, center = true }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900">
        {title}
      </h2>
      <div className={`mt-4 h-1 w-20 bg-teal-500 rounded-full ${center ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeading;