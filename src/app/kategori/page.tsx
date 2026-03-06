import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { categories } from '@/lib/categories';

export const metadata: Metadata = {
    title: 'Zeytinyağı Kategorileri | Tüm Zeytinyağı Çeşitleri',
    description: 'Natürel sızma, soğuk sıkım, riviera, organik zeytinyağı ve daha fazlası. Lider Zeytincilik zeytinyağı kategorileri. Toptan ve perakende satış.',
};

export default function CategoriesPage() {
    return (
        <>
            <section className="bg-gradient-to-br from-olive-800 to-olive-600 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Kategoriler' }]} />
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Zeytinyağı Kategorileri</h1>
                    <p className="text-olive-200 text-lg max-w-2xl">
                        İhtiyacınıza uygun zeytinyağı çeşidini seçin. Her kategori hakkında detaylı bilgi alın.
                    </p>
                </div>
            </section>

            <section className="bg-olive-50 py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((cat) => (
                            <Link
                                key={cat.slug}
                                href={`/kategori/${cat.slug}`}
                                className="glass-card rounded-none overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 hover:shadow-xl border border-olive-100 bg-white"
                            >
                                <div className="h-40 bg-gradient-to-br from-olive-100 to-olive-200 flex items-center justify-center overflow-hidden relative">
                                    <Image src={`/images/categories/${cat.slug === 'siyah-zeytin-cesitleri' ? 'black-olives.png' : cat.slug === 'yesil-zeytin-cesitleri' ? 'green-olives.png' : 'quality-inspection.png'}`} alt={cat.name} fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-lg font-bold text-olive-800 mb-2 group-hover:text-olive-600 transition-colors">{cat.name}</h2>
                                    <p className="text-sm text-olive-500 line-clamp-2">{cat.shortDescription}</p>
                                    <span className="inline-block mt-3 text-olive-600 text-sm font-medium">Detaylı Bilgi →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
