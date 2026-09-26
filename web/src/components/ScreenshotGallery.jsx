import React, { useCallback, useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { SCREENSHOTS } from '@/data/content';

export default function ScreenshotGallery() {
  const [active, setActive] = useState(null);
  const closeRef = useRef(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? null : (i + SCREENSHOTS.length - 1) % SCREENSHOTS.length)),
    []
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % SCREENSHOTS.length)),
    []
  );

  useEffect(() => {
    if (active === null) return;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [active, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {SCREENSHOTS.map((shot, i) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Agrandir : ${shot.alt}`}
            className="group relative rounded-2xl border border-border bg-card overflow-hidden card-hover"
          >
            <img
              src={shot.src}
              alt={shot.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-auto block"
            />
            <span className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition flex items-center justify-center">
              <Expand className="size-6 text-primary opacity-0 group-hover:opacity-100 transition" aria-hidden="true" />
            </span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse de captures d'écran"
          className="fixed inset-0 z-[110] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Fermer la visionneuse"
            className="absolute top-4 right-4 p-3 rounded-full border border-border bg-card text-foreground hover:bg-secondary transition z-10"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Capture précédente"
            className="absolute left-2 sm:left-6 p-3 rounded-full border border-border bg-card text-foreground hover:bg-secondary transition z-10"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <figure className="max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={SCREENSHOTS[active].src}
              alt={SCREENSHOTS[active].alt}
              className="max-h-[82vh] w-auto rounded-2xl border border-border shadow-2xl"
            />
            <figcaption className="mt-3 text-center text-xs font-mono text-muted-foreground">
              {active + 1} / {SCREENSHOTS.length}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Capture suivante"
            className="absolute right-2 sm:right-6 p-3 rounded-full border border-border bg-card text-foreground hover:bg-secondary transition z-10"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  );
}
