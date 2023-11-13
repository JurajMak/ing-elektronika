import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import Email from '@/components/email';

import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { title, name, email, tel, description } = await req.json();

  try {
    const data = await resend.emails.send({
      from: `${process.env.EMAIL_FROM}`,
      to: `${process.env.EMAIL_TO}`,
      subject: `${title}`,
      react: Email({ title, name, tel, email, description }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
