import Link from 'next/link';
import { siteConfig, trustBadges, faqItems } from '@/lib/siteConfig';
import { categories } from '@/lib/categories';
import FAQSection from '@/components/FAQSection';

const products = [
  {
    name: '1 Lt Zeytinyağı',
    desc: 'Bireysel kullanım için ideal boyut. Soğuk sıkım natürel sızma.',
    href: '/urunler/1-lt-zeytinyagi',
    icon: '🫒',
    size: '1 Litre',
  },
  {
    name: '5 Lt Zeytinyağı',
    desc: 'Aileler ve küçük işletmeler için. Teneke ve PET seçenekleri.',
    href: '/urunler/5-lt-zeytinyagi',
    icon: '🏺',
    size: '5 Litre',
  },
  {
    name: '10 Lt Zeytinyağı',
    desc: 'Toplu tüketim ve işletmeler için ekonomik büyük ambalaj.',
    href: '/urunler/10-lt-zeytinyagi',
    icon: '🛢️',
    size: '10 Litre',
  },
];

const blogPreviews = [
  {
    title: 'Zeytinyağı Nasıl Yapılır?',
    excerpt: 'Zeytinyağı üretim sürecini baştan sona keşfedin. Hasat, kırma, malaksasyon ve dekantasyon aşamalarını detaylı olarak anlattık.',
    slug: 'zeytinyagi-nasil-yapilir',
  },
  {
    title: 'Soğuk Sıkım Zeytinyağı Nedir?',
    excerpt: 'Soğuk sıkım zeytinyağının ne olduğunu, nasıl üretildiğini ve normal zeytinyağından farkını öğrenin.',
    slug: 'soguk-sikim-zeytinyagi-nedir',
  },
  {
    title: 'Zeytinyağı Faydaları',
    excerpt: 'Zeytinyağının sağlığınıza olan inanılmaz faydalarını keşfedin. Kalp sağlığından cilt bakımına kadar.',
    slug: 'zeytinyagi-faydalari',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-olive-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ancient-olive-tree.png"
            alt="Asırlık Zeytin Ağacı"
            className="w-full h-full object-cover opacity-40 scale-105 animate-float"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-olive-950 via-olive-950/80 to-transparent"></div>
        </div>

        {/* Decorative Particles */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-olive-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm text-olive-100 font-medium">Doğrudan Üreticiden En Taze Haliyle</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6">
                <span className="block text-gold-400 text-2xl md:text-3xl font-sans font-semibold mb-2 tracking-wide uppercase">Lider Zeytincilik</span>
                Üreticiden Uygun Fiyatlı <br />
                <span className="gradient-text italic">Zeytinyağı</span>
              </h1>

              <p className="text-lg md:text-xl text-olive-100/90 mb-10 max-w-xl leading-relaxed">
                Ege&apos;nin kadim zeytin ağaçlarından süzülen şifayı, modern tesislerimizde el değmeden şişeleyip kapınıza getiriyoruz.
                <span className="block mt-4 font-semibold text-gold-400 font-serif text-3xl italic underline decoration-white/20 underline-offset-8">Zeytinyağı Liderden Alınır!</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mb-10">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Merhaba, zeytinyağı siparişi vermek istiyorum.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-green-500/40 hover:-translate-y-1"
                  id="hero-whatsapp-cta"
                >
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  Hemen Fiyat Al ve Sipariş Ver
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/20 px-10 py-5 rounded-full text-lg font-bold transition-all backdrop-blur-md"
                  id="hero-phone-cta"
                >
                  📞 {siteConfig.phone}
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-3 text-olive-100 text-sm md:text-base">
                  <div className="w-6 h-6 rounded-full bg-gold-400 flex items-center justify-center text-olive-950 font-bold">✓</div>
                  Ücretsiz Kargo
                </div>
                <div className="flex items-center gap-3 text-olive-100 text-sm md:text-base">
                  <div className="w-6 h-6 rounded-full bg-gold-400 flex items-center justify-center text-olive-950 font-bold">✓</div>
                  Soğuk Sıkım
                </div>
                <div className="flex items-center gap-3 text-olive-100 text-sm md:text-base">
                  <div className="w-6 h-6 rounded-full bg-gold-400 flex items-center justify-center text-olive-950 font-bold">✓</div>
                  Toptan Pazarlık
                </div>
              </div>
            </div>

            {/* Hero Image Area - Branding Focus */}
            <div className="hidden lg:block relative min-h-[500px] flex items-center justify-center">
              <div className="relative w-full max-w-lg aspect-square">
                {/* Glow Effect where the image was */}
                <div className="absolute inset-10 bg-gold-500/20 rounded-full blur-[100px] animate-pulse"></div>

                {/* Floating Elements */}
                <div className="absolute top-10 right-0 z-20 bg-gold-400 text-olive-950 p-6 rounded-2xl shadow-2xl transform rotate-3 animate-pulse-glow">
                  <p className="text-2xl font-serif font-black mb-0">Üreticiden</p>
                  <p className="text-sm font-bold uppercase tracking-tighter">En İyi Fiyat Garantisi</p>
                </div>

                <div className="absolute bottom-10 left-0 z-20 glass p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-white/20 backdrop-blur-2xl">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-2xl">🚜</div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">Geleneksel Hasat</p>
                    <p className="text-olive-200 text-xs">Aydın & Akhisar Bahçelerinden</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===== ELITE AUTHORITY & TRUST BAR ===== */}
      <section className="bg-olive-900 border-y border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
            {[
              { icon: '🛡️', text: 'ISO 22000' },
              { icon: '🌙', text: 'Helal' },
              { icon: '🔬', text: 'Lab Analizli' },
              { icon: '🚚', text: 'Ücretsiz Kargo' },
              { icon: '🏭', text: 'Fabrikadan' },
              { icon: '📦', text: 'Ambar Gönderim' },
              { icon: '✨', text: '%100 Doğal' },
              { icon: '🤝', text: 'Toptan Fiyat' },
            ].map((badge, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group cursor-default">
                <div className="text-3xl mb-1 group-hover:scale-125 transition-transform duration-300 drop-shadow-lg">{badge.icon}</div>
                <span className="text-[10px] font-black text-white/70 uppercase tracking-widest text-center whitespace-nowrap group-hover:text-gold-400 transition-colors">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS SECTION ===== */}
      <section className="bg-olive-950 py-24 relative overflow-hidden" id="products">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="text-gold-400 text-sm font-black uppercase tracking-[0.3em] mb-4 block">Ürünlerimiz</span>
            <h2 className="font-serif text-4xl md:text-6xl font-black text-white leading-tight">
              Saf Ege <span className="text-gold-400 italic">Mucizesi</span>
            </h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {products.map((product, i) => (
              <Link
                key={i}
                href={product.href}
                className="glass-card rounded-[40px] p-10 text-center group hover:-translate-y-3 transition-all duration-500 hover:shadow-gold-500/10"
              >
                <div className="text-7xl mb-6 group-hover:rotate-12 transition-transform duration-500 transform-gpu">{product.icon}</div>
                <span className="inline-block bg-white/5 backdrop-blur-md text-gold-400 text-[10px] font-black px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest border border-white/10">{product.size}</span>
                <h3 className="text-2xl font-serif font-black text-white mb-3 group-hover:text-gold-400 transition-colors tracking-tight">{product.name}</h3>
                <p className="text-olive-200 text-sm mb-8 leading-relaxed font-light italic">{product.desc}</p>
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-olive-400 font-black uppercase tracking-widest">Fiyat Alın</span>
                  <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold-400 group-hover:bg-gold-400 group-hover:text-olive-950 transition-all">❯</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center space-y-2">
            <p className="text-olive-300 font-medium">📦 Toptan alımlarda araç bazlı sevkiyat ve fabrika satış fiyatları</p>
            <p className="text-sm text-gold-500/60 font-black uppercase tracking-widest">Lider Zeytincilik Güvencesiyle</p>
          </div>
        </div>
      </section>


      {/* ===== CATEGORIES SECTION ===== */}
      <section className="bg-olive-900/50 py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold-500 text-sm font-black uppercase tracking-[0.2em] mb-4 block">Kategoriler</span>
            <h2 className="font-serif text-4xl font-black text-white">Zeytinyağı Çeşitlerimiz</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <Link
                key={cat.slug}
                href={`/kategori/${cat.slug}`}
                className="group flex items-center gap-4 p-5 rounded-3xl bg-white/5 border border-white/10 hover:border-gold-400/30 hover:bg-gold-400/5 transition-all duration-500"
                style={{ animationDelay: `${i * 30}ms` }}
              >
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-400 transition-colors shadow-inner">
                  <span className="text-gold-400 text-xl group-hover:text-olive-950 transition-colors">🫒</span>
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm group-hover:text-gold-400 transition-colors mb-0.5">{cat.name}</h3>
                  <p className="text-[11px] text-olive-400 font-medium line-clamp-1 italic uppercase tracking-tighter">İncele</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ===== WHY US SECTION ===== */}
      <section className="bg-olive-950 py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <img src="/images/modern-warehouse.png" alt="Modern Depo" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-olive-950"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold-400 text-sm font-bold uppercase tracking-[0.2em] mb-4 block">Neden Biz?</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Geleneksel Lezzet,<br />
                <span className="italic text-gold-400">Endüstriyel Güç</span>
              </h2>

              <div className="space-y-8">
                {[
                  {
                    icon: '🏭',
                    title: 'Entegre Üretim Tesisi',
                    desc: 'Aydın ve Akhisar daki bahçelerimizden gelen zeytinler, son teknoloji sıkım tesislerimizde işlenir. Aracı yoktur, doğrudan üretim kalitesi vardır.',
                  },
                  {
                    icon: '❄️',
                    title: 'Gerçek Soğuk Sıkım',
                    desc: 'Tüm üretim sürecinde ısıyı 27 derecenin altında tutarak zeytinn şifalı bileşenlerini (polifenol) en yüksek seviyede koruyoruz.',
                  },
                  {
                    icon: '🏷️',
                    title: 'Private Label & Toptan',
                    desc: 'Etiketsiz ambalaj seçeneklerimizle kendi markanızı oluşturabilirsiniz. Restoran, otel ve marketler için kesintisiz tedarik sağlıyoruz.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-gold-400/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0 border border-white/10 group-hover:border-gold-400/50">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-olive-200 leading-relaxed text-sm md:text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 h-full items-center">
              <div className="space-y-6">
                <img src="/images/extraction-process.png" alt="Zeytinyağı Çıkarımı" className="w-full aspect-square object-cover rounded-3xl shadow-lg border border-white/10 hover:scale-105 transition-transform duration-500" />
                <img src="/images/filling-conveyor.png" alt="Dolum Hattı" className="w-full aspect-[4/3] object-cover rounded-3xl shadow-lg border border-white/10 hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="space-y-6 pt-12">
                <img src="/images/quality-inspection.png" alt="Kalite Kontrol" className="w-full aspect-[4/3] object-cover rounded-3xl shadow-lg border border-white/10 hover:scale-105 transition-transform duration-500" />
                <img src="/images/retail-boxes.png" alt="Paketleme" className="w-full aspect-square object-cover rounded-3xl shadow-lg border border-white/10 hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOGISTICS SECTION ===== */}
      <section className="bg-olive-950 py-32 overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <img src="/images/modern-warehouse.png" alt="Warehouse Background" className="w-full h-full object-cover opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-b from-olive-950 via-transparent to-olive-950"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative z-10">
                <img src="/images/logistics-forklift.png" alt="Lojistik Hizmetimiz" className="rounded-[40px] shadow-2xl border-2 border-white/5" />
                <div className="absolute -bottom-12 -right-12 hidden xl:block w-80">
                  <img src="/images/delivery-van-plain.png" alt="Sevkiyat" className="rounded-3xl shadow-2xl border-4 border-olive-900" />
                </div>
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold-500/20 blur-[100px] -z-10"></div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-gold-400 text-sm font-black uppercase tracking-[0.4em] mb-6 block">Lojistik ve Tedarik</span>
              <h2 className="font-serif text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                81 İle Güçlü <br />
                <span className="text-gold-400 italic">Dağıtım Ağı</span>
              </h2>
              <p className="text-olive-200 text-xl mb-10 leading-relaxed font-light">
                Kendi araç filomuz ve bölge ambarlarımızla, fabrikadan doğrudan sevkiyat yaparak lojistik maliyetlerini minimize ediyoruz.
              </p>

              <ul className="grid sm:grid-cols-2 gap-4 mb-12 text-sm">
                {[
                  '🚀 48 Saatte Hazırlık',
                  '📦 Güvenli Ambalaj',
                  '🚚 Fabrika Sevkiyatı',
                  '🚛 Ambar Gönderimi',
                  '📍 Tüm Türkiye',
                  '📱 Anlık Takip'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white font-bold bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-gold-400/50 transition-all">
                    <span className="text-xl">{item.split(' ')[0]}</span>
                    <span className="uppercase tracking-widest text-[10px]">{item.split(' ').slice(1).join(' ')}</span>
                  </li>
                ))}
              </ul>

              <div className="p-8 bg-gold-400 rounded-3xl flex items-center gap-6 shadow-xl shadow-gold-500/10">
                <div className="text-5xl shrink-0">🚐</div>
                <div>
                  <h4 className="font-black text-olive-950 text-xl tracking-tight leading-none mb-2">Toptan Araç Sevkiyatı</h4>
                  <p className="text-olive-900 text-sm font-medium leading-relaxed italic mb-4">Şehirler arası tonajlı sevkiyatlarda kendi araçlarımızla teslimat imkanı.</p>
                  <Link href="/bolgeler" className="inline-flex items-center gap-2 text-olive-950 font-black text-[10px] uppercase tracking-widest border-b-2 border-olive-950/20 hover:border-olive-950 transition-all">
                    81 İl Hizmet Bölgelerimiz →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ===== BLOG PREVIEW ===== */}
      <section className="bg-olive-900/30 py-32 border-t border-white/5" id="blog">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-gold-400 text-sm font-black uppercase tracking-[0.3em] mb-4 block">Zeytin Kültürü</span>
            <h2 className="font-serif text-4xl md:text-6xl font-black text-white">Blog & Rehber</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {[
              {
                title: 'Zeytinyağı Nasıl Yapılır?',
                excerpt: 'Zeytinyağı üretim sürecini baştan sona keşfedin. Hasat, kırma, malaksasyon ve dekantasyon aşamalarını detaylı olarak anlattık.',
                slug: 'zeytinyagi-nasil-yapilir',
                img: '/images/traditional-harvest.png'
              },
              {
                title: 'Soğuk Sıkım Nedir?',
                excerpt: 'Soğuk sıkım zeytinyağının ne olduğunu, nasıl üretildiğini ve sağlık açısından neden tercih edilmesi gerektiğini öğrenin.',
                slug: 'soguk-sikim-zeytinyagi-nedir',
                img: '/images/extraction-process.png'
              },
              {
                title: 'Ambalaj ve Saklama',
                excerpt: 'Zeytinyağı neden koyu renkli veya teneke kaplarda saklanmalı? Kalitesini korumanın püf noktaları.',
                slug: 'zeytinyagi-nasil-saklanir',
                img: '/images/quality-inspection.png'
              }
            ].map((post, i) => (
              <Link
                key={i}
                href={`/blog/${post.slug}`}
                className="glass-card rounded-[32px] overflow-hidden group hover:-translate-y-2 transition-all duration-500"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-olive-950 via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-serif font-black text-white mb-3 group-hover:text-gold-400 transition-colors uppercase tracking-tighter leading-tight">{post.title}</h3>
                  <p className="text-sm text-olive-300 line-clamp-2 italic leading-relaxed font-light mb-6">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-gold-500 font-black text-[10px] uppercase tracking-widest">
                    Okumaya Devam Et <span className="text-lg">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 bg-white/5 hover:bg-gold-500 text-white hover:text-olive-950 border border-white/10 px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all hover:shadow-xl hover:shadow-gold-500/20"
            >
              Tüm Yazıları Keşfet
            </Link>
          </div>
        </div>
      </section>


      {/* ===== CTA BANNER ===== */}
      <section className="bg-gold-400 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-olive-950 mb-4">
            Hemen Sipariş Verin
          </h2>
          <p className="text-olive-800 mb-8 text-lg">
            Türkiye geneli ücretsiz kargo • Toptan alımlarda pazarlık payı vardır
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Merhaba, zeytinyağı siparişi vermek istiyorum.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-olive-800 hover:bg-olive-900 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:shadow-xl"
              id="cta-whatsapp"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              Hemen Fiyat Al ve Sipariş Ver
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-olive-50 text-olive-800 px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-md hover:shadow-lg"
            >
              📞 Hemen Ara
            </a>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="bg-olive-950 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <FAQSection items={faqItems} />
        </div>
      </section>

    </>
  );
}
