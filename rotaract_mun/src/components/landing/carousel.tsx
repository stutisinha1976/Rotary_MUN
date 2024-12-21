'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Card2 from './card';
const Carousel = () => {
    const cards = [
        {
          title: "Lok Sabha",
          description: "This is the Lok Sabha.",
          image: "/loksabha.png",
        },
        {
          title: "UNGA DISEC",
          description: "This is UNGA DISEC.",
          image: "unga.png",
        },
        {
          title: "IP",
          description: "This is the IP Card.",
          image: "ip.png",
        },
        {
            title: "UNHRC",
            description: "This is UNHRC Card.",
            image: "unhcr.png",
          }
      ];
    
      return (
        <>
        <h1 className='flex justify-center mt-40 text-5xl text-[#003161] font-thin font-serif'>
            Discover Our  <span className='text-[#006A67]'> &nbsp;<i>Committees</i></span>
        </h1>
        <div className="w-full px-4 py-8">
              <Swiper
                  modules={[Pagination, Navigation]}
                  pagination={{ clickable: true }}
                  navigation={true}
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  breakpoints={{
                      640: { slidesPerView: 1 },
                      768: { slidesPerView: 1 },
                      1024: { slidesPerView: 1 },
                  }}
                  className="w-[90%] mx-8"
              >
                  {cards.map((card, index) => (
                      <SwiperSlide key={index}>
                          <div className="bg-[#071952] bg-opacity-30 rounded-lg flex shadow-lg overflow-hidden">
                              <img
                                  src={card.image}
                                  alt={card.title}
                                  className="w-60 h-60 rounded-3xl ml-10 p-4 object-cover" />
                              <div className="p-4">
                                  <h3 className="text-lg font-semibold text-gray-800">
                                      {card.title}
                                  </h3>
                                  <p className="text-gray-600 mt-2">{card.description}</p>
                              </div>
                          </div>
                      </SwiperSlide>
                  ))}
              </Swiper>
          </div></>
      );
    };
    

export default Carousel;