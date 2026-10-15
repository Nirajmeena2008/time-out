import React from 'react';

export default function BrandStory() {
  return (
    <section id="about" className="bg-white py-16 md:py-24 border-b-[2px] border-[#141413]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Visual Venue Atmosphere (Real Photograph) */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl border-[2px] border-[#141413] overflow-hidden shadow-[6px_8px_0px_#141413] bg-[#181715] relative group">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                {/* Real Cafe Photography */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about/the-time-out-rooftop.jpg"
                  alt="The Time Out Rooftop Cafe Venue in Jaipur with scooter seating and pizza wings"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Bottom dark gradient for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Top Left Location Badge */}
                <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[#141413] border border-[#141413] text-xs font-black uppercase tracking-wider shadow-sm z-10">
                  <span>📍</span>
                  <span>Real Venue • Jaisinghpura Khor</span>
                </div>

                {/* Top Right Pure Veg Tag */}
                <div className="absolute top-3.5 right-3.5 bg-[#108548] text-white text-[11px] font-black px-2.5 py-0.5 rounded-full border border-white z-10">
                  100% Pure Veg
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white z-10">
                  <div className="text-[11px] text-[#F5C242] font-black uppercase tracking-wider">
                    The Time Out Vibe
                  </div>
                  <div className="font-display font-bold text-lg sm:text-xl leading-tight mt-0.5">
                    Scooter Dining, Swing Chairs & Rooftop Nights
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Colored Feature Blocks */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF2E1] border-[1.5px] border-[#141413] shadow-[1.5px_2px_0px_#141413] text-xs font-bold text-[#141413]">
              <span>✨</span>
              <span>THE STORY & EXPERIENCE</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#141413] tracking-tight leading-[1.1]">
              WHERE JAIPUR MEETS FOR GOOD FOOD & GREAT VIBES
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#5A5751] font-medium leading-relaxed">
              <p>
                Nestled in Jaisinghpura Khor, <strong className="text-[#141413]">The Time Out</strong> was created with a simple vision: to give Jaipur a high-vibe destination where students, families, and friends can experience unforgettable dining without compromising on pure vegetarian authenticity.
              </p>
              <p>
                From our signature double-crust Farmhouse pizzas and crispy kurkure momos to thick handcrafted shakes and frosty coolers, every recipe is made with fresh ingredients and honest culinary passion.
              </p>
              <p>
                Whether you&apos;re celebrating a birthday beside the illuminated pool, soaking in the panoramic rooftop night breeze, or grabbing quick takeout on your way home — The Time Out is your sanctuary.
              </p>
            </div>

            {/* 3 Colored Feature Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-3">
              {/* Block 1 (Brand Red) */}
              <div className="bg-[#E14825] text-white rounded-xl p-4 border-[1.5px] border-[#141413] shadow-[2px_3px_0px_#141413]">
                <div className="text-3xl mb-1">🍕</div>
                <div className="font-display font-black text-lg leading-tight">
                  100% Pure Veg
                </div>
                <div className="text-xs text-white/85 mt-1 font-medium leading-snug">
                  Strict veg kitchen, premium cheese & fresh farm toppings.
                </div>
              </div>

              {/* Block 2 (Accent Yellow) */}
              <div className="bg-[#F5C242] text-[#141413] rounded-xl p-4 border-[1.5px] border-[#141413] shadow-[2px_3px_0px_#141413]">
                <div className="text-3xl mb-1">🏊</div>
                <div className="font-display font-black text-lg leading-tight">
                  Poolside Chill
                </div>
                <div className="text-xs text-[#141413]/85 mt-1 font-medium leading-snug">
                  Unwind by the pool with coolers, fries & chill music.
                </div>
              </div>

              {/* Block 3 (Accent Green) */}
              <div className="bg-[#538D4E] text-white rounded-xl p-4 border-[1.5px] border-[#141413] shadow-[2px_3px_0px_#141413]">
                <div className="text-3xl mb-1">🌙</div>
                <div className="font-display font-black text-lg leading-tight">
                  Rooftop Magic
                </div>
                <div className="text-xs text-white/85 mt-1 font-medium leading-snug">
                  Dine under the open stars with scenic Jaipur breezes.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
