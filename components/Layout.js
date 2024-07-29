import {Sora} from 'next/font/google'
import Head from 'next/head';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
});

import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'

const Layout = ({children}) => {
  return ( 
  <>
    <Head>
      <title>Nardu.info website</title>
      <meta name="description" content="Freelance Shopify specialist from South Africa"/>
      <link rel="icon" href="../favicon.ico" sizes="any" />
    </Head>
    <div className={'page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative'}>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  </>
  );
};

export default Layout;
