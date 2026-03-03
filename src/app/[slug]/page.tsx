import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import FAQSection from '@/components/FAQSection';
import { cities, getCityBySlug, cityPageVariants, getCityVariantData } from '@/lib/cities';
import { siteConfig } from '@/lib/siteConfig';

export async function generateStaticParams() {
    const params: { slug: string }[] = [];

    cities.forEach(city => {
        // Basic city page: /aydin-zeytinyagi
        params.push({ slug: city.slug });

        // Variant pages: /aydin-zeytinyagi-uretici, /aydin-zeytinyagi-toptan, etc.
        cityPageVariants.forEach(variant => {
            params.push({ slug: `${city.slug}-${variant}` });
        });
    });

    return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;

    // Try finding base city
    let city = getCityBySlug(slug);
    let variant: typeof cityPageVariants[number] | null = null;

    // If not found, check if it's a variant
    if (!city) {
        for (const v of cityPageVariants) {
            if (slug.endsWith(`-${v}`)) {
                const baseSlug = slug.replace(`-${v}`, '');
                city = getCityBySlug(baseSlug);
                variant = v;
                break;
            }
        }
    }

    if (!city) return {};

    if (variant) {
        const variantData = getCityVariantData(city, variant);
        return {
            title: variantData.title,
            description: variantData.description,
            alternates: { canonical: `${siteConfig.url}/${slug}` },
        };
    }

    return {
        title: `Üreticiden Uygun Fiyatlı Zeytinyağı ${city.name} | Lider Zeytincilik`,
        description: city.description,
        alternates: { canonical: `${siteConfig.url}/${city.slug}` },
    };
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    let city = getCityBySlug(slug);
    let variant: typeof cityPageVariants[number] | null = null;

    if (!city) {
        for (const v of cityPageVariants) {
            if (slug.endsWith(`-${v}`)) {
                const baseSlug = slug.replace(`-${v}`, '');
                city = getCityBySlug(baseSlug);
                variant = v;
                break;
            }
        }
    }

    if (!city) notFound();

    const pageTitle = variant
        ? getCityVariantData(city, variant).h1
        : `Üreticiden Uygun Fiyatlı Zeytinyağı ${city.name}`;

    return (
        <>
            <section className="bg-black/20 py-20 border-b border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/images/ancient-olive-tree.png')] bg-cover bg-center"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <Breadcrumb items={[
                        { label: 'Ana Sayfa', href: '/' },
                        { label: city.name }
                    ]} />
                    <h1 className="text-4xl md:text-7xl font-serif font-black text-white mt-10 leading-none uppercase tracking-tighter">
                        {pageTitle}
                    </h1>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <span className="bg-white/5 backdrop-blur-xl px-6 py-2 rounded-2xl text-xs font-black uppercase tracking-[0.2em] text-olive-300 border border-white/10">
                            📍 {city.region}
                        </span>
                        <span className="bg-white/5 backdrop-blur-xl px-6 py-2 rounded-2xl text-xs font-black uppercase tracking-[0.2em] text-gold-400 border border-white/10 shadow-xl shadow-gold-500/5">
                            🚚 Ücretsiz Kargo
                        </span>
                    </div>
                </div>
            </section>


            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-20">
                        {/* SEO Content */}
                        <div className="lg:col-span-2">
                            <div
                                className="prose prose-invert prose-lg max-w-none hover:prose-a:text-gold-400 transition-all font-light italic leading-relaxed text-olive-200 prose-h2:font-serif prose-h2:font-black prose-h2:text-4xl prose-h2:text-white prose-h2:uppercase prose-h2:tracking-tight"
                                dangerouslySetInnerHTML={{ __html: formatCityContent(city.content) }}
                            />

                            <div className="mt-20 bg-white/5 rounded-[60px] p-10 md:p-14 border border-white/5 shadow-inner">
                                <h3 className="text-3xl font-serif font-black text-white mb-10 uppercase tracking-tight">Neden <span className="text-gold-400 italic">Lider Zeytincilik?</span></h3>
                                <div className="grid sm:grid-cols-2 gap-10">
                                    {[
                                        { t: 'Doğal Üretim', d: 'Herhangi bir katkı maddesi içermeyen, %100 saf zeytinyağı.' },
                                        { t: 'Kaliteli Hammadde', d: "Ege'nin en iyi zeytinlerinden özenle seçilerek üretilir." },
                                        { t: 'Güvenli Sevkiyat', d: 'Özel ambalajlar ve güvenli lojistik ağımız ile sorunsuz teslimat.' },
                                        { t: 'Fabrika Fiyatı', d: 'Aracısız, doğrudan üretimden gelen maliyet avantajı.' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="w-12 h-12 bg-gold-400/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-gold-400 group-hover:bg-gold-400 group-hover:text-olive-950 transition-all duration-300 font-bold border border-gold-400/20 shadow-xl group-hover:shadow-gold-500/20">✓</div>
                                            <div>
                                                <h4 className="font-black text-white mb-2 uppercase tracking-widest text-xs">{item.t}</h4>
                                                <p className="text-sm text-olive-400 leading-relaxed italic">{item.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Sticky CTA */}
                        <aside className="lg:col-span-1">
                            <div className="sticky top-24 space-y-10">
                                <div className="bg-white/5 backdrop-blur-xl rounded-[60px] p-10 border border-white/10 shadow-3xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
                                    <h3 className="text-3xl font-serif font-black text-white mb-4 uppercase tracking-tighter leading-none">Hemen <span className="text-gold-400 italic font-light">Başlayın</span></h3>
                                    <p className="text-olive-400 text-sm mb-10 font-light italic">{city.name} ve çevresine özel fiyatlarımızı öğrenin.</p>

                                    <div className="space-y-6">
                                        <a
                                            href={`https://wa.me/${siteConfig.whatsapp}`}
                                            className="flex items-center justify-center gap-3 bg-gold-400 hover:bg-gold-500 text-olive-950 font-black uppercase tracking-[0.2em] py-5 rounded-2xl transition-all shadow-xl shadow-gold-500/20 active:scale-95 text-xs"
                                        >
                                            Teklif İste
                                        </a>
                                        <a
                                            href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                                            className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl transition-all border border-white/10 active:scale-95 text-xs"
                                        >
                                            📞 Hemen Ara
                                        </a>
                                    </div>

                                    <div className="mt-12 pt-10 border-t border-white/5">
                                        <p className="text-[10px] text-olive-500 font-black uppercase tracking-[0.3em] mb-6 text-center">Hizmet Alanlarımız</p>
                                        <div className="flex flex-wrap justify-center gap-3">
                                            {['Otel', 'Restoran', 'Market', 'Bireysel', 'Toptan'].map(tag => (
                                                <span key={tag} className="text-[9px] font-black uppercase tracking-[0.1em] bg-white/5 text-olive-300 px-3 py-1.5 rounded-lg border border-white/5">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gold-400 rounded-[60px] p-10 text-olive-950 relative overflow-hidden group shadow-2xl shadow-gold-500/20">
                                    <div className="relative z-10">
                                        <h4 className="text-2xl font-serif font-black mb-3 uppercase tracking-tight">Toptan <span className="italic">İndirimi</span></h4>
                                        <p className="text-sm text-olive-900 leading-relaxed font-bold italic mb-6">Yüksek tonajlı sevkiyat kapasitemiz ve üretici avantajımızla yanınızdayız.</p>
                                    </div>
                                    <div className="absolute -bottom-6 -right-6 text-8xl opacity-10 transform -rotate-12 group-hover:rotate-6 transition-all duration-1000 grayscale group-hover:grayscale-0">💰</div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>


            {/* City Specific FAQ */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <FAQSection items={city.faq} title={`${city.name} Zeytinyağı Merak Edilenler`} />
                </div>
            </section>

        </>
    );
}

function formatCityContent(content: string): string {
    return content
        .replace(/^# (.+)$/gm, '<h1 class="hidden">$1</h1>')
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/^\- (.+)$/gm, '<li>$1</li>')
        .replace(/^✅ (.+)$/gm, '<li class="list-none flex gap-2"><span>✅</span>$1</li>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/^(?!<[hulo])/gm, '<p>')
        .replace(/(<p>)+/g, '<p>')
        .replace(/(<\/p>)+/g, '</p>');
}
