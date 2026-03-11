import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { categories } from '@/lib/categories';

export const metadata: Metadata = {
    title: 'Zeytinyağı Kategorileri | Tüm Zeytinyağı Çeşitleri',
    description: 'Natürel sızma, soğuk sıkım, riviera, organik zeytinyağı ve daha fazlası. Lider Zeytincilik zeytinyağı kategorileri. Toptan ve perakende satış.',
    alternates: {
        canonical: 'https://liderzeytincilik.com/kategori',
    },
};

export default function CategoriesPage() {
    return (
        <>
            <section className="relative py-24 overflow-hidden bg-olive-950">
                <div className="absolute inset-0 opacity-10 bg-[url('/images/ancient-olive-tree.png')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-olive-950 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Kategoriler' }]} />
                    <h1 className="font-serif text-fluid-h1 font-black text-white mt-10 leading-none uppercase tracking-tighter">Zeytinyağı <span className="text-gold-400 italic">Kategorileri</span></h1>
                    <p className="text-olive-200 text-fluid-body max-w-2xl font-light leading-relaxed italic mt-6">
                        İhtiyacınıza uygun zeytinyağı çeşidini seçin. Her kategori hakkında teknik veriler ve duyusal analizler.
                    </p>
                </div>
            </section>

            <section className="bg-background py-24 border-t border-white/5 tech-grid">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {categories.map((cat, i) => (
                            <Link
                                key={cat.slug}
                                href={`/kategori/${cat.slug}`}
                                className="group relative p-10 bg-white/[0.02] border border-white/5 hover:border-gold-500/40 transition-all duration-500 flex flex-col items-center text-center hover:bg-white/[0.04] hud-border hud-border-tl hud-border-br"
                            >
                                <div className="relative w-24 h-24 mb-8">
                                    <div className="absolute inset-0 bg-gold-500/10 group-hover:bg-gold-500/20 rotate-45 transition-all duration-700"></div>
                                    <div className="absolute inset-0 border border-white/10 group-hover:border-gold-500/50 transition-all"></div>
                                    <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                                        <Image src={`/images/categories/${cat.slug === 'siyah-zeytin-cesitleri' ? 'black-olives.png' : cat.slug === 'yesil-zeytin-cesitleri' ? 'green-olives.png' : 'quality-inspection.png'}`} alt={cat.name} width={64} height={64} className="object-contain opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                                    </div>
                                </div>
                                <h2 className="font-serif text-xl md:text-2xl font-black text-white group-hover:text-gold-400 transition-colors mb-4 uppercase tracking-tight leading-tight">{cat.name}</h2>
                                <p className="text-[11px] text-olive-300 italic font-light opacity-60 group-hover:opacity-100 transition-opacity mb-8 leading-relaxed">CODE: 0x{i.toString(16).padStart(2, '0')}</p>
                                <div className="mt-auto flex items-center gap-2 text-gold-500 text-[10px] font-black uppercase tracking-[0.3em] group-hover:gap-4 transition-all">
                                    Arşivi Keşfet <span className="text-xl">→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
