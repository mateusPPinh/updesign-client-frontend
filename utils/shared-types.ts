export type PageProps = {
  id: string;
  title: string;
  description: string;
  metaDescription: string;
  metaKeywords: string;
  slug: string;
};

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
