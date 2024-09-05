
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
      <title>Shopify developer portfolio | Work examples and links</title>
      <meta name="description" content="Shopify developer expert & PageFly partner. Specialist front-end design and Liquid code.
      See work examples for previous merchants including custom page builds, custom data, and more."/>
      <meta name="og:description" content="Shopify developer expert & PageFly partner. Specialist front-end design and Liquid code.
      See work examples for previous merchants including custom page builds, custom data, and more."/>
    </Head>
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className="container mx-auto">
        <div className='flex flex-col gap-x-8 mt-20 sm:mt-12'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col xl:text-left xl:mb-0'>
            <motion.h1 
              variants={fadeIn('up', 0.2)} 
              initial="hidden"
              animate="show"
              exit="hidden"
              className='h2 text-3xl md:text-5xl mx-auto'>
              Work <span className='text-accent'>Examples </span> .
            </motion.h1>
            <motion.p 
              variants={fadeIn('up', 0.4)} 
              initial="hidden"
              animate="show"
              exit="hidden"
              className='mb-2 max-w-[400px] mx-auto'>
              < SlMagnifier className="inline"/>&nbsp;
              Tap or hover slide for summary, contact me for links<br/>
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
