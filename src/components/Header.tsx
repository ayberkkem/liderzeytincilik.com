'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig, navLinks } from '@/lib/siteConfig';

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    return (
        <>
            {/* Top Bar */}
            <div className="bg-black/30 text-white text-[11px] font-black uppercase tracking-[0.2em] border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                            <span className="text-gold-500">📞</span>
                            {siteConfig.phone}
                        </a>
                        <span className="hidden sm:inline text-white/20">|</span>
                        <span className="hidden sm:inline text-olive-300">Fabrikadan Doğrudan Sevkiyat</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="hidden lg:inline text-gold-500/80 font-serif lowercase italic normal-case tracking-normal text-sm">Üretici & Toptancı</span>
                    </div>
                </div>
            </div>


            {/* Main Header */}
            <header className="sticky top-0 z-50 bg-olive-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 lg:h-24">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-olive-600 to-olive-800 flex items-center justify-center shadow-lg group-hover:shadow-gold-500/20 transition-all duration-500 border border-white/10">
                            <svg className="w-6 h-6 lg:w-9 lg:h-9 text-gold-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                            </svg>
                        </div>
                        <div>
                            <span className="text-xl lg:text-2xl font-serif font-black text-white tracking-tighter uppercase block leading-none">Lider</span>
                            <span className="text-xs lg:text-sm font-black text-gold-500/60 uppercase tracking-[0.3em] leading-none">Zeytincilik</span>
                        </div>
                    </Link>


                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <div
                                key={link.href}
                                className="relative group"
                                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <Link
                                    href={link.href}
                                    className="px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-olive-200 hover:text-gold-400 rounded-xl hover:bg-white/5 transition-all flex items-center gap-1.5"
                                >
                                    {link.label}
                                    {link.children && (
                                        <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                                    )}
                                </Link>


                                {/* Dropdown */}
                                {link.children && openDropdown === link.label && (
                                    <div className="absolute top-full left-0 mt-2 w-72 bg-olive-900 rounded-3xl shadow-2xl border border-white/10 py-3 animate-fade-in z-50 overflow-hidden backdrop-blur-xl">
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                className="block px-6 py-3 text-[11px] font-black uppercase tracking-widest text-olive-200 hover:bg-gold-500 hover:text-olive-950 transition-all"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}

                            </div>
                        ))}
                    </nav>

                    {/* CTA + Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <a
                            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Merhaba, zeytinyağı siparişi vermek istiyorum.')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden lg:inline-flex items-center gap-3 bg-gold-400 hover:bg-gold-500 text-olive-950 px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all hover:shadow-gold-500/20 shadow-lg active:scale-95"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            Sipariş
                        </a>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden w-12 h-12 flex items-center justify-center text-gold-400 bg-white/5 rounded-2xl hover:bg-white/10 border border-white/10 transition-colors"
                            aria-label="Menü"
                        >
                            {mobileOpen ? (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                            )}
                        </button>
                    </div>

                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="lg:hidden border-t border-white/5 bg-olive-950 animate-fade-in fixed inset-x-0 top-16 bottom-0 z-[60] overflow-y-auto">
                        <nav className="max-w-7xl mx-auto px-6 py-10 space-y-6">
                            {navLinks.map((link) => (
                                <div key={link.href} className="space-y-4">
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block text-2xl font-serif font-black text-white hover:text-gold-400 transition-colors uppercase tracking-tight"
                                    >
                                        {link.label}
                                    </Link>
                                    {link.children && (
                                        <div className="grid grid-cols-1 gap-3 ml-2 border-l border-white/10 pl-6">
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="block py-1 text-sm font-bold text-olive-400 hover:text-white transition-colors uppercase tracking-widest"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-10 space-y-4">
                                <a
                                    href={`https://wa.me/${siteConfig.whatsapp}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full bg-gold-400 text-olive-950 py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-gold-500/10"
                                >
                                    Sipariş Hattı
                                </a>
                                <p className="text-center text-olive-500 text-[10px] font-black uppercase tracking-[0.3em]">
                                    Lider Zeytincilik © {new Date().getFullYear()}
                                </p>
                            </div>
                        </nav>
                    </div>
                )}

            </header>
        </>
    );
}
