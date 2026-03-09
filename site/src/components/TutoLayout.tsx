"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";

interface Section {
  id: string;
  title: string;
}

interface TutoLayoutProps {
  title: string;
  sections: Section[];
  children: React.ReactNode;
}

export default function TutoLayout({ title, sections, children }: TutoLayoutProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="mx-auto flex max-w-5xl gap-8 px-6 py-8">
        {/* Sidebar */}
        <aside className="hidden w-56 shrink-0 md:block">
          <div className="sticky top-20">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
              Sommaire
            </h2>
            <nav className="flex flex-col gap-0.5">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                    activeSection === section.id
                      ? "bg-primary-light font-medium text-primary"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <main className="min-w-0 flex-1">
          <h1 className="mb-8 text-3xl font-bold">{title}</h1>
          <div className="space-y-16">{children}</div>
        </main>
      </div>
    </div>
  );
}
