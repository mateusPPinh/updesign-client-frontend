type ArticleHTMLBodyProps = {
  articleBody: any;
};

export function ArticleHTMLBody({ articleBody }: ArticleHTMLBodyProps) {
  console.log(articleBody, 'ArticleHTMLBody');
  return (
    <div
      className="article_html [&>p]:font-noto"
      dangerouslySetInnerHTML={{ __html: articleBody }}
    />
  );
}
