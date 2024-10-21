type ArticleHTMLBodyProps = {
  articleBody: any;
  title: string;
};

export function ArticleHTMLBody({ articleBody, title }: ArticleHTMLBodyProps) {
  return (
    <div id={title}>
      <div
        className="prose mx-auto max-w-[1200px] w-full"
        dangerouslySetInnerHTML={{ __html: articleBody }}
      />
    </div>
  );
}
