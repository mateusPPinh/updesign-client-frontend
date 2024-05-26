import dynamic from 'next/dynamic';
import get from 'lodash/get';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

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
  children: any;
  navigation: Array<any>;
};

export default function BaseStruct({ children, navigation }: BaseStructProps) {
  const pathname = usePathname();
  const deliveryNavigationItemsToComponents = get(navigation, 'blocksData', []);
  const deliveryMenuData = get(deliveryNavigationItemsToComponents, 'menu', []);
  const deliveryFooter = get(deliveryNavigationItemsToComponents, 'footer', []);
  const deliveryCarouselData = get(
    deliveryNavigationItemsToComponents,
    'layoutCarrousel',
    []
  );
  const deliveryPageMainImage = get(
    deliveryNavigationItemsToComponents,
    'pageMainImage',
    []
  );


  const shouldRenderMenu = true;
  const shouldRenderFooter = pathname !== '/contato';
  const shouldRenderHeaderImage = pathname === '/sobre';
  const shouldRenderCarrousel = pathname === '/';

  return (
    <Fragment>
      <div className="w-full h-screen mb-10 pb-0 overflow-hidden">
        {shouldRenderMenu && <DynamicMenu {...deliveryMenuData} />}
        {shouldRenderHeaderImage && (
          <DynamicHeaderImage {...deliveryPageMainImage} />
        )}
        {shouldRenderCarrousel && <DynamicCarousel {...deliveryCarouselData} />}
      </div>
      {children}
      {shouldRenderFooter && <DynamicFooter {...deliveryFooter} />}
    </Fragment>
  );
}
