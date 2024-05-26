import { ReactNode } from 'react';

type MainArticleContainerProps = {
  children: ReactNode;
};

export function MainArticleContainer({ children }: MainArticleContainerProps) {
  return (
    <div className="articleClass">
      <div className="articleClass2">
        <div
          className="
            shadow-none
            w-full
            flex
            flex-col
            items-center
            justify-center
            ml-4
            mr-4
            mb-0
            pt-0
            pb-0
          "
        >
          <div className="articleClass4 max-w-2xl w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
