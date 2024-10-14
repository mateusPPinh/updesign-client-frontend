import { ReactNode } from 'react';

interface Props {
  child: ReactNode;
}

export default function Wrapper({ child }: Props) {
  return <>{child}</>;
}
