// data
const workSlider = {
  slides: [
    { promo : "Metafields offer a powerful and flexible way to enrich standard product data",
      image: 
        {
          title: 'Custom Data with Metafields',
          sub: 'For unique product information and specs, display any custom data and show your shoppers',
          path: '/work\ Custom\ data.webp',
          alt: 'Shipping lead time displayed on products cards, to inform shoppers'
        }
      },
      { promo : "Bespoke developement to help you tell your brand story",
        image: 
        {
          title: 'Purpose-fit Shopify sections from scratch',
          sub: 'No two brands are the same and each one has a unique story to tell',
          path: '/work\ Eriu\ custom\ page.webp',
          alt: 'Fully custom Shopify sections from scratch'
        }
      },
      { promo : "Customize your store to show your products in a unique way",
        image: 
        {
          title: 'Customize your store to suit your goals',
          sub: 'Let your products shine, without relying on buyers to read less visible info',
          path: '/work\ Custom\ product\ cards.webp',
          alt: 'customized product cards to enhance important info'
        }
      },
      { promo : "Custom Landing pages and Storefronts built with PageFly",
        image: 
        {
          title: 'Promotions and landing pages',
          sub: 'A different approach to promoting a product will evoke a different response from shoppers, naturally.',
          path: '/work Nano-Nutrients.webp',
          alt: 'fully responsive PageFly landing page builds'
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
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper';

// next image
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      navigation={true}
      pagination={{clickable: true}}
      modules={[Navigation, Pagination]}
      className='h-[420px] md:h-[520px]'
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
              <div className='flex justify-center cursor-pointer'>

                  <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                    <div 
                      className='flex items-center justify-center 
                      relative overflow-hidden group'
                    >
                      <Image src={slide.image.path} width={680} height={454} alt={slide.image.alt} />
                      
                    
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-[#3b2874] 
                      via-[#232323] to-[#2a049a] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div 
                        className='absolute bottom-0 translate-y-full mx-6 sm:mx-4
                        group-hover:-translate-y-[20vw] group-hover:sm:-translate-y-40 group-hover:xl:-translate-y-44
                        transition-all duration-300'
                      >
                        <div className='flex-col justify-center items-center gap-y-2 text-[13px] tracking-[0.2em] sm:max-w-prose'>
                          {/* title part 1 */}
                          <div className='duration-200 delay-100 text-base font-bold sm:text-lg leading-tight'>{slide.image.title}</div>
                          {/* title part 2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0
                            transition-all duration-250 delay-100 leading-tight'
                          >{slide.image.sub}</div>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
    )
};

export default WorkSlider;
