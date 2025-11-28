'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();

  const navItems = [
    { href: '/home', label: 'Home', icon: '🏠' },
    { href: '/collection', label: 'Collection', icon: '🎴' },
    { href: '/market', label: 'Market', icon: '🛒' },
    { href: '/profile', label: 'Profile', icon: '👤' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-tg-bg">
      <main className="flex-1 pb-16">
        {children}
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-[#1e1e1e] border-t border-[#333333]">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center p-2 transition-all duration-200 flex-1 ${
                pathname.startsWith(item.href) 
                  ? 'text-tg-gold' 
                  : 'text-tg-gray'
              }`}
            >
              <span className="text-lg mb-0.5">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
              {pathname.startsWith(item.href) && (
                <div className="w-1 h-1 bg-tg-gold rounded-full mt-0.5"></div>
              )}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
