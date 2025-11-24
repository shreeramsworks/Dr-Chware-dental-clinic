export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any; // Lucide icon type
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  qualification: string;
}

export interface NavLink {
  path: string;
  label: string;
}