export type ArticleProps = {
  slug?: string;
  title: string;
  subtitle: string;
  email?: string;
  social_networks?: string;
  content?: {
    image: {
      desktop_image_path: string;
      image_mobile_path: string;
    };
  };
  articleBody: any;
  status: 'notPublished' | 'published' | 'draft';
  editorialId: string;
  static_page_id?: string;
  isAward?: boolean;
  pageBgColor?: string;
  uploadedArticleImgs?: Array<any>;
  editorial?: {
    title: string;
    description: string;
    slug: string;
  }
};
