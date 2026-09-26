import React from 'react';
import { Helmet } from 'react-helmet';
import { Users, RadioTower, MessageSquare, Activity, MapPin, ExternalLink, Github } from 'lucide-react';
import Header from '@/components/Header';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import { MAP_STATS, LINKS } from '@/data/content';

export default function MapPage() {
  const stats = [
    { label: 'Total Nodes', value: MAP_STATS.total, icon: Activity },
    { label: 'Clients', value: MAP_STATS.clients, icon: Users },
    { label: 'Repeaters', value: MAP_STATS.repeaters, icon: RadioTower },
    { label: 'Room Servers', value: MAP_STATS.rooms, icon: MessageSquare },
  ];

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Map — MeshCore</title>
        <meta name="description" content="The global MeshCore node map — live counts of clients, repeaters, and room servers across the mesh network." />
      </Helmet>
      <Header />

      <main id="main">
        <section className="relative topo-bg border-b border-border overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <Reveal>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-primary mb-5">Network Map</p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                The global <span className="text-primary">mesh</span>
              </h1>
              <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
                A live view of MeshCore nodes around the world — clients, repeaters, and room servers reported by the community.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={Math.min(i * 0.06, 0.24)}>
                  <div className="card-hover rounded-2xl border border-border bg-card p-6">
                    <s.icon className="size-6 text-primary mb-3" aria-hidden="true" />
                    <p className="font-display text-3xl font-bold tracking-tight tabular-nums">
                      <CountUp value={s.value} />
                    </p>
                    <p className="mt-1 text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground">{s.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="relative aspect-[16/9] w-full bg-secondary grid-bg">
                  <iframe
                    src="https://map.meshcore.io/"
                    title="MeshCore live node map"
                    loading="lazy"
                    className="size-full border-0"
                  />
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-5 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    Tiles: © OpenStreetMap · App by recrof
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://github.com/meshcore-dev/map.meshcore.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-[11px] font-bold uppercase tracking-widest hover:bg-secondary transition active:scale-[0.98]"
                    >
                      <Github className="size-3.5 text-primary" aria-hidden="true" /> Source
                    </a>
                    <a
                      href="https://map.meshcore.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-[11px] font-bold uppercase tracking-widest hover:brightness-110 transition active:scale-[0.98]"
                    >
                      Open full map <ExternalLink className="size-3" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Active in last 24h', value: MAP_STATS.h24 },
                  { label: 'Active in last 7 days', value: MAP_STATS.d7 },
                  { label: 'Active in last 30 days', value: MAP_STATS.d30 },
                ].map((m) => (
                  <div key={m.label} className="rounded-2xl border border-border bg-card/60 p-5 flex items-center gap-4">
                    <MapPin className="size-5 text-primary shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-display text-xl font-bold tabular-nums">{m.value.toLocaleString()}</p>
                      <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground">{m.label}</p>
                    </div>
                  </div>
                ))}
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
