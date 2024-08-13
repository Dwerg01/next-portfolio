// next image
import Image from "next/image";
import Head from "next/head";
// components

import ParticlesContainer from "/components/ParticlesContainer";
import ContactBtn from "/components/ContactBtn";
import Avatar from "/components/Avatar";

// framer motion

import {motion} from 'framer-motion'

//variants
import {fadeIn} from '/variants'

const Home = () => {
  return (
  <>
  <Head>
    <title>Nardu.info | Shopify Expert, Front-end developer services</title>
    <meta property="title" content="Nardu.info | Shopify Expert, Front-end developer services" />
    <meta property="image" content="../public/Nardu Shopify developer avatar.jpg" key="image"/>
    <meta name="description" content="Let's enhance your Shopify store with expert front-end development.
     I create user experiences with CRO and performance in mind through Liquid customization and practical design."/>
    <meta property="og:title" content="Nardu.info | Shopify Expert, Front-end developer services" />
    <meta property="og:image" content="../public/Nardu Shopify developer avatar.jpg" key="ogimage"/>
    <meta property="og:description" content="Let's enhance your Shopify store with expert front-end development.
     I create user experiences with CRO and performance in mind through Liquid customization and practical design."/>
    <meta property="url" content="https://nardu.info" />
    <meta property="og:url" content="https://nardu.info" />
    <meta property="og:type" content="website" />
  </Head>
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left
        h-full container mx-auto">
          {/* title */}
          <motion.h1 
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="h1"
          >
            <span className="text-accent">Shopify Expert</span>
             <br/> Front-End Developer
          </motion.h1>
          {/* subtitle */}
          <motion.p           
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden' 
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-2 xl:mb-8 text-xl"
          >Hi, my name is <span className="text-accent font-semibold text-2xl">Nardu.</span>
          </motion.p>
          <motion.p           
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden' 
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >I offer Shopify focused developer services<br/>
           Let&apos;s collaborate to turn your vision into a successful Shopify store
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative z-20">
            <ContactBtn />
          </div>
          <motion.div 
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden xl:flex z-20"
          >
            <ContactBtn />
          </motion.div>

        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg image */}
        <div className="
            bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat 
            w-full h-full absolute mix-blend-color-dodge translate-z-0">
        </div>
        {/* particles */}
        <div className=""> 
          <ParticlesContainer />
        </div>
        {/* avatar image */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{duration: 1, ease: 'easeInOut'}}
          className="w-full h-full max-w-[663px] max-h-[610px]
          absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
          <Avatar />
        </motion.div>
      </div>
    </div>
  </>
  );
};

export default Home;
