import { StaticImageData } from 'next/image';

export type ContentType = {
  id: number;
  text: string;
};

export type CardPropsType<T> = {
  title?: string;
  description?: string;
  content?: T;
  image?: any;
  about?: string;
  hasImage?: boolean;
  bottomImage?: boolean;
  removeBorder?: boolean;
  removeSeparator?: boolean;
};



export type FormType = {
  name: string;
  email: string;
  tel: string;
  description: string;
  title: string;

};

export type DataType<T> = {
  id: number;
  title: string;
  content: T;
  image: StaticImageData | string;
  about: string;
  description: string;
};
