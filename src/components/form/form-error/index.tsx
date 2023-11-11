import React from 'react';

const FormError = ({ errors }: any) => {
  return <p className="text-[red] text-md items-center mt-2">{errors}</p>;
};

export default FormError;
