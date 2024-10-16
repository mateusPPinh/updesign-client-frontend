export type PageProps = {
  id: string;
  title: string;
  description: string;
  metaDescription: string;
  metaKeywords: string;
  slug: string;
};

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  author: string | null;
  email: string | null;
  content: {
    image: {
      desktop_image_path: string;
      image_mobile_path: string;
    };
  };
  slug: string;
  schedulePublication: string | null;
  articleBody: string;
  status: string;
  isAward: boolean;
  metadata: any;
  pageBgColor: string;
  articleLayoutStruct: any;
  created_at: string;
  updated_at: string;
  editorialId: string;
  static_page_id?: string;
  editorialName?: string;
  links?: Array<{
    title: string;
    url: string;
  }>;
  articleEstimatedReadTime?: string;
  isArticleLive?: boolean;
  editorial: {
    id: string;
    title: string;
    description: string;
    slug: string;
  };
  shouldRenderImageTitleSubtitleBlock?: boolean;
}

export interface BlockConfig {
  layout: string;
  columns: number[];
}

export interface BlockData {
  blockType: string;
  blockPosition: string;
  blocksData: {
    centerMiddle: {
      articles: Article[];
    };
    components: any[];
  };
  pageId: string;
  config: BlockConfig;
  template50?: {
    descriptions?: string[];
    headingsProps?: {
      fontSize: string | number;
      fontWeight: string | number;
      transform: string;
    };
  };
  blockTitle?: string;
  template?: string;
  articleId?: string | null;
  id?: string;
  created_at?: string;
  updated_at?: string;
  templateSlot100FeaturedRelatedProps?: {
    blockSubject: string;
    bgColor: string;
    blockSubjectColor: string;
    articleTitleColor: string;
    blockBorderRadius: string;
  };
  editorialObject?: {
    id: string;
    title: string;
    description: string;
    slug: string;
  };
}

export type ComponentsProps = {
  pageId: null;
  type: string;
  component_name: string;
  template: string;
  image_url: string;
  bgColor: string;
  button?: boolean;
  buttonChildren: string;
  buttonColor?: string;
  buttonPath: string;
  component_header_description?: string;
  component_title?: string;
  component_description?: string;
};

export type UmbrielVectorProps = {
  siteData: {
    pageId?: string;
    data: {
      blockPosition?: string;
      blockType?: string;
      blocksData?: {
        footer?: [];
        menu?: [];
        layoutCarrousel?: [];
        centerMiddle?: {
          blockPosition?: string;
          items?: [];
          layout?: string;
          target?: string;
          template?: string;
          article?: {
            title?: string;
            subtitle?: string;
            author?: string;
            email?: string;
            content?: {
              image: {
                desktop_image_path: string;
                image_mobile_path: string;
              };
            };
            slug?: string;
            schedulePublication?: any;
            articleBody?: string;
          };
        };
      };
      target?: string;
    };
  };
};

export type BlocksDataProps = {
  footer?: [];
  menu?: [];
  layoutCarrousel?: [];
  centerMiddle?: {
    blockPosition?: string;
    items?: [];
    layout?: string;
    target?: string;
    template?: string;
    article?: {
      title?: string;
      subtitle?: string;
      author?: string;
      email?: string;
      content?: {
        image: {
          desktop_image_path: string;
          image_mobile_path: string;
        };
      };
      slug?: string;
      schedulePublication?: any;
      articleBody?: string;
    };
  };
};

export type EditorialsProps = {
  id: string;
  title: string;
  slug: string;
};
