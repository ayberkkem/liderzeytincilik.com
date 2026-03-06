import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
    title: 'Gizlilik Politikası | Lider Zeytincilik',
    description: 'Lider Zeytincilik olarak verilerinizin gizliliğine verdiğimiz önem ve politikalarımız.',
};

export default function PrivacyPage() {
    return (
        <>
            <section className="bg-black/20 py-24 border-b border-white/5 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4">
                    <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'Gizlilik Politikası' }]} />
                    <h1 className="text-4xl md:text-6xl font-serif font-black text-white mt-8 uppercase tracking-tighter leading-none">Gizlilik <span className="text-gold-400 italic font-light">Politikası</span></h1>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-white/5 rounded-none p-10 md:p-14 border border-white/5 shadow-2xl backdrop-blur-sm">
                        <div className="prose prose-invert prose-lg max-w-none text-olive-300 font-light italic leading-relaxed">
                            <p className="text-white font-bold not-italic mb-8">Bu Gizlilik Politikası, Lider Zeytincilik web sitesini ziyaret ettiğinizde toplanan kişisel bilgilerinizin nasıl işlendiğini açıklar.</p>

                            <h2 className="text-gold-400 font-serif font-black uppercase tracking-tight text-2xl mt-12 mb-6">Veri Toplama</h2>
                            <p>Web sitemiz üzerinden WhatsApp butonuna tıkladığınızda veya bizimle iletişime geçtiğinizde verdiğiniz bilgiler işlenir. Çerezler aracılığıyla anonim kullanım verileri toplanabilir.</p>

                            <h2 className="text-gold-400 font-serif font-black uppercase tracking-tight text-2xl mt-12 mb-6">Güvenlik</h2>
                            <p>Verilerinizi korumak için endüstri standardı güvenlik önlemleri uygulanmaktadır.</p>

                            <div className="mt-16 pt-10 border-t border-white/5 text-center">
                                <p className="text-xs uppercase tracking-[0.3em] text-olive-500 font-black">Hizmetlerimizi kullanarak bu politikayı kabul etmiş sayılırsınız.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
