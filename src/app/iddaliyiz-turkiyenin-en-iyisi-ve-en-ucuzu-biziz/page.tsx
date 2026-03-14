import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'İddialıyız, Türkiye\'nin En İyisi ve En Ucuzu Biziz! | Lider Zeytincilik',
    description: 'Türkiye\'nin en iddialı ve en uygun fiyatlı Naturel Sızma ve Soğuk Sıkım zeytinyağları hakkında şifalı bilgiler.',
    alternates: {
        canonical: 'https://liderzeytincilik.com/iddaliyiz-turkiyenin-en-iyisi-ve-en-ucuzu-biziz',
    },
};

export default function IddialiyizPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden bg-olive-900">
                <div className="absolute inset-0 z-0">
                    <Image src="/images/ancient-olive-tree.png" alt="Zeytin Bahçesi" fill className="object-cover opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-olive-950 to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <Breadcrumb items={[{ label: 'Ana Sayfa', href: '/' }, { label: 'İddialıyız' }]} />
                    <h1 className="font-serif text-fluid-h1 font-bold text-gold-400 mb-6 uppercase tracking-tight leading-none">
                        İddialıyız, Türkiye'nin <br />
                        <span className="italic font-light">En İyisi ve En Ucuzu Biziz!</span>
                    </h1>
                    <p className="text-gold-400 text-fluid-body max-w-2xl leading-relaxed font-light italic opacity-90">
                        Kaliteden ödün vermeden, doğanın şifasını en uygun fiyatlarla sofralarınıza taşıyoruz.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-olive-950">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-fluid-h2 font-serif font-black text-gold-400 mb-10 leading-[0.85] uppercase tracking-tighter w-full block">Naturel Sızma ve <br /><span className="italic font-light">Soğuk Sıkım Şifası</span></h2>
                            
                            <div className="space-y-8 text-gold-400/90 text-lg font-light leading-relaxed">
                                <p>
                                    <strong className="text-gold-400 font-bold block mb-2 text-xl">Naturel Sızma Zeytinyağı: Doğanın Sıvı Altını</strong>
                                    Zeytin meyvesinin doğal özelliklerini hiçbir kimyasal işlem görmeden koruduğu, en saf zeytinyağı türüdür. Yüksek oranda polifenol ve antioksidan içerir. Kalp ve damar sağlığını destekler, sindirim sistemini düzenler. Hücre yenileyici özelliği ile cilt ve saç sağlığına benzersiz katkılar sunar.
                                </p>

                                <p>
                                    <strong className="text-gold-400 font-bold block mb-2 text-xl">Soğuk Sıkım Zeytinyağının Mucizesi</strong>
                                    Zeytinlerin 27°C'nin altındaki sıcaklıklarda mekanik yöntemlerle sıkılmasıyla elde edilir. Isı kullanılmadığı için zeytinin içerdiği tüm vitaminler, mineraller ve fenolik bileşenler kayba uğramadan yağa geçer. Bağışıklık sistemini güçlendirmede en etkili besinlerden biridir. Kötü kolesterolü düşürürken iyi kolesterolü korumaya yardımcı olur.
                                </p>

                                <p>
                                    <strong className="text-gold-400 font-bold block mb-2 text-xl">Neden Türkiye'nin En İyisi ve En Ucuzuyuz?</strong>
                                    Aracıları ortadan kaldırarak doğrudan üreticiden tüketiciye ulaşıyoruz. Kendi bahçelerimizin zeytinlerini, kendi tesislerimizde, en modern teknoloji ile sıkarak, en üst düzey kaliteyi en erişilebilir fiyata sunuyoruz. Sağlık herkesin hakkıdır felsefesiyle, kaliteden asla ödün vermiyoruz!
                                </p>
                            </div>
                        </div>

                        {/* Giant Symbolic Olive Tree on the Right */}
                        <div className="order-1 lg:order-2 relative aspect-square flex items-center justify-center">
                            <div className="absolute inset-0 bg-gold-400/10 blur-[100px] rounded-full"></div>
                            <div className="relative w-full h-[600px]">
                                <Image 
                                    src="/images/ancient-olive-tree.png" 
                                    alt="Sembolik Zeytin Ağacı" 
                                    fill 
                                    className="object-contain drop-shadow-[0_0_50px_rgba(250,204,21,0.3)] filter sepia-[0.3] hue-rotate-15"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
