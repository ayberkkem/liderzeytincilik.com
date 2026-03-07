import Link from 'next/link';
import Image from 'next/image';
import { siteConfig, trustBadges, faqItems } from '@/lib/siteConfig';
import { categories } from '@/lib/categories';
import FAQSection from '@/components/FAQSection';

const products = [
  {
    name: 'Erken Hasat Soğuk Sıkım',
    desc: 'Ekim ayının ilk haftasında henüz yeşilken hasat edilen zeytinlerden, 22 derecede sıkılan yüksek polifenollü şifa kaynağı.',
    href: '/urunler/erken-hasat-soguk-sikim',
    image: '/images/tins-in-grove.png',
    size: '500 ml // 1 Lt',
    stats: { polyphenol: '450+ mg/kg', acid: '0.2%', vitamin: 'High' }
  },
  {
    name: 'Natürel Sızma Klasik',
    desc: 'Kasım hasadı olgunlaşmış zeytinlerin dengeli aroması. Her türlü yemek ve salata için ideal, düşük asitli premium seçim.',
    href: '/urunler/naturel-sizma-klasik',
    image: '/images/tins-in-grove.png',
    size: '2 Lt // 5 Lt',
    stats: { polyphenol: '250+ mg/kg', acid: '0.5%', vitamin: 'Optimum' }
  },
  {
    name: 'Restoran & Otel Serisi',
    desc: 'Gastronomi profesyonelleri için tasarlanmış, yüksek ısı değerine dayanıklı ve aroma kalitesi korunmuş endüstriyel ambalaj.',
    href: '/urunler/endustriyel-seri',
    image: '/images/factory-pallets.png',
    size: '10 Lt // 18 Lt',
    stats: { polyphenol: '200+ mg/kg', acid: '0.8%', vitamin: 'Balanced' }
  },
  {
    name: 'Gemlik Salamura Siyah',
    desc: 'Sadece deniz tuzu ve su ile 9 ay boyunca dinlendirilerek fermente edilen, ince kabuklu, çekirdeğinden kolay ayrılan lezzet.',
    href: '/urunler/gemlik-salamura-siyah',
    image: '/images/categories/black-olives.png',
    size: 'S-M-L Kalibraj',
    stats: { salt: '%4', oil: '%22', skin: 'Ultra-Thin' }
  },
  {
    name: 'Kırma Yeşil Zeytin',
    desc: 'Aydın yöresinin Memecik cinsi zeytinlerinden, doğal limon ve kaya tuzu ile hazırlanan, taptaze çıtır dokulu geleneksel tat.',
    href: '/urunler/kirma-yesil-zeytin',
    image: '/images/categories/green-olives.png',
    size: 'L-XL Kalibraj',
    stats: { salt: '%3', oil: '%18', texture: 'Crunchy' }
  },
];

const blogPreviews = [
  {
    title: 'Zeytinyağı Nasıl Yapılır?',
    excerpt: 'Zeytinyağı üretim sürecini baştan sona keşfedin. Hasat, kırma, malaksasyon ve dekantasyon aşamalarını detaylı olarak anlattık.',
    slug: 'zeytinyagi-nasil-yapilir',
    image: 'zeytinyagi-uretim.png'
  },
  {
    title: 'Soğuk Sıkım Zeytinyağı Nedir?',
    excerpt: 'Soğuk sıkım zeytinyağının ne olduğunu, nasıl üretildiğini ve normal zeytinyağından farkını öğrenin.',
    slug: 'soguk-sikim-zeytinyagi-nedir',
    image: 'soguk-sikim.png'
  },
  {
    title: 'Zeytinyağı Faydaları',
    excerpt: 'Zeytinyağının sağlığınıza olan inanılmaz faydalarını keşfedin. Kalp sağlığından cilt bakımına kadar.',
    slug: 'zeytinyagi-faydalari',
    image: 'homemade-olives.png'
  },
  {
    title: 'Hangi Siyah Zeytin Daha Lezzetli?',
    excerpt: 'Gemlik mi, Memecik mi yoksa Uslu mu? En popüler siyah zeytin çeşitlerini ve özelliklerini karşılaştırdık.',
    slug: 'en-iyi-siyah-zeytin-hangisi',
    image: 'black-olives-types.png'
  },
  {
    title: 'Yeşil Zeytin Rehberi',
    excerpt: 'Kırma, çizik ve Domat yeşil zeytin türleri arasındaki farkları öğrenin. Doğal lezzetin sırları burada.',
    slug: 'yesil-zeytin-cesitleri-ve-ozellikleri',
    image: 'green-olives-types.png'
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== MASTERPIECE HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center bg-background overflow-hidden tech-grid scanline">
        {/* Background Engineering Elements */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="fixed top-0 left-0 w-full h-full tech-dots"></div>
          <div className="absolute top-[10%] left-[5%] text-[10px] font-mono text-gold-500/60 transform -rotate-90 origin-left">EST. 2024 // LIDER INDUSTRIAL UNIT 01</div>
          <div className="absolute bottom-[10%] right-[5%] text-[10px] font-mono text-gold-500/60 transform rotate-90 origin-right">LAT: 37.8444 N // LON: 27.8444 E</div>
        </div>

        <div className="relative z-20 max-w-[1600px] mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* TECHNICAL SPECS HUD - The Engineering Marvel */}
            <div className="lg:col-span-4 order-2 lg:order-1 space-y-8 animate-fade-in">
              <div className="hud-border hud-border-tl hud-border-br p-8 bg-white/[0.02] backdrop-blur-xl border-white/5">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-gold-500 font-mono text-xs tracking-[0.3em] uppercase">Status: Certified</span>
                  <div className="h-px flex-1 bg-gold-400/20"></div>
                </div>

                <div className="space-y-10">
                  {[
                    { label: 'Polifenol Değeri', value: '450+ mg/kg', sub: 'Yüksek Antioksidan', width: '92%' },
                    { label: 'Asitlik Oranı', value: '0.3 - 0.5%', sub: 'Premium Natürel Sızma', width: '98%' },
                    { label: 'E Vitamini', value: '25 mg / 100g', sub: 'Doğal Koruyucu', width: '85%' }
                  ].map((spec, i) => (
                    <div key={i} className="group cursor-help">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-3 gap-2">
                        <div>
                          <p className="text-[10px] xl:text-[11px] text-gold-400 uppercase font-black tracking-widest mb-1">{spec.label}</p>
                          <p className="text-xl xl:text-2xl font-serif font-black text-white leading-none">{spec.value}</p>
                        </div>
                        <p className="text-[10px] xl:text-[11px] text-olive-200 font-mono italic whitespace-nowrap opacity-80">{spec.sub}</p>
                      </div>
                      <div className="h-1 bg-white/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gold-400/20 animate-tech-reveal" style={{ width: spec.width }}></div>
                        <div className="absolute top-0 left-0 h-full bg-gold-500 shadow-[0_0_10px_#eab308] animate-tech-reveal" style={{ width: spec.width }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 p-4 xl:p-6 border border-white/10 hover:border-gold-400/40 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gold-500/5 rotate-45 translate-x-8 -translate-y-8"></div>
                <p className="text-[10px] xl:text-[11px] text-gold-400 font-black mb-2 uppercase tracking-widest">Hasat Döngüsü</p>
                <p className="text-white font-serif font-bold text-lg xl:text-xl leading-none">Eylül - Kasım</p>
                <div className="mt-4 flex gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
                  {[1, 2, 3, 4, 5].map(j => <div key={j} className="h-1 w-2 bg-gold-400"></div>)}
                </div>
              </div>
              <div className="bg-white/5 p-4 xl:p-6 border border-white/10 hover:border-gold-400/40 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gold-500/5 rotate-45 translate-x-8 -translate-y-8"></div>
                <p className="text-[10px] xl:text-[11px] text-gold-400 font-black mb-2 uppercase tracking-widest">Ekstraksiyon</p>
                <p className="text-white font-serif font-bold text-lg xl:text-xl leading-none">22°C Cold</p>
                <div className="mt-4 flex gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
                  {[1, 2, 3, 4, 5].map(j => <div key={j} className="h-1 w-2 bg-gold-400"></div>)}
                </div>
              </div>
            </div>

            {/* CORE BRANDING - The World's Richest Look */}
            <div className="lg:col-span-8 order-1 lg:order-2 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-2 mb-12 animate-fade-in shadow-2xl">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
                </span>
                <span className="text-[10px] text-white font-black uppercase tracking-[0.4em]">2024 PRODUCTION CYCLE ACTIVE</span>
              </div>

              <h1 className="text-fluid-h1 font-serif font-black text-white leading-[0.85] mb-12 tracking-tighter relative group">
                <span className="block text-gold-500 text-xl md:text-2xl lg:text-4xl font-sans font-black mb-6 tracking-[0.5em] uppercase opacity-90 drop-shadow-2xl">Lider Zeytincilik</span>
                PREMIUM<br />
                <span className="gradient-text italic font-light drop-shadow-[0_0_50px_rgba(234,179,8,0.2)]">COLLECTION</span>
              </h1>

              <div className="max-w-2xl text-lg md:text-2xl text-olive-100/60 mb-16 font-light leading-relaxed italic border-b-2 border-gold-500/20 pb-8">
                Ege&apos;nin genetik kodlarını taşıyan, asırlık ağaçlardan süzülen "Sıvı Altın" standardını mekanik kusursuzlukla şişeliyoruz.
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8 w-full justify-center text-center">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Merhaba, zeytinyağı siparişi vermek istiyorum.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-6 bg-gold-500 text-olive-950 px-16 py-8 rounded-none text-2xl font-black transition-all hover:shadow-[0_0_100px_rgba(234,179,8,0.3)] hover:-translate-y-2 uppercase tracking-[0.2em] overflow-hidden"
                  id="hero-whatsapp-cta"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative z-10 flex items-center gap-4">
                    Sipariş Ver
                    <svg className="w-8 h-8 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </a>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center justify-center gap-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 px-14 py-8 rounded-none text-2xl font-black transition-all backdrop-blur-3xl uppercase tracking-widest hover:border-gold-500/50"
                  id="hero-phone-cta"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Decorative Light Leaks */}
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-gold-500/5 blur-[200px] -z-10 animate-float"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-olive-500/5 blur-[250px] -z-10"></div>
      </section>

      {/* ===== [ANNEX_A: CHEMICAL_FINGERPRINT] ===== */}
      <section className="bg-background py-32 border-b border-white/5 relative tech-grid overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gold-500/30"></div>
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-12">
            <div className="text-left">
              <span className="text-gold-500 text-[10px] font-mono font-black uppercase tracking-[0.6em] mb-4 block">Section_B // Analysis_Report</span>
              <h2 className="font-serif text-fluid-h2 font-black text-white leading-tight uppercase tracking-tighter">
                Kimyasal <span className="text-gold-400 italic font-light">Parmak İzi</span>
              </h2>
            </div>
            <div className="bg-white/[0.02] hud-border p-8 backdrop-blur-md max-w-sm">
              <p className="text-olive-300 font-mono text-[10px] uppercase leading-relaxed tracking-widest italic opacity-60">
                Her parti üretimimiz bağımsız laboratuvarlarca analiz edilerek 'İlaç Niyetine' tüketilebilecek saflık değerlerini garanti altına alır.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              { label: 'Yüksek Polifenol', val: '450+', unit: 'mg/kg', desc: 'Güçlü Antioksidan Kapasitesi', detail: 'Hücre yenileyici biyokimyasal bileşenler.' },
              { label: 'Oleik Asitlik', val: '< 0.3', unit: '%', desc: 'Ultra-Düşük Serbest Yağ Asidi', detail: 'Hassas hasat ve 22°C soğuk sıkım kanıtı.' },
              { label: 'E-Vitamini', val: '200+', unit: 'mg/kg', desc: 'Doğal Koruyucu Tokoferol', detail: 'Zeytinin şifasını en saf haliyle sunar.' },
              { label: 'Peroksit Değeri', val: '< 5.0', unit: 'meqO2', desc: 'Maksimum Oksidasyon Direnci', detail: 'Tazeliğin ve uzun ömürlü kullanımın teminatı.' }
            ].map((stat, i) => (
              <div key={i} className="relative group p-12 bg-white/[0.01] border border-white/5 hover:border-gold-500/20 transition-all duration-700 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-gold-500/20 uppercase tracking-widest">CERT_ID: {i + 1}</div>
                <p className="text-[10px] text-gold-500/60 font-black uppercase tracking-[0.4em] mb-6">{stat.label}</p>
                <p className="text-6xl font-serif font-black text-white mb-4 tracking-tighter group-hover:text-gold-400 transition-colors">
                  {stat.val}
                  <span className="text-lg ml-2 opacity-50 font-sans tracking-widest uppercase">{stat.unit}</span>
                </p>
                <div className="space-y-4">
                  <p className="text-xs text-olive-400 font-bold uppercase tracking-widest italic">{stat.desc}</p>
                  <p className="text-[9px] text-olive-500 font-mono leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-1000">{stat.detail}</p>
                </div>
                {/* Corner HUD lines */}
                <div className="absolute bottom-0 left-0 w-12 h-[2px] bg-gold-500/30"></div>
                <div className="absolute bottom-0 left-0 w-[2px] h-12 bg-gold-500/30"></div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ===== ELITE AUTHORITY & TRUST BAR ===== */}
      < section className="bg-olive-950 border-y border-white/5 relative z-20" >
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8 items-start justify-items-center">
            {[
              {
                img: '/images/trust/iso22000.png',
                text: 'ISO 22000',
                color: 'border-blue-500/30'
              },
              {
                img: '/images/trust/halal.png',
                text: 'Helal Sertifikalı',
                color: 'border-emerald-500/30'
              },
              {
                img: '/images/trust/lab.png',
                text: 'Lab Analizli',
                color: 'border-cyan-500/30'
              },
              {
                img: '/images/trust/shipping.png',
                text: 'Ücretsiz Kargo',
                color: 'border-amber-500/30'
              },
              {
                img: '/images/trust/ambar.png',
                text: 'Ambar Gönderim',
                color: 'border-orange-500/30'
              },
              {
                img: '/images/trust/natural.png',
                text: '%100 Doğal',
                color: 'border-green-500/30'
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-olive-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                text: 'Toptan Fiyat',
                color: 'border-rose-500/30'
              },
            ].map((badge, i) => (
              <div key={i} className="flex flex-col items-center gap-5 group cursor-default">
                {/* Logo Seal Container */}
                <div className={`relative w-24 h-24 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-4 ${badge.color} transform transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-110 group-hover:border-gold-400 group-hover:shadow-gold-500/20`}>
                  {/* Outer Shine Ring */}
                  <div className="absolute inset-[-4px] rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {badge.img ? (
                    <div className="relative w-full h-full p-2 overflow-hidden rounded-full">
                      <Image
                        src={badge.img}
                        alt={badge.text}
                        fill
                        className="object-contain transform transition-transform duration-500 group-hover:scale-125"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center p-4 text-center">
                      {badge.icon}
                    </div>
                  )}

                  {/* Glassy reflection */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none"></div>
                </div>

                {/* Text Label */}
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[11px] md:text-xs font-black text-white/90 uppercase tracking-widest text-center leading-tight group-hover:text-gold-400 transition-colors drop-shadow-md">
                    {badge.text}
                  </span>
                  <div className="w-8 h-1 bg-gold-500/30 rounded-full overflow-hidden">
                    <div className="w-0 h-full bg-gold-400 group-hover:w-full transition-all duration-700"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* ===== UNIFIED PRODUCT MATRIX SECTION ===== */}
      <section className="bg-background py-48 relative border-t border-white/5 overflow-hidden tech-grid" id="products" >
        {/* Animated Background Graphics */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" ></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>

        <div className="max-w-[1700px] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-32 gap-12">
            <div className="max-w-2xl text-left">
              <span className="text-gold-500 text-xs font-black uppercase tracking-[0.5em] mb-6 block font-mono border-l-4 border-gold-500 pl-6">Collection Catalog 01</span>
              <h2 className="font-serif text-fluid-h2 font-black text-white leading-tight uppercase tracking-tighter">
                Hassas <span className="text-gold-400 italic font-light">Seçki</span>
              </h2>
            </div>
            <div className="md:text-right">
              <p className="text-olive-300 max-w-sm mb-6 font-mono text-xs uppercase tracking-widest opacity-60">Tüm ürünlerimiz yüksek hassasiyetli laboratuvar analizlerinden geçirilerek mühürlenmektedir.</p>
              <div className="flex justify-end gap-2">
                {[1, 2, 3].map(i => <div key={i} className="w-12 h-1 bg-gold-500/20"></div>)}
              </div>
            </div>
          </div>

          {/* Products Matrix - High Complexity Tiles */}
          <div className="mb-48">
            <div className="flex items-center gap-8 mb-20 px-4">
              <p className="text-[10px] font-mono text-gold-500/40">MATRIX_MODE: PRODUCT_LINEUP</p>
              <h3 className="font-serif text-4xl font-black text-white uppercase tracking-tight">Ürünlerimiz</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
              {products.map((product, i) => (
                <Link
                  key={i}
                  href={product.href}
                  className="group relative hud-border hud-border-tl hud-border-br bg-white/[0.02] transition-all duration-1000 hover:-translate-y-6 hover:shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col h-full"
                >
                  <div className="aspect-[4/5] relative bg-black/40 overflow-hidden">
                    <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-125 transition-transform duration-[3000ms] opacity-60 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80"></div>

                    {/* HUD Overlay Stats - Masterpiece Version */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-700">
                      <div className="flex justify-between items-start">
                        <div className="bg-gold-500 text-olive-950 text-[10px] font-mono font-black px-4 py-2 tracking-widest uppercase">
                          ID: {product.stats?.polyphenol ? 'PREMIUM_FLUID' : 'SOLID_FRUIT'}
                        </div>
                        <div className="bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1 text-[8px] font-mono text-gold-500">
                          {product.size}
                        </div>
                      </div>

                      <div className="space-y-2 bg-black/60 backdrop-blur-lg border border-white/10 p-6 translate-y-20 group-hover:translate-y-0 transition-all duration-1000">
                        {product.stats && Object.entries(product.stats).map(([k, v], idx) => (
                          <div key={idx} className="flex justify-between items-center text-[8px] font-mono uppercase tracking-widest">
                            <span className="text-olive-400">{k}:</span>
                            <span className="text-gold-500">{v}</span>
                          </div>
                        ))}
                        <div className="h-[2px] bg-gold-500/40 w-full mt-4"></div>
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                      <p className="text-[10px] text-gold-400 font-black uppercase tracking-[0.3em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity">ÖZELLİK: LAB_GRADED</p>
                      <div className="h-0.5 bg-gold-400/30 w-0 group-hover:w-full transition-all duration-1000"></div>
                    </div>
                  </div>
                  <div className="p-8 bg-white/[0.01] flex flex-col flex-1 border-t border-white/5">
                    <h4 className="font-serif text-2xl font-black text-white group-hover:text-gold-500 transition-colors mb-4 uppercase tracking-tight">{product.name}</h4>
                    <p className="text-[11px] text-olive-300 italic font-light mb-8 flex-1 leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                      {product.desc}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gold-500">Detayları Gör</p>
                      <svg className="w-6 h-6 text-gold-500 group-hover:translate-x-4 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Categories Matrix - Technical Grid Icons */}
          <div>
            <div className="flex items-center gap-8 mb-20 px-4">
              <p className="text-[10px] font-mono text-gold-500/40">MATRIX_MODE: CATEGORY_LOOKUP</p>
              <h3 className="font-serif text-4xl font-black text-white uppercase tracking-tight">Kategorilerimiz</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {categories.map((cat, i) => (
                <Link
                  key={cat.slug}
                  href={`/kategori/${cat.slug}`}
                  className="group relative p-10 bg-white/[0.02] border border-white/5 hover:border-gold-500/40 transition-all duration-500 flex flex-col items-center text-center hover:bg-white/[0.04]"
                >
                  <div className="relative w-24 h-24 mb-8">
                    <div className="absolute inset-0 bg-gold-500/10 group-hover:bg-gold-500/20 rotate-45 transition-all duration-700"></div>
                    <div className="absolute inset-0 border border-white/10 group-hover:border-gold-500/50 transition-all"></div>
                    <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                      <Image src={cat.image} alt={cat.name} width={64} height={64} className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                    </div>
                  </div>
                  <h4 className="font-black text-white text-sm group-hover:text-gold-400 transition-colors mb-4 uppercase tracking-[0.2em] leading-tight">{cat.name}</h4>
                  <p className="text-[9px] font-mono text-gold-500/30 uppercase tracking-[0.3em]">CODE: 0x{i.toString(16).padStart(2, '0')}</p>
                </Link>
              ))}
            </div>
          </div>
          {/* [ANNEX_C: SENSORY_PALATE] - Sommelier Notes */}
          <div className="mt-48 grid lg:grid-cols-2 gap-12">
            <div className="p-16 bg-white/[0.02] border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-gold-500/40"></div>
              <span className="text-gold-500 text-[10px] font-mono font-black uppercase tracking-[0.5em] mb-8 block">Tadım Profili // Tasting_Notes</span>
              <h3 className="font-serif text-4xl font-black text-white mb-10 leading-tight">
                Hasat Duyusu: <br />
                <span className="italic font-light text-gold-400">Domates Yaprağı & Çağla</span>
              </h3>
              <p className="text-olive-300 text-sm leading-relaxed font-light italic opacity-60 mb-10">
                Erken hasat ürünlerimizde boğazda hissedilen o hafif yakıcılık, içindeki yüksek antioksidan değerinin (E Vitamini ve Polifenol) en doğal göstergesidir.
              </p>
              <div className="flex gap-4">
                {['Taze Çimen', 'Enginar', 'Yeşil Elma'].map((note, i) => (
                  <div key={i} className="px-4 py-2 border border-white/10 text-[9px] font-mono text-gold-500 uppercase tracking-widest">{note}</div>
                ))}
              </div>
            </div>
            <div className="relative aspect-video border border-white/5 overflow-hidden">
              <Image src="/images/extraction-process.png" alt="Process" fill className="object-cover transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-white font-mono text-[10px] tracking-widest">REAL_TIME_PROCESS: COLD_EXTRACTION_22C</p>
              </div>
            </div>
          </div>

          <div className="mt-48 flex justify-center">
            <div className="relative px-12 py-8 bg-white/5 hud-border">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent animate-pulse"></div>
              <div className="flex items-center gap-8 text-olive-100 font-mono text-xs uppercase tracking-[0.4em]">
                <span className="text-gold-500 animate-pulse">⚡ HARVEST_ALERT:</span>
                2024 Erken Hasat Stokları Kontrollü Olarak Satışa Açılmıştır.
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===== [PROTOCOL_03: TERROIR_HERITAGE] ===== */}
      <section className="bg-background py-48 overflow-hidden relative border-b border-white/5 tech-grid">
        <div className="max-w-[1600px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="relative">
              <div className="hud-border hud-border-tl hud-border-br p-4 bg-white/[0.02]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src="/images/modern-warehouse.png" alt="Terroir" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                  {/* Topographic Overlays */}
                  <div className="absolute inset-x-8 bottom-8 p-10 bg-black/60 backdrop-blur-xl border border-white/10">
                    <span className="text-gold-500 text-[8px] font-mono font-black uppercase tracking-[0.4em] mb-4 block">Geographic_Data // Aydın_Akhisar</span>
                    <h3 className="text-3xl font-serif font-black text-white mb-4 uppercase tracking-tighter italic">Toprağın <br /><span className="text-gold-400 font-light">Genetik Mirası</span></h3>
                    <p className="text-olive-300 text-xs leading-relaxed font-mono opacity-60">Asırlık ağaçların kök saldığı kalkerli toprak yapısı ve poyraz rüzgarlarının yarattığı mikro-klima, her damlada eşsiz bir aroma spektrumu yaratır.</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-gold-500/5 blur-[120px] -z-10"></div>
            </div>

            <div className="space-y-16">
              <div className="space-y-8 text-left">
                <span className="text-gold-500 text-xs font-mono font-black uppercase tracking-[0.5em] block border-l-4 border-gold-500 pl-6">Facility_Specs // MOD_04</span>
                <h2 className="font-serif text-fluid-h2 font-black text-white leading-[0.85] tracking-tighter">
                  Doğa ve <br />
                  <span className="italic text-gold-500 font-light font-serif">Mekanik</span>
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-12">
                {[
                  { label: 'Sürdürülebilirlik', val: 'Zero Waste', desc: 'Sıfır atık prensibiyle üretim döngüsü.' },
                  { label: 'İzlenebilirlik', val: 'Full Trace', desc: 'Şişe üzerindeki kodla bahçeye kadar takip.' }
                ].map((item, i) => (
                  <div key={i} className="space-y-4">
                    <p className="text-[10px] font-mono text-gold-500/40 uppercase tracking-widest italic">{item.label}</p>
                    <p className="text-3xl font-serif font-black text-white tracking-tight">{item.val}</p>
                    <p className="text-olive-300 text-sm leading-relaxed font-light italic opacity-60">{item.desc}</p>
                  </div>
                ))}
              </div>

              <Link href="/hakkimizda" className="inline-flex items-center gap-6 group">
                <div className="h-px w-20 bg-gold-500/40 group-hover:w-40 transition-all"></div>
                <span className="text-gold-500 font-black text-[11px] uppercase tracking-[0.4em]">Üretim Manifestosunu Oku</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== [PROTOCOL_04: INDUSTRIAL_INFRASTRUCTURE] ===== */}
      <section className="bg-background py-48 overflow-hidden relative border-b border-white/5 tech-grid">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Image src="/images/modern-warehouse.png" alt="Modern Depo" fill className="object-cover" />
        </div>

        <div className="max-w-[1600px] mx-auto px-6 relative z-10">
          <div className="text-left mb-32">
            <span className="text-gold-400 text-xs font-mono font-black uppercase tracking-[0.5em] mb-6 block border-l-4 border-gold-500 pl-6">PROTOCOL_04: ENTEGRE_URETIM</span>
            <h2 className="font-serif text-fluid-h2 font-black text-white leading-[0.85] tracking-tighter">
              Kusursuz <br />
              <span className="italic text-gold-500 font-light font-serif">Ekstraksiyon</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-12 grid md:grid-cols-3 gap-12">
              {[
                {
                  id: '01',
                  label: 'Bahçeden Fabrikaya',
                  desc: 'Aydın ve Akhisar daki bahçelerimizden gelen zeytinler, oksidasyonu önlemek için 4 saat içinde sıkım hattına girer.',
                },
                {
                  id: '02',
                  label: 'Azot Altında Dolum',
                  desc: 'Oksijen temasını kesen azot basma teknolojimizle zeytinyağının o ilk günkü taze meyvemsi aromasını yıllarca koruyoruz.',
                },
                {
                  id: '03',
                  label: 'Sürekli Kontrol',
                  desc: 'HACCP ve ISO standartlarında, her lot üretimi için anlık ısı ve basınç takibi ile stabiliteyi garanti ediyoruz.',
                },
              ].map((item, i) => (
                <div key={i} className="group relative p-12 bg-white/[0.02] hud-border hud-border-tl hud-border-br transition-all duration-700 hover:bg-white/[0.05]">
                  <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-gold-500/20">UNIT_ID: {item.id}</div>
                  <div className="w-20 h-20 bg-gold-500 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-[0_10px_40px_rgba(234,179,8,0.2)]">
                    <span className="text-olive-950 font-black text-xl italic">{item.id}</span>
                  </div>
                  <h3 className="text-3xl font-serif font-black text-white mb-6 uppercase tracking-tight group-hover:text-gold-400 transition-colors leading-tight">{item.label}</h3>
                  <p className="text-olive-200 leading-relaxed text-sm md:text-base font-light italic opacity-60 group-hover:opacity-100 transition-opacity mb-8">{item.desc}</p>
                  <div className="h-0.5 bg-white/10 w-full relative">
                    <div className="absolute inset-0 bg-gold-400 w-0 group-hover:w-full transition-all duration-1000"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 opacity-40 hover:opacity-100 transition-opacity">
              {[
                '/images/extraction-process.png',
                '/images/filling-conveyor.png',
                '/images/quality-inspection.png',
                '/images/retail-boxes.png'
              ].map((img, i) => (
                <div key={i} className="relative aspect-video transition-all duration-700 border border-white/10">
                  <Image src={img} alt="Tesis" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gold-500/20 mix-blend-overlay"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== GLOBAL COMMAND (LOGISTICS) SECTION ===== */}
      <section className="bg-background py-48 overflow-hidden relative border-t border-white/5 tech-grid">
        <div className="absolute inset-0 z-0">
          <div className="fixed top-0 left-0 w-full h-full opacity-10 bg-[url('/images/modern-warehouse.png')] bg-cover"></div>
        </div>

        <div className="max-w-[1600px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="relative">
              <div className="relative z-10 aspect-square border border-white/10 bg-white/[0.02] p-12 hud-border hud-border-tl hud-border-br">
                <div className="absolute top-4 left-4 font-mono text-[10px] text-gold-500/40">SYSTEM_STATUS: ROUTING_ACTIVE</div>
                <Image src="/images/logistics-forklift.png" alt="Lojistik Hizmetimiz" fill className="object-cover p-20 transition-all" />

                {/* Floating GPS Data Points */}
                <div className="absolute top-1/2 left-1/4 animate-pulse">
                  <div className="w-2 h-2 bg-gold-400 rounded-full shadow-[0_0_15px_#eab308]"></div>
                  <div className="mt-2 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 text-[8px] font-mono text-white">TR_NW_HUB</div>
                </div>
                <div className="absolute bottom-1/3 right-1/4 animate-pulse delay-500">
                  <div className="w-2 h-2 bg-gold-400 rounded-full shadow-[0_0_15px_#eab308]"></div>
                  <div className="mt-2 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 text-[8px] font-mono text-white">TR_SW_PLANT</div>
                </div>
              </div>
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-gold-500/5 blur-[150px] -z-10"></div>
            </div>

            <div className="space-y-12">
              <span className="text-gold-400 text-xs font-mono font-black uppercase tracking-[0.5em] block border-l-4 border-gold-500 pl-6">MOD_03: GLOBAL_DISTRIBUTION</span>
              <h2 className="font-serif text-fluid-h2 font-black text-white mb-10 leading-[0.85] tracking-tighter">
                81 İle Güçlü <br />
                <span className="text-gold-400 italic font-light font-serif">Lojistik Ağ</span>
              </h2>
              <p className="text-olive-200 text-2xl mb-12 leading-relaxed font-light italic opacity-60 max-w-xl">
                Kendi araç filomuz ve bölge ambarlarımızla, fabrikadan doğrudan sevkiyat yaparak lojistik maliyetlerini minimize ediyoruz.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { label: '48 Saatte Hazırlık', code: 'T+48H' },
                  { label: 'Güvenli Ambalaj', code: 'PROT_X' },
                  { label: 'Fabrika Sevkiyatı', code: 'DIRECT' },
                  { label: 'Ambar Gönderimi', code: 'FAST_TR' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-2 bg-white/[0.02] p-8 border border-white/5 hover:border-gold-500/20 transition-all">
                    <p className="text-[10px] font-mono text-gold-500/40">{item.code}</p>
                    <p className="text-white font-black uppercase tracking-[0.2em]">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="p-12 bg-white/[0.02] border border-gold-500/20 rounded-none flex items-center gap-10 hover:bg-gold-500/5 transition-all group">
                <div className="text-gold-500 group-hover:scale-110 transition-transform">
                  <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1m-6 0a1 1 0 001-1m-6 0a1 1 0 001 1h1m-6 0H4" /></svg>
                </div>
                <div>
                  <h4 className="font-serif text-3xl font-black text-white tracking-tight mb-4">Toptan Araç Sevkiyatı</h4>
                  <p className="text-olive-300 text-sm leading-relaxed mb-6 font-mono opacity-60">Şehirler arası tonajlı sevkiyatlarda kendi araçlarımızla teslimat imkanı.</p>
                  <Link href="/bolgeler" className="inline-flex items-center gap-4 text-gold-500 font-black text-[11px] uppercase tracking-[0.3em] group-hover:gap-8 transition-all">
                    81 İl Hizmet Bölgelerimiz <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ===== BLOG PREVIEW (TECHNICAL ARCHIVE) SECTION ===== */}
      <section className="bg-background py-48 border-t border-white/5 relative overflow-hidden tech-grid" id="blog">
        <div className="max-w-[1600px] mx-auto px-6 relative z-10">
          <div className="text-left mb-32">
            <span className="text-gold-400 text-xs font-mono font-black uppercase tracking-[0.5em] mb-6 block border-l-4 border-gold-500 pl-6">RESOURCES // TECHNICAL_ARCHIVE</span>
            <h2 className="font-serif text-fluid-h2 font-black text-white leading-[0.85] tracking-tighter">
              Zeytin Kültürü &<br />
              <span className="italic text-gold-500 font-light font-serif">Bilgi Arşivi</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-32">
            {blogPreviews.slice(0, 3).map((post, i) => (
              <Link
                key={i}
                href={`/blog/${post.slug}`}
                className="group relative flex flex-col bg-white/[0.02] hud-border hud-border-tl hud-border-br transition-all duration-700 hover:-translate-y-4 hover:bg-white/[0.05]"
              >
                <div className="aspect-video relative overflow-hidden bg-black/40">
                  <Image src={`/images/blog/${post.image}`} alt={post.title} fill className="object-cover group-hover:scale-125 transition-transform duration-[3000ms] opacity-40 group-hover:opacity-100" />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 font-mono text-[8px] text-gold-500 uppercase tracking-widest">
                    REF: BLG-{100 + i}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-white/10 overflow-hidden">
                    <div className="absolute inset-0 bg-gold-400 w-0 group-hover:w-full transition-all duration-1000"></div>
                  </div>
                </div>
                <div className="p-12 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="h-[1px] w-8 bg-gold-500/40"></span>
                    <span className="text-[10px] text-gold-500/60 font-black uppercase tracking-widest">Research / Analysis</span>
                  </div>
                  <h3 className="text-3xl font-serif font-black text-white mb-6 group-hover:text-gold-400 transition-colors uppercase tracking-tight leading-tight">{post.title}</h3>
                  <p className="text-sm text-olive-300 line-clamp-3 italic leading-relaxed font-light mb-10 flex-1 opacity-60 group-hover:opacity-100 transition-opacity">{post.excerpt}</p>
                  <div className="flex items-center justify-between group-hover:translate-x-4 transition-transform duration-500">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gold-500">Arşivi Oku</span>
                    <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              href="/blog"
              className="group relative px-20 py-8 bg-white/5 border border-white/10 text-white font-black text-sm uppercase tracking-[0.5em] transition-all hover:bg-gold-500 hover:text-olive-950 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative z-10">Tüm Teknik Arşivi Keşfet</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== DIRECT FACTORY INTERFACE (CTA) SECTION ===== */}
      <section className="bg-background py-48 relative overflow-hidden tech-grid border-t border-white/5">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/filling-conveyor.png')] bg-cover opacity-10"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="hud-border hud-border-tl hud-border-br p-20 bg-white/[0.01] backdrop-blur-3xl border-white/5">
            <span className="text-gold-500 text-[10px] font-mono font-black uppercase tracking-[0.6em] mb-12 block">DIRECT_ORDER_UPLINK_01</span>
            <h2 className="font-serif text-fluid-h2 font-black text-white mb-10 leading-[0.85] tracking-tighter">
              Fabrikadan<br />
              <span className="italic font-light text-gold-400 drop-shadow-[0_0_30px_rgba(234,179,8,0.2)]">Hemen Al</span>
            </h2>
            <div className="flex justify-center items-center gap-12 mb-16 opacity-60">
              <div className="h-px w-20 bg-gold-500/40"></div>
              <p className="text-olive-300 text-sm font-mono uppercase tracking-widest italic">81 İl Ücretsiz Kargo // Toptan İskonto</p>
              <div className="h-px w-20 bg-gold-500/40"></div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Merhaba, zeytinyağı siparişi vermek istiyorum.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-16 py-8 bg-gold-500 text-olive-950 font-black text-xl uppercase tracking-widest overflow-hidden transition-all hover:shadow-[0_0_80px_rgba(234,179,8,0.4)] hover:-translate-y-2"
                id="cta-whatsapp"
              >
                <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center gap-4 py-2">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  WhatsApp
                </span>
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="group relative px-16 py-8 bg-white/5 border border-white/10 text-white font-black text-xl uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROTOCOL_SPECIFICATION (FAQ) SECTION ===== */}
      <section className="bg-background py-48 tech-grid">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-6 mb-24 opacity-60">
            <span className="text-gold-500 font-mono text-xs uppercase tracking-[0.5em]">FAQ // SYSTEM_PROTOCOLS</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          <FAQSection items={faqItems} />

          <div className="mt-32 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 opacity-20 hover:opacity-100 transition-opacity">
            <div className="font-mono text-[10px] text-gold-500 uppercase tracking-widest">
              AUTH_CODE: LZ-TR-2024-X11
            </div>
            <div className="font-mono text-[10px] text-gold-500 uppercase tracking-widest text-center">
              ENGINEERING STANDARDS: COMPLIANT WITH ISO 22000 & HACCP_PROT
            </div>
            <div className="font-mono text-[10px] text-gold-500 uppercase tracking-widest">
              VER: 4.2.0_MASTERPIECE
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
