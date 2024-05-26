/* eslint-disable @typescript-eslint/ban-ts-comment */
import dynamic from 'next/dynamic';
import { UmbrielVectorProps, PageProps } from '@app/utils/shared-types';
import get from 'lodash/get';
const About = dynamic(() => import('./About'));
const Home = dynamic(() => import('./Home'));
const Contact = dynamic(() => import('./Contact'));

type Props = {
  data: UmbrielVectorProps[];
  pageData: PageProps[];
};

const Struct = ({ pageData }: Props) => {
  // const mappedVector = data.map((it) => {
  //   return {
  //     ...it
  //   };
  // });
  // const siteData = get(mappedVector, '[0]', []);
  // const blocksData = get(siteData, 'blocksData', []);
  // const menuData = get(blocksData, 'menu', []);
  // const footerData = get(blocksData, 'footer', []);
  // const carrouselData = get(blocksData, 'layoutCarrousel', []);
  // const pageCenterData = get(blocksData, 'centerMiddle', null);

  const pagedata = get(pageData, '[0]', []);
  const pageTemplate = get(pagedata, 'page_template', null);

  // const pageprops = get(pagedata, 'title', '');
  const mountPageTemplate = `page_input_template${pageTemplate}`;
  console.log(mountPageTemplate, 'page data from lodash get');

  switch (mountPageTemplate) {
    case 'page_input_template_sobre':
      // @ts-ignore
      return <About {...pageData} />;
    case 'page_input_template_home':
      return <Home pageData={undefined} articles={[]} />;
    case 'page_input_template_contato':
      return <Contact {...pageData} />;
    default:
      return (
        <div className="w-full">
          <pre>no data found</pre>
        </div>
      );
  }
};

export default Struct;
