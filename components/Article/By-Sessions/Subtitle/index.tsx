type ArticleSubtitleProps = { subtitle: string };

export function Subtitle({ subtitle }: ArticleSubtitleProps) {
  return <h2 className="">{subtitle}</h2>;
}
