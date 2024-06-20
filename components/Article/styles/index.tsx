import { ReactNode } from 'react';

interface Props {
  child: ReactNode;
}

export default function Wrapper({ child }: Props) {
  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
      <div className="w-full items-start flex flex-col justify-start h-auto mb-4 px-4 md:px-0 article__text__body">
        {child}
      </div>
    </div>
  );
}
