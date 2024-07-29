// FormSpree form
import {useForm, ValidationError} from '@formspree/react';
// import Head from 'next/head';
// components
import Circles from '../../components/Circles';
import Head from 'next/head';
//icons
import {BsArrowRight} from 'react-icons/bs';

// motion
import {motion} from 'framer-motion';

// variants
import {fadeIn} from "../../variants"

const Contact = () => {
  const [state, handleSubmit, reset] = useForm("mayrkpwv");
  if (state.succeeded) {
    return (
    <>
      <div>Thank you, I&apos;ll be in touch<span className='text-accent'>!</span></div>
      <button onClick={reset}>Reset</button>
    </>
    )
  }
  return (
  <>
    <Head>
      <title>Nardu.info - Ready to boost your Shopify store? Let&apos;s Talk</title>
      <meta name="description" content="Let's enhance your Shopify store with expert front-end development.\
      I create user experiences with CRO and performance in mind using Liquid customization and practical design." />
    </Head>
    <div className='h-full bg-primary/30'>
      <Circles />
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2 
            className='h2 text-center mb-12'
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            >
            Let&apos;s <span className='text-accent'>connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form 
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'>
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <label for="firstName" className='hidden'>Name</label>
              <input id="firstName" type="text" placeholder='name' autoComplete="given-name" className="input capitalize autofill:shadow-[inset_0_0_0px_1000px_rgb(119,116,137)]" />
              <ValidationError 
                prefix="Name" 
                field="firstName"
                errors={state.errors}
              />
              <label for="email" className='hidden'>Email</label>
              <input id="email" type="email" placeholder='email' autoComplete='email' className="input autofill:shadow-[inset_0_0_0px_1000px_rgb(119,116,137)]" />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>
              <label for="subject" className='hidden'>subject</label>
              <input id="subject" type="text" placeholder='About' className="input" />
              <label for="message" className='hidden'>subject</label>
              <textarea id='message' placeholder='How can I help?' className='textarea'></textarea>
              <button className='btn rounded-full border border-white/50 max-w-[170px]
                px-8 transition-all duration-300 flex items-center justify-center
                overflow-hidden hover:border-accent group'
                type='submit' disabled={state.submitting}
              >
                <span className='group-hover:-translate-y-[120%] group-hover:opacity-0
                transition-all duration-500'>Let&apos;s talk</span>
                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex 
                group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
              </button>
          </motion.form>
        </div>
      </div>
    </div>
    </>
  )
};

export default Contact;
