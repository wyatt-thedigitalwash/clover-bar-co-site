import Image from "next/image";
import type { Service } from "./servicesData";

export default function ServiceRow({
  service: s,
  imageLeft,
}: {
  service: Service;
  imageLeft: boolean;
}) {
  return (
    <div
      className="mx-auto max-w-7xl px-5 md:px-10 flex flex-col md:flex-row md:items-center gap-12 md:gap-20"
    >
      <div
        className={`md:w-1/2 ${
          imageLeft ? "md:order-1" : "md:order-2"
        }`}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
          <Image
            src={s.image}
            alt={s.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <div
        className={`md:w-1/2 ${
          imageLeft ? "md:order-2" : "md:order-1"
        }`}
      >
        <span className="font-display font-medium text-sm text-clover">
          {s.num}
        </span>
        <h3 className="mt-2 font-display font-medium text-2xl leading-[1.2] text-ink">
          {s.title}
        </h3>
        <p className="mt-4 font-body text-[15px] leading-[1.6] text-ink/75">
          {s.desc}
        </p>
        {s.included && (
          <ul className="mt-5 flex flex-col gap-2">
            {s.included.map((item) => (
              <li
                key={item}
                className="font-body text-sm text-ink/70"
              >
                <span className="text-clover mr-2">·</span>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
