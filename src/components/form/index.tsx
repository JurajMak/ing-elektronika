'use client';
import { useFormik } from 'formik';
import React from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { FormType } from '@/types';
import { useToast } from '@/components/ui/use-toast';
// import { sendEmail } from '@/utils/sendEmail';

const KontaktForma = () => {
  const { toast } = useToast();

  const form = useFormik<FormType>({
    initialValues: {
      title: '',
      name: '',
      email: '',
      tel: '',
      description: '',
    },
    onSubmit: async (values) => {
      console.log(values);
      await sendEmail(values);
    },
  });

  async function sendEmail(formData: FormType) {
    await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        title: formData.title,
        name: formData.name,
        email: formData.email,
        tel: formData.tel,
        description: formData.description,
      }),
    }).then(() => {
      toast({
        title: 'Upit uspješno poslan!',
        description:
          'Odgovoriti ćemo Vam u najbržem mogućem roku, hvala na strpljenu.',
      });
    });
  }

  return (
    <form
      className="flex flex-col gap-8 mt-4 "
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <div>
        <Label htmlFor="title">Naslov upita</Label>
        <Input
          id="title"
          name="title"
          type="text"
          value={form.values.title}
          onChange={form.handleChange}
        />
      </div>
      <div>
        <Label htmlFor="name">Ime i Prezime</Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={form.values.name}
          onChange={form.handleChange}
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          value={form.values.email}
          onChange={form.handleChange}
        />
      </div>
      <div>
        <Label htmlFor="tel">Telefon</Label>
        <Input
          id="tel"
          type="tel"
          name="tel"
          value={form.values.tel}
          onChange={form.handleChange}
        />
      </div>
      <div>
        <Label htmlFor="description">Opis </Label>
        <Textarea
          id="description"
          name="description"
          onChange={form.handleChange}
        />
      </div>
      <div>
        <Button type="submit">Pošalji</Button>
      </div>
    </form>
  );
};

export default KontaktForma;
