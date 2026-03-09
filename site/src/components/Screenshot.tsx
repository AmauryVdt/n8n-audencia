import Image from "next/image";

interface ScreenshotProps {
  src: string;
  alt: string;
  caption?: string;
}

export default function Screenshot({ src, alt, caption }: ScreenshotProps) {
  // If the image doesn't exist yet, show a placeholder
  return (
    <figure className="overflow-hidden rounded-lg border border-border">
      <div className="relative aspect-video w-full bg-gray-100">
        {src.startsWith("/screenshots/placeholder") ? (
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
  );
}
