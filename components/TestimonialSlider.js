// testimonial data
const testimonialSlider = [
  {
    image: '/Simone\ headshot.webp',
    name: 'Simone',
    position: 'Web Designer',
    message:
      'Nardu is a great choice for improving upon any Shopify store needing a developer\'s knowledge and skills. Our team will definitely work with Nardu in the future.',
  },
  {
    image: '/zoe\ tp.webp',
    name: 'Zoë',
    position: 'Owner/Founder',
    message: 'Im proud of you! So much skill involved here in design and practicality its rare to find someone who can do both those jobs so well!',
  },
  {
    image: '/Marco\ headshot.webp',
    name: 'Marco',
    position: 'Digital Marketing Expert',
    message: 'Very professional, quick and reliable!',
  },
  {
    image: '/Mendel\ headshot.webp',
    name: 'Mendel',
    position: 'Distributor',
    message: 'Nardu was pretty much always available to meet or message, with timely progress updates, and incredible turnaround time.',
  },
];


// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination} from 'swiper';

// icons
import { FaQuoteLeft } from 'react-icons/fa'

// next image
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{clickable: true}}
      modules={[Navigation, Pagination]}
      className='h-[400px] sm:h-[400px] xl:w-10/12'
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
              <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
                {/* avatar, name, position */}
                <div 
                  className='w-full max-w-[300px] flex flex-col xl:justify-center 
                  items-center relative mx-auto xl:mx-0'
                >
                  <div className='flex flex-col justify-center text-center'>
                    {/* avatar */}
                    <div className='mb-2 mx-auto'>
                      <Image src={person.image} width={120} height={120} alt=''/>
                    </div>
                    {/* name */}
                    <div className='text-lg '>{person.name}</div>
                    {/* position */}
                    <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
                  </div>
                </div>
                {/* quote & message */}
                <div className='flex-1 flex flex-col justify-center
                before:w-[1px] xl:before:bg-white/20 xl:before:absolute 
                xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                  {/* quote icon */}
                  <div className='mb-4'>
                    <FaQuoteLeft className='text-2xl xl:text-6xl text-white/20 mx-auto md:mx-0'/>
                  </div>
                  {/* message */}
                  <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
                </div>
              </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
    )
};

export default TestimonialSlider;
