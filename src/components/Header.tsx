'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig, navLinks } from '@/lib/siteConfig';

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    return (
        <>
            {/* Main Header */}
            <header className="sticky top-0 z-50 bg-olive-950/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* Subtle Light Effect */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>

                <div className="max-w-[1600px] mx-auto px-4 lg:px-8 flex items-center justify-between h-20 lg:h-24 relative z-10">
                    {/* Logo - Brand Version */}
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="relative w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center bg-white/5 rounded-full border border-white/10 group-hover:border-gold-500/30 transition-all duration-500 overflow-hidden">
                            <img
                                src="/favicon.png"
                                alt="Lider Zeytincilik Logo"
                                className="w-8 h-8 lg:w-12 lg:h-12 object-contain group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div>
                            <span className="text-2xl lg:text-3xl font-serif font-black text-white tracking-tighter uppercase block leading-none">Lider</span>
                            <span className="text-[10px] lg:text-xs font-black text-gold-500 uppercase tracking-[0.4em] leading-none">Zeytincilik</span>
                        </div>
                    </Link>


                    {/* Desktop Nav - Professional Interface */}
                    <nav className="hidden lg:flex items-center justify-center flex-1 px-12">
                        <div className="flex items-center gap-1 xl:gap-2">
                            {navLinks.map((link) => (
                                <div
                                    key={link.href}
                                    className="relative group"
                                    onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    <Link
                                        href={link.href}
                                        className="px-4 xl:px-6 py-4 text-[11px] xl:text-[12px] font-black uppercase tracking-[0.2em] xl:tracking-[0.3em] text-white/70 hover:text-white transition-all flex items-center gap-2 relative overflow-hidden group/link"
                                    >
                                        <span className="relative z-10">{link.label}</span>
                                        {link.children && (
                                            <svg className="w-3 h-3 transition-transform group-hover:rotate-180 text-gold-500/40 group-hover:text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                                        )}
                                        {/* Shimmer Border */}
                                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent group-hover:w-full transition-all duration-700"></div>
                                    </Link>

                                    {/* Dropdown - Premium Layer */}
                                    {link.children && openDropdown === link.label && (
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-80 bg-olive-950/98 backdrop-blur-3xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.9)] py-6 animate-fade-in z-50">
                                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className="block px-10 py-4 text-[10px] font-black uppercase tracking-[0.4em] text-olive-300 hover:bg-gold-500 hover:text-olive-950 transition-all border-l-4 border-transparent hover:border-olive-950 flex justify-between items-center group/item"
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
                    <div className="flex items-center gap-6">
                        <a
                            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Merhaba, zeytinyağı siparişi vermek istiyorum.')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden lg:inline-flex items-center gap-4 bg-gold-500 hover:bg-gold-600 text-olive-950 px-12 py-5 rounded-none text-[11px] font-black uppercase tracking-[0.4em] transition-all hover:shadow-[0_0_50px_rgba(234,179,8,0.4)] hover:-translate-y-1 relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            <span className="relative z-10">Sipariş Hattı</span>
                        </a>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden w-14 h-14 flex items-center justify-center text-gold-400 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
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
                    <div className="lg:hidden border-t border-white/10 bg-olive-950 animate-fade-in fixed inset-x-0 top-20 bottom-0 z-[60] overflow-y-auto pt-10">
                        <nav className="max-w-7xl mx-auto px-6 space-y-8">
                            {navLinks.map((link) => (
                                <div key={link.href} className="space-y-6">
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block text-3xl font-serif font-black text-white hover:text-gold-400 transition-colors uppercase tracking-tight"
                                    >
                                        {link.label}
                                    </Link>
                                    {link.children && (
                                        <div className="grid grid-cols-1 gap-4 ml-2 border-l border-white/10 pl-8">
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="block py-1 text-base font-bold text-olive-400 hover:text-gold-400 transition-colors uppercase tracking-[0.2em]"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-20 pb-10 space-y-6">
                                <a
                                    href={`https://wa.me/${siteConfig.whatsapp}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center group relative w-full bg-gold-400 text-olive-950 py-6 font-black uppercase tracking-[0.3em] text-sm overflow-hidden"
                                >
                                    Sipariş Hattı
                                </a>
                                <div className="text-center text-[10px] text-olive-600 uppercase tracking-widest pt-10 opacity-40">
                                    © {new Date().getFullYear()} Lider Zeytincilik
                                </div>
                            </div>
                        </nav>
                    </div>
                )}

            </header>
        </>
    );
}
