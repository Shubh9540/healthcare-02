import Image from 'next/image';
import Link from 'next/link';
import { FiClock, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { DoctorHealthcareFooterData } from '@/types/templates.types';

interface FooterProps {
  data: DoctorHealthcareFooterData;
}

export function Footer({ data }: FooterProps) {
  return (
    <footer className="w-full overflow-hidden bg-[var(--color-primary-deep)] text-slate-200">
      <div className="mx-auto max-w-[1280px] px-4 py-12 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/#hero" className="inline-block focus:outline-none">
              <Image
                src={data.logoPath}
                alt={data.logoAlt}
                width={380}
                height={66}
                unoptimized
                className="h-16 w-auto object-contain sm:h-20"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">
              {data.brandSummary}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display-title text-sm font-bold uppercase tracking-wider text-white">
              {data.quickLinksTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {data.quickLinks.map((item, idx) => (
                <li key={`${item.href}-${idx}`}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-300 transition-colors hover:text-teal-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display-title text-sm font-bold uppercase tracking-wider text-white">
              {data.usefulLinksTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {data.usefulLinks.map((item, idx) => (
                <li key={`${item.href}-${idx}`}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-300 transition-colors hover:text-teal-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display-title text-sm font-bold uppercase tracking-wider text-white">
              {data.contactTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <FiPhone className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" />
                <a href={`tel:${data.phone.replace(/[^+\d]/g, '')}`} className="hover:text-white">
                  {data.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <FiMail className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" />
                <a href={`mailto:${data.email}`} className="break-all hover:text-white">
                  {data.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <FiMapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" />
                <span>{data.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FiClock className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" />
                <span>{data.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 border-t border-slate-700 pt-6 text-xs text-slate-400">
          <p>{data.copyrightText}</p>
        </div>
      </div>
    </footer>
  );
}
