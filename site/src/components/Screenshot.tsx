"use client";

import Image from "next/image";
import { useState } from "react";

interface ScreenshotProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function Screenshot({ src, alt, caption }: ScreenshotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isPlaceholder = src.startsWith("/screenshots/placeholder");

  return (
    <>
      <figure
        className={`overflow-hidden rounded-lg border border-border ${
          !isPlaceholder ? "cursor-zoom-in" : ""
        }`}
        onClick={() => !isPlaceholder && setIsOpen(true)}
      >
        <div className="relative aspect-video w-full bg-gray-100">
          {isPlaceholder ? (
            <div className="flex h-full items-center justify-center text-sm text-muted">
              <div className="text-center">
                <p className="text-2xl">📸</p>
                <p className="mt-1">{alt}</p>
                <p className="text-xs">(screenshot à ajouter)</p>
              </div>
            </div>
          ) : (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
            />
          )}
        </div>
        {caption && (
          <figcaption className="border-t border-border bg-gray-50 px-4 py-2 text-center text-xs text-muted">
            {caption}
          </figcaption>
        )}
      </figure>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 cursor-zoom-out"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative h-[90vh] w-[90vw]">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
