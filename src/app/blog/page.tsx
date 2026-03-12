import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { blogPosts } from '@/lib/blogPosts';

export const metadata: Metadata = {
    title: 'Blog | Zeytinyağı Rehberi ve Bilgileri',
    description: 'Zeytinyağı hakkında her şey: Üretim süreçleri, sağlık faydaları, saklama koşulları ve doğru zeytinyağı seçimi için kapsamlı rehberler.',
    alternates: {
        canonical: 'https://liderzeytincilik.com/blog',
    },
};

export default function BlogPage() {
    return (
        <>
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/ancient-olive-tree.png"
                        alt="Zeytin Bahçesi"
                        fill
                        sizes="100vw"
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-olive-950 to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Blog' }]} />
                    <h1 className="font-serif text-fluid-h1 font-black text-white mb-6 uppercase tracking-tighter leading-none">Zeytinyağı <span className="text-gold-400 italic">Rehberi</span></h1>
                    <p className="text-olive-200 text-fluid-body max-w-2xl font-light leading-relaxed italic">
                        Tarladan sofraya zeytinyağının hikayesi, bilimsel faydaları ve işletmeler için stratejik ipuçları.
                    </p>
                </div>
            </section>


            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogPosts.map((post) => (
                            <article key={post.slug} className="glass-card rounded-none overflow-hidden group hover:-translate-y-3 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/5 bg-white/5">
                                <Link href={`/blog/${post.slug}`} className="block">
                                    <div className="h-64 relative overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-olive-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                        <div className="absolute top-6 left-6 bg-gold-400 text-olive-950 text-[10px] font-black px-4 py-1.5 rounded-none uppercase tracking-widest shadow-2xl z-10">
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="p-10">
                                        <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-olive-500 mb-6 font-sans">
                                            <span>{post.readTime} okuma</span>
                                        </div>
                                        <h2 className="text-2xl font-serif font-black text-white mb-4 group-hover:text-gold-400 transition-colors leading-tight uppercase tracking-tight">
                                            {post.title}
                                        </h2>
                                        <p className="text-olive-300 text-sm line-clamp-3 mb-8 font-light leading-relaxed italic">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 text-gold-400 text-xs font-black uppercase tracking-[0.3em] group-hover:gap-4 transition-all">
                                            Keşfet
                                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                        </div>
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
