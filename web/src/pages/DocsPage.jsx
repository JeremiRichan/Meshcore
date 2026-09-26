import React from 'react';
import { Helmet } from 'react-helmet';
import { HelpCircle, Terminal, Cable, Package, QrCode, ArrowUpRight, BookOpen, Github } from 'lucide-react';
import Header from '@/components/Header';
import Reveal from '@/components/Reveal';
import { DOCS_SECTIONS, LINKS } from '@/data/content';

const ICONS = { HelpCircle, Terminal, Cable, Package, QrCode };

export default function DocsPage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Docs — MeshCore</title>
        <meta name="description" content="MeshCore documentation — FAQ, CLI commands, companion protocol, packet format, and QR codes." />
      </Helmet>
      <Header />

      <main id="main">
        <section className="relative topo-bg border-b border-border overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <Reveal>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-primary mb-5">Documentation</p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                Read the <span className="text-primary">docs</span>
              </h1>
              <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
                Welcome to the MeshCore documentation. Quick start guides, protocol specs, and reference material for builders and contributors.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DOCS_SECTIONS.map((s, i) => {
                const Icon = ICONS[s.icon] || BookOpen;
                return (
                  <Reveal key={s.slug} delay={Math.min(i * 0.06, 0.24)}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-hover group flex h-full flex-col rounded-2xl border border-border bg-card p-6"
                    >
                      <div className="mb-4 inline-flex items-center justify-center size-12 rounded-xl bg-secondary text-primary">
                        <Icon className="size-6" aria-hidden="true" />
                      </div>
                      <h2 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition">{s.title}</h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.description}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-widest text-primary">
                        Open section <ArrowUpRight className="size-3" aria-hidden="true" />
                      </span>
                    </a>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-10 rounded-2xl border border-border bg-card/60 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="inline-flex items-center justify-center size-12 rounded-xl bg-secondary text-primary">
                    <Github className="size-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base">Found a mistake or something missing?</h3>
                    <p className="text-muted-foreground text-sm">Open a pull request on the documentation source.</p>
                  </div>
                </div>
                <a
                  href="https://github.com/meshcore-dev/MeshCore/tree/main/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest hover:opacity-85 transition active:scale-[0.98]"
                >
                  Documentation Source <ArrowUpRight className="size-3" aria-hidden="true" />
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
