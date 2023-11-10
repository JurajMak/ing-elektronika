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

export type FormType = {
  name: string;
  email: string;
  tel: string;
  description: string;
  title: string;
};
