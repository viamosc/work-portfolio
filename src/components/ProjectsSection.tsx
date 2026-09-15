"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { projects } from "@/data/content";

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  return (
    <section id="projects" className="scroll-mt-14">
      <h2 className="font-serif text-xl text-ink mb-6">Projects</h2>

      <div className="xl:grid xl:grid-cols-[1fr_300px] xl:gap-10">
        <ul className="flex flex-col">
          {projects.map((item, index) => (
            <li
              key={item.title}
              className="border-t border-line py-6 first:pt-0"
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
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
                      preview={item.preview}
                      image={item.image}
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
              preview={active.preview}
              image={active.image}
              title={active.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Preview({
  preview,
  image,
  title,
  compact = false,
}: {
  preview: string;
  image: string;
  title: string;
  compact?: boolean;
}) {
  // const height = compact ? "h-60" : "h-56";

  return (
    <div className="flex flex-col gap-3">
      {preview && (
        <div className="prose prose-sm max-w-none prose-headings:font-serif prose-headings:text-ink prose-p:text-ink-soft prose-li:text-ink-soft prose-strong:text-ink prose-a:text-moss-deep">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{preview}</ReactMarkdown>
        </div>
      )}

      {image ? (
        // Using a plain <img> so any local or external screenshot path
        // works without next/image domain configuration.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={title}
          className={`w-full  object-cover border border-line`}
        />
      ) : (
        <div
          className={`w-full  border border-dashed border-line flex items-center justify-center text-center px-4`}
        >
          <p className="text-xs text-ink-soft">
            Add a screenshot at <span className="font-mono">image</span> in
            content.ts to preview {title} here.
          </p>
        </div>
      )}
    </div>
  );
}
