"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { projects } from "@/data/content";

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  return (
    <section id="projects" className="scroll-mt-14">
      <h2 className="font-serif text-xl text-ink mb-6">Projects</h2>

      <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_550px] xl:gap-14">
        <ul className="flex flex-col max-w-2xl">
          {projects.map((item, index) => (
          <li
            key={item.title}
            className={`border-t border-line py-6 cursor-pointer transition-colors ${
              activeIndex === index ? "bg-moss/5 -mx-4 px-4 border-transparent" : ""
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            tabIndex={0}
          >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-x-6 gap-y-2">

                {/* date */}
                <span className="font-mono text-xs text-ink-soft w-20 shrink-0">
                  {item.period}
                </span>

                <div className="flex-1">
                  
                  {/* title, description, role */}
                  <h3 className="text-[17px] text-ink">{item.title}</h3>
                  <p className="text-sm text-ink-soft">{item.roleLabel}</p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft max-w-[62ch]">
                    {item.description}
                  </p>

                  {/* tech used in the app */}
                  <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-ink-soft">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  
                  {/* links  */}
                  {item.links.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                      {item.links.map((link) => {
                        const Icon = link.icon;
                        return (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-moss-deep border-b border-moss/40 hover:border-moss-deep"
                          >
                            {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
                            <span>{link.label}</span>
                          </a>
                        );
                      })}
                    </div>
                  )}

                  {/* notes */}
                  {item.notes && (
                    <div className="mt-2 text-xs text-ink-soft italic">
                      {item.notes}
                    </div>
                  )}

                  {/* Preview shown inline below xl, where there's no side rail. responsive for mobile*/}
                  <div className="xl:hidden mt-4">
                  <Preview
                    key={item.title}
                    preview={item.preview}
                    images={item.images}
                    video={item.video}
                    title={item.title}
                    compact
                  />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="hidden xl:block">
          <div className="sticky top-14">
          <Preview
            key={active.title}
            preview={active.preview}
            images={active.images}
            video={active.video}
            title={active.title}
          />
          </div>
        </div>
      </div>
    </section>
  );
}

function ExpandGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-3.5 h-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5" />
    </svg>
  );
}

function Preview({
  preview,
  images,
  video,
  title,
  compact = false,
}: {
  preview: string;
  images: string[];
  video?: string;
  title: string;
  compact?: boolean;
}) {
  const [imgIndex, setImgIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prev = () => setImgIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setImgIndex((i) => (i + 1) % images.length);

  // Keyboard nav + Escape to close while the lightbox is open.
  useEffect(() => {
    if (!lightboxOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, images.length]);

  // Prevent background scroll while the lightbox is open.
  useEffect(() => {
    if (!lightboxOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxOpen]);

  return (
    <div className="flex flex-col gap-3">
      {preview && (
        <div className="prose prose-sm max-w-none prose-headings:font-serif prose-headings:text-ink prose-p:text-ink-soft prose-li:text-ink-soft prose-strong:text-ink prose-a:text-moss-deep">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{preview}</ReactMarkdown>
        </div>
      )}

      {images.length > 0 && (
        <div className="relative group">
          <img
            src={images[imgIndex]}
            alt={title}
            onClick={() => setLightboxOpen(true)}
            className={`w-full object-cover border border-line cursor-zoom-in ${
              compact ? "aspect-[16/10]" : "aspect-[4/3]"
            }`}
          />

          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            aria-label={`Expand image for ${title}`}
            className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center bg-white/85 border border-line rounded-full text-ink opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
          >
            <ExpandGlyph />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-white/80 border border-line rounded-full text-ink hover:bg-white"
              >
                ‹
              </button>
              <button
                onClick={next}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-white/80 border border-line rounded-full text-ink hover:bg-white"
              >
                ›
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    aria-label={`Show image ${i + 1}`}
                    className={`w-1.5 h-1.5 rounded-full ${
                      i === imgIndex ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {video && (
        <div className="aspect-video w-full border border-line">
          <iframe
            src={video}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {lightboxOpen && images.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-paper/97 p-6"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white border border-line text-ink hover:bg-moss/5 text-xl leading-none"
          >
            ×
          </button>

          <img
            src={images[imgIndex]}
            alt={title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full object-contain border border-line bg-white"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-line text-ink hover:bg-moss/5 text-xl"
              >
                ‹
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-line text-ink hover:bg-moss/5 text-xl"
              >
                ›
              </button>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setImgIndex(i);
                    }}
                    aria-label={`Show image ${i + 1}`}
                    className={`w-1.5 h-1.5 rounded-full ${
                      i === imgIndex ? "bg-ink" : "bg-ink/25"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}