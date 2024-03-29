
import network from '@/../public/assets/images/network-mainboard-service-toy-broadcasting.jpg';
import fontele from '@/../public/assets/images/fontele.png';
import { ContentType, DataType } from '@/types';

export type ExaminationType<T> = Omit<DataType<T>,"id" | "about" |"description">

export type RepairsType<T>=Omit<DataType<T>,"id">

export const EXAMINATION:ExaminationType<string> = {
  title: 'Vrhunska oprema i ekspertiza',
  image: network,
  content: ` Ing-elektronika je nasuvremenije opremljen servis, što otvara
  mogućnost popravka sve danas dostupne elektronike uključujući i
  upravljačke i pogonske elektronike strojeva, vozila..`,
};

export const REPAIRS:RepairsType<ContentType[]> = {
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
