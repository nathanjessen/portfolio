export interface Testimonial {
  person: string;
  thumbnail?: string;
  title: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    person: 'Ryan Doll',
    thumbnail: '/assets/images/rdoll.jpeg',
    title: 'Software Engineering Manager II, RSA Security',
    quote:
      'Nathan is one of the best CSS developers I have ever worked with. He can handle any task you throw at him, and he is way above the curve when it comes to implementing UI. Great to work with and doesn’t shy away from any challenge.',
  },
];
