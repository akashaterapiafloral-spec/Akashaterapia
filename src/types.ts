export interface Service {
  id: string;
  title: string;
  category: 'autoconhecimento' | 'harmonizacao' | 'prosperidade' | 'ambientes-e-pets';
  description: string;
  fullDescription: string;
  iconName: string; // Will match Lucide icon keys
  duration?: string;
  price?: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Radiestesia' | 'Radiônica' | 'Prosperidade' | 'Astrologia' | 'Numerologia' | 'Fitoenergética' | 'Bem-estar';
  summary: string;
  content: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  serviceName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
