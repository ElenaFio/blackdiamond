export type ServiceCategory = 'all' | 'residential' | 'commercial' | 'move-in-out' | 'deep-clean';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  name: string;
  tagline: string;
  badge?: string;
  basePrice: number;
  estimatedTime: string;
  description: string;
  iconName: string;
  features: string[];
  recommendedFor: string;
  popular?: boolean;
}

export interface AddOnOption {
  id: string;
  name: string;
  price: number;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  service: string;
  reviewDate: string;
  comment: string;
  avatarUrl: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'eco' | 'scheduling';
}

export interface BookingFormData {
  serviceId: string;
  serviceName: string;
  frequency: 'one-time' | 'weekly' | 'bi-weekly' | 'monthly';
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  selectedAddOns: string[];
  date: string;
  timeSlot: string;
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  specialInstructions: string;
  hasPets: boolean;
  petDetails?: string;
}
