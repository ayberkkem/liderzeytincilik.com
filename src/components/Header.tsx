'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig, navLinks } from '@/lib/siteConfig';

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    return (
        <>
            {/* Premium Metadata Bar */}
            <div className="hidden lg:block bg-black/40 border-b border-white/5 backdrop-blur-md">
                <div className="max-w-[1600px] mx-auto px-6 py-2 flex justify-between items-center text-[8px] font-mono tracking-[0.3em] text-gold-500/40 uppercase">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
                            PROTOCOL_STABLE // LZ_V4.2
                        </span>
                        <span className="text-white/20">|</span>
                        <span>LOCATION: AYDIN_TR (37.8444 N / 27.8444 E)</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <span>EST. 2010</span>
                        <span className="text-white/20">|</span>
                        <span className="text-gold-500 italic">Liquid_Gold_Standard</span>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="sticky top-0 z-50 bg-olive-950/60 backdrop-blur-2xl border-b border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* Advanced Light Effect */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
                
                <div className="max-w-[1600px] mx-auto px-4 lg:px-8 flex items-center justify-between h-20 lg:h-28 relative z-10">
                    {/* Logo - Technical HUD Version */}
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="relative w-12 h-12 lg:w-20 lg:h-20 flex items-center justify-center">
                            {/* HUD Frame */}
                            <div className="absolute inset-0 border border-gold-500/20 group-hover:border-gold-500/60 transition-colors duration-500"></div>
                            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-gold-500"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-gold-500"></div>
                            
                            {/* Olive Tree Icon */}
                            <svg className="w-10 h-10 lg:w-16 lg:h-16 text-gold-400 transform transition-all duration-700 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22V12" />
                                <path d="M12 12C12 12 7 11 5 13C3 15 4 18 8 18C12 18 12 12 12 12Z" fill="currentColor" fillOpacity="0.1" />
                                <path d="M12 12C12 12 17 11 19 13C21 15 20 18 16 18C12 18 12 12 12 12Z" fill="currentColor" fillOpacity="0.1" />
                                <path d="M12 7C12 7 8 6 6 8C4 10 5 13 9 13C13 13 12 7 12 7Z" fill="currentColor" fillOpacity="0.1" />
                                <path d="M12 7C12 7 16 6 18 8C20 10 19 13 15 13C11 13 12 7 12 7Z" fill="currentColor" fillOpacity="0.1" />
                                <circle cx="12" cy="5" r="3" fill="currentColor" fillOpacity="0.2" />
                            </svg>

                            {/* Pulse Effect */}
                            <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                        </div>
                        <div>
                            <span className="text-2xl lg:text-3xl font-serif font-black text-white tracking-tighter uppercase block leading-none">Lider</span>
                            <span className="text-[10px] lg:text-xs font-black text-gold-500/40 uppercase tracking-[0.4em] leading-none group-hover:text-gold-500 transition-colors">Industrial Unit 01</span>
                        </div>
                    </Link>


                    {/* Desktop Nav - Platinum Interface */}
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
                                        className="px-4 xl:px-6 py-4 text-[11px] xl:text-[12px] font-black uppercase tracking-[0.2em] xl:tracking-[0.3em] text-white/60 hover:text-white transition-all flex items-center gap-2 relative overflow-hidden group/link"
                                    >
                                        <span className="relative z-10">{link.label}</span>
                                        {link.children && (
                                            <svg className="w-3 h-3 transition-transform group-hover:rotate-180 text-gold-500/30 group-hover:text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                                        )}
                                        {/* Shimmer Border */}
                                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent group-hover:w-full transition-all duration-700"></div>
                                    </Link>

                                    {/* Dropdown - Advanced HUD Layer */}
                                    {link.children && openDropdown === link.label && (
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-80 bg-olive-950/98 backdrop-blur-3xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.9)] py-6 animate-fade-in z-50">
                                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
                                            <div className="absolute top-2 left-6 text-[8px] font-mono text-gold-500/20 tracking-widest uppercase">Select_Component</div>
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className="block px-10 py-4 text-[10px] font-black uppercase tracking-[0.4em] text-olive-300 hover:bg-gold-500 hover:text-olive-950 transition-all border-l-4 border-transparent hover:border-olive-950 flex justify-between items-center group/item"
                                                >
                                                    {child.label}
                                                    <span className="opacity-0 group-hover/item:opacity-30 text-[8px]">0x{Math.floor(Math.random()*99)}</span>
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
                        <div className="hidden xl:flex flex-col items-end mr-4 opacity-40">
                          <span className="text-[8px] font-mono text-gold-500 uppercase tracking-widest">System_Active</span>
                          <span className="text-[10px] font-mono text-white tracking-widest">TLS_SECURE_NODE</span>
                        </div>
                        <a
                            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Merhaba, zeytinyağı siparişi vermek istiyorum.')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden lg:inline-flex items-center gap-4 bg-gold-500 hover:bg-gold-600 text-olive-950 px-12 py-5 rounded-none text-[11px] font-black uppercase tracking-[0.4em] transition-all hover:shadow-[0_0_50px_rgba(234,179,8,0.4)] hover:-translate-y-1 relative group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            <span className="relative z-10">Order_Uplink</span>
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
                        <div className="px-6 mb-10">
                           <span className="text-[10px] font-mono text-gold-500/40 uppercase tracking-[0.5em] block mb-4 border-l-2 border-gold-500 pl-4">System_Access_Menu</span>
                        </div>
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
                                <div className="flex justify-between items-center text-[8px] font-mono text-olive-600 uppercase tracking-widest pt-10 grayscale opacity-40">
                                   <span>V4.2_NODE_MOBILE</span>
                                   <span>© {new Date().getFullYear()}</span>
                                </div>
                            </div>
                        </nav>
                    </div>
                )}

            </header>
        </>
    );
}
