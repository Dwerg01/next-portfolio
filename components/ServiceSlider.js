// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxDesktop,
  RxLightningBolt,
  RxCode,
  RxEnvelopeClosed,
} from "react-icons/rx";

import {
  SiBrandfolder,
} from "react-icons/si";

// import required modules
import { Navigation, Pagination} from 'swiper';

export const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Let me help you convey your unique message and selling points with custom developed pages or sections.',
  },
  {
    icon: <RxLightningBolt />,
    title: 'Optimization',
    description: 'The speed of your website is crucial. I optimize websites, images and media for the best possible performance.',
  },
  {
    icon: <RxCrop />,
    title: 'Customization',
    description: 'Enrich product detail and highlight the most important information. Show customers your products in your own way.',
  },
  {
    icon: <SiBrandfolder />,
    title: 'Branding',
    description: 'Branding and messaging is what makes a website look legit or trustworthy. I ensure brand consistency in development.',
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
      navigation={true}
      pagination={{clickable: true}}
      modules={[Navigation, Pagination]}
      className='h-[240px sm:h-[380px]'
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
              <a href="/contact" className='text-3xl'>
                <RxEnvelopeClosed className='rotate-0 group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
              </a>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
    )
};

export default ServiceSlider;
