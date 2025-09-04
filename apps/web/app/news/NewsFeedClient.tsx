"use client";

import { useState } from "react";

export type Source = { label: string; href?: string };
export type Post = { slug: string; date: string; title: string; summary: string; sources: Source[] };

export default function NewsFeedClient({ posts }: { posts: Post[] }) {
  const [copied, setCopied] = useState<string | null>(null);

  async function share(slug: string, title: string) {
    const url = typeof window !== "undefined" ? `${window.location.origin}/news#${slug}` : `/news#${slug}`;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setCopied(slug);
        setTimeout(() => setCopied(null), 2000);
      }
    } catch (_) {
      // ignore
    }
  }

  return (
    <div className="feed">
      {posts.map((p) => (
        <article key={p.slug} id={p.slug} className="post card">
          <div className="post-header">
            <div>
              <div className="post-date">{p.date}</div>
              <h3 className="post-title">{p.title}</h3>
            </div>
            <button className="btn btn-share" onClick={() => share(p.slug, p.title)}>
              Поделиться
            </button>
          </div>
          <p>{p.summary}</p>
          <ul className="sources">
            {p.sources.map((s, i) => (
              <li key={i}>
                {s.href ? (
                  <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
                ) : (
                  <span>{s.label}</span>
                )}
              </li>
            ))}
          </ul>
          {copied === p.slug && <div className="copied">Ссылка скопирована</div>}
        </article>
      ))}
    </div>
  );
}

