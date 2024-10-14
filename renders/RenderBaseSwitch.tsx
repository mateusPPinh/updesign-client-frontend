import React from 'react';
import dynamic from 'next/dynamic';
import { UmbrielVectorProps } from '@app/utils/shared-interfaces';

const RenderSiteData = dynamic(() => import('@app/renders/RenderSiteData'));
const RenderSiteComponents = dynamic(
  () => import('@app/renders/RenderSiteComponents')
);

type BaseSwitchProps = {
  pageblockData: UmbrielVectorProps[];
  components: Array<any>;
  pageblockDataSlotType: string | null;
  componentsType: string | null;
  articlesList: any;
  clientComponents: Array<unknown>;
};

const BaseSwitch: React.FC<BaseSwitchProps> = ({
  components,
  pageblockData,
  componentsType,
  pageblockDataSlotType,
  articlesList,
  clientComponents
}) => {
  const renderComponents = () => {
    const elements = [];
    console.log('elements BaseSwitch', pageblockData);

    if (componentsType === 'input_components' && components) {
      elements.push(
        <RenderSiteComponents {...components} key={componentsType} />
      );
    }

    if (articlesList && Object.keys(articlesList).length > 0) {
      elements.push(
        <RenderSiteData
          articleData={{ ...articlesList }}
          key={JSON.stringify(articlesList)}
          components={clientComponents}
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
