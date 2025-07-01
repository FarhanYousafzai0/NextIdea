import { client } from '@/sanity/lib/client';
import { sanityFetch } from '@/sanity/lib/live';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';

const page = async ({ params }) => {
  const data = await client.fetch(STARTUP_BY_ID_QUERY, { id: params.id });

  return (
    <>
     <div className='w-full bg-pink-400 !min-h-[300px] pattern flex justify-center items-center flex-col py-10 px-6 pattern  '>



<h1 className=' uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5 rounded-md'>Power of connection</h1>

    </div>
    </>
  );
};

export default page;
