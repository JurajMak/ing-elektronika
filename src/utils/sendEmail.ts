import { FormType } from '@/types';

export async function sendEmail(formData: FormType) {
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
  });
}
