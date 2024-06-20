import { ReactNode } from 'react';

type MainArticleContainerProps = {
  children: ReactNode;
};

export function MainArticleContainer({ children }: MainArticleContainerProps) {
  return <div className="max-w-2xl w-full">{children}</div>;
}
