/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';
import { getBackgroundColorClass } from '@app/css-helpers/background-classes';
import { getAlignItemsClass } from '@app/css-helpers/align-text';

export default function BannerProjects(props: {
  bgColor: any;
  component_header_description: any;
  image_url: any;
  buttonChildren: any;
  buttonColor: any;
  buttonPath: any;
  component_title: any;
  component_description: any;
}) {
  const {
    bgColor,
    component_header_description,
    image_url,
    buttonChildren,
    buttonColor,
    buttonPath,
    component_title,
    component_description
  } = props;
  // console.log('props from render site components', props);
  return (
    <div className="flex flex-row justify-center items-start p-0 w-full max-w-6xl">
      <div
        className={`
        flex-1
        flex
        flex-col
        items-center
        justify-center
        bg-white
      `}
      >
        <div className="justify-start flex m-auto flex-col w-[calc(100%-2rem)] items-start">
          <Image
            src={image_url}
            width={540}
            height={380}
            alt={component_title}
            priority
          />

          <p className="text-blueDark font-primary font-h6 tracking-tighter mb-1 leading-3 text-xs">
            {component_header_description}
          </p>
          <h4 className="text-blueDark font-primary font-medium text-2xl m-4">
            {component_title}
          </h4>
          <p
            className="
          text-sm mb-6 leading-normal	 	
          "
          >
            {component_description}
          </p>
        </div>
      </div>
    </div>
  );
}
