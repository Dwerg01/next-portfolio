
// components
import TestimonialSlider from "../../components/TestimonialSlider";
import Circles from "../../components/Circles";

import Head from "next/head";

// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants'

const Testimonials = () => {
  return (
  <>
    <Head>
      <title>Nardu.info | Shopify Developer | Testimonials</title>
      <meta name="description" content="See what previous clients say. Stay up to date, with frequent updates and clear communication for the results you need for your Shopify store."/>
      <meta name="og:description" content="See what previous clients say. Stay up to date, with frequent updates and clear communication for the results you need for your Shopify store."/>
    </Head>
    <div className="h-full bg-primary/30 py-32 text-center">
      <Circles />
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2 
          variants={fadeIn('up', 0.2)} 
          initial="hidden" 
          animate="show" 
          exit="hidden" 
          className="h2 mb-4 sm:mb-8 xl:mb-0"
          >
          What clients <span className="text-accent">say .</span></motion.h2>
        {/* slider  */}
        <motion.div
          variants={fadeIn('up', 0.4)} 
          initial="hidden" 
          animate="show" 
          exit="hidden" 
          >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  </>
  )
};

export default Testimonials;
