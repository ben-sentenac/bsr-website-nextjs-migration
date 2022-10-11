// import App from 'next/app'

import Layout from '../components/layout/layout.components';
import { LoaderContextProvider } from '../context/loader.context';
import { ThemeContextProvider } from '../context/theme.context';
import '../styles/main.css';

const CustomApp = ({ Component, pageProps }) => {

  return (
    <ThemeContextProvider>
      <LoaderContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </LoaderContextProvider>
    </ThemeContextProvider>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default CustomApp;