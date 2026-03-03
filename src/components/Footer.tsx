import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import { categories } from '@/lib/categories';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-olive-950 text-olive-200">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-olive-600 to-olive-800 flex items-center justify-center border border-white/10 group-hover:shadow-gold-500/20 transition-all">
                                <svg className="w-7 h-7 text-gold-400" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                </svg>
                            </div>
                            <div>
                                <span className="text-xl font-serif font-black text-white block leading-none uppercase tracking-tighter">Lider</span>
                                <span className="text-xs font-black text-gold-500/60 uppercase tracking-[0.3em] leading-none">Zeytincilik</span>
                            </div>
                        </Link>

                        <p className="text-sm text-olive-300 mb-6 leading-relaxed font-light italic">
                            Ege&apos;nin bereketli topraklarından, el değmeden sofranıza ulaştırılan şifa kaynağı.
                        </p>
                        <div className="space-y-3">
                            <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-olive-200 hover:text-gold-400 transition-colors uppercase tracking-widest font-bold">
                                <span className="text-gold-500">📞</span>
                                {siteConfig.phone}
                            </a>
                            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-olive-200 hover:text-green-400 transition-colors uppercase tracking-widest font-bold">
                                <span className="text-green-500 text-lg">💬</span>
                                WhatsApp Hattı
                            </a>
                            <p className="flex items-start gap-3 text-xs text-olive-400 leading-relaxed pt-2">
                                <span className="text-gold-500 text-lg">📍</span>
                                {siteConfig.address}
                            </p>
                        </div>

                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-gold-400 font-black mb-6 text-xs uppercase tracking-[0.3em]">Kategoriler</h3>
                        <ul className="space-y-3.5">
                            {categories.slice(0, 8).map((cat) => (
                                <li key={cat.slug}>
                                    <Link href={`/kategori/${cat.slug}`} className="text-xs font-bold uppercase tracking-widest text-olive-300 hover:text-gold-400 transition-colors">
                                        {cat.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-gold-400 font-black mb-6 text-xs uppercase tracking-[0.3em]">Hızlı Bağlantılar</h3>
                        <ul className="space-y-3.5">
                            <li><Link href="/urunler" className="text-xs font-bold uppercase tracking-widest text-olive-300 hover:text-gold-400 transition-colors">Ürünler</Link></li>
                            <li><Link href="/blog" className="text-xs font-bold uppercase tracking-widest text-olive-300 hover:text-gold-400 transition-colors">Blog</Link></li>
                            <li><Link href="/hakkimizda" className="text-xs font-bold uppercase tracking-widest text-olive-300 hover:text-gold-400 transition-colors">Hakkımızda</Link></li>
                            <li><Link href="/iletisim" className="text-xs font-bold uppercase tracking-widest text-olive-300 hover:text-gold-400 transition-colors">İletişim</Link></li>
                            <li><Link href="/bolgeler" className="text-xs font-bold uppercase tracking-widest text-olive-300 hover:text-gold-400 transition-colors">Hizmet Bölgeleri</Link></li>
                            <li><Link href="/kategori/zeytinyagi-toptan" className="text-xs font-bold uppercase tracking-widest text-olive-300 hover:text-gold-400 transition-colors">Toptan Satış</Link></li>
                            <li><Link href="/kategori/zeytinyagi-uretici" className="text-xs font-bold uppercase tracking-widest text-olive-300 hover:text-gold-400 transition-colors">Üretici</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-gold-400 font-black mb-6 text-xs uppercase tracking-[0.3em]">Yasal</h3>
                        <ul className="space-y-3.5">
                            <li><Link href="/kvkk" className="text-[10px] font-bold uppercase tracking-widest text-olive-400 hover:text-gold-400 transition-colors">KVKK Aydınlatma</Link></li>
                            <li><Link href="/gizlilik-politikasi" className="text-[10px] font-bold uppercase tracking-widest text-olive-400 hover:text-gold-400 transition-colors">Gizlilik Politikası</Link></li>
                            <li><Link href="/mesafeli-satis-sozlesmesi" className="text-[10px] font-bold uppercase tracking-widest text-olive-400 hover:text-gold-400 transition-colors">Satış Sözleşmesi</Link></li>
                            <li><Link href="/iade-politikasi" className="text-[10px] font-bold uppercase tracking-widest text-olive-400 hover:text-gold-400 transition-colors">İade Politikası</Link></li>
                        </ul>
                        <div className="mt-8 p-6 bg-white/5 rounded-3xl border border-white/5 shadow-inner">
                            <p className="text-[10px] font-black text-gold-500/80 uppercase tracking-widest leading-loose text-center">
                                🤝 Toptan alımlarda fabrika satış fiyatları uygulanır.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 bg-black/20">
                <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
                    <p className="text-[10px] font-black text-olive-500 uppercase tracking-[0.3em]">
                        © {currentYear} {siteConfig.name}. Tüm hakları saklıdır.
                    </p>
                    <div className="flex items-center gap-4 text-gold-500/40 text-[10px] font-black uppercase tracking-[0.2em] animate-pulse">
                        <span>•</span>
                        <span>81 İle Gönderim</span>
                        <span>•</span>
                        <span>Doğrudan Üreticiden</span>
                        <span>•</span>
                    </div>
                </div>
            </div>

        </footer>
    );
}
