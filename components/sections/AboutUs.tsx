import Image from 'next/image';
import { FiHeart, FiMonitor, FiShield } from 'react-icons/fi';
import { DoctorHealthcareAboutData } from '@/types/templates.types';

interface AboutUsProps {
  data: DoctorHealthcareAboutData;
}

function renderPillarIcon(icon: string) {
  switch (icon) {
    case 'heart':
      return <FiHeart className="h-5 w-5" aria-hidden="true" />;
    case 'scan':
      return <FiMonitor className="h-5 w-5" aria-hidden="true" />;
    default:
      return <FiShield className="h-5 w-5" aria-hidden="true" />;
  }
}

export function AboutUs({ data }: AboutUsProps) {
  return (
    <section
      id="about"
      className="w-full overflow-hidden bg-white py-8 lg:py-14"
    >
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-2 shadow-md">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={data.image}
                  alt={data.imageAlt}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>

              <div className="mt-2 flex items-center justify-between rounded-2xl bg-[var(--color-primary-deep)] px-5 py-3.5 text-white">
                <div>
                  <p className="font-display-title text-2xl font-extrabold text-teal-300">
                    {data.statValue}
                  </p>
                  <p className="text-xs font-medium text-slate-200">{data.statLabel}</p>
                </div>
                <span className="rounded-full border border-teal-400 bg-teal-950 px-3 py-1 text-xs font-semibold text-teal-200">
                  {data.eyebrow}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">
              <span className="h-[2px] w-7 bg-[var(--color-accent)]" />
              <span>{data.eyebrow}</span>
            </div>
            <h2 className="font-display-title mt-3 text-2xl font-bold leading-tight text-[var(--color-heading)] sm:text-3xl lg:text-4xl">
              {data.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text)]">
              {data.description}
            </p>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {data.pillars.map((pillar, idx) => (
                <div
                  key={`${pillar.id}-${idx}`}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-4 transition-shadow hover:shadow-sm"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary)] text-white">
                    {renderPillarIcon(pillar.icon)}
                  </div>
                  <h3 className="font-display-title mt-3 text-sm font-bold text-[var(--color-heading)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-text-muted)]">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
