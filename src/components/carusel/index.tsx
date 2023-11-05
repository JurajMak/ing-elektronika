'use client';
import useEmblaCarousel from 'embla-carousel-react';
import '../carusel/styles.css';
import React from 'react';
import Image from 'next/image';
import imageOne from '@/../public/assets/images/pocetna.jpg';
import imageTwo from '@/../public/assets/images/aparati.jpg';
import imageThree from '@/../public/assets/images/radni-stol.jpg';
import imageFour from '@/../public/assets/images/servis.jpg';
import Autoplay from 'embla-carousel-autoplay';

const Carusel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ]);

  const images = [imageOne, imageTwo, imageThree, imageFour];
  return (
    // <div
    //   className="embla ml-4 mt-12 rounded-lg sm:w-[300px] md:w-[900px] lg:w-[1000px] xl:w-[1200px]  "
    //   ref={emblaRef}
    // >
    //   <div className="embla__container">
    //     {images.map((item, index) => (
    //       <Image
    //         priority
    //         key={index}
    //         src={item}
    //         alt="image"
    //         width={300}
    //         height={300}
    //         className="embla__slide"
    //       ></Image>
    //     ))}
    //   </div>
    // </div>
    <div>HOME</div>
  );
};

export default Carusel;
