import React from 'react';
import { Head } from '@react-email/head';
import { Container } from '@react-email/container';
import { Text } from '@react-email/text';
import { Html } from '@react-email/html';
import { FormType } from '@/types';
import { Preview } from '@react-email/preview';
import { Body, Tailwind } from '@react-email/components';

const Email = ({ title, name, email, tel, description }: FormType) => {
  return (
    <Html>
      <Head />
      <Preview>{title}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container>
            <Head />

            <p>{description}</p>
            <p>{name}</p>
            <p>{tel}</p>
            <Text>{email}</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Email;
