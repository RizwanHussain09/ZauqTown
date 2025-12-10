/**
 * Netlify Image CDN utility for optimized image loading
 * This uses Netlify's built-in image optimization CDN to serve
 * appropriately sized and formatted images for faster loading.
 */

interface ImageOptimizeOptions {
  width?: number;
  height?: number;
  fit?: 'contain' | 'cover' | 'fill';
  format?: 'avif' | 'webp' | 'jpg' | 'png';
  quality?: number;
}

/**
 * Generates an optimized image URL using Netlify Image CDN
 * @param src - Original image source (local path or external URL)
 * @param options - Optimization options
 * @returns Optimized image URL
 */
export function getOptimizedImageUrl(
  src: string,
  options: ImageOptimizeOptions = {}
): string {
  const { width, height, fit = 'cover', format = 'webp', quality = 80 } = options;

  const params = new URLSearchParams();

  // Handle external URLs - they need to be URI encoded
  if (src.startsWith('http://') || src.startsWith('https://')) {
    params.set('url', src);
  } else {
    // Local images - use as-is
    params.set('url', src);
  }

  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  if (fit) params.set('fit', fit);
  if (format) params.set('fm', format);
  if (quality) params.set('q', quality.toString());

  return `/.netlify/images?${params.toString()}`;
}

/**
 * Generates a background image CSS style using optimized URL
 */
export function getOptimizedBackgroundStyle(
  src: string,
  options: ImageOptimizeOptions = {}
): { backgroundImage: string } {
  return {
    backgroundImage: `url(${getOptimizedImageUrl(src, options)})`,
  };
}
