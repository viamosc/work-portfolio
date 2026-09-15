import { Sidebar } from "@/components/Sidebar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceList } from "@/components/ExperienceList";
import { AwardsList } from "@/components/AwardsList";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="lg:flex lg:min-h-screen">
      <Sidebar />

      <main className="flex-1 px-6 py-10 lg:px-16 lg:py-14 max-w-[1440px]">
        <ProjectsSection />
        <ExperienceList />
        <AwardsList />

        <section id="contact" className="scroll-mt-14 mt-16 pb-10">
          <h2 className="font-serif text-xl text-ink mb-6">Get in touch</h2>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}