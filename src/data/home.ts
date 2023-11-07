import banner from '@/../public/assets/images/serv-banner.jpg';
import fontele from '@/../public/assets/images/fontele.png';
export type ContentType = {
  id: number;
  text: string;
};

export type CardType<T> = {
  title?: string;
  description?: string;
  content?: T;
  image?: any;
  about?: string;
};

export const EXAMINATION = {
  title: 'Besplatan pregled uređaja',
  image: banner,
  content: ` Ing-elektronika je nasuvremenije opremljen servis, što otvara
  mogućnost popravka sve danas dostupne elektronike uključujući i
  upravljačke i pogonske elektronike strojeva, vozila..`,
};

export type SectionCardType = {
  title?: string;
  description?: string;
  content?: ContentType[];
  image?: any;
  about?: string;
};

export const REPAIRS = {
  title: 'SVE se može popraviti',
  description: 'Vršimo popravke, održavanja i restauracije.',
  content: [
    {
      id: 1,
      text: `- popravak i održavanje prijenosnih i stolnih računala te
  računalne periferije`,
    },
    { id: 2, text: `- popravak televizora (sve vrste: CRT, LCD, plazma)` },
    { id: 3, text: `- popravak audio i video opreme` },
    { id: 4, text: `- popravci industrijske elektronike` },
    { id: 5, text: `- popravak mobilnih uređaja` },
    { id: 6, text: `- premotavanje tranformatora` },
    {
      id: 7,
      text: `- popravak i restauracija starih uređaja(radio prijemnika,
    gramofona , magnetofona i slično)`,
    },
  ],
  image: fontele,
  about: `Servis je osnovan 1989. godine od kada radi s kraćim prekidom do
danas. Odnedavno radimo na novoj lokaciji u novom vlastitom prostoru
u blizini centra grada. Kartu možete pogledati klikom na linku.
Suvremeno smo opremljeni za pružanje kvalitetnog servisa na novim
tipovima uređaja na nivou BGA komponenti.`,
};
