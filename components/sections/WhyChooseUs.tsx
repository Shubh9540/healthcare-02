import Image from 'next/image';
import { FiClock, FiCpu, FiFileText, FiShield } from 'react-icons/fi';
import { DoctorHealthcareWhyChooseUsData } from '@/types/templates.types';

interface WhyChooseUsProps {
  data: DoctorHealthcareWhyChooseUsData;
}

function renderWhyIcon(icon: string) {
  switch (icon) {
    case 'cpu':
      return <FiCpu className="h-5 w-5" aria-hidden="true" />;
    case 'file':
      return <FiFileText className="h-5 w-5" aria-hidden="true" />;
    case 'clock':
      return <FiClock className="h-5 w-5" aria-hidden="true" />;
    default:
      return <FiShield className="h-5 w-5" aria-hidden="true" />;
  }
}

export function WhyChooseUs({ data }: WhyChooseUsProps) {
  return (
    <section
      id="why-choose-us"
      className="w-full overflow-hidden bg-white py-8 lg:py-14"
    >
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">
              <span className="h-[2px] w-7 bg-[var(--color-accent)]" />
              <span>{data.eyebrow}</span>
            </div>
            <h2 className="font-display-title mt-3 text-2xl font-bold leading-tight text-[var(--color-heading)] sm:text-3xl lg:text-4xl">
              {data.title}
            </h2>
            <p className="mt-3.5 text-base leading-relaxed text-[var(--color-text)]">
              {data.description}
            </p>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {data.items.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-5 transition-colors hover:border-[var(--color-primary)]"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[var(--color-primary)] shadow-sm">
                    {renderWhyIcon(item.icon)}
                  </div>
                  <h3 className="font-display-title mt-3.5 text-base font-bold text-[var(--color-heading)]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] shadow-md">
                  <Image
                    src={data.primaryImage}
                    alt={data.primaryImageAlt}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between gap-4 pt-6 sm:pt-10">
                <div className="rounded-2xl bg-[var(--color-primary)] p-4 text-white shadow-md">
                  <p className="font-display-title text-sm font-bold text-teal-200">
                    {data.badgeTitle}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-slate-100">
                    {data.badgeSubtitle}
                  </p>
                </div>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] shadow-md">
                  <Image
                    src={data.secondaryImage}
                    alt={data.secondaryImageAlt}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
