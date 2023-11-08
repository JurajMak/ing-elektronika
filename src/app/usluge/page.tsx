import SectionCard from '@/components/card/section-card';
import React from 'react';
import {
  AUDIO_SERVICES,
  IND_SERVICES,
  ELECTRONIC_SERVICES,
  CONSOLE_SERVICES,
  VIDEO_SERVICES,
  ADD_SERVICES,
} from '@/data/services';

const Services = () => {
  return (
    <div className="grid grid-cols-6 px-6 lg:grid-cols-12 gap-6 my-12 ">
      <div className="col-span-6  lg:col-start-2 lg:col-span-10 my-12">
        <SectionCard
          title={AUDIO_SERVICES.title}
          image={AUDIO_SERVICES.image}
          content={AUDIO_SERVICES.content}
        />
      </div>
      <div className="col-span-6  lg:col-start-2 lg:col-span-10 my-12">
        <SectionCard
          title={ELECTRONIC_SERVICES.title}
          image={ELECTRONIC_SERVICES.image}
          content={ELECTRONIC_SERVICES.content}
        />
      </div>
      <div className="col-span-6  lg:col-start-2 lg:col-span-10 my-12">
        <SectionCard
          title={CONSOLE_SERVICES.title}
          image={CONSOLE_SERVICES.image}
          content={CONSOLE_SERVICES.content}
        />
      </div>
      <div className="col-span-6  lg:col-start-2 lg:col-span-10 my-12">
        <SectionCard
          title={IND_SERVICES.title}
          image={IND_SERVICES.image}
          content={IND_SERVICES.content}
        />
      </div>
      <div className="col-span-6  lg:col-start-2 lg:col-span-10 my-12">
        <SectionCard
          title={VIDEO_SERVICES.title}
          image={VIDEO_SERVICES.image}
          content={VIDEO_SERVICES.content}
        />
      </div>
      <div className="col-span-6  lg:col-start-2 lg:col-span-10 my-12">
        <SectionCard
          title={ADD_SERVICES.title}
          image={ADD_SERVICES.image}
          content={ADD_SERVICES.content}
        />
      </div>
    </div>
  );
};

export default Services;
