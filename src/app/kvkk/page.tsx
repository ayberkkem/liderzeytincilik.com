import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
    title: 'KVKK Aydınlatma Metni | Lider Zeytincilik',
    description: 'Lider Zeytincilik Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca aydınlatma metni.',
};

export default function KVKKPage() {
    return (
        <>
            <section className="bg-black/20 py-24 border-b border-white/5 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4">
                    <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'KVKK Aydınlatma Metni' }]} />
                    <h1 className="text-4xl md:text-6xl font-serif font-black text-white mt-8 uppercase tracking-tighter leading-none">KVKK <span className="text-gold-400 italic font-light">Aydınlatma</span></h1>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-white/5 rounded-none p-10 md:p-14 border border-white/5 shadow-2xl backdrop-blur-sm">
                        <div className="prose prose-invert prose-lg max-w-none text-olive-300 font-light italic leading-relaxed">
                            <p className="text-white font-bold not-italic mb-10 leading-relaxed">
                                <strong className="text-gold-400">Lider Zeytincilik</strong> olarak kişisel verilerinizin güvenliğine büyük önem veriyoruz. Bu çerçevede, 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu sıfatıyla sizleri bilgilendirmek isteriz.
                            </p>

                            <div className="space-y-12">
                                <div className="group">
                                    <h2 className="text-gold-400 font-serif font-black uppercase tracking-tight text-2xl mb-4 group-hover:pl-4 transition-all">1. Veri Sorumlusu</h2>
                                    <p>Kişisel verileriniz, Aydın, Türkiye adresinde faaliyet gösteren Lider Zeytincilik tarafından veri sorumlusu sıfatıyla işlenmektedir.</p>
                                </div>

                                <div className="group">
                                    <h2 className="text-gold-400 font-serif font-black uppercase tracking-tight text-2xl mb-4 group-hover:pl-4 transition-all">2. Kişisel Verilerin İşlenme Amacı</h2>
                                    <p>Kişisel verileriniz; ürün ve hizmetlerimizin sunulabilmesi, sipariş süreçlerinin yönetilmesi, taleplerinizin karşılanması, yasal yükümlülüklerimizin yerine getirilmesi amaçlarıyla işlenmektedir.</p>
                                </div>

                                <div className="group">
                                    <h2 className="text-gold-400 font-serif font-black uppercase tracking-tight text-2xl mb-4 group-hover:pl-4 transition-all">3. İşlenen Kişisel Veriler</h2>
                                    <p>Tarafımızca işlenen verileriniz; ad, soyad, telefon numarası, e-posta adresi ve teslimat adresinden ibarettir.</p>
                                </div>

                                <div className="group">
                                    <h2 className="text-gold-400 font-serif font-black uppercase tracking-tight text-2xl mb-4 group-hover:pl-4 transition-all">4. Kişisel Verilerin Aktarılması</h2>
                                    <p>Verileriniz, yalnızca hizmetin ifası (kargo/ambar gönderimi) ve yasal zorunluluklar dahilinde yetkili kurumlar ve iş ortaklarımızla paylaşılabilecektir.</p>
                                </div>

                                <div className="group">
                                    <h2 className="text-gold-400 font-serif font-black uppercase tracking-tight text-2xl mb-4 group-hover:pl-4 transition-all">5. Haklarınız</h2>
                                    <p>KVKK’nın 11. maddesi uyarınca; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, silinmesini veya düzeltilmesini isteme haklarına sahipsiniz.</p>
                                </div>
                            </div>

                            <div className="mt-20 pt-10 border-t border-white/5 text-center">
                                <p className="text-xs uppercase tracking-[0.3em] text-olive-500 font-black italic">
                                    Daha fazla bilgi için <strong className="text-gold-400 not-italic">{siteConfig.email}</strong> üzerinden bizimle iletişime geçebilirsiniz.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
