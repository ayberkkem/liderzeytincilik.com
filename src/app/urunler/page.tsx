import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
    title: 'Zeytinyağı Ürünleri | 1 Lt, 5 Lt, 10 Lt Zeytinyağı',
    description: 'Lider Zeytincilik zeytinyağı ürünleri. 1 Lt, 5 Lt ve 10 Lt ambalaj seçeneklerinde soğuk sıkım natürel sızma zeytinyağı. Etiketsiz ambalaj, ücretsiz kargo.',
    openGraph: {
        title: 'Zeytinyağı Ürünleri | Lider Zeytincilik',
        description: 'Lider Zeytincilik zeytinyağı ürünleri. 1 Lt, 5 Lt ve 10 Lt ambalaj seçenekleri.',
    },
};

const products = [
    {
        slug: '1-lt-zeytinyagi',
        name: '1 Lt Zeytinyağı',
        size: '1 Litre',
        icon: '🫒',
        description: 'Bireysel kullanım için ideal boyut. Soğuk sıkım, natürel sızma zeytinyağımızı denemek isteyenler için.',
        features: ['Soğuk sıkım üretim', 'Düşük asit oranı', 'Bireysel kullanıma uygun', 'Hediye alternatifi'],
    },
    {
        slug: '5-lt-zeytinyagi',
        name: '5 Lt Zeytinyağı',
        size: '5 Litre',
        icon: '🏺',
        description: 'Aileler ve küçük işletmeler için ideal boyut. Teneke ve PET ambalaj seçenekleri ile sunalmaktadır.',
        features: ['Teneke ve PET seçeneği', 'Işık geçirmez ambalaj', 'Etiketsiz gönderim', 'Private label uygun'],
    },
    {
        slug: '10-lt-zeytinyagi',
        name: '10 Lt Zeytinyağı',
        size: '10 Litre',
        icon: '🛢️',
        description: 'İşletmeler ve kalabalık aileler için ekonomik büyük ambalaj. Toptan alımlarda özel fiyat.',
        features: ['En ekonomik seçenek', 'Restoran ve oteller için', 'Toptan fiyat avantajı', 'Ambar gönderim seçeneği'],
    },
];

export default function ProductsPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative py-24 overflow-hidden bg-olive-900">
                <div className="absolute inset-0 z-0">
                    <img src="/images/tins-in-grove.png" alt="Zeytinyağı Tenekelerimiz" className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-r from-olive-950 via-olive-950/80 to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Ürünler' }]} />
                    <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tight">Zeytinyağı <span className="text-gold-400">Koleksiyonu</span></h1>
                    <p className="text-olive-100 text-xl max-w-2xl leading-relaxed">
                        Tarladan doğrudan, en saf haliyle. İster 1 litre ister 1000 litre; aradığınız tüm boyutlarda natürel sızma zeytinyağı.
                    </p>
                </div>
            </section>


            {/* Products Grid */}
            <section className="py-24">

                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                ...products[0],
                                img: '/images/quality-inspection.png'
                            },
                            {
                                ...products[1],
                                img: '/images/product-tin-5l.jpg'
                            },
                            {
                                ...products[2],
                                img: '/images/factory-pallets.png'
                            }
                        ].map((product) => (
                            <Link
                                key={product.slug}
                                href={`/urunler/${product.slug}`}
                                className="glass-card rounded-[40px] overflow-hidden group hover:-translate-y-3 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/5 flex flex-col"
                            >
                                <div className="h-80 overflow-hidden relative">
                                    <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0" />
                                    <div className="absolute top-6 left-6 bg-gold-400 text-olive-950 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-2xl">
                                        Üretici Fiyatı
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-olive-950 via-olive-950/20 to-transparent"></div>
                                </div>
                                <div className="p-10 flex-grow">
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="inline-block bg-white/5 text-gold-400 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] border border-white/10 shrink-0">{product.size}</span>
                                        <span className="text-3xl filter saturate-0 group-hover:saturate-100 transition-all">{product.icon}</span>
                                    </div>
                                    <h2 className="text-3xl font-serif font-black text-white mb-4 tracking-tighter uppercase leading-none">{product.name}</h2>
                                    <p className="text-olive-300 text-sm mb-8 leading-relaxed line-clamp-2 font-light italic">
                                        {product.description}
                                    </p>
                                    <ul className="space-y-4 mb-10">
                                        {product.features.map((f, i) => (
                                            <li key={i} className="flex items-center gap-4 text-xs text-olive-200 font-black uppercase tracking-widest group-hover:text-white transition-colors">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gold-400"></div> {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex items-center justify-between pt-8 border-t border-white/5 mt-auto">
                                        <div className="text-[10px] text-olive-400 font-bold uppercase tracking-[0.2em] group-hover:text-gold-400 transition-colors">Teklif Al →</div>
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:bg-gold-400 group-hover:text-olive-950 transition-all shadow-xl group-hover:shadow-gold-500/20">❯</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>



                    {/* Additional Info */}
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="glass-card rounded-[40px] p-10 border border-white/5 relative overflow-hidden group">
                            <div className="relative z-10">
                                <h3 className="font-serif font-black text-white text-2xl mb-4 group-hover:text-gold-400 transition-colors uppercase tracking-tight">📦 Daha Fazla Miktar</h3>
                                <p className="text-olive-300 mb-8 leading-relaxed font-light italic">
                                    10 litreden büyük miktarlar için özel fiyatlandırma yapılmaktadır. Toptan sipariş ve özel ambalaj talepleri için bizimle iletişime geçiniz.
                                </p>
                                <a
                                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Merhaba, büyük miktarda zeytinyağı siparişi hakkında bilgi almak istiyorum.')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-gold-400 hover:bg-gold-500 text-olive-950 px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-gold-500/10 active:scale-95"
                                >
                                    Fiyat Teklifi Al
                                </a>
                            </div>
                        </div>
                        <div className="glass-card rounded-[40px] p-10 border border-white/5 relative overflow-hidden group">
                            <div className="relative z-10">
                                <h3 className="font-serif font-black text-white text-2xl mb-4 group-hover:text-gold-400 transition-colors uppercase tracking-tight">🏷️ Etiketsiz Ambalaj</h3>
                                <p className="text-olive-300 mb-6 leading-relaxed font-light italic">
                                    Tüm ürünlerimiz etiketsiz olarak gönderilmektedir. Bu sayede:
                                </p>
                                <ul className="space-y-4 text-xs font-black uppercase tracking-[0.2em] text-olive-400">
                                    <li className="flex items-center gap-3">
                                        <span className="w-1 h-1 rounded-full bg-gold-500"></span>
                                        Kendi markanızı oluşturabilirsiniz
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1 h-1 rounded-full bg-gold-500"></span>
                                        Private label satış yapabilirsiniz
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-1 h-1 rounded-full bg-gold-500"></span>
                                        Fason üretim olarak kullanabilirsiniz
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
