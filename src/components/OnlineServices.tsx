import React from 'react';
import { Package, Ship, FileDown, Headphones, ArrowRight } from 'lucide-react';
import { Language, ServiceItem } from '../types';
import { ONLINE_SERVICES } from '../data/content';

interface OnlineServicesProps {
  language: Language;
  onSelectService: (serviceId: string) => void;
}

export const OnlineServices: React.FC<OnlineServicesProps> = ({
  language,
  onSelectService
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PackageCheck':
        return <Package className="w-6 h-6" />;
      case 'Ship':
        return <Ship className="w-6 h-6" />;
      case 'FileDown':
        return <FileDown className="w-6 h-6" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6" />;
      default:
        return <Package className="w-6 h-6" />;
    }
  };

  return (
    <section
      id="services"
      className="relative z-30 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 mb-12 sm:mb-16"
    >
      {/* Outer frosted glass pill container */}
      <div className="bg-white/85 backdrop-blur-xl border border-white layer-shadow-raised rounded-[32px] sm:rounded-[60px] p-4 sm:p-7 lg:p-9">

        {/* 4 Cards Grid: 4 cols on desktop, 2x2 on mobile — bigger, generous tap targets */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-7">
          {ONLINE_SERVICES.map((service) => (
            <button
              key={service.id}
              id={`service-card-${service.id}`}
              onClick={() => onSelectService(service.id)}
              className="bg-white rounded-[var(--radius-card)] px-5 py-7 sm:px-7 sm:py-9 layer-shadow-soft border border-slate-100 hover:border-[var(--color-orange)]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-4 sm:gap-5 cursor-pointer group min-h-[140px] sm:min-h-[176px]"
            >
              {/* Icon — orange-accented, layered gradient circle */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[var(--color-orange)]/12 to-[var(--color-orange)]/5 text-[var(--color-orange)] group-hover:text-white group-hover:from-[var(--color-orange)] group-hover:to-[var(--color-orange-deep)] transition-all duration-300 flex items-center justify-center shadow-inner">
                <span className="[&>svg]:w-8 [&>svg]:h-8 sm:[&>svg]:w-9 sm:[&>svg]:h-9">
                  {getIcon(service.iconName)}
                </span>
              </div>

              {/* Service Title */}
              <h3 className="text-base sm:text-lg font-bold text-[var(--color-blue-800)] group-hover:text-[var(--color-primary)] transition-colors duration-200 text-center line-clamp-2">
                {language === 'zh' ? service.titleZh : service.titleEn}
              </h3>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
