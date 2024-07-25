
//components
import WorkSlider from "../../components/WorkSlider";
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import {motion} from "framer-motion";
import {fadeIn} from "../../variants"

// import next head for title and meta
import Head from 'next/head';

import { SlMagnifier } from 'react-icons/sl'

const Work = () => {
  return (
    <>
    <Head>
      <title>Nardu.info - Shopify developer portfolio of real completed tasks</title>
      <meta name="description" content="Turn the algorithm into a friend. Make your business visible online with 55+ tools for SEO, PPC, content, social media, competitive research, and more."/>
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </Head>
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2 
              variants={fadeIn('up', 0.2)} 
              initial="hidden"
              animate="show"
              exit="hidden"
              className='h2 sm:mt-16 xl:mt-8 text-3xl md:text-5xl'>
              Work Projects <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p 
              variants={fadeIn('up', 0.4)} 
              initial="hidden"
              animate="show"
              exit="hidden"
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
              My portfolio of selected projects completed for Shopify merchants, combining different services and skills.<br/>
              < SlMagnifier className="inline font-black"/> Hover or tap for more
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('down', 0.6)} 
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
              
          >
            {/* slider */}
            < WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
    </>
  )
};

export default Work;
