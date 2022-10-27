import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <meta name="description" content="Developpeur freelance situé 
      à foix en Ariège spécialisé dans la création et la conception de site internet. Site vitrine, e-commerce, site sur-mesure..."/>
      <meta property="og:title" content="Benoit sentenac-réou|création de site internet|foix|06 70 36 92 61"/>
      <meta property="og:type" content="website"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
		  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
		  <link href="https://fonts.googleapis.com/css2?family=Anonymous+Pro&family=Press+Start+2P&display=swap" rel="stylesheet"/>
      <title>Benoit sentenac Réou | Création de site internet</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}