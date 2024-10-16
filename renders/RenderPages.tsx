import dynamic from 'next/dynamic';

const About = dynamic(() => import('@app/components/Struct/About'), {
  ssr: true
});
const Contact = dynamic(() => import('@app/components/Struct/Contact'), {
  ssr: true
});
const Home = dynamic(() => import('@app/components/Struct/Home'), {
  ssr: true
});

import { PageProps } from '@app/utils/shared-types';
import get from 'lodash/get';

type RenderSwitchProps = {
  pageDataProps?: PageProps[];
  pageblockData?: Array<any>;
  className?: string;
};

const RenderPages = ({ pageDataProps, pageblockData }: RenderSwitchProps) => {
  if (!pageblockData) {
    return null;
  }
  const pageData = get(pageDataProps, '[0]', []);
  const pageTemplate = get(pageData, 'page_template', null);
  const mountPageInputTemplate = `page_input_template${pageTemplate}`;

  switch (mountPageInputTemplate) {
    case 'page_input_template_sobre':
      return <About pageData={pageData} pageblockData={pageblockData} />;
    case 'page_input_template_home':
      return (
        <Home
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          pageData={pageData[0]}
          articles={pageblockData[0].blocksData?.centerMiddle || []}
          pageblockData={pageblockData}
        />
      );
    case 'page_input_template_contato':
      return <Contact pageData={pageData} pageblockData={pageblockData} />;
    default:
      return (
        <div className="w-full">
          <pre>no data found</pre>
        </div>
      );
  }
};

export default RenderPages;
