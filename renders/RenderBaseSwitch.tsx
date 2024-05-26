import React from 'react';
import dynamic from 'next/dynamic';

const RenderSiteData = dynamic(() => import('@app/renders/RenderSiteData'));
const RenderSiteComponents = dynamic(
  () => import('@app/renders/RenderSiteComponents')
);

type BaseSwitchProps = {
  pageblockData: Array<unknown>;
  components: Array<unknown>;
  pageblockDataSlotType: string | null;
  componentsType: string | null;
};

const BaseSwitch: React.FC<BaseSwitchProps> = ({
  components,
  pageblockData,
  componentsType,
  pageblockDataSlotType
}) => {
  const renderComponents = () => {
    const elements = [];
    console.log('elements BaseSwitch', pageblockData);

    if (componentsType === 'input_components') {
      elements.push(
        <RenderSiteComponents {...components} key={componentsType} />
      );
    }

    if (pageblockDataSlotType === 'slot') {
      elements.push(
        <RenderSiteData
          blocksData={{
            centerMiddle: undefined
          }}
          {...pageblockData}
          key={pageblockDataSlotType}
        />
      );
    }

    if (elements.length === 0) {
      console.log('No data found for both cases');
      return null;
    }

    return elements;
  };

  return <>{renderComponents()}</>;
};

export default BaseSwitch;
