import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import FAQSection from '@/components/FAQSection';
import { categories, getCategoryBySlug, getAllCategorySlugs } from '@/lib/categories';
import { siteConfig } from '@/lib/siteConfig';

export async function generateStaticParams() {
    return getAllCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const category = getCategoryBySlug(slug);
    if (!category) return {};

    return {
        title: category.title,
        description: category.metaDescription,
        openGraph: {
            title: category.title,
            description: category.metaDescription,
            type: 'article',
        },
        alternates: {
            canonical: `${siteConfig.url}/kategori/${slug}`,
        },
    };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const category = getCategoryBySlug(slug);
    if (!category) notFound();

    const otherCategories = categories.filter((c) => c.slug !== slug).slice(0, 4);

    return (
        <>
            <section className="bg-black/20 py-16 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4">
                    <Breadcrumb items={[
                        { label: 'Ana Sayfa', href: '/' },
                        { label: 'Kategoriler', href: '/kategori' },
                        { label: category.name },
                    ]} />
                </div>
            </section>


            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-20">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <h1 className="font-serif text-5xl md:text-6xl font-black text-white mb-10 uppercase tracking-tighter leading-none">{category.h1}</h1>
                            <div className="prose prose-invert prose-lg max-w-none text-olive-200 font-light italic leading-relaxed" dangerouslySetInnerHTML={{ __html: formatContent(category.content) }} />
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <div className="sticky top-24 space-y-10">
                                {/* CTA Card */}
                                <div className="bg-white/5 rounded-[40px] p-8 border border-white/10 shadow-3xl text-white relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
                                    <h3 className="font-serif font-black text-xl mb-3 uppercase tracking-tight">Hemen <span className="text-gold-400 italic">Sipariş</span></h3>
                                    <p className="text-olive-400 text-sm mb-8 font-light italic leading-relaxed">
                                        Fiyat bilgisi ve toptan avantajlarımız için WhatsApp hattımızdan bizimle iletişime geçin.
                                    </p>
                                    <a
                                        href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Merhaba, ${category.name} hakkında bilgi almak istiyorum.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full text-center bg-gold-400 hover:bg-gold-500 text-olive-950 py-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all text-xs shadow-xl shadow-gold-500/10 active:scale-95"
                                    >
                                        WhatsApp ile İletişim
                                    </a>
                                    <a
                                        href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                                        className="block w-full text-center bg-white/5 hover:bg-white/10 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all border border-white/5 text-xs mt-4 active:scale-95"
                                    >
                                        📞 {siteConfig.phone}
                                    </a>
                                </div>

                                {/* Trust Info */}
                                <div className="bg-white/5 rounded-[40px] p-8 border border-white/5 shadow-inner">
                                    <h3 className="font-serif font-black text-white text-lg mb-6 uppercase tracking-tight">Sözümüz</h3>
                                    <ul className="space-y-4">
                                        {[
                                            'Ücretsiz Kargo Avantajı',
                                            'Üretimden Doğrudan Tedarik',
                                            'Markasız / Etiketsiz Ambalaj',
                                            'Toptan Alımda Özel İskonto',
                                            'Güvenli Sevkiyat (Ambar)'
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-olive-300">
                                                <span className="text-gold-400 text-base">●</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Related Categories */}
                                <div className="bg-white/5 rounded-[40px] p-8 border border-white/5 shadow-inner">
                                    <h3 className="font-serif font-black text-white text-lg mb-6 uppercase tracking-tight">Kategoriler</h3>
                                    <ul className="space-y-4">
                                        {otherCategories.map((cat) => (
                                            <li key={cat.slug}>
                                                <Link href={`/kategori/${cat.slug}`} className="text-xs font-black uppercase tracking-[0.1em] text-olive-400 hover:text-gold-400 transition-colors flex items-center justify-between group">
                                                    {cat.name} <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>


            {/* FAQ */}
            {category.faq.length > 0 && (
                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-4">
                        <FAQSection items={category.faq} title={`${category.name} Merak Edilenler`} />
                    </div>
                </section>
            )}

        </>
    );
}

function formatContent(content: string): string {
    return content
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/^\- (.+)$/gm, '<li>$1</li>')
        .replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>')
        .replace(/\| (.+) \|/g, (match) => match) // keep tables
        .replace(/\n\n/g, '</p><p>')
        .replace(/^(?!<[hulo])/gm, '<p>')
        .replace(/(<p>)+/g, '<p>')
        .replace(/(<\/p>)+/g, '</p>');
}
