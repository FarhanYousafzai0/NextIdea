

import React from 'react';
import SearchForm from '@/components/SearchForm';
import StartCard from '@/components/StartCard';
import Footer from '@/components/Footer';
import { client } from '@/sanity/lib/client';
import { STARTUP_QUERY } from '@/sanity/lib/queries';

const page = async ({ searchParams }) => {
  const data = await client.fetch(STARTUP_QUERY);

  
  console.log(JSON.stringify(data, null, 2));

  const query =   searchParams?.query || '';

  return (
    <>
      <div className="bg-pink-400 min-h-[530px] w-screen pattern flex items-center justify-center flex-col py-10 px-6 text-center">
        <div className="uppercase bg-black rounded-md px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl my-5 w-full">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </div>
        <p className="font-medium text-[20px] text-white max-w-3xl break-words mx-auto">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query} />
      </div>

      <section className="md:px-10 px-4 py-10 max-w-8xl mx-auto">
        <p className="font-semibold text-4xl text-black">
          {query ? `Search result for "${query}"` : 'All Startups'}
        </p>

        <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
          {data?.length > 0 ? (
            data.map((post) => <StartCard key={post._id} {...post} />)
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>

      <Footer />
    </>
  );
};

export default page;
