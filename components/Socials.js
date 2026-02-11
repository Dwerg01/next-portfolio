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
      <a href="https://www.linkedin.com/in/nardu-malherbe-6016b615" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
        <RiLinkedinFill />
      </a>
      <a href="https://www.facebook.com/Dwerg" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
        <RiFacebookFill />
      </a>
      <a href="https://twitter.com/NarduInfo" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
        <RiTwitterXFill />
      </a>
      <a href="https://www.upwork.com/freelancers/~01c23fdd04f98a12ed" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300">
        <SiUpwork />
      </a>
    </div>
  )
};

export default Socials;
