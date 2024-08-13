// FormSpree form
import {useForm, ValidationError} from "@formspree/react";
// import Head from "next/head";
// components
import Circles from "../../components/Circles";
import Head from "next/head";
//icons
import {BsArrowRight} from "react-icons/bs";

// motion
import {motion} from "framer-motion";

// variants
import {fadeIn} from "../../variants"

const Contact = () => {
  const [state, handleSubmit, reset] = useForm("mayrkpwv");
  if (state.succeeded) {
    return (
    <>
      <Head>
        <title>Nardu.info | Shopify Developer | Let's Connect</title>
        <meta name="description" content="Request a no-obligation call about your Shopify business goals. Let's put our heads together on how to enhance your Shopify store and offer an improved buying experience."/>
        <meta name="og:description" content="Request a no-obligation call about your Shopify business goals. Let's put our heads together on how to enhance your Shopify store and offer an improved buying experience."/>
      </Head>
      <div className="h-full bg-primary/30">
        <Circles />
        <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
          <div className="flex flex-col w-full max-w-[700px] gap-y-6 items-center">
            <div>Thank you, I&apos;ll be in touch<span className="text-accent">!</span></div>
            <button 
              onClick={reset} 
              className="btn rounded-full border border-white/50 max-w-[170px]
              px-8 transition-all duration-300 flex items-center justify-center
              overflow-hidden hover:border-accent group z-20">
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0
                transition-all duration-500">reset</span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex 
                group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"/>
            </button>
          </div>
        </div>
        </div>
    </>
    )
  }
  return (
  <>
    <Head>
      <title>Nardu.info - Ready to boost your Shopify store? Let&apos;s Talk</title>
      <meta name="description" content="Let&apos;s enhance your Shopify store with expert front-end development.\
      I create user experiences with CRO and performance in mind using Liquid customization and practical design." />
    </Head>
    <div className="h-full bg-primary/30">
      <Circles />
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2 
            className="h2 text-center mb-4 xl:mb-8"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-4 lg:gap-6 w-full mx-auto z-20">
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input id="firstName" name="firstName" type="text" placeholder="name" autoComplete="given-name" className="input capitalize autofill:shadow-[inset_0_0_0px_1000px_rgb(169,166,197)]" />
              <label htmlFor="firstName" className="hidden">Name</label>
              <ValidationError 
                prefix="firstName" 
                field="firstName"
                errors={state.errors}
              />
              <label htmlFor="email" className="hidden">Email</label>
              <input id="email" name="email" type="email" placeholder="email" autoComplete="email" className="input autofill:shadow-[inset_0_0_0px_1000px_rgb(169,166,197)]" />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>
              <label htmlFor="subject" className="hidden">subject</label>
              <input id="subject" name="subject" type="text" placeholder="About" className="input" />
              <label htmlFor="message" className="hidden">message</label>
              <textarea id="message" name="message" type="textarea" placeholder="Tell me about your project & Let's make some thing cool" className="textarea"></textarea>
              <button className="btn rounded-full border border-white/50 w-[170px]
                px-8 transition-all duration-300 flex items-center justify-center
                overflow-hidden hover:border-accent group mx-auto"
                type="submit" disabled={state.submitting}>
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0
                transition-all duration-500">Send</span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex 
                group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"/>
              </button>
              <ValidationError errors={state.errors} />
          </motion.form>
        </div>
      </div>
    </div>
    </>
  )
};

export default Contact;
