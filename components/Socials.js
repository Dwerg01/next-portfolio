// links

import Link from "next/link";

//icons
import { 
  RiTwitterXFill,
  RiFacebookFill,
  RiLinkedinFill 
} from "react-icons/ri";

import { SiUpwork } from "react-icons/si"


const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://www.linkedin.com/in/nardu-malherbe-6016b615'} target="_blank" className="hover:text-accent translation-all duration-300">
        <RiLinkedinFill />
      </Link>
      <Link href={'https://www.facebook.com/Dwerg'} target="_blank" className="hover:text-accent translation-all duration-300">
        <RiFacebookFill />
      </Link>
      <Link href={'https://twitter.com/NarduInfo'} target="_blank" className="hover:text-accent translation-all duration-300">
        <RiTwitterXFill />
      </Link>
      <Link href={'https://www.upwork.com/freelancers/~01c23fdd04f98a12ed'} target="_blank" className="hover:text-accent translation-all duration-300">
        <SiUpwork />
      </Link>
    </div>
  )
};

export default Socials;
