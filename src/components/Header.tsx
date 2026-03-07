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
            <div className="bg-black/80 text-white text-[10px] font-mono font-black uppercase tracking-[0.4em] border-b border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gold-500/5 scanline"></div>
                <div className="max-w-[1600px] mx-auto px-6 py-3 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-10">
                        <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-gold-400 transition-all group">
                            <span className="text-gold-500 opacity-60 group-hover:opacity-100">UPLINK:</span>
                            {siteConfig.phone}
                        </a>
                        <span className="hidden sm:inline text-white/10">//</span>
                        <span className="hidden sm:inline text-olive-300">FACILITY: AYDIN_ Akhisar_DISTRICT_01</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="hidden lg:inline text-gold-500/80 italic tracking-widest">[ INDUSTRIAL_ACCESS_GRANTED ]</span>
                    </div>
                </div>
            </div>


            {/* Main Header */}
            <header className="sticky top-0 z-50 bg-olive-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 lg:h-24">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 lg:w-14 lg:h-14 rounded-none bg-gradient-to-br from-olive-600 to-olive-800 flex items-center justify-center shadow-lg group-hover:shadow-gold-500/20 transition-all duration-500 border border-white/10">
                            <svg className="w-6 h-6 lg:w-9 lg:h-9 text-gold-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                            </svg>
                        </div>
                        <div>
                            <span className="text-xl lg:text-2xl font-serif font-black text-white tracking-tighter uppercase block leading-none">Lider</span>
                            <span className="text-xs lg:text-sm font-black text-gold-500/60 uppercase tracking-[0.3em] leading-none">Zeytincilik</span>
                        </div>
                    </Link>


                    {/* Desktop Nav - Centered & Optimized */}
                    <nav className="hidden lg:flex items-center justify-center flex-1 px-10">
                        <div className="flex items-center gap-2">
                            {navLinks.map((link) => (
                                <div
                                    key={link.href}
                                    className="relative group"
                                    onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    <Link
                                        href={link.href}
                                        className="px-3 xl:px-5 py-3 text-[10px] xl:text-[11px] font-black uppercase tracking-[0.15em] xl:tracking-[0.25em] text-white/80 hover:text-gold-400 transition-all flex items-center gap-1 xl:gap-2 border-b-2 border-transparent hover:border-gold-500/30 whitespace-nowrap"
                                    >
                                        {link.label}
                                        {link.children && (
                                            <svg className="w-3 h-3 transition-transform group-hover:rotate-180 text-gold-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                                        )}
                                    </Link>

                                    {/* Dropdown - Premium Glass */}
                                    {link.children && openDropdown === link.label && (
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-80 bg-olive-950/95 backdrop-blur-2xl border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)] py-4 animate-fade-in z-50">
                                            <div className="absolute top-0 left-0 w-full h-1 bg-gold-400"></div>
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className="block px-8 py-4 text-[10px] font-black uppercase tracking-[0.3em] text-olive-200 hover:bg-gold-500 hover:text-olive-950 transition-all border-l-4 border-transparent hover:border-olive-950"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </nav>

                    {/* CTA + Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <a
                            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Merhaba, zeytinyağı siparişi vermek istiyorum.')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden xl:inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-600 text-olive-950 px-6 xl:px-10 py-3 xl:py-4 rounded-none text-[10px] xl:text-xs font-black uppercase tracking-[0.3em] transition-all hover:shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:-translate-y-1 active:scale-95"
                        >
                            <span className="relative z-10">ORDER_INTERFACE</span>
                        </a>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden w-12 h-12 flex items-center justify-center text-gold-400 bg-white/5 rounded-none hover:bg-white/10 border border-white/10 transition-colors"
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
                                    className="flex items-center justify-center gap-3 w-full bg-gold-400 text-olive-950 py-5 rounded-none font-black uppercase tracking-widest text-sm shadow-xl shadow-gold-500/10"
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
