// pages/_app.js
import '../styles/global.scss';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  // You can use this component to provide a layout for your entire app
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;