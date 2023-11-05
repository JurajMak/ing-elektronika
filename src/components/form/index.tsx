'use client';
import { useFormik } from 'formik';
import React from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { FormType } from '@/types/form';

const KontaktForma = () => {
  const form = useFormik<FormType>({
    initialValues: {
      name: '',
      email: '',
      tel: '',
      description: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form className="flex flex-col gap-8 mt-4 " onSubmit={form.handleSubmit}>
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
