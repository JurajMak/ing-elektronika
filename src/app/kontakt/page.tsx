import ContactCard from '@/components/cards/contact-card';
import KontaktForma from '@/components/form';
import { Map } from '@/components/map';

import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const Contact = () => {
  return (
    <div className=" grid grid-cols-12 gap-6 my-24">
      <div className=" col-start-2 col-span-10 lg:col-start-2 lg:col-span-6 rounded-xl mt-12">
        <Map />
      </div>
      <div className="col-start-2 col-span-10 lg:col-start-9 lg:col-span-3 mt-12 ">
        <ContactCard />
      </div>

      <div className="col-start-2 col-span-10 lg:col-start-4 lg:col-span-5 my-24 ">
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
