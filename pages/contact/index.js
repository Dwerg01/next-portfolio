// FormSpree form
import {useForm, ValidationError} from '@formspree/react';
// import Head from 'next/head';
// components
import Circles from '../../components/Circles';

//icons
import {BsArrowRight} from 'react-icons/bs';

// motion
import {motion} from 'framer-motion';

// variants
import {fadeIn} from "../../variants"

const Contact = () => {
  const [state, handleSubmit, reset] = useForm('mayrkpwv');
  if (state.succeeded) {
    return (
      <div>Thank you for your submission<span className='text-accent'>!</span></div>
    )
  }
  return (
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
            Let's <span className='text-accent'>connect.</span>
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
              <input id="firstName" type="text" placeholder='name' autoComplete="given-name" className="input capitalize autofill:text-white autofill:shadow-[inset_0_0_0px_1000px_rgb(99,96,117)]" />
              <ValidationError 
                prefix="Name" 
                field="firstName"
                errors={state.errors}
              />
              <input id="email" type="email" placeholder='email' className="input autofill:shadow-[inset_0_0_0px_1000px_rgb(99,96,117)]" />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>
              <input type="text" placeholder='subject' className="input" />
              <textarea placeholder='message' className='textarea'></textarea>
              <button className='btn rounded-full border border-white/50 max-w-[170px]
                px-8 transition-all duration-300 flex items-center justify-center
                overflow-hidden hover:border-accent group'
                type="submit" disabled={state.submitting}
              >
                <span className='group-hover:-translate-y-[120%] group-hover:opacity-0
                transition-all duration-500'>Let's talk</span>
                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex 
                group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
              </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
};

export default Contact;
