import Image from 'next/image';
import { loaderProp } from '@app/utils/loaderSrcNextImage';

type ImageBackgroundType = {
  image_desktop_path: string;
};

type ImageBackgroundProps = { items: ImageBackgroundType[] };

export default function RenderImage({ items }: ImageBackgroundProps) {
  return (
    <>
      {items.map((i, k) => (
        <Image
          key={k}
          alt="Foto do time da UpDesign Brasil"
          src={i.image_desktop_path}
          className="object-center object-cover pointer-events-none"
          priority={true}
          width={0}
          height={0}
          style={{ width: '100%', height: '100%' }}
          loader={loaderProp}
        />
      ))}
    </>
  );
}
