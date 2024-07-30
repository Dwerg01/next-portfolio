// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxDesktop,
  RxLightningBolt,
  RxReader,
  RxCode,
  RxArrowTopRight,
} from "react-icons/rx";

import {
  SiBrandfolder,
} from "react-icons/si";

// import required modules
import { FreeMode, Pagination} from 'swiper';

export const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Convey your unique message and selling points with custom developed pages or sections.',
  },
  {
    icon: <RxLightningBolt />,
    title: 'Optimization',
    description: 'The speed of any website is crucial, and I optimize websites, images and media for optimal performance.',
  },
  {
    icon: <RxCrop />,
    title: 'Customization',
    description: 'Enrich product detail with technical specs, designer details, ingredients or creative application ideas.',
  },
  {
    icon: <SiBrandfolder />,
    title: 'Branding',
    description: 'Consistent branding and messaging makes a website look legitimate. I ensure this consistency in development.',
  },
  {
    icon: <RxCode />,
    title: 'Specialize',
    description: 'Shopify app selection and integration that meet specific business needs, for a better shopping experience.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-4 md:py-8 flex 
            sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer 
            hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 mb-2">
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>{item.description}</p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
    )
};

export default ServiceSlider;
