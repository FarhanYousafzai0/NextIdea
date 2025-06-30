import React from 'react';

const page = async ({ params }) => {
  const id = params.id;

  return (
    <>
      <h2 className='text-5xl text-red-900 uppercase'>This is the startup id: {id}</h2>
    </>
  );
};

export default page;
