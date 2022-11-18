import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import Layout from "src/components/UI/Layout/Layout";
import store from "src/store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="QuynhNN" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>HRnet</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
