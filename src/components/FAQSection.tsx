'use client';

import { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    items: FAQItem[];
    title?: string;
}

export default function FAQSection({ items, title = 'Sık Sorulan Sorular' }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };

    return (
        <section className="py-48 relative overflow-hidden tech-grid border-t border-white/5">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <span className="text-gold-500 text-[10px] font-mono font-black uppercase tracking-[0.6em] mb-6 block">KNOWLEDGE_BASE // PROTOCOL_SSS</span>
                    <h2 className="font-serif text-fluid-h2 font-black text-white leading-none uppercase tracking-tighter">
                        Sık Sorulan <br />
                        <span className="text-gold-400 italic font-light font-serif">Sorular</span>
                    </h2>
                </div>

                <div className="space-y-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white/[0.02] hud-border hud-border-tl hud-border-br transition-all duration-500 border border-white/5 hover:bg-white/[0.04]"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className={`w-full flex items-center justify-between px-8 md:px-12 py-8 md:py-10 text-left transition-all duration-500 ${openIndex === index ? 'bg-gold-500/[0.03]' : ''}`}
                                aria-expanded={openIndex === index}
                            >
                                <div className="flex flex-col gap-3">
                                    <span className="text-[10px] font-mono text-gold-500/40 uppercase tracking-[0.3em]">UNIT_Q_ {String(index + 1).padStart(2, '0')}</span>
                                    <span className={`font-serif font-black text-lg md:text-2xl transition-all duration-500 uppercase tracking-tight leading-none ${openIndex === index ? 'text-gold-400 translate-x-4' : 'text-white'}`}>
                                        {item.question}
                                    </span>
                                </div>
                                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-none flex items-center justify-center border transition-all duration-700 ${openIndex === index ? 'bg-gold-500 border-gold-500 text-olive-950 rotate-90 shadow-[0_0_30px_rgba(234,179,8,0.3)]' : 'border-white/10 text-gold-500/40'}`}>
                                    <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d={openIndex === index ? "M20 12H4" : "M12 4v16m8-8H4"} />
                                    </svg>
                                </div>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-700 ease-in-out ${openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-8 md:px-12 pb-10 md:pb-16 text-olive-200 leading-relaxed font-light text-base md:text-lg italic border-t border-white/5 pt-10 bg-black/40 relative">
                                    <div className="absolute top-4 right-8 text-[9px] font-mono text-gold-500/20 uppercase tracking-widest">A_REPORT_STATUS: VERIFIED_01</div>
                                    <div className="max-w-3xl border-l-2 border-gold-500/20 pl-8">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 flex justify-center opacity-20">
                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <div key={i} className="w-2 h-2 bg-gold-400 rotate-45"></div>)}
                    </div>
                </div>
            </div>
        </section>
    );
}
