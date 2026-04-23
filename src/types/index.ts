export interface NavLink {
  label: string;
  href: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image?: string;
}

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  currentRole: string;
  yearsExperience: string;
  licenses: string[];
  interests: string[];
  message: string;
}

export interface StepConfig {
  number: number;
  title: string;
  description: string;
}
