import { loaderProp } from "@app/utils/loaderSrcNextImage";
import Image from "next/image";

interface CoverImageProps {
  content?: {
    image: {
      desktop_image_path: string;
      image_mobile_path: string;
    };
  };
}

export default function CoverImage({content}: CoverImageProps) {
  return (
    <>
      {content && (
         <Image 
         src={content?.image.desktop_image_path ?? ''}
         alt="Content"
         className="object-center object-cover pointer-events-none"
         priority={true}
         loader={loaderProp}
         width={0}
         height={0}
         style={{ width: '100%', height: 'calc(-70px + 100vh)' }}
       />
      )}
    </>
  )
}