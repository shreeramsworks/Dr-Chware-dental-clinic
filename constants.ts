import { Users, Smile, Heart, Zap, Stethoscope, Star } from 'lucide-react';
import { Service, TeamMember, Testimonial } from './types';

export const CLINIC_DETAILS = {
  name: "Dr Chaware’s Multispeciality Dental Care",
  shortName: "Dr Chaware’s Dental",
  tagline: "Advanced Dentistry & Dental Implants in Latur",
  phone: "+91 98765 43210",
  email: "info@drchawaredental.com",
  address: "1st Floor, Sunshine Complex, Near Shivaji Chowk, Latur, Maharashtra 413512",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786.671375936306!2d76.57321507519198!3d18.36214048270562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcrf01234567890%3A0xabcdef1234567890!2sLatur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin",
};

export const SERVICES: Service[] = [
  {
    id: "implants",
    title: "Dental Implants",
    description: "Permanent solution for missing teeth with high-quality titanium implants that look and feel natural.",
    icon: Zap,
    features: ["Single Tooth Replacement", "Full Mouth Rehabilitation", "Immediate Loading"]
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, bonding, and advanced aesthetic procedures.",
    icon: Smile,
    features: ["Hollywood Smile Makeover", "Porcelain Veneers", "Dental Jewelry"]
  },
  {
    id: "rct",
    title: "Root Canal Treatment",
    description: "Painless, single-sitting root canal treatments to save your natural teeth.",
    icon: Stethoscope,
    features: ["Single Sitting RCT", "Micro-Endodontics", "Painless Procedure"]
  },
  {
    id: "ortho",
    title: "Braces & Aligners",
    description: "Straighten your teeth with traditional metal braces or invisible aligners.",
    icon: Users,
    features: ["Metal & Ceramic Braces", "Invisalign", "Retainers"]
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    description: "Professional laser whitening for a brighter, sparkling smile in just one hour.",
    icon: Star,
    features: ["Laser Whitening", "Home Bleaching Kits", "Stain Removal"]
  },
  {
    id: "kids",
    title: "Pediatric Dentistry",
    description: "Specialized gentle care for children to ensure healthy smiles for life.",
    icon: Heart,
    features: ["Fluoride Treatment", "Pit & Fissure Sealants", "Habit Breaking"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Patil",
    location: "Latur",
    text: "Dr. Chaware is excellent. I got my dental implant done here and the procedure was completely painless. Highly recommended!",
    rating: 5
  },
  {
    id: 2,
    name: "Sneha Deshmukh",
    location: "Pune",
    text: "The clinic is very hygienic and modern. The staff is polite. Best place for a root canal in Latur.",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Joshi",
    location: "Latur",
    text: "My smile makeover changed my confidence. Thank you to the entire team for the wonderful treatment.",
    rating: 5
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Dr. A. Chaware",
    role: "Chief Dental Surgeon & Implantologist",
    image: "https://picsum.photos/300/300?random=1",
    qualification: "BDS, MDS (Prosthodontics)"
  },
  {
    id: 2,
    name: "Dr. Priya Chaware",
    role: "Cosmetic Dentist",
    image: "https://picsum.photos/300/300?random=2",
    qualification: "BDS, PGD (Aesthetics)"
  },
  {
    id: 3,
    name: "Dr. Rahul Sharma",
    role: "Orthodontist",
    image: "https://picsum.photos/300/300?random=3",
    qualification: "MDS (Orthodontics)"
  }
];

export const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/services", label: "Services" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact" },
];