import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Team data
const teamData = [
    {
      quote: "Ongoing Projects - Nariii",
      name: "Aaryan Sinha Roy",
      title: "API, Server-side programming and App Deployment",
      isFeaturted: true,
    },
    {
      quote: "Ongoing Projects - Naiyo24, Nariii",
      name: "Rohit Ghosh",
      title: "Full Stack, Backend Professional",
      isFeaturted: true,
    },
    {
      quote: "Ongoing Projects - Luriana",
      name: "Pratap Karmakar",
      title: "Full Stack Web Developer Professional",
      isFeaturted: true,
    },
    {
      quote: "Ongoing Projects - Nariii",
      name: "Rana Kobiraj",
      title: "Backend Developer",
      isFeaturted: true,
    },
    {
      quote: "Ongoing Projects - Naiyo24, Nariii",
      name: "Subhankar Das",
      title: "Frontend Developer",
      isFeaturted: true,
    },
    {
      quote: "Ongoing Projects - Naiyo24",
      name: "Kaustubh Upadhyay",
      title: "IT Backend Developer",
      isFeaturted: true,
    },
    // {
    //   quote: "Intern",
    //   name: "Samadrita Banarjee",
    //   title: "IT Frontend Developer",
    //   isFeaturted: true,
    // },
    {
      quote: "Ongoing Projects - Naiyo24, Luriana, Nariii",
      name: "Tamashree Halder",
      title: "BDM, SEO And Marketing",
      isFeaturted: true,
    },
    {
      quote: "Ongoing Projects - Naiyo24",
      name: "Souvik Nandy",
      title: "Full Stack Developer",
      isFeaturted: true,
    },
];

const TeamDataSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className='h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px]' // Responsive height
    >
      {teamData.map((person, index) => (
        <SwiperSlide key={index}>
          <div className='flex bg-[#212121] py-20 md:py-24 lg:py-28 rounded-xl flex-col items-center md:flex-row gap-x-8 h-full px-6 md:px-12 lg:px-16'>
            <div className='w-full max-w-[200px] md:max-w-[250px] lg:max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto md:mx-0'>
              <div className='flex flex-col justify-center text-center'>
                {/* Name */}
                <div className='text-lg md:text-xl lg:text-2xl'>{person.name}</div>
                {/* Position */}
                <div className='text-[12px] md:text-[14px] lg:text-[16px] uppercase font-extralight tracking-widest'>
                  {person.title}
                </div>
              </div>
            </div>
            <div className='flex flex-1 flex-col justify-center before:w-[1px] xl:before:bg-[#B7E0FF] xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
              <div className='mb-4'>
                <FaQuoteLeft className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#B7E0FF] mx-auto md:mx-0' />
              </div>
              <div className='text-lg md:text-xl lg:text-2xl tracking-widest text-center md:text-left'>
                {person.quote}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamDataSlider;
