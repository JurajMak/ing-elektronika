'use client';
import { useFormik } from 'formik';
import React from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { FormType } from '@/types';
import { useToast } from '@/components/ui/use-toast';
import { FORM_SCHEMA } from './schema';
import FormError from './form-error';
import { Loader } from 'lucide-react';




const KontaktForma = () => {
  const { toast } = useToast();
  const [loading, setLoading] = React.useState(false);

   type FormPropsType = Omit<FormType,"toast">;

  const form = useFormik<FormPropsType>({
    initialValues: {
      title: '',
      name: '',
      email: '',
      tel: '',
      description: '',
    },
    validationSchema: FORM_SCHEMA,
    onSubmit: async (values) => {
      await sendEmail(values);
    },
  });

  async function sendEmail(formData: FormType) {
    setLoading(true);
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
    })
      .then(() => {
        form.resetForm();
        setLoading(false);
        toast({
          title: 'Upit uspješno poslan!',
          description:
            'Odgovoriti ćemo Vam u najbržem mogućem roku, hvala na strpljenu.',
        });
      })
      .catch((error) => {
        toast({
          title: `${error}`,
          description: 'Molimo Vas pokušajte ponovno',
        });
        setLoading(false);
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
        <Label htmlFor="title">Naslov</Label>
        <Input
          id="title"
          name="title"
          type="text"
          value={form.values.title}
          onChange={form.handleChange}
        />
        {form.errors.title && form.touched.title && (
          <FormError errors={form.errors.title} />
        )}
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
        {form.errors.name && form.touched.name && (
          <FormError errors={form.errors.name} />
        )}
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
        {form.errors.email && form.touched.email && (
          <FormError errors={form.errors.email} />
        )}
      </div>
      <div>
        <Label htmlFor="tel">Telefon/Mobitel</Label>
        <Input
          id="tel"
          type="tel"
          name="tel"
          value={form.values.tel}
          onChange={form.handleChange}
        />
        {form.errors.tel && form.touched.tel && (
          <FormError errors={form.errors.tel} />
        )}
      </div>
      <div>
        <Label htmlFor="description">Opis </Label>
        <Textarea
          id="description"
          name="description"
          value={form.values.description}
          onChange={form.handleChange}
        />
        {form.errors.description && form.touched.description && (
          <FormError errors={form.errors.description} />
        )}
      </div>
      <div>
        <Button type="submit" disabled={loading}>
          {loading ? (
            <>
              <Loader className="mr-2 h-4 w-4 animate-spin" />
              Slanje
            </>
          ) : (
            'Pošalji'
          )}
        </Button>
      </div>
    </form>
  );
};

export default KontaktForma;
