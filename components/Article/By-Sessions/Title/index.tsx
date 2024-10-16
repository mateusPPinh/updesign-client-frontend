type ArticleTitleProps = { title: string };

export function Title({ title }: ArticleTitleProps) {
  return <h1 className="">{title}</h1>;
}
