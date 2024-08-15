import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Sorn Sophearum | Home</title>
        <meta name="description" content="Welcome to my portfolio website. Explore my work and projects." />
        <meta name="keywords" content="portfolio, web developer, projects" />
        <meta name="author" content="Sorn Sophearum" />
        <meta property="og:title" content="Sorn Sophearum | Home" />
        <meta property="og:description" content="Welcome to my portfolio website. Explore my work and projects." />
        <meta property="og:image" content="https://surveybox.istad.co/_next/image?url=%2Fimages%2Fabout%2Fmember%2Fphearum.png&w=256&q=75" />
        <meta property="og:url" content="https://sorn-sophearum.vercel.app" />
        <meta name="twitter:card" content="https://surveybox.istad.co/_next/image?url=%2Fimages%2Fabout%2Fmember%2Fphearum.png&w=256&q=75" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
