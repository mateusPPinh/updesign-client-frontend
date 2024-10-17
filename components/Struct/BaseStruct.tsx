import dynamic from 'next/dynamic';
import get from 'lodash/get';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';

const BaseStructWrapper = styled.div<{ $hasAnyData?: boolean }>`
  @media (max-width: 425px) {
    height: 0px !important;
  }
  ${({ $hasAnyData }) => {
    if ($hasAnyData) {
      return css`
        width: 100%;
        height: 100%;
        height: calc(989px - 100px);
        margin-bottom: 2.5rem;
        padding-bottom: 0px;
        overflow: hidden;
      `;
    } else {
      return css`
        display: none;
      `;
    }
  }}
`;

const DynamicMenu = dynamic(() =>
  import('@app/components/Struct/Menu').then((mod) => mod.default)
);
const DynamicFooter = dynamic(() =>
  import('@app/components/Struct/Footer').then((mod) => mod.default)
);
const DynamicHeaderImage = dynamic(() =>
  import('@app/components/Struct/HeaderImage').then((mod) => mod.default)
);
const DynamicCarousel = dynamic(
  () => import('@app/components/Struct/Carousel')
);

type BaseStructProps = {
  children: ReactNode;
  navigation: Array<any>;
};

export default function BaseStruct({ children, navigation }: BaseStructProps) {
  const router = useRouter();
  const pathname = router.pathname;

  const deliveryNavigationItemsToComponents =
    Array.isArray(navigation) && navigation.length > 0
      ? get(navigation, '[0].blocksData', {})
      : get(navigation, 'blocksData', {});
  const deliveryMenuData = get(
    deliveryNavigationItemsToComponents,
    'components.menu',
    []
  );
  const deliveryFooter = get(
    deliveryNavigationItemsToComponents,
    'components.footer',
    []
  );
  const deliveryCarouselData = get(
    deliveryNavigationItemsToComponents,
    'components.layoutCarrousel',
    []
  );
  const deliveryPageMainImage = get(
    deliveryNavigationItemsToComponents,
    'components.pageMainImage',
    []
  );

  const shouldRenderMenu = true;
  const shouldRenderFooter = pathname !== '/contato';
  const shouldRenderHeaderImage = pathname === '/sobre';
  const shouldRenderCarrousel = pathname === '/';

  const hasAnyData =
    deliveryMenuData.length > 0 ||
    deliveryFooter.length > 0 ||
    deliveryCarouselData.length > 0;
  return (
    <>
      <BaseStructWrapper $hasAnyData={hasAnyData}>
        {shouldRenderMenu && deliveryMenuData.length > 0 && (
          <DynamicMenu items={deliveryMenuData} />
        )}
        {shouldRenderCarrousel && deliveryCarouselData.length > 0 && (
          <DynamicCarousel items={deliveryCarouselData} />
        )}
      </BaseStructWrapper>
      {children}
      {shouldRenderFooter && deliveryFooter.length > 0 && (
        <DynamicFooter items={deliveryFooter} />
      )}
    </>
  );
}
