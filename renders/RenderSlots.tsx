import { ComponentsProps, UmbrielVectorProps } from '@app/utils/shared-types';
import get from 'lodash/get';
import dynamic from 'next/dynamic';
const RenderBaseSwitch = dynamic(() => import('./RenderBaseSwitch'));

type RenderSlotsProps = {
  siteApiData?: UmbrielVectorProps[];
  componentsData?: ComponentsProps[];
};

export default function RenderSlots({
  siteApiData,
  componentsData
}: RenderSlotsProps) {
  const pageblockData = get(siteApiData, '[0]', []);
  const pageblockDataSlotType = get(pageblockData, 'blockType', null);
  const pageIdFromBlock = get(pageblockData, 'pageId', null);

  // Filtrar componentes que estão relacionados ao pageId do pageblock atual

  const componentsForCurrentPage = componentsData?.filter(
    (comp) => comp.pageId === pageIdFromBlock
  );
  const components = get(componentsForCurrentPage, '[0]', []);
  const componentsType = get(components, 'type', null);

  return (
    <RenderBaseSwitch
      components={components}
      componentsType={componentsType}
      pageblockData={pageblockData}
      pageblockDataSlotType={pageblockDataSlotType}
    />
  );
}
