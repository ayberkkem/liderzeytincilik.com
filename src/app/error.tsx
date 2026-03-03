'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen bg-olive-950 flex items-center justify-center px-4 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('/images/ancient-olive-tree.png')] bg-cover bg-center grayscale"></div>

            <div className="relative z-10 text-center max-w-2xl px-8 py-20 bg-white/5 backdrop-blur-3xl rounded-[60px] border border-white/10 shadow-3xl text-white">
                <span className="text-gold-400 font-serif italic text-6xl font-black mb-8 block leading-none">Hata!</span>
                <h1 className="text-3xl font-serif font-black mb-6 uppercase tracking-tighter">Bir Şeyler Ters Gitti</h1>
                <p className="text-olive-300 text-lg mb-10 font-light italic leading-relaxed">
                    İstediğiniz işlemi gerçekleştirirken küçük bir sorun oluştu. Lütfen sayfayı yenileyin veya ana sayfaya dönün.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => reset()}
                        className="bg-gold-400 hover:bg-gold-500 text-olive-950 font-black uppercase tracking-[0.2em] px-10 py-5 rounded-2xl transition-all shadow-xl shadow-gold-500/10 active:scale-95 text-xs"
                    >
                        Tekrar Dene
                    </button>
                    <Link
                        href="/"
                        className="bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-[0.2em] px-10 py-5 rounded-2xl transition-all border border-white/10 active:scale-95 text-xs"
                    >
                        Ana Sayfaya Git
                    </Link>
                </div>
            </div>
        </div>
    );
}
