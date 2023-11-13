import React from 'react';
import { Head } from '@react-email/head';
import { Container } from '@react-email/container';
import { Text } from '@react-email/text';
import { Html } from '@react-email/html';
import { FormType } from '@/types';
import { Preview } from '@react-email/preview';
import { Body, Heading, Hr, Tailwind } from '@react-email/components';

const Email = ({ title, name, email, tel, description }: FormType) => {
  return (
    <Html>
      <Head />
      <Preview>{title}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              {title}
            </Heading>
            <Hr />

            <Text className="text-black text-[14px] leading-[24px]">
              {description}
            </Text>
            <Text> Kontakt </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              {name}
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">{tel}</Text>

            <Text className="text-black text-[14px] leading-[24px]">
              {email}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Email;
