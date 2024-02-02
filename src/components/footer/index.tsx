import React from 'react';
import { AtSign, Clock, Phone, Facebook, CopyrightIcon } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '../ui/separator';

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <>
      <div className="mt-16 my-6">
        <Separator />
      </div>

      <div className=" mb-6 flex ml-12 items-center gap-6 flex-wrap  xl:justify-evenly">
        <div className="flex gap-4 items-center">
          <div className="bg-primary text-secondary p-2 rounded ">
            <AtSign size={20} />
          </div>
          <div className="flex flex-col justify-between">
            <p className="font-bold">Email</p>
            <Link href="mailto:ingelekt@gmail.com"> ingelekt@gmail.com</Link>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="bg-primary text-secondary p-2 rounded ">
            <Clock size={20} />
          </div>
          <div className="flex flex-col justify-between items-start">
            <p className="font-bold">Radno vrijeme</p>
            <p>
              Pon - Pet: <span className="font-bold">8:00h - 16:00h</span>
            </p>
            <p></p>
            <p>
              Subota: <span className="font-bold "> 8:00h - 12:00h</span>
            </p>
          </div>
        </div>
        <div className="flex gap-4  items-center">
          <div className="bg-primary text-secondary p-2 rounded ">
            <Phone size={20} />
          </div>
          <div className="flex flex-col justify-between">
            <p className="font-bold">Kontakt</p>
            <p>
              Tel/Fax: <span className="font-bold">+385 (31) 272 622</span>
            </p>
          </div>
        </div>

        <Link
          href="https://www.facebook.com/Ingelektronika"
          className="flex gap-4  items-center "
        >
          <Facebook
            size={37}
            className="bg-[#4267B2] text-secondary p-2 rounded dark:text-[#4267B2] dark:bg-[white] "
          />
          <p className="font-bold">Pratite nas na Facebooku</p>
        </Link>
      </div>
      <div className="w-full flex my-6 content-center">
        <p className="mx-auto flex items-center font-semibold">
          Ing-Elektronika <CopyrightIcon size={20} className="ml-2" />
          {date}
        </p>
      </div>
    </>
  );
};

export default Footer;
