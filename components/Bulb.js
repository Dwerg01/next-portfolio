// next image
import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-32 -bottom-12 rotate-12 mix-blend-color-dodge
    animate-pulse duration-200 z-1 w-[200px] xl:w-[260px]">
      <Image 
        src={'/bulb.webp'} 
        width={260} 
        height={200} 
        className="w-full h-full"
        alt="" 
      />
    </div>
  )
};

export default Bulb;
