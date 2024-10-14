import dynamic from 'next/dynamic';
import get from 'lodash/get';
import { Fragment, ReactNode } from 'react';
import { useRouter } from 'next/router';

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
    deliveryCarouselData.length > 0 ||
    deliveryPageMainImage.length > 0;

  return (
    <Fragment>
      <div
        className={`${hasAnyData ? 'w-full h-[calc(100vh-70px)] mb-10 pb-0 overflow-hidden' : 'hidden'}`}
      >
        {shouldRenderMenu && deliveryMenuData.length > 0 && (
          <DynamicMenu items={deliveryMenuData} />
        )}
        {shouldRenderHeaderImage && deliveryPageMainImage.length > 0 && (
          <DynamicHeaderImage items={deliveryPageMainImage} />
        )}
        {shouldRenderCarrousel && deliveryCarouselData.length > 0 && (
          <DynamicCarousel items={deliveryCarouselData} />
        )}
      </div>
      {children}
      {shouldRenderFooter && deliveryFooter.length > 0 && (
        <DynamicFooter items={deliveryFooter} />
      )}
    </Fragment>
  );
}
