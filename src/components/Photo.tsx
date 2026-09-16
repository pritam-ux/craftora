/** Shape emitted by vite-imagetools for `?photo` imports. */
export type PictureData = {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
};

type PhotoProps = {
  picture: PictureData;
  /** Blurred data-URL placeholder from a `?lqip` import. */
  placeholder: string;
  alt: string;
  /** How wide the image renders, so the browser picks the smallest file that fits. */
  sizes: string;
  /** Above-the-fold images load immediately at high priority; the rest wait. */
  priority?: boolean;
  className?: string;
};

/**
 * A responsive photo: AVIF, then WebP, then JPEG, each at several widths. The
 * blurred placeholder is painted behind the image, so the frame shows a soft
 * preview the moment the page renders and the real photo simply draws over it.
 */
export function Photo({
  picture,
  placeholder,
  alt,
  sizes,
  priority = false,
  className = "",
}: PhotoProps) {
  const avif = picture.sources["avif"];
  const webp = picture.sources["webp"];

  return (
    <picture>
      {avif && <source type="image/avif" srcSet={avif} sizes={sizes} />}
      {webp && <source type="image/webp" srcSet={webp} sizes={sizes} />}
      <img
        src={picture.img.src}
        alt={alt}
        width={picture.img.w}
        height={picture.img.h}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        style={{
          backgroundImage: `url("${placeholder}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={className}
      />
    </picture>
  );
}
