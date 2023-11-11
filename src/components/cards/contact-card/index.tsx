import React from 'react';
import { AtSign, Clock, Phone, Facebook } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const ContactCard = () => {
  return (
    <Card className="grid grid-cols-6 gap-4 p-4 w-full h-[400px] items-center">
      <div className="col-start-2 col-span-5  flex flex-col items-start">
        {/* <Clock size={30} className="bg-primary text-secondary p-1 rounded " /> */}
        <p className="font-bold text-xl mb-2">Radno vrijeme</p>
        <div className="flex flex-col justify-between items-start ">
          <p>
            Pon - Pet: <span className="font-bold">8:00h - 16:00h</span>
          </p>
          <p></p>
          <p>
            Subota: <span className="font-bold "> 8:00h - 12:00h</span>
          </p>
        </div>
      </div>

      <div className="col-start-2 col-span-5  flex flex-col items-start">
        {/* <Phone size={30} className="bg-primary text-secondary p-1 rounded " /> */}

        <div className="flex flex-col justify-between">
          <p className="font-bold text-xl mb-2">Kontakt</p>
          <p>
            Tel/Fax: <span className="font-bold">+385 (31) 272 622</span>{' '}
          </p>
        </div>
      </div>
      <div className="col-start-2 col-span-5 flex flex-col items-start ">
        {/* <div> */}
        {/* <AtSign
            size={30}
            className="bg-primary text-secondary p-1 rounded "
          /> */}
        <p className="font-bold text-xl mb-2">Email</p>
        {/* </div> */}

        <Link href="mailto:ingelekt@gmail.com"> ingelekt@gmail.com</Link>
      </div>

      <Link
        href="https://www.facebook.com/Ingelektronika"
        className="col-start-2 col-span-5 flex items-center "
      >
        <p className="font-bold text-[#4267B2] mr-6 text-xl mb-2">
          Pratite nas{' '}
        </p>
        <Facebook
          size={30}
          // className="bg-primary text-secondary p-1 rounded "
          className="bg-[#4267B2] text-secondary p-1 rounded dark:text-[#4267B2] dark:bg-[white] "
        />
      </Link>
    </Card>
  );
};

export default ContactCard;
