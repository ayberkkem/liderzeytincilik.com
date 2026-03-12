import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import { categories } from '@/lib/categories';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background text-olive-200 border-t border-white/5 tech-grid relative overflow-hidden">
            <div className="absolute inset-0 bg-gold-500/[0.02] pointer-events-none"></div>
            {/* Main Footer Content */}
            <div className="max-w-[1600px] mx-auto px-6 py-32 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
                    {/* Brand / Facility */}
                    <div className="lg:col-span-1 space-y-10">
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="w-16 h-16 bg-gold-500 flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                                <span className="text-olive-950 font-black text-2xl italic ls-tighter">LZ</span>
                            </div>
                            <div>
                                <span className="text-2xl font-serif font-black text-white block leading-none uppercase tracking-tighter">Lider</span>
                                <span className="text-[10px] font-mono font-black text-gold-500/60 uppercase tracking-[0.4em] leading-none">Kurumsal Üretim</span>
                            </div>
                        </Link>

                        <div className="space-y-6">
                            <div className="hud-border hud-border-tl hud-border-br p-6 bg-white/[0.02] border-white/5">
                                <p className="text-[10px] font-mono text-gold-500/40 mb-2 uppercase group-hover:text-gold-400 transition-colors tracking-widest">Tesis Adresi</p>
                                <p className="text-xs text-olive-300 leading-relaxed font-light italic">
                                    {siteConfig.address}
                                </p>
                            </div>
                        </div>

                        <p className="text-sm text-olive-300 mb-6 leading-relaxed font-light italic">
                            Ege&apos;nin bereketli topraklarından, el değmeden sofranıza ulaştırılan şifa kaynağı.
                        </p>
                        <div className="space-y-3">
                            <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-olive-200 hover:text-gold-400 transition-colors uppercase tracking-widest font-bold">
                                <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                {siteConfig.phone}
                            </a>
                            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-olive-200 hover:text-gold-400 transition-colors uppercase tracking-widest font-bold">
                                <svg className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                Hemen Fiyat Al ve Sipariş Ver
                            </a>
                            <p className="flex items-start gap-3 text-xs text-olive-400 leading-relaxed pt-2">
                                <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
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
                        <div className="mt-8 p-6 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-none border border-white/10 shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <p className="text-[11px] font-black text-gold-400 uppercase tracking-widest leading-loose text-center flex items-center justify-center gap-3">
                                <span className="w-8 h-8 rounded-none bg-gold-500 text-olive-950 flex items-center justify-center shrink-0 shadow-lg border-t border-white/40">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 10 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </span>
                                Toptan alımlarda fabrika satış fiyatları uygulanır.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar / System Log */}
            <div className="border-t border-white/5 bg-black/40 py-10">
                <div className="max-w-[1600px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-[10px] font-mono text-olive-500 uppercase tracking-[0.4em]">
                        © LİDER ZEYTİNCİLİK // TÜM HAKLARI SAKLIDIR
                    </p>
                </div>
            </div>

        </footer>
    );
}
