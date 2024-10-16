import {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps
} from 'next/document';
import GoogleAnalytics from '@app/analytics/GoogleAnalytics';
import { ServerStyleSheet } from 'styled-components';
import Document from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        });

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <GoogleAnalytics />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
