import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import React from 'react';
import fontele from '../../../public/assets/images/fontele.png';

const HeroCard = () => {
  return (
    <div className="mt-auto">
      <Card className="">
        <CardHeader>
          <CardTitle>SVE se može popraviti</CardTitle>
          <CardDescription>
            Vršimo popravke, održavanja i restauracije.
          </CardDescription>
          <Separator />
        </CardHeader>

        <CardContent>
          <div className="mb-6 flex justify-between">
            <div>
              <p>
                - popravak i održavanje prijenosnih i stolnih računala te
                računalne periferije
              </p>
              <p>- popravak televizora (sve vrste: CRT, LCD, plazma)</p>
              <p>- popravak audio i video opreme</p>
              <p>- popravci industrijske elektronike</p>
              <p>- popravak mobilnih uređaja</p>
              <p>- premotavanje tranformatora</p>
              <p>
                - popravak i restauracija starih uređaja(radio prijemnika,
                gramofona , magnetofona i slično)
              </p>
            </div>
            <Image
              src={fontele}
              alt="fontele"
              width={250}
              height={250}
              className="m-auto"
            />
          </div>

          <p>
            Servis je osnovan 1989. godine od kada radi s kraćim prekidom do
            danas. Odnedavno radimo na novoj lokaciji u novom vlastitom prostoru
            u blizini centra grada. Kartu možete pogledati klikom na linku.
            Suvremeno smo opremljeni za pružanje kvalitetnog servisa na novim
            tipovima uređaja na nivou BGA komponenti.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeroCard;
