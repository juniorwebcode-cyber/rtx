import React from 'react';
import { Star } from 'lucide-react';
import { RTX_INFO } from '../data/rtxData';

interface GoogleReviewsBadgeProps {
  variant?: 'compact' | 'full' | 'hero';
  dark?: boolean;
  className?: string;
}

export const GoogleReviewsBadge: React.FC<GoogleReviewsBadgeProps> = ({
  variant = 'compact',
  dark = false,
  className = '',
}) => {
  return (
    <a
      href={RTX_INFO.googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-2xl shadow-xs hover:shadow-md transition-all duration-200 group px-3.5 py-2 ${
        dark
          ? 'bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white'
          : 'bg-white hover:bg-slate-50 border border-slate-200/90 text-slate-900'
      } ${className}`}
      title="Ver avaliações da RTX no Google Maps"
    >
      {/* Official Google 4-Color "G" Icon */}
      <div className="w-6 h-6 shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            fill="#EA4335"
          />
        </svg>
      </div>

      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span
            className={`text-sm font-extrabold leading-none tabular-nums ${
              dark ? 'text-white' : 'text-slate-900'
            }`}
          >
            4.9
          </span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5 fill-[#FBBC04] text-[#FBBC04]"
              />
            ))}
          </div>
          <span
            className={`text-[11px] font-bold ${
              dark ? 'text-slate-200' : 'text-slate-700'
            }`}
          >
            Google
          </span>
        </div>
        <span
          className={`text-[10px] font-medium ${
            dark ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          Avaliação Excelente · Ver no Maps
        </span>
      </div>
    </a>
  );
};
