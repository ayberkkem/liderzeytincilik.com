import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
    title: 'Mesafeli Satış Sözleşmesi | Lider Zeytincilik',
    description: 'Lider Zeytincilik mesafeli satış sözleşmesi şartları ve hükümler.',
};

export default function SalesAgreementPage() {
    return (
        <>
            <section className="bg-black/20 py-24 border-b border-white/5 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4">
                    <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Mesafeli Satış Sözleşmesi' }]} />
                    <h1 className="text-4xl md:text-6xl font-serif font-black text-white mt-8 uppercase tracking-tighter leading-none">Satış <span className="text-gold-400 italic font-light">Sözleşmesi</span></h1>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-white/5 rounded-[40px] p-10 md:p-14 border border-white/5 shadow-2xl backdrop-blur-sm">
                        <div className="prose prose-invert prose-lg max-w-none text-olive-300 font-light italic leading-relaxed">
                            <p className="text-white font-bold not-italic mb-10 leading-relaxed">Bu sözleşme, alıcı ve satıcı arasındaki hak ve yükümlülükleri düzenler. Zeytinyağı ürünlerimizin satışı WhatsApp üzerinden teyitleşerek gerçekleştirilmektedir.</p>

                            <h2 className="text-gold-400 font-serif font-black uppercase tracking-tight text-2xl mt-12 mb-6">Teslimat ve İfa</h2>
                            <p>Sipariş edilen ürünler, anlaşmalı kargo veya ambar şirketleri aracılığıyla bildirilen adrese güvenli bir şekilde teslim edilir.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
