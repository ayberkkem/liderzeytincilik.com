import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { cities } from '@/lib/cities';

export const metadata: Metadata = {
    title: 'Hizmet Bölgelerimiz | Üreticiden Uygun Fiyatlı Zeytinyağı 81 İl',
    description: 'Lider Zeytincilik olarak Türkiye\'nin 81 iline üreticiden doğrudan, uygun fiyatlı ve kaliteli zeytinyağı gönderimi yapıyoruz. İstanbul, Ankara, İzmir ve tüm illerimiz için tıklayın.',
    alternates: {
        canonical: 'https://liderzeytincilik.com/bolgeler',
    },
};

export default function RegionsPage() {
    return (
        <div className="bg-olive-950 min-h-screen">
            <section className="bg-black/20 py-24 border-b border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/images/ancient-olive-tree.png')] bg-cover bg-center"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Hizmet Bölgelerimiz' }]} />
                    <h1 className="text-fluid-h1 font-serif font-black text-white mt-10 leading-none uppercase tracking-tighter">
                        81 İle <span className="text-gold-400 italic font-light">Doğrudan Gönderim</span>
                    </h1>
                    <p className="mt-8 text-olive-300 text-fluid-body font-light italic max-w-3xl mx-auto leading-relaxed">
                        Aydın ve Akhisar'ın en kaliteli zeytinlerinden elde edilen sızma zeytinyağlarımız, Türkiye'nin her noktasına aracısız, üretici fiyatlarıyla ulaşıyor.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-2xl font-serif font-black text-white mb-16 uppercase tracking-tight text-center">
                        Hizmet <span className="text-gold-400 italic">Bölgelerimiz</span>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                        {cities.map((city) => (
                            <Link
                                key={city.slug}
                                href={`/${city.slug}`}
                                className="bg-white/5 hover:bg-gold-400/10 border border-white/5 hover:border-gold-400/30 p-4 rounded-none transition-all group text-center"
                            >
                                <span className="text-[10px] text-gold-500/60 block mb-1 font-black tracking-widest uppercase">Zeytinyağı</span>
                                <span className="text-white group-hover:text-gold-400 font-bold transition-colors">{city.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-black/20 py-24 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="bg-white/5 rounded-none p-12 border border-white/10 shadow-3xl">
                        <h3 className="text-2xl font-serif font-black text-white mb-6 uppercase tracking-tight">Toptan Tedarik mi Arıyorsunuz?</h3>
                        <p className="text-olive-300 mb-10 italic font-light leading-relaxed text-lg">
                            Restoran, otel veya market işletmeniz için tonajlı alımlarda daha uygun fiyat teklifleri sunuyoruz. 81 il için ambar gönderimimiz mevcuttur.
                        </p>
                        <a
                            href="https://wa.me/905523828456"
                            className="inline-block bg-gold-400 hover:bg-gold-500 text-olive-950 font-black uppercase tracking-[0.2em] px-12 py-5 rounded-none transition-all shadow-xl shadow-gold-500/20 active:scale-95 text-xs"
                        >
                            WhatsApp Toptan Hattı
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
