import dynamic from 'next/dynamic';
import get from 'lodash/get';
import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import styled, { css } from 'styled-components';

const BaseStructWrapper = styled.div<{ $hasAnyData?: boolean }>`
  @media (max-width: 425px) {
    height: 0px !important;
  }
  @media (max-width: 375px) {
    height: 0px !important;
  }
  @media (max-width: 1024px) {
    height: calc(0px + 100vh);
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

const DynamicPageImage = dynamic(import('@app/components/Struct/PageImage'));

type BaseStructProps = {
  children: ReactNode;
  navigation: Array<any>;
};

export default function BaseStruct({ children, navigation }: BaseStructProps) {
  const path = usePathname();
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
  const deliveryPageImage = get(
    deliveryNavigationItemsToComponents,
    'components.pageImage',
    []
  );

  // const shouldRenderMenu = true;
  const shouldRenderFooter = pathname !== '/contato';
  const shouldRenderHeaderImage = path === '/sobre';
  const shouldRenderCarrousel = pathname === '/';
  const shouldRenderPageImage = path === '/contato';

  const hasAnyData =
    deliveryMenuData.length > 0 ||
    deliveryFooter.length > 0 ||
    deliveryCarouselData.length > 0 ||
    deliveryPageMainImage.length > 0;
  return (
    <>
      <BaseStructWrapper $hasAnyData={hasAnyData}>
        {shouldRenderPageImage ? (
          <div className="z-10">
            <DynamicMenu items={deliveryMenuData} />
          </div>
        ) : (
          <DynamicMenu items={deliveryMenuData} />
        )}
        {shouldRenderHeaderImage && deliveryPageMainImage.length > 0 && (
          <DynamicHeaderImage items={deliveryPageMainImage} />
        )}
        {shouldRenderPageImage && deliveryPageImage.length > 0 && (
          <DynamicPageImage items={deliveryPageImage} />
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
