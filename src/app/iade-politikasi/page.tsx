import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
    title: 'İade Politikası | Lider Zeytincilik',
    description: 'Lider Zeytincilik ürün iade ve değişim koşulları.',
};

export default function ReturnPolicyPage() {
    return (
        <>
            <section className="bg-black/20 py-24 border-b border-white/5 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4">
                    <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'İade Politikası' }]} />
                    <h1 className="text-4xl md:text-6xl font-serif font-black text-white mt-8 uppercase tracking-tighter leading-none">İade <span className="text-gold-400 italic font-light">Politikası</span></h1>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-white/5 rounded-none p-10 md:p-14 border border-white/5 shadow-2xl backdrop-blur-sm">
                        <div className="prose prose-invert prose-lg max-w-none text-olive-300 font-light italic leading-relaxed">
                            <p className="text-white font-bold not-italic mb-10 leading-relaxed">Zeytinyağı, gıda kategorisinde bir ürün olduğu için ambalajı açılmış ürünlerin iadesi sağlık ve hijyen kuralları gereği yapılamamaktadır.</p>

                            <div className="bg-black/20 p-8 rounded-none border border-white/5 italic">
                                Kargoda hasar gören veya ayıplı olduğu tespit edilen ürünler için lütfen teslimat anında tutanak tutturunuz ve bizimle iletişime geçiniz.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
