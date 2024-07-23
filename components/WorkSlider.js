// data
const workSlider = {
  slides: [
    { promo : "Metafields offer a powerful and flexible way to enrich standard product data",
      image: 
        {
          title: 'Show the important data',
          path: '/work\ Custom\ data.jpg',
          alt: 'my work example'
        }
    },
    { promo : "these slides show a second project at completion",
      image: 
        {
          title: 'dippy',
          sub: 'DIPPY',
          path: '/work\ Custom\ product\ cards.jpg',
        }
    },
    { promo : "these slides show a second project at completion",
      image: 
        {
          title: 'dippy',
          sub: 'DIPPY',
          path: '/work\ Eriu\ custom\ page.jpg',
        }
    },
    { promo : "these slides show a second project at completion",
      image: 
        {
          title: 'dippy',
          sub: 'DIPPY',
          path: '/work Nano-Nutrients.jpg',
        }
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination} from 'swiper';

// icons 
import { SlMagnifier } from 'react-icons/sl'
// next image
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper

      spaceBetween={10}
      freeMode={true}
      pagination={{clickable: true}}
      modules={[ Pagination]}
      className='h-[460px] sm:h-[500px]'
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index} >
              <div className='flex justify-center lg:justify-start  cursor-pointer'>

                  <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                    <div 
                      className='flex items-center justify-center 
                      relative overflow-hidden group'
                    >
                      <Image src={slide.image.path} width={680} height={454} alt='' />
                      
                    
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-[#3b2874] 
                      via-[#232323] to-[#29049a] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div 
                        className='absolute bottom-0 translate-y-full 
                        group-hover:-translate-y-28 group-hover:sm:-translate-y-20 group-hover:xl:-translate-y-40
                        transition-all duration-300'
                      >
                        <div className='flex justify-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* title part 1 */}
                          <div className='duration-200 delay-100'>{slide.image.title}</div>
                          {/* title part 2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0
                            transition-all duration-250 delay-100'
                          >{slide.image.sub}</div>
                          {/* icon */}
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 
                          transition-all duration-300 delay-100'><SlMagnifier /></div>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            <p>{slide.promo}</p>
          </SwiperSlide>
        );
      })}
    </Swiper>
    )
};

export default WorkSlider;
