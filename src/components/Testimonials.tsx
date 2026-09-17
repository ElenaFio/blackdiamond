import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/cleaningData';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#F8F9FC] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FD3A85]/10 border border-[#FD3A85]/20 text-[#FD3A85] text-xs font-bold uppercase tracking-wider mb-4">
            <span>✦</span>
            <span>SONOMA COUNTY HOMEOWNER REVIEWS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Loved by Petaluma families &amp; businesses.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            See what your neighbors in Petaluma, Penngrove, and Sonoma Valley have to say about our meticulous, non-toxic cleaning standard.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="rounded-[32px] bg-white border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#FD3A85] text-[#FD3A85]"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-200" />
                </div>

                {/* Service Tag */}
                <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 mb-3">
                  {review.service}
                </span>

                {/* Comment */}
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Row */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={review.avatarUrl}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-xs sm:text-sm text-slate-900">
                      {review.name}
                    </span>
                    {review.verified && (
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    )}
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {review.location} • {review.reviewDate}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Social Proof Metric Box */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FD3A85]/10 text-[#FD3A85] flex items-center justify-center font-bold text-lg">
              ★
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                5.0 Average Rating Across Google &amp; Yelp
              </div>
              <div className="text-xs text-slate-500">
                Over 500+ residential and commercial cleanings completed in Petaluma, CA
              </div>
            </div>
          </div>

          <a
            href="https://facebook.com/kyd.blackdiamond"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#FD3A85] hover:underline"
          >
            Follow @kyd.blackdiamond on Facebook →
          </a>
        </div>

      </div>
    </section>
  );
};
