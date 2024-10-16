import dynamic from 'next/dynamic';

const DynamicImageBackground = dynamic(() =>
  import('./ImageBackground').then((mod) => mod.default)
);

export default function HeaderImage(
  props: { [s: string]: unknown } | ArrayLike<unknown>
) {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <DynamicImageBackground image_desktop_path="https://pub-e9274c1f91bc4ae9a98c76f02f2938d4.r2.dev/desk-sobre.jpg" />
    </div>
  );
}
