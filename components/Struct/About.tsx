import { htmlBody } from '@app/mocks/about';

export default function About() {
  return (
    <div
      id="about"
      className="mx-auto max-w-[600px] w-full customAboutCSS mb:!mt-[45rem]"
      dangerouslySetInnerHTML={{ __html: htmlBody }}
    />
  );
}
