
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
      <title>Nardu.info - Shopify developer portfolio of recent completed jobs</title>
      <meta name="description" content="Expert Shopify developer specializing in front-end design and Liquid coding.\
       Delivering high-converting, visually stunning online stores with meticulous attention to detail. PageFly partner."/>
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </Head>
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-x-8 mt-20'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left xl:mb-0'>
            <motion.h2 
              variants={fadeIn('up', 0.2)} 
              initial="hidden"
              animate="show"
              exit="hidden"
              className='h2 xl:mt-8 text-3xl md:text-5xl'>
              Work Projects <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p 
              variants={fadeIn('up', 0.4)} 
              initial="hidden"
              animate="show"
              exit="hidden"
              className='mb-2 max-w-[400px] mx-auto lg:mx-0'>
              My portfolio of selected projects, completed for Shopify merchants combining different services and skills.<br/>
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
