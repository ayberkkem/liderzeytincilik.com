import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-olive-950 flex items-center justify-center px-4 overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 bg-[url('/images/ancient-olive-tree.png')] bg-cover bg-center grayscale"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-olive-950 via-transparent to-olive-950"></div>

            <div className="relative z-10 text-center max-w-2xl px-8 py-20 bg-white/5 backdrop-blur-3xl rounded-[60px] border border-white/10 shadow-3xl">
                <span className="text-gold-400 font-serif italic text-8xl md:text-9xl font-black mb-4 block leading-none">404</span>
                <h1 className="text-3xl md:text-4xl font-serif font-black text-white mb-6 uppercase tracking-tighter">Sayfa Bulunamadı</h1>
                <p className="text-olive-300 text-lg mb-10 font-light italic leading-relaxed">
                    Aradığınız sayfa zeytin bahçelerimizde kaybolmuş olabilir. Ana sayfamıza dönerek taze ürünlerimize göz atabilirsiniz.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="bg-gold-400 hover:bg-gold-500 text-olive-950 font-black uppercase tracking-[0.2em] px-10 py-5 rounded-2xl transition-all shadow-xl shadow-gold-500/10 active:scale-95 text-xs"
                    >
                        Ana Sayfaya Dön
                    </Link>
                    <Link
                        href="/urunler"
                        className="bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-[0.2em] px-10 py-5 rounded-2xl transition-all border border-white/10 active:scale-95 text-xs"
                    >
                        Ürünlerimizi İncele
                    </Link>
                </div>
            </div>
        </div>
    );
}
