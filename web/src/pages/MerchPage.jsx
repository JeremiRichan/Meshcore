import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ShoppingBag, ArrowRight, Tag, Sparkles } from 'lucide-react';
import Header from '@/components/Header';
import Reveal from '@/components/Reveal';
import { MERCH_PRODUCTS, LINKS } from '@/data/content';
import { cn } from '@/lib/utils';

export default function MerchPage() {
  const [sort, setSort] = useState('featured');

  const products = useMemo(() => {
    const list = [...MERCH_PRODUCTS];
    if (sort === 'low') return list.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
    if (sort === 'high') return list.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
    return list;
  }, [sort]);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Merch — MeshCore</title>
        <meta name="description" content="Official MeshCore merch — t-shirts, hoodies, hats, mugs, patches, pins and stickers. 30% off limited time sale." />
      </Helmet>
      <Header />

      <main id="main">
        <section className="relative topo-bg border-b border-border overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 border border-primary/30 px-4 py-1.5 mb-5">
                <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">30% OFF · Limited Time Sale</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                Wear the <span className="text-primary">mesh</span>
              </h1>
              <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
                Official MeshCore merch — t-shirts, hoodies, hats, mugs, patches, pins and stickers. Every purchase supports the project.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <p className="text-sm text-muted-foreground font-mono uppercase tracking-widest">{products.length} products</p>
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground">Sort</label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="rounded-full border border-border bg-card px-4 py-2 text-xs font-mono uppercase tracking-widest text-foreground focus:border-primary focus:outline-none transition"
                >
                  <option value="featured">Featured</option>
                  <option value="low">Price · Low to High</option>
                  <option value="high">Price · High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((p, i) => (
                <Reveal key={p.name} delay={Math.min(i * 0.04, 0.24)}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-hover group flex h-full flex-col rounded-2xl border border-border bg-card overflow-hidden"
                  >
                    <div className="relative aspect-square overflow-hidden bg-secondary">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        decoding="async"
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-widest">
                        <Tag className="size-2.5" aria-hidden="true" /> Sale
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h2 className="font-display font-bold text-base mb-1 group-hover:text-primary transition">{p.name}</h2>
                      <p className="font-display text-lg font-bold text-primary mb-3">{p.price}</p>
                      {p.colors.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {p.colors.map((c) => (
                            <span key={c} className="rounded-full border border-border px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-widest text-muted-foreground">{c}</span>
                          ))}
                        </div>
                      )}
                      <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-widest text-primary">
                        Buy now <ArrowRight className="size-3" aria-hidden="true" />
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15}>
              <div className="mt-12 rounded-2xl border border-primary/30 bg-primary/10 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <ShoppingBag className="size-8 text-primary" aria-hidden="true" />
                  <div>
                    <h3 className="font-display font-bold text-lg">30% off everything</h3>
                    <p className="text-muted-foreground text-sm">Limited time sale across the whole MeshCore store.</p>
                  </div>
                </div>
                <a
                  href={LINKS.merch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest hover:brightness-110 transition active:scale-[0.98]"
                >
                  Visit store <ArrowRight className="size-3.5" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 text-center text-xs text-muted-foreground">
          <p className="font-mono text-[10px] uppercase tracking-widest">Off-Grid · Open-Source · Encrypted</p>
        </div>
      </footer>
    </div>
  );
}
