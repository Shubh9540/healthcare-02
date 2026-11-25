export interface DoctorHealthcareNavLink {
  label: string;
  href: string;
}

export interface DoctorHealthcareHeaderData {
  logoPath: string;
  logoAlt: string;
  brandName: string;
  navLinks: DoctorHealthcareNavLink[];
  ctaLabel: string;
  ctaHref: string;
  mobileMenuOpenLabel: string;
  mobileMenuCloseLabel: string;
}

export interface DoctorHealthcareHeroMetric {
  id: string;
  value: string;
  label: string;
}

export interface DoctorHealthcareHeroData {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  doctorImage: string;
  doctorImageAlt: string;
  metrics: DoctorHealthcareHeroMetric[];
}

export interface DoctorHealthcareAboutPillar {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface DoctorHealthcareAboutData {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  statValue: string;
  statLabel: string;
  pillars: DoctorHealthcareAboutPillar[];
}

export interface DoctorHealthcareServiceItem {
  id: string;
  category: string;
  title: string;
  description: string;
  duration: string;
  highlight: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface DoctorHealthcareServicesData {
  eyebrow: string;
  title: string;
  subtitle: string;
  prevAriaLabel: string;
  nextAriaLabel: string;
  items: DoctorHealthcareServiceItem[];
}

export interface DoctorHealthcareWhyItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface DoctorHealthcareWhyChooseUsData {
  eyebrow: string;
  title: string;
  description: string;
  primaryImage: string;
  primaryImageAlt: string;
  secondaryImage: string;
  secondaryImageAlt: string;
  badgeTitle: string;
  badgeSubtitle: string;
  items: DoctorHealthcareWhyItem[];
}

export interface DoctorHealthcareTestimonialItem {
  id: string;
  name: string;
  treatment: string;
  rating: number;
  quote: string;
  avatar: string;
  avatarAlt: string;
}

export interface DoctorHealthcareTestimonialsData {
  eyebrow: string;
  title: string;
  subtitle: string;
  prevAriaLabel: string;
  nextAriaLabel: string;
  items: DoctorHealthcareTestimonialItem[];
}

export interface DoctorHealthcareFaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface DoctorHealthcareFaqData {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  calloutTitle: string;
  calloutText: string;
  calloutCtaLabel: string;
  calloutCtaHref: string;
  items: DoctorHealthcareFaqItem[];
}

export interface DoctorHealthcareContactInfoItem {
  id: string;
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export interface DoctorHealthcareContactFormLabels {
  heading: string;
  subheading: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  treatmentLabel: string;
  treatmentOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  successTitle: string;
  successMessage: string;
  resetLabel: string;
}

export interface DoctorHealthcareContactData {
  eyebrow: string;
  title: string;
  subtitle: string;
  panelTitle: string;
  panelDescription: string;
  infoItems: DoctorHealthcareContactInfoItem[];
  form: DoctorHealthcareContactFormLabels;
}

export interface DoctorHealthcareFooterLink {
  label: string;
  href: string;
}

export interface DoctorHealthcareFooterData {
  logoPath: string;
  logoAlt: string;
  brandSummary: string;
  quickLinksTitle: string;
  quickLinks: DoctorHealthcareFooterLink[];
  usefulLinksTitle: string;
  usefulLinks: DoctorHealthcareFooterLink[];
  contactTitle: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  copyrightText: string;
}

export interface DoctorHealthcareThemeData {
  fontFamily: string;
  displayFontFamily: string;
}

export interface DoctorHealthcarePageComponent {
  key: string;
  component: string;
}

export interface DoctorHealthcareTemplateData {
  common: {
    theme: DoctorHealthcareThemeData;
    Footer: DoctorHealthcareFooterData;
  };
  categories: {
    DoctorHealthcare: {
      sections: {
        Header: {
          variants: {
            DoctorHealthcareHeader2: DoctorHealthcareHeaderData;
          };
        };
        Hero: {
          variants: {
            DoctorHealthcareHero2: DoctorHealthcareHeroData;
          };
        };
        AboutUs: {
          variants: {
            DoctorHealthcareAboutUs2: DoctorHealthcareAboutData;
          };
        };
        Services: {
          variants: {
            DoctorHealthcareServices2: DoctorHealthcareServicesData;
          };
        };
        WhyChooseUs: {
          variants: {
            DoctorHealthcareWhyChooseUs2: DoctorHealthcareWhyChooseUsData;
          };
        };
        Testimonials: {
          variants: {
            DoctorHealthcareTestimonials2: DoctorHealthcareTestimonialsData;
          };
        };
        Faq: {
          variants: {
            DoctorHealthcareFaq2: DoctorHealthcareFaqData;
          };
        };
        Contact: {
          variants: {
            DoctorHealthcareContact2: DoctorHealthcareContactData;
          };
        };
      };
    };
  };
  pages: {
    home: {
      components: DoctorHealthcarePageComponent[];
    };
  };
}
