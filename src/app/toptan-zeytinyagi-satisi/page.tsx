import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

export const metadata = {
    title: 'Toptan Zeytinyağı Satışı & Restoran Tedarik Rehberi | Lider Zeytincilik',
    description: 'Oteller, restoranlar ve işletmeler için fabrikadan doğrudan toptan zeytinyağı tedariği. Private label seçenekleri, teneke bazlı fiyatlandırma ve 81 il lojistik ağı.',
    alternates: {
        canonical: 'https://liderzeytincilik.com/toptan-zeytinyagi-satisi',
    },
};

const b2bBenefits = [
    {
        title: 'Sürekli ve Standart Kalite',
        desc: 'İşletmeniz için en büyük risk kalite dalgalanmasıdır. Lider Zeytincilik olarak, yıl boyu aynı asitlik ve aroma profilinde ürün garantisi veriyoruz.',
        icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    },
    {
        title: 'Fabrika Çıkış Fiyatları',
        desc: 'Aracı ve komisyoncu olmadan doğrudan üretim tesisinden sevkiyat. Yüksek tonajlı alımlarda piyasadaki en rekabetçi fiyatlandırma modelini sunuyoruz.',
        icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    },
    {
        title: 'Esnek Ambalaj Çözümleri',
        desc: '5lt, 10lt ve 18lt teneke seçeneklerinin yanı sıra, talebinize göre IBC tank veya dökme yükleme imkanı sağlıyoruz.',
        icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
    },
    {
        title: 'Hızlı Lojistik & Ambar',
        desc: 'Kendi araç filomuz ve anlaşmalı ambar ağımızla, siparişlerinizi Türkiye’nin her yerine güvenle ve zamanında ulaştırıyoruz.',
        icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    },
];

export default function WholesalePage() {
    return (
        <div className="bg-olive-950 min-h-screen pt-24 pb-20 text-white">
            {/* ===== B2B HERO SECTION ===== */}
            <section className="relative py-20 lg:py-32 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/modern-warehouse.png"
                        alt="Zeytinyağı Depolama ve Lojistik"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-olive-950 via-olive-950/90 to-transparent"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block bg-gold-400 text-olive-950 text-xs font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-none mb-6">
                            B2B Kurumsal Tedarik
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif font-black mb-8 leading-tight">
                            İşletmeniz İçin <br />
                            <span className="text-gold-400">Güvenilir Çözüm Ortağı</span>
                        </h1>
                        <p className="text-lg md:text-xl text-olive-100/80 mb-10 leading-relaxed uppercase tracking-wide font-light">
                            Oteller, Restoranlar ve Catering Firmaları İçin Doğrudan Fabrikadan Kesintisiz Zeytinyağı Tedariği.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5">
                            <a
                                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Merhaba, restoran/otel işletmemiz için toptan fiyat teklifi almak istiyorum.')}`}
                                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 px-10 py-5 rounded-none text-lg font-bold transition-all shadow-xl hover:-translate-y-1"
                            >
                                Toptan Fiyat Teklifi Al
                            </a>
                            <Link
                                href="/iletisim"
                                className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 px-10 py-5 rounded-none text-lg font-bold transition-all"
                            >
                                Numune Talep Et
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== B2B STATS BAR ===== */}
            <div className="bg-gold-400 py-10 relative z-20 shadow-2xl">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-olive-950 text-center">
                        <div>
                            <p className="text-4xl font-serif font-black mb-1">500+</p>
                            <p className="text-xs font-black uppercase tracking-widest">Aktif İşletme</p>
                        </div>
                        <div>
                            <p className="text-4xl font-serif font-black mb-1">81 İl</p>
                            <p className="text-xs font-black uppercase tracking-widest">Lojistik Erişim</p>
                        </div>
                        <div>
                            <p className="text-4xl font-serif font-black mb-1">0.8 Max</p>
                            <p className="text-xs font-black uppercase tracking-widest">Asitlik Garantisi</p>
                        </div>
                        <div>
                            <p className="text-4xl font-serif font-black mb-1">Kesintisiz</p>
                            <p className="text-xs font-black uppercase tracking-widest">Yıllık Tedarik</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== CORE BENEFITS ===== */}
            <section className="py-24 max-w-7xl mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-serif font-black mb-6">Neden Lider Zeytincilik?</h2>
                    <p className="text-olive-300 max-w-2xl mx-auto italic">Toptan alımlarda sadece ürün değil, sürdürülebilir bir iş ortaklığı sunuyoruz.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {b2bBenefits.map((benefit, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-none hover:border-gold-500/50 transition-all group">
                            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">{benefit.icon}</div>
                            <h3 className="text-xl font-bold mb-4 text-gold-400">{benefit.title}</h3>
                            <p className="text-sm text-olive-200 leading-relaxed font-light">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== PRIVATE LABEL SECTION ===== */}
            <section className="bg-olive-900/50 py-24 border-y border-white/5 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative aspect-square">
                            <div className="absolute inset-0 bg-gold-500/10 rounded-none blur-[120px]"></div>
                            <Image
                                src="/images/retail-boxes.png"
                                alt="Private Label Zeytinyağı Üretimi"
                                fill
                                className="object-cover rounded-none shadow-2xl border border-white/10"
                            />
                        </div>
                        <div>
                            <span className="text-gold-400 font-black uppercase tracking-[0.3em] text-sm mb-4 block">Kendi Markanı Oluştur</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-black mb-8 leading-tight">Private Label (Fason) Üretim Çözümleri</h2>
                            <p className="text-olive-200 text-lg mb-8 leading-relaxed font-light italic">
                                Pazardaki yerinizi kendi markanızla alın. Aydın ve Akhisar’daki tesislerimizde, sizin markanız veya etiketsiz ambalaj seçenekleriyle üretim yapıyoruz.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    'Tasarım ve Etiket Desteği',
                                    'Farklı Ambalaj Seçenekleri (Cam, Teneke, PET)',
                                    'Minimum Sipariş Esnekliği',
                                    'Yasal Bildirim ve Barkod Süreç Yönetimi'
                                ].map((li, i) => (
                                    <li key={i} className="flex items-center gap-3 font-bold text-white uppercase tracking-tighter text-sm">
                                        <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg> {li}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Merhaba, Private Label (Fason üretim) süreçleri hakkında bilgi almak istiyorum.')}`}
                                className="inline-flex items-center gap-3 text-gold-400 border-b-2 border-gold-400/30 hover:border-gold-400 pb-1 text-sm font-black uppercase tracking-widest transition-all"
                            >
                                Süreç Hakkında Bilgi Al <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== LOGISTICS & PRICING PROCESS ===== */}
            <section className="py-24 max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                    <div className="bg-white/5 rounded-none p-8 md:p-14 border border-white/10">
                        <h3 className="text-3xl font-serif font-black mb-12 text-gold-400">Lojistik Süreci</h3>
                        <div className="space-y-10 relative">
                            <div className="absolute left-[15px] top-4 bottom-4 w-px bg-white/10 hidden sm:block"></div>
                            {[
                                { step: '01', title: 'Sipariş ve Planlama', desc: 'Tonajınıza göre üretim takvimi oluşturulur.' },
                                { step: '02', title: 'Kalite Onayı', desc: 'Sevkiyat öncesi asitlik ve duyusal analizler yapılır.' },
                                { step: '03', title: 'Paketleme ve Yükleme', desc: 'Ürünler ambar veya araç bazlı yüklemeye uygun paketlenir.' },
                                { step: '04', title: 'Kapıya Teslim', desc: 'Kendi filomuz veya anlaşmalı ağımızla 81 ile teslimat.' },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-start group relative">
                                    <div className="w-8 h-8 rounded-none bg-olive-950 border-2 border-gold-400 flex items-center justify-center text-[10px] font-black group-hover:bg-gold-400 group-hover:text-olive-950 transition-all shrink-0 z-10">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg md:text-xl mb-1">{item.title}</h4>
                                        <p className="text-xs md:text-sm text-olive-300 font-light italic uppercase tracking-tighter leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="p-8 md:p-12 bg-olive-900 rounded-none text-white shadow-[0_0_50px_rgba(234,179,8,0.1)] relative overflow-hidden group animate-breathe">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-none -mr-16 -mt-16 blur-3xl"></div>

                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-serif font-black mb-6 md:mb-8 text-gold-400">Pazarlık ve Fiyatlandırma</h3>
                                <p className="text-base md:text-lg mb-8 leading-relaxed font-light text-olive-100/90 italic">
                                    Toptan alımlarda fiyatlar; hasat dönemi, sipariş miktarı ve ambalaj tipine göre dinamik olarak güncellenmektedir.
                                </p>

                                <div className="space-y-4 md:space-y-6 mb-10">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-3 gap-1 hover:bg-white/5 transition-all px-4 -mx-4 rounded-none group/row">
                                        <span className="font-black uppercase tracking-[0.2em] text-[10px] text-gold-500/60 group-hover/row:text-gold-400 transition-colors">Minimum Sipariş</span>
                                        <span className="font-serif font-black italic text-sm sm:text-base">1 Palet (Karma Yapılabilir)</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-3 gap-1 hover:bg-white/5 transition-all px-4 -mx-4 rounded-none group/row">
                                        <span className="font-black uppercase tracking-[0.2em] text-[10px] text-gold-500/60 group-hover/row:text-gold-400 transition-colors">Ödeme Seçenekleri</span>
                                        <span className="font-serif font-black italic text-sm sm:text-base">Nakit / Havale / EFT</span>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pb-3 gap-1 hover:bg-white/5 transition-all px-4 -mx-4 rounded-none group/row">
                                        <span className="font-black uppercase tracking-[0.2em] text-[10px] text-gold-500/60 group-hover/row:text-gold-400 transition-colors">Toptan İskonto</span>
                                        <span className="text-green-400 font-serif font-black italic text-sm sm:text-base">%10 - %25 Değişken</span>
                                    </div>
                                </div>

                                <a
                                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Merhaba, toptan teneke fiyat listenizi alabilir miyim?')}`}
                                    className="w-full inline-flex items-center justify-center gap-3 bg-gold-500 text-olive-950 py-4 md:py-6 rounded-none text-lg md:text-xl font-black hover:bg-gold-400 transition-all shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:shadow-gold-500/40 group-hover:scale-[1.02]"
                                >
                                    <span>Güncel Fiyat Listesini İste</span>
                                    <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FINAL TESTIMONIAL / CTA ===== */}
            <section className="bg-white/5 py-24 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-gold-400 flex justify-center mb-8">
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-black mb-6 leading-tight">Kurumsal Çözüm Hattımız 7/24 Aktif</h2>
                    <p className="text-olive-200 text-lg md:text-xl mb-10 font-light italic leading-relaxed">
                        &quot;Lider Zeytincilik olarak, Türkiye’nin en prestijli otel ve restoran zincirlerine hammadde sağlamaktan gurur duyuyoruz. Sizi de bu güçlü aileye bekleriz.&quot;
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="bg-white text-olive-950 px-8 md:px-10 py-4 md:py-5 rounded-none font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-gold-400 transition-all flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            {siteConfig.phone} (B2B Hattı)
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
