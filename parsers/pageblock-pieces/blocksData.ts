/* eslint-disable no-self-assign */
import {
  BlocksDataProps,
  MenuProps,
  CarouselProps,
  FooterProps,
  CenterMiddleProps
} from '@app/utils/shared-interfaces';

export type ParsedData = {
  menuData?: MenuProps[];
  carrouselData?: CarouselProps[];
  footerData?: FooterProps[];
  centerMiddle?: CenterMiddleProps;
};

export function parseBlocksData(blocksData: BlocksDataProps): ParsedData {
  const parsedData: ParsedData = {};
  if (blocksData.menu) {
    parsedData.menuData = blocksData.menu;
  }

  if (blocksData.layoutCarrousel) {
    parsedData.carrouselData = blocksData.layoutCarrousel;
  }

  if (blocksData.footer) {
    parsedData.footerData = blocksData.footer;
  }

  if (blocksData.centerMiddle) {
    parsedData.centerMiddle = blocksData.centerMiddle;
  }

  return parsedData;
}
