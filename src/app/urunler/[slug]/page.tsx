import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import FAQSection from '@/components/FAQSection';
import { siteConfig } from '@/lib/siteConfig';

interface ProductData {
    slug: string;
    name: string;
    size: string;
    title: string;
    metaDescription: string;
    h1: string;
    icon: string;
    content: string;
    specs: { label: string; value: string }[];
    usageAreas: string[];
    faq: { question: string; answer: string }[];
}

const productData: Record<string, ProductData> = {
    '1-lt-zeytinyagi': {
        slug: '1-lt-zeytinyagi',
        name: '1 Lt Zeytinyağı',
        size: '1 Litre',
        title: 'Üreticiden Uygun Fiyatlı 1 Litre Zeytinyağı | Lider Zeytincilik',
        metaDescription: 'Üreticiden uygun fiyatlı 1 litre zeytinyağı. Soğuk sıkım natürel sızma zeytinyağı 1 lt ambalajda. Zeytinyağı Liderden Alınır! Ücretsiz kargo ile kapınıza teslimat.',
        h1: 'Üreticiden Uygun Fiyatlı 1 Litre Zeytinyağı',
        icon: '🫒',
        content: `1 litre zeytinyağımız, bireysel kullanım ve ürünümüzü denemek isteyen müşterilerimiz için ideal boyuttadır. Ege Bölgesi'nin en kaliteli zeytinlerinden soğuk sıkım yöntemiyle üretilen natürel sızma zeytinyağımız, 1 litrelik şişe ambalajda sunulmaktadır.

Bu ambalaj boyutu özellikle tek kişilik veya az kişilik haneler, zeytinyağımızı ilk kez denemek isteyenler ve hediye amaçlı alımlar için tercih edilmektedir. 1 litrelik ambalajımız, zeytinyağının tazeliğini ve kalitesini en iyi şekilde koruyan şişe ambalajda sunulmaktadır.

Lider Zeytincilik olarak 1 litrelik zeytinyağımızı Türkiye'nin her yerine ücretsiz kargo ile gönderiyoruz. Ürünlerimiz etiketsiz olarak gönderilmektedir, kendi markanızla etiketleme imkanı sunar.

Üretim sürecimizde zeytinler 27°C'nin altında, tamamen mekanik yöntemlerle sıkılmaktadır. Bu sayede zeytinin doğal vitaminleri, antioksidanları ve polifenolleri korunmaktadır. Asit oranımız %0.3-0.5 arasında olup, en yüksek kalite standartlarını karşılamaktadır.`,
        specs: [
            { label: 'Ambalaj', value: 'Şişe' },
            { label: 'Hacim', value: '1 Litre' },
            { label: 'Tür', value: 'Natürel Sızma / Soğuk Sıkım' },
            { label: 'Asit Oranı', value: '%0.3 - %0.5' },
            { label: 'Üretim', value: 'Soğuk Sıkım (27°C altı)' },
            { label: 'Menşei', value: 'Ege Bölgesi, Türkiye' },
            { label: 'Etiket', value: 'Etiketsiz' },
            { label: 'Raf Ömrü', value: '18 Ay' },
        ],
        usageAreas: [
            'Salatalar ve çeşniler',
            'Kahvaltılıklar',
            'Soğuk mezeler',
            'Son dokunuş olarak yemeklere ekleme',
            'Ekmek üzerine sürme',
            'Sağlıklı pişirme (düşük-orta ısıda)',
        ],
        faq: [
            {
                question: '1 litre zeytinyağı fiyatı nedir?',
                answer: 'Güncel 1 litre zeytinyağı fiyatımız için 0552 382 8456 WhatsApp hattımızdan bize ulaşabilirsiniz.',
            },
            {
                question: '1 litre zeytinyağı ne kadar süre dayanır?',
                answer: 'Uygun koşullarda (serin, karanlık ortam) 1 litrelik zeytinyağımız 18 ay boyunca kalitesini koruyabilir. Açıldıktan sonra 3-6 ay içinde tüketilmesi önerilir.',
            },
        ],
    },
    '5-lt-zeytinyagi': {
        slug: '5-lt-zeytinyagi',
        name: '5 Lt Zeytinyağı',
        size: '5 Litre',
        title: 'Üreticiden Uygun Fiyatlı 5 Litre Zeytinyağı | Lider Zeytincilik',
        metaDescription: 'Üreticiden uygun fiyatlı 5 litre zeytinyağı teneke ve PET ambalajda. Soğuk sıkım natürel sızma kalite. Zeytinyağı Liderden Alınır! Hemen sipariş verin.',
        h1: 'Üreticiden Uygun Fiyatlı 5 Litre Zeytinyağı',
        icon: '🏺',
        content: `5 litre zeytinyağımız, aileler ve küçük işletmeler için en çok tercih edilen ambalaj boyutumuzdur. Teneke ve PET olmak üzere iki farklı ambalaj seçeneğinde sunulmaktadır.

Teneke ambalaj, ışık geçirmez yapısı sayesinde zeytinyağının oksidasyonunu önler ve uzun süre kalitesini korumasını sağlar. PET ambalaj ise daha hafif ve ekonomik bir alternatif sunmaktadır.

5 litrelik zeytinyağımız Ege Bölgesi'nin en kaliteli zeytinlerinden soğuk sıkım yöntemiyle üretilmektedir. Her iki ambalaj seçeneğimiz de etiketsiz olarak gönderilmekte, bu sayede kendi markanızla etiketleme imkanı sunmaktadır.

Toptan alımlarda 5 litrelik ürünlerimiz için özel fiyatlandırma yapılmaktadır. Restoranlar, oteller, marketler ve gıda toptancıları için düzenli tedarik hizmeti sunuyoruz. Türkiye geneli ücretsiz kargo veya ambar gönderim seçenekleri mevcuttur.`,
        specs: [
            { label: 'Ambalaj', value: 'Teneke / PET' },
            { label: 'Hacim', value: '5 Litre' },
            { label: 'Tür', value: 'Natürel Sızma / Soğuk Sıkım' },
            { label: 'Asit Oranı', value: '%0.3 - %0.5' },
            { label: 'Üretim', value: 'Soğuk Sıkım (27°C altı)' },
            { label: 'Menşei', value: 'Ege Bölgesi, Türkiye' },
            { label: 'Etiket', value: 'Etiketsiz' },
            { label: 'Raf Ömrü', value: '18-24 Ay (teneke)' },
        ],
        usageAreas: [
            'Günlük mutfak kullanımı',
            'Salatalar ve çeşniler',
            'Pişirme ve kavurma',
            'Restoran ve lokanta kullanımı',
            'Private label satış',
            'Fason üretim',
        ],
        faq: [
            {
                question: '5 litre zeytinyağı fiyatı nedir?',
                answer: 'Güncel 5 litre zeytinyağı fiyatımız için 0552 382 8456 WhatsApp hattımızdan bize ulaşabilirsiniz. Toptan alımlarda pazarlık payı vardır.',
            },
            {
                question: '5 litre teneke mi PET mi tercih etmeliyim?',
                answer: 'Teneke ambalaj ışık geçirmez yapısı ile uzun süreli muhafaza için idealdir. PET ambalaj ise daha hafif ve ekonomiktir. Uzun süre saklamak istiyorsanız teneke, kısa sürede tüketecekseniz PET tercih edebilirsiniz.',
            },
        ],
    },
    '10-lt-zeytinyagi': {
        slug: '10-lt-zeytinyagi',
        name: '10 Lt Zeytinyağı',
        size: '10 Litre',
        title: 'Üreticiden Uygun Fiyatlı 10 Litre Zeytinyağı | Lider Zeytincilik',
        metaDescription: 'Üreticiden uygun fiyatlı 10 litre zeytinyağı toptan satış. Restoran ve işletmeler için ekonomik büyük ambalaj. Zeytinyağı Liderden Alınır! Ücretsiz kargo.',
        h1: 'Üreticiden Uygun Fiyatlı 10 Litre Zeytinyağı',
        icon: '🛢️',
        content: `10 litre zeytinyağımız, kalabalık aileler, restoranlar, oteller ve toplu tüketim yapan işletmeler için en ekonomik ambalaj seçeneğimizdir. Teneke ambalajda sunulan 10 litrelik zeytinyağımız, hem birim fiyat avantajı hem de uzun süreli kullanım imkanı sunar.

Lider Zeytincilik'in 10 litrelik zeytinyağı, Ege Bölgesi'nin en kaliteli zeytinlerinden soğuk sıkım yöntemiyle üretilmektedir. Etiketsiz teneke ambalajımız, kendi markanızla etiketleme imkanı sunarak private label satış yapmanıza olanak tanır.

10 litrelik ürünümüz özellikle toptan alımlarda en çok tercih edilen boyutumuzdur. Restoranlar, lokantalar, oteller, catering firmaları ve gıda toptancıları için düzenli tedarik hizmeti sunuyoruz.

Türkiye geneli ücretsiz kargo veya ambar gönderim seçenekleri ile 10 litrelik zeytinyağımızı kapınıza kadar ulaştırıyoruz. Toptan siparişlerde özel fiyatlandırma ve pazarlık payı mevcuttur.`,
        specs: [
            { label: 'Ambalaj', value: 'Teneke' },
            { label: 'Hacim', value: '10 Litre' },
            { label: 'Tür', value: 'Natürel Sızma / Soğuk Sıkım' },
            { label: 'Asit Oranı', value: '%0.3 - %0.5' },
            { label: 'Üretim', value: 'Soğuk Sıkım (27°C altı)' },
            { label: 'Menşei', value: 'Ege Bölgesi, Türkiye' },
            { label: 'Etiket', value: 'Etiketsiz' },
            { label: 'Raf Ömrü', value: '18-24 Ay' },
        ],
        usageAreas: [
            'Kalabalık aileler',
            'Restoranlar ve lokantalar',
            'Oteller ve tatil köyleri',
            'Catering firmaları',
            'Yemek fabrikaları',
            'Gıda toptancıları',
        ],
        faq: [
            {
                question: '10 litre zeytinyağı fiyatı nedir?',
                answer: 'Güncel 10 litre zeytinyağı fiyatımız için 0552 382 8456 WhatsApp hattımızdan bize ulaşabilirsiniz. Toptan alımlarda pazarlık payı vardır.',
            },
            {
                question: '10 litre zeytinyağı nasıl gönderiliyor?',
                answer: '10 litrelik ürünlerimiz kargo veya ambar ile gönderilmektedir. Her iki yöntemde de Türkiye geneli ücretsiz gönderim yapıyoruz.',
            },
        ],
    },
};

const productImages: Record<string, string> = {
    '1-lt-zeytinyagi': '/images/quality-inspection.png',
    '5-lt-zeytinyagi': '/images/product-tin-5l.jpg',
    '10-lt-zeytinyagi': '/images/factory-pallets.png',
};


export async function generateStaticParams() {
    return Object.keys(productData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const product = productData[slug];
    if (!product) return {};

    return {
        title: product.title,
        description: product.metaDescription,
        openGraph: {
            title: product.title,
            description: product.metaDescription,
            type: 'website',
        },
    };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = productData[slug];
    if (!product) notFound();

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.metaDescription,
        brand: { '@type': 'Brand', name: 'Lider Zeytincilik' },
        manufacturer: { '@type': 'Organization', name: 'Lider Zeytincilik' },
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'TRY',
            seller: { '@type': 'Organization', name: 'Lider Zeytincilik' },
        },
        category: 'Zeytinyağı',
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

            <section className="bg-black/20 py-16 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4">
                    <Breadcrumb items={[
                        { label: 'Ana Sayfa', href: '/' },
                        { label: 'Ürünler', href: '/urunler' },
                        { label: product.name },
                    ]} />
                </div>
            </section>


            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-20 items-start">
                        {/* Product Image */}
                        <div className="relative group overflow-hidden rounded-[60px] shadow-3xl border border-white/10 bg-white/5">
                            <img
                                src={productImages[slug] || '/images/product-tin-5l.jpg'}
                                alt={product.name}
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0"
                            />
                            <div className="absolute top-8 left-8 bg-gold-400 text-olive-950 px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl">
                                Üretimden Doğrudan
                            </div>
                            <div className="absolute bottom-8 right-8 glass p-6 rounded-[32px] backdrop-blur-xl border border-white/20 shadow-2xl">
                                <p className="text-white text-[10px] font-black uppercase tracking-[0.2em] leading-none mb-2">Ambalaj</p>
                                <p className="text-gold-400 font-serif font-black text-2xl leading-none">{product.specs.find(s => s.label === 'Ambalaj')?.value}</p>
                            </div>
                        </div>


                        {/* Product Info */}
                        <div className="pt-4">
                            <span className="inline-block bg-white/5 border border-white/10 text-gold-400 text-[10px] font-black px-5 py-2 rounded-full mb-8 uppercase tracking-[0.3em]">{product.size} Kapasite</span>
                            <h1 className="font-serif text-5xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter leading-none">{product.h1}</h1>

                            <div className="prose prose-invert mb-12 max-w-none">
                                {product.content.split('\n\n').map((p, i) => (
                                    <p key={i} className="text-olive-200 text-lg leading-relaxed font-light italic mb-6">
                                        {p}
                                    </p>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-6 mb-12">
                                <a
                                    href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Merhaba, ${product.name} hakkında bilgi almak istiyorum.`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 bg-gold-400 hover:bg-gold-500 text-olive-950 px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-gold-500/20 active:scale-95 text-sm"
                                >
                                    Fiyat Bilgisi Al
                                </a>
                                <a
                                    href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                                    className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all border border-white/10 active:scale-95 text-sm"
                                >
                                    📞 Ara: {siteConfig.phone}
                                </a>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 text-xs font-black uppercase tracking-[0.2em] text-gold-400 italic text-center">
                                Toptan alımlarda fabrika satış fiyatları ve özel iskontolar uygulanmaktadır.
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Delivery Context */}
            <section className="bg-olive-900 py-12 relative overflow-hidden">
                <img src="/images/delivery-van-plain.png" alt="Sevkiyat" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full mb-6">
                        <span className="text-lg">🚚</span>
                        <span className="text-white font-bold tracking-tight">Türkiye&apos;nin 81 İline Güvenli Sevkiyat</span>
                    </div>
                </div>
            </section>


            {/* Specs & Usage */}
            <section className="py-24 bg-black/20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Technical Specs */}
                        <div className="glass-card rounded-[40px] p-10 border border-white/5 bg-white/5">
                            <h2 className="font-serif text-3xl font-black text-white mb-8 uppercase tracking-tight leading-none">Teknik <span className="text-gold-400 italic">Detaylar</span></h2>
                            <div className="space-y-4">
                                {product.specs.map((spec, i) => (
                                    <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0 group">
                                        <span className="text-olive-400 text-xs font-black uppercase tracking-widest">{spec.label}</span>
                                        <span className="text-white font-serif font-black tracking-tight group-hover:text-gold-400 transition-colors uppercase">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Usage Areas */}
                        <div className="glass-card rounded-[40px] p-10 border border-white/5 bg-white/5">
                            <h2 className="font-serif text-3xl font-black text-white mb-8 uppercase tracking-tight leading-none">Mutfakta <span className="text-gold-400 italic">Kullanım</span></h2>
                            <ul className="space-y-6">
                                {product.usageAreas.map((area, i) => (
                                    <li key={i} className="flex items-start gap-5 group">
                                        <span className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-[10px] text-gold-400 font-black border border-white/10 group-hover:bg-gold-400 group-hover:text-olive-950 transition-all font-sans">{i + 1}</span>
                                        <p className="text-olive-200 font-light italic leading-relaxed group-hover:text-white transition-colors">{area}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* FAQ */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <FAQSection items={product.faq} title={`${product.name} - Merak Edilenler`} />
                </div>
            </section>

        </>
    );
}
