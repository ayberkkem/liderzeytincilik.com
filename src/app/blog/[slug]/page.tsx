import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { blogPosts, getBlogBySlug, getAllBlogSlugs } from '@/lib/blogPosts';
import { siteConfig } from '@/lib/siteConfig';
import Link from 'next/link';

export async function generateStaticParams() {
    return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogBySlug(slug);
    if (!post) return {};

    return {
        title: post.metaTitle,
        description: post.metaDescription,
        openGraph: {
            title: post.metaTitle,
            description: post.metaDescription,
            type: 'article',
            publishedTime: post.date,
            url: `https://${siteConfig.domain}/blog/${slug}`,
            images: [
                {
                    url: post.image.startsWith('http') ? post.image : `https://${siteConfig.domain}${post.image}`,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.metaTitle,
            description: post.metaDescription,
            images: [post.image.startsWith('http') ? post.image : `https://${siteConfig.domain}${post.image}`],
        },
        alternates: {
            canonical: `${siteConfig.url}/blog/${slug}`,
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getBlogBySlug(slug);
    if (!post) notFound();

    const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

    return (
        <>
            <article className="bg-white">
                <section className="relative h-[60vh] min-h-[400px] overflow-hidden flex items-center">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-olive-950/60 backdrop-blur-[2px]"></div>
                    <div className="relative z-10 max-w-4xl mx-auto px-4 w-full">
                        <Breadcrumb items={[
                            { label: 'Ana Sayfa', href: '/' },
                            { label: 'Blog', href: '/blog' },
                            { label: post.title }
                        ]} />

                        <div className="mt-12 text-center text-white">
                            <span className="inline-block bg-gold-400 text-olive-950 text-xs font-black px-6 py-2 rounded-full mb-6 uppercase tracking-widest">
                                {post.category}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-serif font-black mb-8 leading-tight uppercase tracking-tight">
                                {post.title}
                            </h1>
                            <div className="flex items-center justify-center gap-6 text-sm text-olive-200 font-bold uppercase tracking-widest">
                                <time dateTime={post.date}>
                                    {new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </time>
                                <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                                <span>{post.readTime} okuma süresi</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <div
                            className="prose prose-lg max-w-none text-olive-900 leading-relaxed prose-h2:font-serif prose-h2:text-2xl prose-h2:font-bold prose-h2:text-olive-800 prose-h2:mt-12 prose-h2:mb-6 prose-p:mb-6 prose-li:mb-2 prose-strong:text-olive-950 prose-table:text-sm prose-table:border prose-table:border-olive-100"
                            dangerouslySetInnerHTML={{ __html: formatBlogContent(post.content) }}
                        />

                        {/* CTA Section after blog content */}
                        <div className="mt-20 p-10 bg-olive-950 rounded-[40px] text-white overflow-hidden relative group">
                            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center text-center md:text-left">
                                <div>
                                    <h3 className="text-2xl font-serif font-bold mb-3">Zeytinyağı İhtiyacınız mı Var?</h3>
                                    <p className="text-olive-200 text-sm">
                                        Lider Zeytincilik olarak doğrudan fabrikamızdan, en taze soğuk sıkım zeytinyağlarını Türkiye geneline ulaştırıyoruz.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                                    <a href={`https://wa.me/${siteConfig.whatsapp}`} className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3.5 rounded-2xl transition-all shadow-lg hover:shadow-green-500/20 text-center">
                                        Hemen Sorun
                                    </a>
                                    <Link href="/urunler" className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3.5 rounded-2xl transition-all text-center">
                                        Ürünleri Gör
                                    </Link>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl group-hover:bg-white/10 transition-colors"></div>
                        </div>
                    </div>
                </section>
            </article>

            {/* Related Posts */}
            <section className="bg-zinc-50 py-20 border-t border-zinc-200">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-olive-800 text-center mb-12">Bunlar da İlginizi Çekebilir</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {relatedPosts.map((p) => (
                            <article key={p.slug} className="glass-card rounded-[32px] overflow-hidden group hover:-translate-y-2 transition-all duration-500 border border-olive-100 bg-white shadow-sm hover:shadow-xl">
                                <Link href={`/blog/${p.slug}`}>
                                    <div className="h-48 relative overflow-hidden">
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-olive-950/20 group-hover:bg-transparent transition-colors"></div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="font-serif font-bold text-xl text-olive-900 mb-3 group-hover:text-olive-700 transition-colors line-clamp-2 uppercase tracking-tight">
                                            {p.title}
                                        </h3>
                                        <p className="text-sm text-olive-600 mb-6 line-clamp-2 italic font-light">
                                            {p.excerpt}...
                                        </p>
                                        <span className="text-olive-800 text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2">
                                            DEVAM ET
                                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                        </span>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

function formatBlogContent(content: string): string {
    // Simple markdown-ish to HTML formatter for the blog
    return content
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/^\- (.+)$/gm, '<li>$1</li>')
        .replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/^(?!<[hulo])/gm, '<p>')
        .replace(/(<p>)+/g, '<p>')
        .replace(/(<\/p>)+/g, '</p>');
}
