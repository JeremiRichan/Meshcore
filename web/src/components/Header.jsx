import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ExternalLink, ShoppingBag } from 'lucide-react';
import { LINKS, NAV_ITEMS } from '@/data/content';
import { cn } from '@/lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[120] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold"
      >
        Aller au contenu
      </a>

      {bannerVisible && (
        <div className="relative z-[60] bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-center gap-3 text-xs sm:text-sm">
            <ShoppingBag className="size-4 shrink-0" aria-hidden="true" />
            <p className="font-medium truncate">
              <span className="font-bold">MeshCore Merch</span>
              <span className="hidden sm:inline"> • 30% OFF • LIMITED TIME SALE</span>
              <span className="sm:hidden"> • 30% OFF</span>
            </p>
            <Link
              to="/merch"
              className="shrink-0 rounded-full bg-primary-foreground text-primary px-3.5 py-1 text-xs font-bold uppercase tracking-wide hover:opacity-90 transition active:scale-[0.98]"
            >
              Shop Now <span aria-hidden="true">→</span>
            </Link>
            <button
              type="button"
              onClick={() => setBannerVisible(false)}
              aria-label="Fermer la bannière"
              className="absolute right-2 sm:right-4 p-2 hover:opacity-70 transition"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      <header
        className={cn(
          'sticky top-0 z-50 border-b transition-all duration-300',
          scrolled
            ? 'bg-background/90 backdrop-blur-md border-border shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]'
            : 'bg-background/60 backdrop-blur-sm border-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 h-16">
          <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="MeshCore — accueil">
            <img src={LINKS.logo} alt="MeshCore" className="h-5 w-auto" width="179" height="20" />
          </Link>

          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  {item.internal ? (
                    <Link
                      to={item.href}
                      className="px-3 py-2 text-xs font-mono font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition rounded-md inline-flex items-center gap-1"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 text-xs font-mono font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition rounded-md inline-flex items-center gap-1"
                    >
                      {item.label}
                      <ExternalLink className="size-3 opacity-50" aria-hidden="true" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={LINKS.app}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-xs font-bold uppercase tracking-widest hover:brightness-110 transition active:scale-[0.98]"
            >
              <ExternalLink className="size-3.5" aria-hidden="true" />
              Launch App
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              className="lg:hidden p-2.5 rounded-md border border-border text-foreground hover:bg-secondary transition"
            >
              {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {open && (
          <div id="mobile-menu" className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <nav aria-label="Navigation mobile">
              <ul className="px-4 py-4 space-y-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    {item.internal ? (
                      <Link
                        to={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between px-3 py-3 rounded-lg text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground hover:bg-secondary transition"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between px-3 py-3 rounded-lg text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground hover:bg-secondary transition"
                      >
                        {item.label}
                        <ExternalLink className="size-3.5 opacity-50" aria-hidden="true" />
                      </a>
                    )}
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href={LINKS.app}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3.5 text-xs font-bold uppercase tracking-widest active:scale-[0.98] transition"
                  >
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                    Launch App
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
