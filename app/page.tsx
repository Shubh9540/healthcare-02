import type { ReactNode } from 'react';
import rawData from '@/data/templates.json';
import { DoctorHealthcareTemplateData } from '@/types/templates.types';
import { Hero } from '@/components/sections/Hero';
import { AboutUs } from '@/components/sections/AboutUs';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Testimonials } from '@/components/sections/Testimonials';
import { Faq } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  const data = rawData as DoctorHealthcareTemplateData;
  const sections = data.categories.DoctorHealthcare.sections;
  const order = data.pages.home.components;

  const sectionMap: Record<string, ReactNode> = {
    Hero: <Hero data={sections.Hero.variants.DoctorHealthcareHero2} />,
    AboutUs: <AboutUs data={sections.AboutUs.variants.DoctorHealthcareAboutUs2} />,
    Services: <Services data={sections.Services.variants.DoctorHealthcareServices2} />,
    WhyChooseUs: <WhyChooseUs data={sections.WhyChooseUs.variants.DoctorHealthcareWhyChooseUs2} />,
    Testimonials: (
      <Testimonials data={sections.Testimonials.variants.DoctorHealthcareTestimonials2} />
    ),
    Faq: <Faq data={sections.Faq.variants.DoctorHealthcareFaq2} />,
    Contact: <Contact data={sections.Contact.variants.DoctorHealthcareContact2} />,
  };

  return (
    <main className="flex min-h-screen w-full min-w-0 flex-col overflow-x-hidden bg-[var(--color-bg-main)]">
      {order.map((item) => (
        <div key={item.key}>{sectionMap[item.key]}</div>
      ))}
    </main>
  );
}
