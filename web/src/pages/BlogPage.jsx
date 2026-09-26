import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import Header from '@/components/Header';
import Reveal from '@/components/Reveal';
import { BLOG_POSTS } from '@/data/content';
import { cn } from '@/lib/utils';

export default function BlogPage() {
  const [query, setQuery] = useState('');
  const posts = useMemo(
    () =>
      BLOG_POSTS.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.author.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Blog — MeshCore</title>
        <meta name="description" content="MeshCore blog — release notes, firmware updates, hardware deep-dives, and project news from the MeshCore community." />
      </Helmet>
      <Header />

      <main id="main">
        <section className="relative topo-bg border-b border-border overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <Reveal>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-primary mb-5">MeshCore Blog</p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                Releases, hardware &amp; <span className="text-primary">field stories</span>
              </h1>
              <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
                Firmware release notes, hardware deep-dives, OTA experiments, and project news from the MeshCore community.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-8 relative max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" aria-hidden="true" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search posts or authors…"
                  aria-label="Search blog posts"
                  className="w-full rounded-full border border-border bg-card pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            {posts.length === 0 ? (
              <p className="text-center text-muted-foreground font-mono text-sm uppercase tracking-widest">No posts match your search.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((p, i) => (
                  <Reveal key={p.slug} delay={Math.min(i * 0.04, 0.24)}>
                    <a
                      href={`https://blog.meshcore.io/${p.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-hover group flex h-full flex-col rounded-2xl border border-border bg-card overflow-hidden"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                        <img
                          src={p.image}
                          alt={p.title}
                          loading="lazy"
                          decoding="async"
                          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground mb-3">
                          <span className="inline-flex items-center gap-1.5"><Calendar className="size-3 text-primary" aria-hidden="true" />{p.date}</span>
                          <span className="inline-flex items-center gap-1.5"><User className="size-3 text-primary" aria-hidden="true" />{p.author}</span>
                        </div>
                        <h2 className="font-display font-bold text-lg leading-snug mb-2 group-hover:text-primary transition">{p.title}</h2>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.excerpt}</p>
                        <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-widest text-primary">
                          Read post <ArrowRight className="size-3" aria-hidden="true" />
                        </span>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            )}
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
