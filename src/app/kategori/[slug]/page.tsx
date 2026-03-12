import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import FAQSection from '@/components/FAQSection';
import { categories, getCategoryBySlug, getAllCategorySlugs } from '@/lib/categories';
import { blogPosts } from '@/lib/blogPosts';
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
                                <div className="bg-white/5 rounded-none p-8 border border-white/10 shadow-3xl text-white relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
                                    <h3 className="font-serif font-black text-xl mb-3 uppercase tracking-tight">Hemen <span className="text-gold-400 italic">Sipariş</span></h3>
                                    <p className="text-olive-400 text-sm mb-8 font-light italic leading-relaxed">
                                        Fiyat bilgisi ve toptan avantajlarımız için WhatsApp hattımızdan bizimle iletişime geçin.
                                    </p>
                                    <a
                                        href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Merhaba, ${category.name} hakkında bilgi almak istiyorum.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full text-center bg-gold-400 hover:bg-gold-500 text-olive-950 py-5 rounded-none font-black uppercase tracking-[0.2em] transition-all text-xs shadow-xl shadow-gold-500/10 active:scale-95"
                                    >
                                        WhatsApp ile İletişim
                                    </a>
                                    <a
                                        href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                                        className="block w-full text-center bg-white/5 hover:bg-white/10 text-white py-5 rounded-none font-black uppercase tracking-[0.2em] transition-all border border-white/5 text-xs mt-4 active:scale-95 flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        {siteConfig.phone}
                                    </a>
                                </div>

                                {/* Trust Info */}
                                <div className="bg-white/5 rounded-none p-8 border border-white/5 shadow-inner">
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
                                <div className="bg-white/5 rounded-none p-8 border border-white/5 shadow-inner">
                                    <h3 className="font-serif font-black text-white text-lg mb-6 uppercase tracking-tight">Kategoriler</h3>
                                    <ul className="space-y-4">
                                        {otherCategories.map((cat) => (
                                            <li key={cat.slug}>
                                                <Link href={`/kategori/${cat.slug}`} className="text-xs font-black uppercase tracking-[0.1em] text-olive-400 hover:text-gold-400 transition-colors flex items-center justify-between group">
                                                    {cat.name} <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
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


            {/* Related Blog Posts - Cross Linking */}
            <section className="py-24 bg-white/[0.02] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center gap-6 mb-16">
                        <h2 className="font-serif text-3xl font-black text-white uppercase tracking-tight leading-none">İlgili <span className="text-gold-400 italic">Bilgiler</span></h2>
                        <div className="h-px flex-1 bg-white/10"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {blogPosts.slice(0, 3).map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group p-8 bg-white/5 border border-white/5 hover:border-gold-400/20 transition-all">
                                <span className="text-gold-500 text-[10px] font-mono font-black uppercase tracking-widest mb-4 block opacity-60">{post.category}</span>
                                <h3 className="text-white font-serif font-black text-xl mb-4 group-hover:text-gold-400 transition-colors uppercase leading-tight">{post.title}</h3>
                                <p className="text-olive-300 text-xs italic font-light line-clamp-2 opacity-60 mb-6">{post.excerpt}</p>
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gold-500 flex items-center gap-2">OKU <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></span>
                            </Link>
                        ))}
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
