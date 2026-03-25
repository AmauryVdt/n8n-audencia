"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

interface NavGroup {
  label: string;
  links: { href: string; label: string }[];
}

const navGroups: NavGroup[] = [
  {
    label: "Tutoriels",
    links: [
      { href: "/tutos/variables", label: "Variables & Mapping" },
      { href: "/tutos/conditions", label: "Conditions" },
      { href: "/tutos/boucles", label: "Boucles" },
    ],
  },
  {
    label: "Credentials",
    links: [
      { href: "/tutos/credentials-google", label: "Google OAuth" },
      { href: "/tutos/credentials-gemini", label: "Gemini API" },
    ],
  },
  {
    label: "Docker",
    links: [
      { href: "/tutos/docker", label: "Installer Docker Desktop" },
      { href: "/tutos/docker-n8n", label: "Lancer n8n sur Docker" },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenGroup(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Check if any link in a group is active
  function isGroupActive(group: NavGroup) {
    return group.links.some((link) => pathname === link.href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <nav
        ref={navRef}
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3"
      >
        <Link href="/" className="text-lg font-bold text-primary">
          IA Pro
        </Link>
        <ul className="flex gap-1">
          {navGroups.map((group) => {
            const active = isGroupActive(group);
            const isOpen = openGroup === group.label;

            // If only one link in the group, render a direct link
            if (group.links.length === 1) {
              const link = group.links[0];
              const linkActive = pathname === link.href;
              return (
                <li key={group.label}>
                  <Link
                    href={link.href}
                    className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                      linkActive
                        ? "bg-primary text-white"
                        : "text-muted hover:bg-primary-light hover:text-primary"
                    }`}
                  >
                    {group.label}
                  </Link>
                </li>
              );
            }

            return (
              <li key={group.label} className="relative">
                <button
                  onClick={() =>
                    setOpenGroup(isOpen ? null : group.label)
                  }
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    active
                      ? "bg-primary text-white"
                      : "text-muted hover:bg-primary-light hover:text-primary"
                  }`}
                >
                  {group.label}
                  <span className="ml-1 text-xs">&#9662;</span>
                </button>

                {isOpen && (
                  <div className="absolute right-0 top-full mt-1 min-w-48 rounded-lg border border-border bg-card p-1 shadow-lg">
                    {group.links.map((link) => {
                      const linkActive = pathname === link.href;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setOpenGroup(null)}
                          className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                            linkActive
                              ? "bg-primary-light font-medium text-primary"
                              : "text-muted hover:bg-gray-50 hover:text-foreground"
                          }`}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
