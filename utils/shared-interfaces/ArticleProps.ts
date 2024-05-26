export type ArticleProps = {
  title?: string;
  subtitle?: string;
  author?: string;
  created_at: Date;
  updated_at: Date;
  social_networks?: string;
  email?: string;
  content?: {
    image: {
      desktop_image_path: string;
      image_mobile_path: string;
    };
  };
  slug?: string;
  schedulePublication?: unknown;
  articleBody?: string;
};
