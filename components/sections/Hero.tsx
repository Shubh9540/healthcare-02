import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { DoctorHealthcareHeroData } from '@/types/templates.types';

interface HeroProps {
  data: DoctorHealthcareHeroData;
}

export function Hero({ data }: HeroProps) {
  return (
    <section
      id="hero"
      className="hero-surface relative w-full overflow-hidden py-8 lg:py-14"
    >
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">
              <span className="h-[2px] w-7 bg-[var(--color-accent)]" />
              <span>{data.badge}</span>
            </div>

            <h1 className="font-display-title mt-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-[var(--color-heading)] sm:text-4xl lg:text-5xl">
              {data.titlePrefix}{' '}
              <span className="text-[var(--color-accent)]">{data.titleHighlight}</span>{' '}
              {data.titleSuffix}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-text)] sm:text-lg">
              {data.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href={data.primaryCtaHref}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[var(--color-primary-hover)]"
              >
                <span>{data.primaryCtaLabel}</span>
                <FiArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href={data.secondaryCtaHref}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-7 py-3.5 text-sm font-semibold text-[var(--color-heading)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                <span>{data.secondaryCtaLabel}</span>
              </Link>
            </div>

            <div className="mt-9 grid grid-cols-3 gap-4 border-t border-[var(--color-border)] pt-6">
              {data.metrics.map((metric, idx) => (
                <div key={`${metric.id}-${idx}`}>
                  <p className="font-display-title text-xl font-extrabold text-[var(--color-primary)] sm:text-2xl">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-[var(--color-text-muted)] sm:text-sm">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative mx-auto aspect-[4/4.3] w-full max-w-lg overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-primary-soft)] shadow-xl">
              <Image
                src={data.doctorImage}
                alt={data.doctorImageAlt}
                fill
                unoptimized
                priority
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
