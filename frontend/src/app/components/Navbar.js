'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { name: 'Specials', href: '/' },
        { name: 'Breakfast', href: '/breakfast' },
        { name: 'Lunch', href: '/lunch' },
        { name: 'Dinner', href: '/dinner' },
        { name: 'Bar', href: '/beverages' },
    ];

    return (
        <nav className="fixed top-[85px] left-1/2 -translate-x-1/2 z-[90] w-fit">
            <div className="flex items-center p-1.5 glass rounded-full gap-1 shadow-2xl">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link key={item.href} href={item.href}>
                            <button
                                className={`
                                    px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-500
                                    ${isActive 
                                        ? 'bg-white text-black shadow-lg' 
                                        : 'text-white/40 hover:text-white hover:bg-white/5'
                                    }
                                `}
                            >
                                {item.name}
                            </button>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
