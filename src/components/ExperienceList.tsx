import { experience } from "@/data/content";

export function ExperienceList() {
  return (
    <section id="experience" className="scroll-mt-14 mt-16">
      <h2 className="font-serif text-xl text-ink mb-6">Experience</h2>
      <ul className="flex flex-col">
        {experience.map((item) => (
          <li
            key={item.role}
            className="border-t border-line py-4 first:pt-0 flex flex-col sm:flex-row sm:items-baseline gap-x-6 gap-y-1"
          >
            <span className="font-mono text-xs text-ink-soft w-32 shrink-0">
              {item.period}
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-[15px] text-ink">{item.role}</span>
              <span className="text-[15px] text-ink-soft">at {item.org}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
