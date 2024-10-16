type ArticleHTMLBodyProps = {
  articleBody: any;
};

export function ArticleHTMLBody({ articleBody }: ArticleHTMLBodyProps) {
  return (
    <div
      className="prose mx-auto max-w-[1200px] w-full"
      dangerouslySetInnerHTML={{ __html: articleBody }}
    />
  );
}
