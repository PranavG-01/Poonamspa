export type ServiceCategory = 
  | 'all'
  | 'facials'
  | 'body'
  | 'threading'
  | 'waxing'
  | 'tinting'
  | 'pedicure';

export interface SpaService {
  id: string;
  name: string;
  category: 'facials' | 'body' | 'threading' | 'waxing' | 'tinting' | 'pedicure';
  duration: string;
  price: number;
  description: string;
  highlights?: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  service: string;
  rating: number;
  comment: string;
  date?: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
