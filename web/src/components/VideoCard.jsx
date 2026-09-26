import React, { useState } from 'react';
import { Play } from 'lucide-react';

export default function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden card-hover">
      <div className="relative aspect-video bg-muted">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Lire la vidéo : ${video.title}`}
            className="group absolute inset-0 w-full h-full"
          >
            <img
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex items-center justify-center size-14 rounded-full bg-primary text-primary-foreground shadow-xl group-hover:scale-110 transition-transform">
                <Play className="size-6 fill-current" aria-hidden="true" />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display font-semibold text-sm text-foreground leading-snug">{video.title}</h3>
        <p className="mt-1 text-xs font-mono text-muted-foreground">{video.author}</p>
      </div>
    </div>
  );
}
