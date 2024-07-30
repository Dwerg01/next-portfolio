import '../styles/globals.css';
import { GoogleTagManager } from '@next/third-parties/google';

// components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// router
import { useRouter } from 'next/router';

// framer motion
import { AnimatePresence, motion } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
  <Layout>
    <GoogleTagManager gtmId='GTM-PXC3S4B6' />
    <AnimatePresence mode='wait'>
    <motion.div key={router.route} className='h-full'>
      <Transition />
      <Component {...pageProps} />
    </motion.div>
    </AnimatePresence>
  </Layout>
  );
}

export default MyApp;
