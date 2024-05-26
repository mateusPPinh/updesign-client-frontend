type ArticleTitleProps = { title: string };

export function Title({ title }: ArticleTitleProps) {
  return <h1 className="articleHeading1 font-poppins">{title}</h1>;
}
