import React from 'react';
import { AtSign, Clock, Phone, Facebook } from 'lucide-react';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className="border-t flex flex-wrap lg:justify-evenly  mt-12 ">
      <div className="flex gap-4   my-6 items-center">
        <div className="bg-primary text-secondary p-2 rounded ">
          <AtSign size={30} />
        </div>
        <div className="flex flex-col justify-between">
          <p className="font-bold">Email</p>
          <Link href="mailto:ingelekt@gmail.com"> ingelekt@gmail.com</Link>
        </div>
      </div>
      <div className="flex gap-4  my-6 items-center">
        <div className="bg-primary text-secondary p-2 rounded ">
          <Clock size={30} />
        </div>
        <div className="flex flex-col justify-between items-start">
          <p className="font-bold">Radno vrijeme</p>
          <p>
            Pon - Pet: <span className="font-bold">8:00h - 16:00h</span>
          </p>
          <p></p>
          <p>
            Subota: <span className="font-bold"> 8:00h - 12:00h</span>
          </p>
        </div>
      </div>
      <div className="flex gap-4  my-6 items-center">
        <div className="bg-primary text-secondary p-2 rounded ">
          <Phone size={30} />
        </div>
        <div className="flex flex-col justify-between">
          <p className="font-bold">Kontakt</p>
          <p>
            Tel/Fax: <span className="font-bold">+385 (31) 272 622</span>{' '}
          </p>
        </div>
      </div>
      <div className="flex gap-4  my-6 items-center ">
        <div className="bg-[#4267B2] text-secondary p-2 rounded dark:text-[white] ">
          <Link href="https://www.facebook.com/Ingelektronika">
            <Facebook size={30} />
          </Link>
        </div>
        <p className="font-bold">Pratite nas na Facebooku</p>
      </div>
    </div>
  );
};

export default Footer;

// https://www.facebook.com/Ingelektronika
