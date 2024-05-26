import Image from 'next/image';
import { loaderProp } from '@app/utils/loaderSrcNextImage';

type ImageBackgroundProps = {
  image_desktop_path: string;
};

export default function ImageBackground({
  image_desktop_path
}: ImageBackgroundProps) {
  return (
    <Image
      alt="Foto do time da UpDesign Brasil"
      src={image_desktop_path}
      className="object-center object-cover pointer-events-none"
      priority={true}
      width={0}
      height={0}
      style={{ width: '100%', height: 'calc(-70px + 100vh)' }}
      loader={loaderProp}
    />
  );
}
