import isEmpty from 'lodash/isEmpty';
import dynamic from 'next/dynamic';
import get from 'lodash/get';
const PlaceholderComponent = dynamic(() =>
  import('@app/components/PlaceholderComponent').then((mod) => mod.default)
);

type AboutProps = {
  pageData?: any;
  pageblockData: Array<unknown>;
};

export default function About({ pageblockData, pageData }: AboutProps) {
  const getPageDataId = get(pageData, 'id', '');
  const getPageDataTitle = get(pageData, 'title', '');
  const checkIfHasData = isEmpty(pageblockData);
  return (
    <div className='flex items-center justify-center m-[100px]'>
      {checkIfHasData ? (
         <PlaceholderComponent 
          message="Great! You have successfully created your page, but we noticed that you haven't added any components yet. How about getting started?"
          pageId={getPageDataId}
          pageTitle={getPageDataTitle}
       />
      ) : (
        // Render the actual contact page components here
        <div>{/* Your contact page components */}</div>
      )}
    </div>
  );
}
