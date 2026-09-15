import { profile, education } from "@/data/content";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Photo() {
  if (profile.photoUrl) {
    return (
      // Using a plain <img> on purpose: photoUrl may point to any path or
      // external URL, so this avoids next/image's domain configuration.
      <img
        src={profile.photoUrl}
        alt={profile.name}
        className="object-cover border border-line"
      />
    );
  }

  return (
    <div className="w-20 h-20 flex items-center justify-center border border-line bg-moss/10 text-moss-deep font-serif text-xl">
      {initials(profile.name)}
    </div>
  );
}

export function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-[340px] lg:shrink-0 lg:overflow-y-auto border-b lg:border-b-0 lg:border-r border-line px-6 py-10 lg:px-10 lg:py-14">
      <div className="flex flex-col h-full">
        <Photo />

        <div className="mt-5">
          <h1 className="font-serif text-3xl leading-tight text-moss-deep">
            {profile.name}
          </h1>
          <p className="mt-1 text-ink-soft">{profile.role}</p>
          <p className="mt-0.5 text-sm text-ink-soft">{profile.location}</p>
        </div>

        <p className="mt-8 text-[15px] leading-relaxed text-ink-soft max-w-[46ch]">
          {profile.tagline}
        </p>

        <p className="mt-4 text-[15px] leading-relaxed text-ink-soft max-w-[46ch]">
          {profile.bio}
        </p>

        <div className="mt-8">
          <h2 className="text-sm text-ink mb-2">Education</h2>
          <ul className="flex flex-col gap-2">
            {education.map((item) => (
              <li key={item.school} className="text-[13px] leading-snug">
                <p className="text-ink-soft">{item.period}</p>
                <p className="text-ink">{item.school}</p>
                <p className="text-ink-soft">{item.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <nav className="mt-10 flex flex-col gap-2 text-sm">
          <a href="#projects" className="w-fit text-ink hover:text-moss-deep">
            Projects
          </a>
          <a
            href="#experience"
            className="w-fit text-ink hover:text-moss-deep"
          >
            Experience
          </a>
          <a href="#contact" className="w-fit text-ink hover:text-moss-deep">
            Contact
          </a>
        </nav>

        <div className="mt-auto pt-10 flex flex-col gap-1.5 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="w-fit text-ink hover:text-moss-deep underline decoration-line hover:decoration-moss-deep"
          >
            {profile.email}
          </a>
          {profile.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="w-fit text-ink-soft hover:text-moss-deep"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            className="w-fit mt-3 text-sm text-ink border-b border-ink pb-0.5 hover:text-moss-deep hover:border-moss-deep"
          >
            Download résumé
          </a>
        </div>
      </div>
    </aside>
  );
}
