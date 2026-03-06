import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
    title: 'İletişim | Lider Zeytincilik',
    description: 'Zeytinyağı siparişi, toptan alım veya bilgi almak için bizimle iletişime geçin. WhatsApp, telefon ve e-posta yoluyla bize ulaşabilirsiniz.',
};

export default function ContactPage() {
    return (
        <>
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-olive-950"></div>
                <div className="absolute inset-0 opacity-20 bg-[url('/images/ancient-olive-tree.png')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-olive-950 to-transparent"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'İletişim' }]} />
                    <h1 className="font-serif text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">Doğrudan <span className="text-gold-400 italic">İletişim</span></h1>
                    <p className="text-olive-200 text-xl max-w-2xl font-light leading-relaxed italic">
                        Toptan veya perakende zeytinyağı talepleriniz için bize ulaşın. Ekibimiz size en kısa sürede dönüş yapacaktır.
                    </p>
                </div>
            </section>


            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-20">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-4xl font-serif font-black text-white mb-10 uppercase tracking-tight">Hızlı <span className="text-gold-400">Erişim</span></h2>

                            <div className="space-y-10">
                                <div className="flex items-start gap-6 group">
                                    <div className="w-16 h-16 bg-white/5 rounded-none flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-gold-400 group-hover:text-olive-950 transition-all duration-500 shadow-xl group-hover:shadow-gold-500/20">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-black text-white uppercase tracking-widest text-xs mb-2">Telefon & WhatsApp</h3>
                                        <p className="text-olive-200 text-xl font-serif mb-2 tracking-tight">{siteConfig.phone}</p>
                                        <a href={`https://wa.me/${siteConfig.whatsapp}`} className="text-gold-400 text-sm font-black uppercase tracking-widest hover:text-white transition-colors">Mesaj Gönder →</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-16 h-16 bg-white/5 rounded-none flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-gold-400 group-hover:text-olive-950 transition-all duration-500 shadow-xl group-hover:shadow-gold-500/20">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-black text-white uppercase tracking-widest text-xs mb-2">E-Posta</h3>
                                        <p className="text-olive-200 text-xl font-serif mb-2 tracking-tight">{siteConfig.email}</p>
                                        <p className="text-[10px] text-olive-500 font-bold uppercase tracking-widest leading-none">Merkezi Satış Ofisi</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="w-16 h-16 bg-white/5 rounded-none flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-gold-400 group-hover:text-olive-950 transition-all duration-500 shadow-xl group-hover:shadow-gold-500/20">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    <div>
                                        <h3 className="font-black text-white uppercase tracking-widest text-xs mb-2">Adres</h3>
                                        <p className="text-olive-200 text-xl font-serif mb-2 leading-tight tracking-tight">{siteConfig.address}</p>
                                        <p className="text-[10px] text-olive-500 font-bold uppercase tracking-widest leading-none">Aydın, Türkiye</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 p-10 bg-white/5 rounded-none border border-white/5 shadow-inner">
                                <h3 className="font-serif font-black text-white text-xl mb-4 uppercase tracking-tight">Toptan Satış <span className="text-gold-400 italic underline decoration-gold-400/30">Hattı</span></h3>
                                <p className="text-sm text-olive-300 leading-relaxed font-light italic">
                                    Toptan alımlarda fabrika satış fiyatları üzerinden özel iskonto seçenekleri mevcuttur. Miktarınıza göre en iyi teklifi almak için direkt arayabilirsiniz.
                                </p>
                            </div>
                        </div>

                        {/* Quick Contact Form */}
                        <div className="bg-white/5 rounded-none p-10 lg:p-14 border border-white/5 shadow-2xl backdrop-blur-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/5 blur-3xl rounded-full -mr-32 -mt-32"></div>
                            <h3 className="text-3xl font-serif font-black text-white mb-10 uppercase tracking-tighter leading-none relative z-10">Hızlı <span className="text-gold-400 italic">Teklif Formu</span></h3>
                            <form className="space-y-6 relative z-10">
                                <div className="space-y-2">
                                    <label className="block text-[10px] font-black text-olive-400 uppercase tracking-[0.3em]">Ad Soyad</label>
                                    <input type="text" className="w-full bg-black/40 px-6 py-5 rounded-none border border-white/10 text-white focus:border-gold-400 transition-all outline-none font-light italic lg:text-lg" placeholder="Adınızı giriniz..." />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-[10px] font-black text-olive-400 uppercase tracking-[0.3em]">Telefon</label>
                                    <input type="tel" className="w-full bg-black/40 px-6 py-5 rounded-none border border-white/10 text-white focus:border-gold-400 transition-all outline-none lg:text-lg" placeholder="05XX XXX XX XX" />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-[10px] font-black text-olive-400 uppercase tracking-[0.3em]">Miktar (Litre)</label>
                                    <select className="w-full bg-black/40 px-6 py-5 rounded-none border border-white/10 text-white focus:border-gold-400 transition-all outline-none lg:text-lg cursor-pointer appearance-none">
                                        <option className="bg-olive-900">Toptan (100+ Lt)</option>
                                        <option className="bg-olive-900">Orta Ölçek (10-100 Lt)</option>
                                        <option className="bg-olive-900">Perakende (1-10 Lt)</option>
                                    </select>
                                </div>
                                <button type="button" className="w-full bg-gold-400 hover:bg-gold-500 text-olive-950 font-black uppercase tracking-[0.2em] py-6 rounded-none transition-all shadow-xl shadow-gold-500/10 active:scale-[0.97] text-sm mt-4">
                                    WhatsApp ile Gönder
                                </button>
                                <p className="text-center text-[10px] text-olive-500 font-black uppercase tracking-widest mt-6">
                                    En geç 15 dakika içinde dönüş yapılır.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
