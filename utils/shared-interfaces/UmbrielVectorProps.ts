type UmbrielVectorProps = {
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
            schedulePublication?: unknown;
            articleBody?: string;
          };
        };
      };
      target?: string;
    };
  };
};

export type { UmbrielVectorProps };
