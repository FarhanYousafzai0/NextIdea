import { formatDate } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import { sanityFetch } from '@/sanity/lib/live';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import { AvatarGroup } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const page = async ({ params }) => {
  const data = await client.fetch(STARTUP_BY_ID_QUERY, { id: params.id });



  return (
    <>
     <div className='w-full bg-pink-400 !min-h-[300px] pattern flex justify-center items-center flex-col py-10 px-6 pattern  '>

<button className='bg-yellow-400 rounded-md text-black font-semibold px-6 py-4 '>{formatDate(data?._createdAt)}</button>

<h1 className=' uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5 rounded-md'>Power of connection</h1>

<p className=' text-[1.1rem]  text-center line-clamp-10 text-white'>{data?.description}</p>
    </div>


{/* Pitch -Section */}

<div className='px-6 py-10 max-w-7xl mx-auto '>

<img
          src={data?.image || "Image is not found"}
          alt="thumbnail"
          className="w-full h-auto rounded-xl"
        />

{/* User-detals and Pitch. */}

<div className='space-y-5 mt-10 max-w-4xl mx-auto '> 
<div className="flex items-center justify-between ">
<Link
              href={`/user/${data.author?._id}`}
              className="flex gap-2 items-center mb-3"
            >
              <Image
                src="https://videos.openai.com/vg-assets/assets%2Ftask_01jywnaemxf45r7nmt4qatf6ms%2F1751161088_img_1.webp?st=2025-06-29T15%3A03%3A30Z&se=2025-07-05T16%3A03%3A30Z&sks=b&skt=2025-06-29T15%3A03%3A30Z&ske=2025-07-05T16%3A03%3A30Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=p7s9lHWBznJqTPOLiyAvC92MCbaZ%2F6zA%2B2hnqDjjR2U%3D&az=oaivgprodscus"
                alt="avatar"
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />

              <div>
                <p className="font-medium text-[20px] text-black">{data?.author?.name}</p>
                <p className=" text-[12px] text-black !text-black-300">
                  @{data?.author?.username}
                </p>
              </div>
            </Link>
            <p className='font-medium text-[16px] bg-pink-100 px-4 py-2 rounded-full'>{data?.category}</p>
</div>

{/* Pitch-Details */}
<h3 className="text-[30px] font-extrabold text-black">Pitch Details</h3>
</div>







</div>

    </>
  );
};

export default page;
