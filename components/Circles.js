// next image
import Image from "next/image";


const Circles = () => {
  return (
  <div 
    className="w-[200px] xl:[300px] absolute -right-16 -bottom-2 
    mix-blend-color-dodge animate-pulse duration-75 z-10"
  >
    <Image 
      src={'/circles.png'} 
      width={206} 
      height={200} 
      className="w-full h-full" 
      alt=""
    />
  </div>
)
};

export default Circles;
