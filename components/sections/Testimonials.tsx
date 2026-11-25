'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { DoctorHealthcareTestimonialsData } from '@/types/templates.types';

interface TestimonialsProps {
  data: DoctorHealthcareTestimonialsData;
}

export function Testimonials({ data }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = data.items.length;

  useEffect(() => {
    if (isPaused || total <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const current = data.items[activeIndex] ?? data.items[0];
  const counterLabel = `${String(activeIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;

  return (
    <section
      id="testimonials"
      className="w-full overflow-hidden bg-[var(--color-bg-soft)] py-8 lg:py-14"
    >
      <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end lg:mb-10">
          <div className="max-w-2xl">
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

          <div className="flex items-center gap-3">
            <span className="font-display-title text-sm font-bold text-[var(--color-primary)]">
              {counterLabel}
            </span>
            <button
              type="button"
              onClick={handlePrev}
              aria-label={data.prevAriaLabel}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-heading)] shadow-sm transition-colors hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
            >
              <FiArrowLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label={data.nextAriaLabel}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-heading)] shadow-sm transition-colors hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
            >
              <FiArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-md sm:p-10"
        >
          <div className="flex items-center gap-1 text-amber-400">
            {Array.from({ length: current.rating }).map((_, idx) => (
              <FaStar key={`star-${current.id}-${idx}`} className="h-4 w-4" aria-hidden="true" />
            ))}
          </div>

          <div className="mt-5 min-h-[140px] sm:min-h-[112px]">
            <blockquote className="font-display-title text-lg font-medium leading-relaxed text-[var(--color-heading)] sm:text-xl lg:text-2xl">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
          </div>

          <div className="mt-6 flex flex-col justify-between gap-4 border-t border-[var(--color-border)] pt-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-[var(--color-primary-soft)]">
                <Image
                  src={current.avatar}
                  alt={current.avatarAlt}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-display-title text-base font-bold text-[var(--color-heading)]">
                  {current.name}
                </p>
                <p className="text-xs font-medium text-[var(--color-accent)] sm:text-sm">
                  {current.treatment}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {data.items.map((item, idx) => (
                <button
                  key={`t-dot-${item.id}-${idx}`}
                  type="button"
                  aria-label={`View review ${idx + 1}`}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === activeIndex
                      ? 'w-7 bg-[var(--color-primary)]'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
