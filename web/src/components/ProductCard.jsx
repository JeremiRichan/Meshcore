import React from 'react';
import { Zap, ExternalLink } from 'lucide-react';
import { CATEGORIES } from '@/data/content';

export default function ProductCard({ product }) {
  const category = CATEGORIES.find((c) => c.id === product.category);

  return (
    <article className="corner-brackets card-hover flex flex-col rounded-2xl border border-border bg-card overflow-hidden">
      <div className="relative bg-white/95 p-6 flex items-center justify-center h-48">
        <span className="absolute top-3 left-3 rounded-full bg-background/90 text-primary px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-widest">
          {category?.label}
        </span>
        <img
          src={product.image}
          alt={`${product.name} — ${product.brand.name}`}
          loading="lazy"
          decoding="async"
          className="h-full w-auto object-contain"
        />
      </div>

      <div className="flex flex-col flex-1 p-5 gap-4">
        <div className="text-center space-y-2">
          <h3 className="font-display font-bold text-lg text-foreground">{product.name}</h3>
          <img
            src={product.brand.logo}
            alt={product.brand.name}
            loading="lazy"
            decoding="async"
            className="h-5 w-auto mx-auto dark:invert-0"
          />
        </div>

        <div className="mt-auto space-y-2">
          {product.vendors.map((v) => (
            <a
              key={v.label}
              href={v.href}
              target="_blank"
              rel="noopener noreferrer"
              className={
                v.primary
                  ? 'flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider hover:brightness-110 transition active:scale-[0.98]'
                  : 'flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-border text-foreground text-[11px] font-bold uppercase tracking-wider hover:bg-secondary transition active:scale-[0.98]'
              }
            >
              {v.label}
              <ExternalLink className="size-3 opacity-60" aria-hidden="true" />
            </a>
          ))}
          <a
            href={product.flash}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2 text-primary hover:brightness-125 text-[11px] font-mono font-bold uppercase tracking-widest transition"
          >
            <Zap className="size-3.5" aria-hidden="true" /> Flash Firmware
          </a>
        </div>
      </div>
    </article>
  );
}
