import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Layout from '../components/Layout';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Docket web</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
    </div>
  );
}
