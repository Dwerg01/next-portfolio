import React, {useState} from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaWordpress,
  FaShopify,
  FaWater,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiGimp,
  SiCanva,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',

        icons: [
          <FaHtml5 key="html5"/>,
          <FaCss3 key="css3"/>,
          <FaJs key="js"/>,
          <FaShopify key="Shopify"/>,
          <FaGithub key="github"/>,
          <FaWater key="liquid"/>,
          <SiNextdotjs key="Nextdotjs"/>,
          <FaWordpress key="wordpress"/>,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key="figma"/>, <SiGimp key="GIMP"/>, <SiCanva key="Canva"/>],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Shopify Expert - Freelance',
        stage: '2021 - Present',
      },
      {
        title: 'Tachnical Manager - Sintrex Integration Services',
        stage: '2019 - 2022',
      },
      {
        title: 'Skills Development Facilitator - Sintrex Integration Services',
        stage: '2016 - 2019',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Freemote Shopify Developer Bootcamp - Freemote, JHB, RSA',
        stage: '2021',
      },
      {
        title: 'BA Psychology - University of South Africa, Pretoria, RSA',
        stage: '2008',
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import {motion} from "framer-motion";
import {fadeIn} from "../../variants";

import Head from "next/head";
// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return ( 
  <>  
    <Head>
      <title>Nardu.info - Shopify Front-End Developer | Let&apos;s Grow Your Business</title>
      <meta name="description" content="Experienced Shopify front-end developer with 3+ years beautifying e-commerce stores. Let's transform your Shopify store into a great buying experience.\
       I specialize in creating, intuitive user experiences, and optimized performance."/>
    </Head>
    <div className="h-full
    bg-primary/30 py-28 md:py-32 text-center xl:text-left">
      <Circles />
      {/* avatar image */}
      <motion.div
        variants={fadeIn('up', 0.5)}
        initial='hidden'
        animate='show'
        exit='hidden'
        transition={{duration: 1, ease: 'easeInOut'}}
        className="w-full h-full max-w-[553px] max-h-[508px]
        absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 
            className="h2 sm:mb-8 xl:-mt-10"
            variants={fadeIn('right', 0.2)} 
            initial="hidden" 
            animate="show" 
            exit="hidden"
          >
            <span className="text-accent">Creativity</span> & <span className="text-accent">Experience</span> 
            </motion.h2>
          <motion.p 
            variants={fadeIn('right', 0.4)} 
            initial="hidden" 
            animate="show" 
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0" 
          >
            3 years ago, I began freelancing as a developer. 
            I&apos;ve worked with agencies, consulted  
            and collaborated with a number of Shopify merchants 
          </motion.p>
          {/* counters */}
          <motion.div 
            variants={fadeIn('right', 0.6)} 
            initial="hidden" 
            animate="show" 
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 gap-x-2 xl:gap-x-6">
            {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full 
                after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking=[1px] leading-[1.4] max-w-[105px]">
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full 
                after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={25} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking=[1px] leading-[1.4] max-w-[105px]">
                  Satisfied<br/> Clients
                </div>
              </div>
                {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full 
                after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={60} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking=[1px] leading-[1.4] max-w-[105px]">
                  Completed Projects
                </div>
              </div>

            </div>
          </motion.div>
  
        </div>
        {/* info */}
        <motion.div 
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
          variants={fadeIn('left', 0.4)} 
          initial="hidden" 
          animate="show" 
          exit="hidden"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex)=> {
              return (
              <div 
              key={itemIndex} 
              className={` ${
                index === itemIndex && 
                'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
              } cursor-pointer capitalize xl:text-lg relative 
              after:w-8 after:h-[2px] after:bg-white 
              after:absolute after:-bottom-1 after:left-0`}
              onClick={()=> setIndex(itemIndex)}
              >
                {item.title}
              </div>)
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
              <div 
                key={itemIndex} 
                className="flex-1 flex flex-col md:flex-row
                max-w-max gap-x-2 items-center text-white/60">
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((icon, indexItem) => {
                    return <div className="text-2xl text-white" key={indexItem}>{icon}</div>
                  })}
                </div>
              </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </>
  )
};

export default About;
