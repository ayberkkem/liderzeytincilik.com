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
        <section className="py-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <h2 className="font-serif text-4xl font-black text-white text-center mb-16 px-4">
                {title.includes(' ') ? (
                    <>
                        {title.split(' ').slice(0, -1).join(' ')} <span className="text-gold-400 italic">{title.split(' ').slice(-1)}</span>
                    </>
                ) : title}
            </h2>

            <div className="max-w-4xl mx-auto space-y-4 px-4">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="glass-card rounded-[32px] overflow-hidden transition-all border border-white/5"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className={`w-full flex items-center justify-between px-8 py-6 text-left transition-all duration-300 ${openIndex === index ? 'bg-gold-400/10' : 'hover:bg-white/5'}`}
                            aria-expanded={openIndex === index}
                        >
                            <span className={`font-serif font-black text-lg pr-6 transition-colors ${openIndex === index ? 'text-gold-400' : 'text-white'}`}>{item.question}</span>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${openIndex === index ? 'bg-gold-400 border-gold-400 text-olive-950 rotate-180' : 'border-white/10 text-olive-400'}`}>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <div className="px-8 pb-8 text-olive-200 leading-relaxed font-light text-lg italic border-t border-white/5 pt-6 bg-white/5">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
}
