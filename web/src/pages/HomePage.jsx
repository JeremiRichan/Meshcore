import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  Github, MessageCircle, Users, GitBranch, Lock, RadioTower, Zap, Hash, Key,
  Sun, Smartphone, Play, Apple, Globe, Monitor, HardDriveDownload, FileText,
  FolderOpen, ExternalLink, MapPin, Facebook, Twitter,
} from 'lucide-react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import ScreenshotGallery from '@/components/ScreenshotGallery';
import VideoCard from '@/components/VideoCard';
import Reveal from '@/components/Reveal';
import { LINKS, NAV_ITEMS, FEATURES, STEPS, PLATFORMS, GUIDES, CATEGORIES, PRODUCTS, VIDEOS } from '@/data/content';
import { cn } from '@/lib/utils';

const FEATURE_ICONS = { CodeBranch: GitBranch, Lock, RadioTower, Zap, Hash, Key, Sun, Smartphone };
const PLATFORM_ICONS = { Play, Apple, Globe, Monitor, HardDriveDownload };
const GUIDE_ICONS = { FileText, FolderOpen };

function SectionHeading({ eyebrow, title, description, center }) {
  return (
    <div className={cn('mb-10', center && 'text-center')}>
      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-primary mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">{title}</h2>
      {description && <p className="mt-3 text-muted-foreground max-w-2xl leading-relaxed mx-auto data-[left]:mx-0" {...(center ? {} : { 'data-left': true })}>{description}</p>}
    </div>
  );
}

export default function HomePage() {
  const [filter, setFilter] = useState('all');
  const visibleProducts = useMemo(
    () => (filter === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>MeshCore — Off-Grid, Open-Source, Encrypted Messaging</title>
        <meta
          name="description"
          content="MeshCore is a simple, secure, off-grid mesh communications system. Build your own low-cost, long-range, encrypted messaging network — even when WiFi, Cellular, and Starlink are down."
        />
      </Helmet>

      <Header />

      <main id="main">
        {/* ============ HERO ============ */}
        <section className="relative topo-bg border-b border-border overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-primary mb-5">
                  Open-Source Mesh Communications
                </p>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                  Off-Grid, Open-Source,{' '}
                  <span className="text-primary">Encrypted Messaging</span>
                </h1>
                <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
                  MeshCore is a simple, secure, off-grid mesh communications system.
                  Build your own low-cost, long-range, encrypted messaging network.
                  You can still send messages even when WiFi, Cellular, and Starlink are down.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-xs font-bold uppercase tracking-widest hover:brightness-110 transition active:scale-[0.98]"
                  >
                    <Github className="size-4" aria-hidden="true" /> View on GitHub
                  </a>
                  <a
                    href={LINKS.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-foreground hover:bg-secondary transition active:scale-[0.98]"
                  >
                    <MessageCircle className="size-4 text-primary" aria-hidden="true" /> Join Our Discord
                  </a>
                  <a
                    href={LINKS.reddit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-foreground hover:bg-secondary transition active:scale-[0.98]"
                  >
                    <Users className="size-4 text-primary" aria-hidden="true" /> Join Our Reddit
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-[11px] font-mono font-bold uppercase tracking-widest text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="size-3.5 text-primary" aria-hidden="true" /> App made in New Zealand
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="size-3.5 text-primary" aria-hidden="true" /> Firmware made in Australia
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Signal composition — built only from source assets */}
            <Reveal delay={0.15} className="hidden lg:block">
              <div className="relative flex items-center justify-center" aria-hidden="true">
                <div className="signal-ring absolute size-72 rounded-full border border-primary/40" />
                <div className="signal-ring-2 absolute size-72 rounded-full border border-primary/40" />
                <div className="absolute size-96 rounded-full border border-border" />
                <div className="corner-brackets relative rounded-3xl border border-border bg-card/80 backdrop-blur p-10 grid-bg">
                  <img
                    src={LINKS.appIcon}
                    alt=""
                    className="size-36 rounded-3xl shadow-2xl border border-border"
                  />
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-primary text-primary-foreground px-4 py-1.5 text-[10px] font-mono font-bold uppercase tracking-widest whitespace-nowrap">
                    LoRa Mesh Network
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ FEATURES ============ */}
        <section id="features" className="scroll-mt-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <Reveal>
              <SectionHeading
                eyebrow="Why MeshCore"
                title="Built for the field, not the cloud"
                description="MIT licensed firmware, end-to-end encryption and LoRa radio — everything you need for true off-grid connectivity."
              />
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {FEATURES.map((f, i) => {
                const Icon = FEATURE_ICONS[f.icon];
                return (
                  <Reveal key={f.title} delay={Math.min(i * 0.05, 0.3)}>
                    <div className="card-hover h-full rounded-2xl border border-border bg-card p-6">
                      <div className="mb-4 inline-flex items-center justify-center size-11 rounded-xl bg-secondary text-primary">
                        <Icon className="size-5" aria-hidden="true" />
                      </div>
                      <h3 className="font-display font-bold text-base mb-2">{f.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{f.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ HOW TO GET STARTED ============ */}
        <section className="border-b border-border bg-card/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <Reveal>
              <SectionHeading
                center
                eyebrow="How to Get Started"
                title="Get the App, Buy a Node, Start Messaging!"
              />
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
              <div className="hidden md:block absolute top-7 left-[18%] right-[18%] h-px bg-border" aria-hidden="true" />
              {STEPS.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.1}>
                  <div className="relative z-10 flex flex-col items-center text-center h-full">
                    <div className="flex items-center justify-center size-14 rounded-full border-2 border-primary bg-background font-mono font-bold text-primary text-lg mb-5">
                      {step.n}
                    </div>
                    <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm max-w-xs mb-6 leading-relaxed">{step.text}</p>
                    <a
                      href={step.href}
                      {...(step.internal ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                      className="mt-auto inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest hover:opacity-85 transition active:scale-[0.98]"
                    >
                      {step.cta}
                      {!step.internal && <ExternalLink className="size-3" aria-hidden="true" />}
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ DOWNLOAD ============ */}
        <section id="download" className="scroll-mt-24 border-b border-border topo-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <Reveal>
              <div className="text-center mb-10">
                <img
                  src={LINKS.appIcon}
                  alt="MeshCore app icon"
                  loading="lazy"
                  decoding="async"
                  className="mx-auto rounded-3xl size-24 shadow-2xl border border-border mb-6"
                />
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">Download the MeshCore App</h2>
                <p className="mt-3 text-muted-foreground">Available on all major mobile and desktop platforms.</p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {PLATFORMS.map((p, i) => {
                const Icon = PLATFORM_ICONS[p.icon];
                return (
                  <Reveal key={p.label} delay={Math.min(i * 0.05, 0.25)}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-hover flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4"
                    >
                      <Icon className="size-7 text-primary shrink-0" aria-hidden="true" />
                      <span className="flex flex-col">
                        <span className="text-[10px] uppercase font-mono font-bold text-muted-foreground leading-tight tracking-widest">{p.over}</span>
                        <span className="text-lg font-display font-bold leading-tight">{p.label}</span>
                      </span>
                      <ExternalLink className="size-4 ml-auto text-muted-foreground" aria-hidden="true" />
                    </a>
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-14">
              <Reveal>
                <ScreenshotGallery />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ USER GUIDES ============ */}
        <section className="border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <Reveal>
              <SectionHeading
                eyebrow="Documentation"
                title="User Guides"
                description="Looking for a quick start guide?"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex flex-col sm:flex-row gap-3">
                {GUIDES.map((g) => {
                  const Icon = GUIDE_ICONS[g.icon];
                  return (
                    <a
                      key={g.label}
                      href={g.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 rounded-xl border border-border bg-card px-6 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-secondary transition active:scale-[0.98]"
                    >
                      <Icon className="size-4 text-primary" aria-hidden="true" />
                      {g.label}
                      <ExternalLink className="size-3.5 text-muted-foreground" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ HARDWARE CATALOG ============ */}
        <section id="hardware" className="scroll-mt-24 border-b border-border bg-card/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <Reveal>
              <SectionHeading
                eyebrow="Hardware"
                title="Supported Nodes"
                description="Pick a supported LoRa device — companion nodes for your phone, solar repeaters for coverage, or standalone devices powered by Ripple Firmware."
              />
            </Reveal>

            <div role="tablist" aria-label="Filtrer par catégorie de nœud" className="flex flex-wrap gap-2 mb-10">
              <button
                type="button"
                role="tab"
                aria-selected={filter === 'all'}
                onClick={() => setFilter('all')}
                className={cn(
                  'rounded-full px-5 py-2.5 text-[11px] font-mono font-bold uppercase tracking-widest border transition active:scale-[0.98]',
                  filter === 'all'
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border text-muted-foreground hover:text-foreground hover:bg-secondary'
                )}
              >
                All Nodes · {PRODUCTS.length}
              </button>
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={filter === c.id}
                  onClick={() => setFilter(c.id)}
                  className={cn(
                    'rounded-full px-5 py-2.5 text-[11px] font-mono font-bold uppercase tracking-widest border transition active:scale-[0.98]',
                    filter === c.id
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'border-border text-muted-foreground hover:text-foreground hover:bg-secondary'
                  )}
                >
                  {c.label} · {PRODUCTS.filter((p) => p.category === c.id).length}
                </button>
              ))}
            </div>

            {CATEGORIES.filter((c) => filter === 'all' || filter === c.id).map((c) => (
              <div key={c.id} className="mb-12 last:mb-0">
                <Reveal>
                  <div className="mb-6">
                    <h3 className="font-display text-2xl font-bold tracking-tight">{c.label}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{c.description}</p>
                  </div>
                </Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {visibleProducts
                    .filter((p) => p.category === c.id)
                    .map((p, i) => (
                      <Reveal key={p.name} delay={Math.min(i * 0.06, 0.24)}>
                        <ProductCard product={p} />
                      </Reveal>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============ VIDEOS ============ */}
        <section id="videos" className="scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <Reveal>
              <SectionHeading
                center
                eyebrow="Learn"
                title="Watch the Explainer Videos!"
                description="By The Comms Channel and Liam Cottle"
              />
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {VIDEOS.map((v, i) => (
                <Reveal key={v.id} delay={Math.min(i * 0.05, 0.3)}>
                  <VideoCard video={v} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-border bg-card/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
            <div>
              <img src={LINKS.logo} alt="MeshCore" className="h-5 w-auto mb-4" width="179" height="20" loading="lazy" />
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground leading-loose">
                <p>App made in New Zealand</p>
                <p>Firmware made in Australia</p>
              </div>
            </div>

            <nav aria-label="Pied de page">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    {item.internal ? (
                      <Link
                        to={item.href}
                        className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex gap-3">
              {[
                { icon: Facebook, href: LINKS.facebook, label: 'Facebook' },
                { icon: Users, href: LINKS.reddit, label: 'Reddit' },
                { icon: MessageCircle, href: LINKS.discord, label: 'Discord' },
                { icon: Globe, href: LINKS.mastodon, label: 'Mastodon' },
                { icon: Twitter, href: LINKS.x, label: 'X' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`MeshCore sur ${s.label}`}
                  className="flex items-center justify-center size-10 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition"
                >
                  <s.icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>© 2026 Liam Cottle &amp; Scott Powell</p>
            <p className="font-mono text-[10px] uppercase tracking-widest">Off-Grid · Open-Source · Encrypted</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
