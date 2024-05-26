import dynamic from 'next/dynamic';

const Article = dynamic(() => import('@app/components/Article'), {
  ssr: false
});

import {
  parseBlocksData,
  ParsedData
} from '@app/parsers/pageblock-pieces/blocksData';
import { BlocksDataProps } from '@app/utils/shared-interfaces';

export default function RenderSiteData(props: { blocksData: BlocksDataProps }) {
  const parsedData: ParsedData = parseBlocksData(props.blocksData);
  // console.log('only article', parsedData);
  return (
    <>
      {parsedData.centerMiddle?.articles && (
        <Article {...parsedData.centerMiddle.articles} />
      )}
    </>
  );
}
