import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Radio, Cpu, Github, Search, Usb, AlertTriangle, PlayCircle, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Reveal from '@/components/Reveal';
import { FLASHER_FIRMWARE, PRODUCTS, LINKS } from '@/data/content';
import { cn } from '@/lib/utils';

const FW_ICONS = { Radio, Cpu, Github };

export default function FlasherPage() {
  const [fw, setFw] = useState('ripple');
  const [query, setQuery] = useState('');

  const devices = useMemo(() => {
    const q = query.toLowerCase();
    return PRODUCTS.filter((p) => p.flash && (!q || p.name.toLowerCase().includes(q)));
  }, [query]);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Flasher — MeshCore</title>
        <meta name="description" content="MeshCore Web Flasher — install Ripple, MeshOS, or Community firmware onto your supported LoRa device over Web Serial." />
      </Helmet>
      <Header />

      <main id="main">
        <section className="relative topo-bg border-b border-border overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <Reveal>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-primary mb-5">Web Flasher</p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                Flash your <span className="text-primary">node</span>
              </h1>
              <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
                Install MeshCore firmware onto your supported LoRa device straight from the browser. Pick a firmware, pick a device, and connect over Web Serial.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight mb-2">1 · Choose firmware</h2>
              <p className="text-muted-foreground text-sm mb-6">Select which firmware family you want to install.</p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              {FLASHER_FIRMWARE.map((f, i) => {
                const Icon = FW_ICONS[f.icon] || Radio;
                const active = fw === f.id;
                return (
                  <Reveal key={f.id} delay={Math.min(i * 0.06, 0.18)}>
                    <button
                      type="button"
                      onClick={() => setFw(f.id)}
                      aria-pressed={active}
                      className={cn(
                        'card-hover w-full text-left rounded-2xl border p-6 transition',
                        active ? 'border-primary bg-card' : 'border-border bg-card hover:border-primary/45'
                      )}
                    >
                      <div className="mb-4 inline-flex items-center justify-center size-12 rounded-xl bg-secondary text-primary">
                        <Icon className="size-6" aria-hidden="true" />
                      </div>
                      <h3 className="font-display font-bold text-base mb-1">{f.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{f.subTitle}</p>
                      {active && (
                        <span className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-primary">
                          Selected
                        </span>
                      )}
                    </button>
                  </Reveal>
                );
              })}
            </div>

            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight mb-2">2 · Choose device</h2>
              <p className="text-muted-foreground text-sm mb-6">Filter supported devices, then launch the flasher for that board.</p>
              <div className="relative max-w-md mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" aria-hidden="true" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Filter devices…"
                  aria-label="Filter devices"
                  className="w-full rounded-full border border-border bg-card pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition"
                />
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {devices.map((p, i) => (
                <Reveal key={p.name} delay={Math.min(i * 0.04, 0.2)}>
                  <div className="card-hover flex h-full flex-col rounded-2xl border border-border bg-card overflow-hidden">
                    <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                      <img src={p.image} alt={p.name} loading="lazy" decoding="async" className="size-full object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground mb-1">{p.brand.name}</p>
                      <h3 className="font-display font-bold text-base mb-3">{p.name}</h3>
                      <a
                        href={p.flash}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest hover:brightness-110 transition active:scale-[0.98]"
                      >
                        <Usb className="size-3.5" aria-hidden="true" /> Launch Flasher
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15}>
              <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-card/60 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <AlertTriangle className="size-5 text-primary" aria-hidden="true" />
                    <h3 className="font-display font-bold text-base">Before you flash</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                    <li>Use Chrome or Edge on desktop — Web Serial API is required.</li>
                    <li>Do <strong className="text-foreground">not</strong> carry out a full erase if you are simply updating; it erases your MeshCore identity.</li>
                    <li>Enter DFU mode before erasing if you did not trigger it manually.</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-border bg-card/60 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <PlayCircle className="size-5 text-primary" aria-hidden="true" />
                    <h3 className="font-display font-bold text-base">New to MeshCore?</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">Watch the tutorial on how to flash your device.</p>
                  <a
                    href="https://www.youtube.com/watch?v=ems9_XvdPX8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest hover:bg-secondary transition active:scale-[0.98]"
                  >
                    Watch tutorial <ExternalLink className="size-3" aria-hidden="true" />
                  </a>
                </div>
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
