import { existsSync } from "node:fs";
import { join } from "node:path";
import { SectionBackgroundRegistration } from "@/components/ui/SectionBackgroundProvider";

const suppliedImages = [
  "Gemini_Generated_Image_496ra5496ra5496r.jfif",
  "Gemini_Generated_Image_6hk6lf6hk6lf6hk6.jfif",
  "Gemini_Generated_Image_8ebfmo8ebfmo8ebf.jfif",
  "Gemini_Generated_Image_9ukqjd9ukqjd9ukq.jfif",
  "Gemini_Generated_Image_bfkj7gbfkj7gbfkj.jfif",
  "Gemini_Generated_Image_guavonguavonguav.jfif",
  "Gemini_Generated_Image_kdjoy3kdjoy3kdjo.jfif",
  "Gemini_Generated_Image_kz0rtckz0rtckz0r.jfif",
  "Gemini_Generated_Image_l4iymhl4iymhl4iy.jfif",
  "Gemini_Generated_Image_nx91ihnx91ihnx91.jfif",
  "Gemini_Generated_Image_p3vtihp3vtihp3vt.jfif",
  "Gemini_Generated_Image_png0zipng0zipng0 (1).jfif",
  "Gemini_Generated_Image_png0zipng0zipng0.jfif",
  "Gemini_Generated_Image_rchvqmrchvqmrchv.jfif",
  "Gemini_Generated_Image_unp8m5unp8m5unp8.jfif",
];

const imageAssignments = {
  "hero-treatment-suite.avif": 0,
  "mission-consultation.webp": 1,
  "home-services-skincare.webp": 2,
  "industry-clinic-detail.avif": 3,
  "home-process-hallway.webp": 4,
  "home-testimonial-texture.webp": 5,
  "home-faq-serene-room.avif": 6,
  "about-hero-treatment-room.webp": 7,
  "about-mission-team.webp": 8,
  "about-why-clinic-details.webp": 9,
  "about-impact-results.avif": 10,
  "about-consultation.webp": 11,
  "testimonials-hero-texture.webp": 12,
  "testimonials-cards-treatment-room.avif": 13,
  "testimonials-trusted-brands-interior.webp": 14,
};

function imageExists(src) {
  if (!src?.startsWith("/images/")) return false;
  return existsSync(join(process.cwd(), "public", src.slice(1)));
}

function resolveImage(src) {
  if (imageExists(src)) return src;
  if (!src?.startsWith("/images/")) return null;

  const filename = src.slice(src.lastIndexOf("/") + 1);
  let hash = 0;
  for (const character of filename) {
    hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
  }

  const imageIndex = imageAssignments[filename] ?? hash % suppliedImages.length;
  const suppliedImage = `/images/${suppliedImages[imageIndex]}`;
  return imageExists(suppliedImage) ? suppliedImage : null;
}

export function SectionBackground({ src, priority = false }) {
  const imageSource = resolveImage(src);

  return imageSource ? (
    <SectionBackgroundRegistration src={imageSource} priority={priority} />
  ) : null;
}
