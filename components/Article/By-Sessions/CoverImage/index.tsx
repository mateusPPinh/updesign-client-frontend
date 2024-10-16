/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { Container } from './CoverImage.styles';
import { useWindowSize } from 'rooks';

interface CoverImageProps {
  content?: {
    image: {
      desktop_image_path: string;
      image_mobile_path: string;
    };
  };
}

export default function CoverImage({ content }: CoverImageProps) {
  const { innerWidth } = useWindowSize();
  const [image, setImage] = useState<string | undefined>('');

  useEffect(() => {
    const isMobile = innerWidth && innerWidth <= 425;
    const selectedImage = isMobile
      ? content?.image.image_mobile_path
      : content?.image.desktop_image_path;
    setImage(selectedImage);
  }, [innerWidth, content]);

  return (
    <Container>
      {content && (
        <img
          src={image || ''}
          alt={image}
          className="object-center object-cover pointer-events-none"
          style={{ width: '100%', height: 'calc(-70px + 100vh)' }}
        />
      )}
    </Container>
  );
}
