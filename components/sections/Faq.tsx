'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiChevronDown, FiPhoneCall } from 'react-icons/fi';
import { DoctorHealthcareFaqData } from '@/types/templates.types';

interface FaqProps {
  data: DoctorHealthcareFaqData;
}

export function Faq({ data }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="w-full overflow-hidden bg-white py-8 lg:py-14"
    >
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <div className="mb-8 max-w-2xl lg:mb-10">
          <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">
            <span className="h-[2px] w-7 bg-[var(--color-accent)]" />
            <span>{data.eyebrow}</span>
          </div>
          <h2 className="font-display-title mt-3 text-2xl font-bold leading-tight text-[var(--color-heading)] sm:text-3xl lg:text-4xl">
            {data.title}
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-text)] sm:text-base">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-2.5 shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={data.image}
                  alt={data.imageAlt}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>

              <div className="mt-2.5 rounded-2xl bg-[var(--color-primary-deep)] p-5 text-white">
                <h3 className="font-display-title text-base font-bold text-white">
                  {data.calloutTitle}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {data.calloutText}
                </p>
                <a
                  href={data.calloutCtaHref}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-4 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <FiPhoneCall className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{data.calloutCtaLabel}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-3 lg:col-span-7">
            {data.items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={`${item.id}-${idx}`}
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    isOpen
                      ? 'border-[var(--color-primary)] bg-[var(--color-bg-soft)]'
                      : 'border-[var(--color-border)] bg-white'
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleItem(idx)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-display-title text-sm font-bold text-[var(--color-heading)] sm:text-base">
                      {item.question}
                    </span>
                    <FiChevronDown
                      className={`h-5 w-5 shrink-0 text-[var(--color-primary)] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-[var(--color-border)] px-5 pb-5 pt-3 text-sm leading-relaxed text-[var(--color-text)]">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
