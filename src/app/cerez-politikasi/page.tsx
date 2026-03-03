import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
    title: 'Çerez Politikası | Lider Zeytincilik',
    description: 'Web sitemizde kullanılan çerezler (cookies) hakkında bilgilendirme.',
};

export default function CookiePolicyPage() {
    return (
        <>
            <section className="bg-black/20 py-24 border-b border-white/5 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4">
                    <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Çerez Politikası' }]} />
                    <h1 className="text-4xl md:text-6xl font-serif font-black text-white mt-8 uppercase tracking-tighter leading-none">Çerez <span className="text-gold-400 italic font-light">Politikası</span></h1>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-white/5 rounded-[40px] p-10 md:p-14 border border-white/5 shadow-2xl backdrop-blur-sm">
                        <div className="prose prose-invert prose-lg max-w-none text-olive-300 font-light italic leading-relaxed text-center">
                            <p className="text-white text-xl leading-relaxed">
                                Web sitemiz, kullanıcı deneyimini artırmak amacıyla sadece zorunlu ve anonim analiz amaçlı çerezler kullanmaktadır. Tarayıcı ayarlarınızdan çerezleri dilediğiniz zaman yönetebilirsiniz.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
