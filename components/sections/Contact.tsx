'use client';

import { FormEvent, useState } from 'react';
import { FiCheckCircle, FiClock, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { DoctorHealthcareContactData } from '@/types/templates.types';

interface ContactProps {
  data: DoctorHealthcareContactData;
}

function renderContactIcon(icon: string) {
  switch (icon) {
    case 'phone':
      return <FiPhone className="h-5 w-5" aria-hidden="true" />;
    case 'mail':
      return <FiMail className="h-5 w-5" aria-hidden="true" />;
    case 'map':
      return <FiMapPin className="h-5 w-5" aria-hidden="true" />;
    default:
      return <FiClock className="h-5 w-5" aria-hidden="true" />;
  }
}

export function Contact({ data }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState(data.form.treatmentOptions[0] ?? '');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setTreatment(data.form.treatmentOptions[0] ?? '');
    setMessage('');
  };

  return (
    <section
      id="contact"
      className="w-full overflow-hidden bg-[var(--color-bg-soft)] py-8 lg:py-14"
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

        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-lg lg:grid-cols-12">
          <div className="flex flex-col justify-between bg-[var(--color-primary-deep)] p-6 text-white sm:p-10 lg:col-span-5">
            <div>
              <h3 className="font-display-title text-xl font-bold text-white sm:text-2xl">
                {data.panelTitle}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                {data.panelDescription}
              </p>

              <div className="mt-8 space-y-5">
                {data.infoItems.map((item, idx) => (
                  <div key={`${item.id}-${idx}`} className="flex items-start gap-3.5">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)] text-teal-300">
                      {renderContactIcon(item.icon)}
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-0.5 block text-sm font-semibold text-white transition-colors hover:text-teal-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm font-semibold text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:col-span-7">
            {submitted ? (
              <div className="flex h-full min-h-[340px] flex-col items-center justify-center text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <FiCheckCircle className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="font-display-title mt-4 text-xl font-bold text-[var(--color-heading)]">
                  {data.form.successTitle}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--color-text)]">
                  {data.form.successMessage}
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-6 py-2.5 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:border-[var(--color-primary)]"
                >
                  {data.form.resetLabel}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="font-display-title text-xl font-bold text-[var(--color-heading)]">
                    {data.form.heading}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--color-text-muted)] sm:text-sm">
                    {data.form.subheading}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-xs font-semibold text-[var(--color-heading)]"
                    >
                      {data.form.nameLabel}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={data.form.namePlaceholder}
                      className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-4 py-2.5 text-sm text-[var(--color-heading)] outline-none transition-colors focus:border-[var(--color-primary)] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block text-xs font-semibold text-[var(--color-heading)]"
                    >
                      {data.form.emailLabel}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={data.form.emailPlaceholder}
                      className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-4 py-2.5 text-sm text-[var(--color-heading)] outline-none transition-colors focus:border-[var(--color-primary)] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-1.5 block text-xs font-semibold text-[var(--color-heading)]"
                    >
                      {data.form.phoneLabel}
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={data.form.phonePlaceholder}
                      className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-4 py-2.5 text-sm text-[var(--color-heading)] outline-none transition-colors focus:border-[var(--color-primary)] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-treatment"
                      className="mb-1.5 block text-xs font-semibold text-[var(--color-heading)]"
                    >
                      {data.form.treatmentLabel}
                    </label>
                    <select
                      id="contact-treatment"
                      value={treatment}
                      onChange={(e) => setTreatment(e.target.value)}
                      className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-4 py-2.5 text-sm text-[var(--color-heading)] outline-none transition-colors focus:border-[var(--color-primary)] focus:bg-white"
                    >
                      {data.form.treatmentOptions.map((opt, idx) => (
                        <option key={`opt-${idx}`} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-xs font-semibold text-[var(--color-heading)]"
                  >
                    {data.form.messageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={data.form.messagePlaceholder}
                    className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] px-4 py-2.5 text-sm text-[var(--color-heading)] outline-none transition-colors focus:border-[var(--color-primary)] focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--color-primary-hover)] sm:w-auto"
                >
                  <FiSend className="h-4 w-4" aria-hidden="true" />
                  <span>{data.form.submitLabel}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
