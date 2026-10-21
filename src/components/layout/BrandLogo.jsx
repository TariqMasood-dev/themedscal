import Image from "next/image";

export function BrandLogo() {
  return (
    <span
      aria-hidden="true"
      className="relative block h-16 w-32 shrink-0 overflow-hidden"
    >
      <Image
        src="/medscale.png"
        alt=""
        width={500}
        height={500}
        className="absolute top-1/2 left-1/2 size-40 max-w-none -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
      />
    </span>
  );
}
