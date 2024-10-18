import dynamic from 'next/dynamic';
import styled from 'styled-components';

const DynamicCarouselContainer = dynamic(() => import('./CarouselContainer'));

const Container = styled.div`
  @media (width: 375px) {
    > div {
      width: 100%;
      min-width: 400px !important;
    }
  }
`;

type CarrouselItems = {
  image_middle_desktop_path: string;
  image_mobile_path: string;
};
type CarrouselProps = { items: CarrouselItems[] };

export default function Carrousel({ items }: CarrouselProps) {
  return (
    <Container>
      <div className="absolute top-0 left-0 w-full h-full">
        <DynamicCarouselContainer items={items} />
      </div>
    </Container>
  );
}
