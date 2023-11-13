import ContactCard from '@/components/cards/contact-card';
import KontaktForma from '@/components/form';
// import { Map } from '@/components/map';

import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const Contact = () => {
  return (
    <div className=" grid grid-cols-6  xl:grid-cols-12 gap-12 my-12">
      <div className="col-span-6 p-4 lg:col-start-2 lg:col-span-3 lg:p-0  ">
        <h3 className="text-3xl my-6 lg:mb-6">Informacije</h3>
        <ContactCard />
      </div>
      <div className=" col-span-6 p-4 lg:col-start-6 lg:col-span-6 rounded-xl lg:p-0  ">
        <h3 className="text-3xl my-6 lg:mb-6">Pronađite nas na adresi</h3>
        {/* <Map /> */}
        <div className="w-full border-2 rounded-xl  shadow-xl">
          <iframe
            width="100%"
            height="400"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Vinkova%C4%8Dka%20cesta%2021,%2031000,%20Osijek+(My%20Business%20Name)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>

      <div className="col-span-6 p-2  lg:col-start-4 lg:col-span-5 my-24 lg:p-0  ">
        <Card className="p-12">
          <h3 className="text-3xl font-medium">Kontakt forma </h3>
          <p className="text-md text-muted-foreground mb-4">
            Pošaljite upit i dogovorite servis
          </p>
          <Separator />

          <KontaktForma />
        </Card>
      </div>
    </div>
  );
};

export default Contact;
