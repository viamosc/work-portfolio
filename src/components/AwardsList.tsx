import { awards } from "@/data/content";

export function AwardsList() {
  return (
    <section id="awards" className="scroll-mt-14 mt-16">
      <h2 className="font-serif text-xl text-ink mb-6">Awards</h2>
      <ul className="flex flex-col">
        {awards.map((item) => (
          <li
            key={item.title}
            className="border-t border-line py-4 first:pt-0 flex flex-col sm:flex-row sm:items-baseline gap-x-6 gap-y-1"
          >
            <span className="font-mono text-xs text-ink-soft w-14 shrink-0">
              {item.period}
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-[15px] text-ink">{item.title}</span>
              <span className="text-[15px] text-ink-soft">
                at {item.org}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
