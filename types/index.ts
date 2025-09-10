export type ProductCategoryType = {
  id: string;
  slug: string;
  category_name: string;
  thumbnail: string;
};

export type FeatureInfoType = {
  id: string;
  icon: React.ElementType;
  title: String;
  description: string;
};

export type TestimonialType = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  testimonial: string;
  product?: string;
};
