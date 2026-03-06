import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
    title: 'Hakkımızda | Lider Zeytincilik',
    description: 'Lider Zeytincilik olarak Ege\'nin bereketli topraklarında geleneksel ve modern yöntemleri birleştirerek en kaliteli zeytinyağını üretiyoruz. Hikayemiz ve vizyonumuz.',
};

export default function AboutPage() {
    return (
        <>
            <section className="relative py-24 overflow-hidden bg-olive-900">
                <div className="absolute inset-0 z-0">
                    <img src="/images/ancient-olive-tree.png" alt="Zeytin Bahçesi" className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-t from-olive-950 to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Hakkımızda' }]} />
                    <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight">Köklerimizden <span className="text-gold-400 italic">Geleceğe</span></h1>
                    <p className="text-olive-100 text-xl max-w-2xl leading-relaxed font-light">
                        Ege&apos;nin bereketli topraklarından, nesiller boyu aktarılan tecrübeyle süzülen bir başarı hikayesi.
                    </p>
                </div>
            </section>


            <section className="py-32">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute -inset-4 bg-gold-500/10 blur-2xl rounded-none"></div>
                            <img src="/images/traditional-harvest.png" alt="Geleneksel Hasat" className="relative rounded-none shadow-2xl border border-white/10" />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-5xl md:text-6xl font-serif font-black text-white mb-10 leading-tight uppercase tracking-tighter">Zeytine Duyulan <br /><span className="text-gold-400 italic">Derin Saygı</span></h2>
                            <p className="text-olive-200 leading-relaxed mb-8 text-xl font-light">
                                Lider Zeytincilik, Ege Bölgesi&apos;nin kalbi Aydın ve Akhisar da temelleri atılan, nesillerdir zeytincilikle uğraşan bir ailenin tecrübesini kurumsal bir yapıya taşıma vizyonuyla kurulmuştur.
                            </p>
                            <p className="text-olive-300 leading-relaxed mb-12 text-lg font-light italic">
                                Bizim için zeytin, sadece bir meyve değil; sabrın, bereketin ve sağlığın simgesidir. Bu yüzden her bir taneye, toprağın bize sunduğu en değerli emanet olarak bakıyoruz.
                            </p>
                            <div className="flex gap-6">
                                <div className="p-8 bg-white/5 rounded-none border border-white/5 flex-1 text-center backdrop-blur-sm">
                                    <h4 className="font-serif font-black text-gold-400 text-4xl mb-2">20+</h4>
                                    <p className="text-olive-400 text-[10px] font-black uppercase tracking-[0.3em]">Yıllık Tecrübe</p>
                                </div>
                                <div className="p-8 bg-gold-400/10 rounded-none border border-gold-400/20 flex-1 text-center backdrop-blur-sm">
                                    <h4 className="font-serif font-black text-gold-400 text-4xl mb-2">81</h4>
                                    <p className="text-olive-400 text-[10px] font-black uppercase tracking-[0.3em]">İle Sevkiyat</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-serif font-black text-white mb-10 leading-tight uppercase tracking-tighter">Modern Teknoloji <br /><span className="text-olive-500 italic">Saf Üretim</span></h2>
                            <p className="text-olive-200 leading-relaxed mb-10 text-xl font-light">
                                Geleneksel yöntemlerin sıcaklığını, modern dünyanın hijyen ve hız standartlarıyla birleştiriyoruz. Aydın ve Akhisar daki tam entegre tesislerimizde, her zeytini kimyasal işlem görmeden, soğuk sıkım teknolojisiyle yağa dönüştürüyoruz.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-8 my-12">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-8 h-8 rounded-none bg-gold-400/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-400 group-hover:text-olive-950 transition-all font-bold text-xs">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <p className="text-olive-100 font-black uppercase tracking-widest text-xs">Tam Otomatik Dolum</p>
                                    </div>
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-8 h-8 rounded-none bg-gold-400/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-400 group-hover:text-olive-950 transition-all font-bold text-xs">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <p className="text-olive-100 font-black uppercase tracking-widest text-xs">Laboratuvar Onaylı</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-8 h-8 rounded-none bg-gold-400/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-400 group-hover:text-olive-950 transition-all font-bold text-xs">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <p className="text-olive-100 font-black uppercase tracking-widest text-xs">Polifenol Koruma</p>
                                    </div>
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-8 h-8 rounded-none bg-gold-400/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-400 group-hover:text-olive-950 transition-all font-bold text-xs">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <p className="text-olive-100 font-black uppercase tracking-widest text-xs">Asetik Asit Kontrolü</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-olive-500/10 blur-2xl rounded-none"></div>
                            <img src="/images/modern-warehouse.png" alt="Modern Depo ve Teknoloji" className="relative rounded-none shadow-2xl border border-white/10" />
                        </div>
                    </div>
                </div>
            </section>


            {/* Distribution Network */}
            <section className="py-32 bg-black/20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1 relative group">
                            <div className="absolute inset-0 bg-gold-400/5 rounded-none blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <img src="/images/delivery-van-branded.png" alt="Lider Zeytincilik Filosu" className="relative rounded-none shadow-2xl border border-white/5" />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-5xl md:text-6xl font-serif font-black text-white mb-10 leading-tight uppercase tracking-tighter">Geniş Dağıtım <br /><span className="text-gold-400 italic">Güçlü Tedarik</span></h2>
                            <p className="text-olive-200 leading-relaxed mb-10 text-xl font-light">
                                Üretim gücümüzü, Türkiye&apos;nin her noktasına ulaşan lojistik ağımızla birleştiriyoruz. Kendi araç filomuz ve anlaşmalı lojistik partnerlerimizle, siparişlerinizi en güvenli ve hızlı şekilde kapınıza ulaştırıyoruz.
                            </p>
                            <div className="bg-white/5 p-8 rounded-none border border-white/10 flex items-center gap-8 mb-10 hover:bg-white/10 transition-colors">
                                <img src="/images/retail-boxes-2.png" alt="Sevkiyat Hazırlığı" className="w-32 h-32 object-cover rounded-none shadow-2xl" />
                                <div>
                                    <h4 className="font-serif font-black text-white text-xl mb-2">Mağaza ve Market Çözümleri</h4>
                                    <p className="text-olive-400 text-sm font-light leading-relaxed">Raf satışı için hazır, özel kolili paketleme seçenekleri ile projenize değer katıyoruz.</p>
                                </div>
                            </div>
                            <p className="text-olive-300 leading-relaxed text-lg font-light italic">
                                İster bireysel tüketici olun, ister binlerce müşteriye hizmet veren bir zincir; Lider Zeytincilik kalitesine her zaman aynı hızda ulaşabilirsiniz.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Production Journey Collage */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-24">
                        <span className="text-gold-400 text-sm font-black uppercase tracking-[0.4em] mb-6 block">Süreç ve Kalite Odaklı</span>
                        <h2 className="font-serif text-5xl md:text-7xl font-black text-white mb-10 leading-tight uppercase tracking-tighter">Bahçeden Sofraya <br /><span className="text-gold-400 italic">Kusursuz Yolculuk</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-none group border border-white/5 relative">
                            <div className="absolute inset-0 bg-olive-950/20 group-hover:bg-transparent transition-colors z-10"></div>
                            <img src="/images/process-collage.png" alt="Üretim Süreci" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                        </div>
                        <div className="overflow-hidden rounded-none group h-72 border border-white/5 relative">
                            <img src="/images/extraction-process.png" alt="Sıkım İşlemi" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                        </div>
                        <div className="overflow-hidden rounded-none group h-72 border border-white/5 relative">
                            <img src="/images/filling-conveyor.png" alt="Dolum" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                        </div>
                        <div className="overflow-hidden rounded-none group h-72 border border-white/5 relative">
                            <img src="/images/quality-inspection.png" alt="Kontrol" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                        </div>
                        <div className="overflow-hidden rounded-none group h-72 border border-white/5 relative">
                            <img src="/images/team-packing.png" alt="Paketleme" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                        </div>
                    </div>
                </div>
            </section>



            <section className="py-32">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-5xl font-serif font-black text-white mb-10 uppercase tracking-tighter">Üretim <span className="text-gold-400 italic font-light italic">Felsefemiz</span></h2>
                    <p className="text-olive-200 leading-relaxed mb-8 text-xl font-light">
                        Kaliteli bir zeytinyağının sırrının "dürüstlük" olduğuna inanıyoruz. Bu yüzden üretim sürecimizin her aşamasında şeffaflığı esas alıyoruz:
                    </p>
                    <ul className="text-olive-200 mb-16 space-y-4">
                        <li className="flex items-center gap-4 group">
                            <span className="w-1.5 h-1.5 rounded-none bg-gold-400 group-hover:scale-150 transition-transform"></span>
                            <p><strong className="text-white font-black uppercase tracking-widest text-[10px] mr-2">Doğru Hasat:</strong> Zeytinleri en yüksek polifenol seviyesinde topluyoruz.</p>
                        </li>
                        <li className="flex items-center gap-4 group">
                            <span className="w-1.5 h-1.5 rounded-none bg-gold-400 group-hover:scale-150 transition-transform"></span>
                            <p><strong className="text-white font-black uppercase tracking-widest text-[10px] mr-2">Soğuk Sıkım:</strong> Sıcaklığın 27°C&apos;yi aşmamasını sağlıyoruz.</p>
                        </li>
                        <li className="flex items-center gap-4 group">
                            <span className="w-1.5 h-1.5 rounded-none bg-gold-400 group-hover:scale-150 transition-transform"></span>
                            <p><strong className="text-white font-black uppercase tracking-widest text-[10px] mr-2">Sıfır İlaç:</strong> Hiçbir kimyasal koruyucu veya katkı maddesi kullanmıyoruz.</p>
                        </li>
                    </ul>

                    <div className="bg-olive-900 rounded-none p-8 md:p-20 text-white text-center relative overflow-hidden border border-white/10 shadow-3xl">
                        <img src="/images/factory-pallets.png" alt="Toptan Kapasite" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none scale-125 rotate-2" />
                        <div className="relative z-10">
                            <h3 className="text-4xl md:text-5xl font-serif font-black mb-8 leading-tight tracking-tighter uppercase">Toptan ve Private Label <br /><span className="text-gold-400 italic">Çözümleri</span></h3>
                            <p className="text-olive-100 mb-12 max-w-2xl mx-auto text-xl leading-relaxed font-light italic">
                                Kendi markanızı oluşturmak veya işletmenizde en kaliteli yağı kullanmak isterseniz, size özel üretim ve ambalaj çözümleri sunuyoruz.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <a href={`https://wa.me/${siteConfig.whatsapp}`} className="inline-flex items-center justify-center bg-gold-400 hover:bg-gold-500 text-olive-950 font-black uppercase tracking-[0.2em] text-sm px-12 py-5 rounded-none transition-all shadow-xl shadow-gold-500/20 active:scale-95">
                                    Teklif Alın
                                </a>
                                <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-[0.2em] text-sm px-12 py-5 rounded-none transition-all backdrop-blur-md border border-white/10 active:scale-95">
                                    Bizi Arayın
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
