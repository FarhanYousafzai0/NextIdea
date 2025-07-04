import { formatDate } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';

import Image from 'next/image';
import Link from 'next/link';
import markdownit from 'markdown-it';
import { notFound } from 'next/navigation';
import { Avatar } from '@mui/material';
import View from '@/components/View.server';

const page = async ({ params }) => {
  const id = params.id;
  const data = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if (!data) return notFound();

  const md = markdownit();
  const ParseContent = md.render(data?.pitch || '');

  return (
    <>
      {/* Header */}
      <div className="w-full bg-pink-400 min-h-[300px] pattern flex justify-center items-center flex-col py-10 px-6">
        <button className="bg-yellow-400 rounded-md text-black font-semibold px-6 py-4">
          {formatDate(data?._createdAt)}
        </button>

        <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5 rounded-md">
          Power of connection
        </h1>

        <p className="text-[1.1rem] text-center line-clamp-6 text-white">
          {data?.description}
        </p>
      </div>

      {/* Pitch Section */}
      <div className="px-6 py-10 max-w-7xl mx-auto">
        <Image
          src={data?.image}
          alt="thumbnail"
          width={1200}
          height={700}
          className="w-full h-auto rounded-xl"
        />

        {/* Author & Category */}
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <Link
              href={`/user/${data.author?._id}`}
              className="flex gap-2 items-center mb-3"
            >
              <Avatar
                alt={data?.author?.name}
                src={data?.author?.image}
                sx={{ width: 56, height: 56 }}
              />
              <div>
                <p className="font-medium text-[20px] text-black">{data?.author?.name}</p>
                <p className="text-[12px] text-black">@{data?.author?.username}</p>
              </div>
            </Link>
            <p className="font-medium text-[16px] bg-pink-100 px-4 py-2 rounded-full">
              {data?.category}
            </p>
          </div>

          {/* Pitch Details */}
          <h3 className="text-[30px] font-extrabold text-black">Pitch Details</h3>

          {ParseContent ? (
            <article
              className="prose max-w-4xl font-work-sans break-words"
              dangerouslySetInnerHTML={{ __html: ParseContent }}
            />
          ) : (
            <p className="text-red-300">Content Not Found</p>
          )}
        </div>

        <hr className="border-dotted bg-zinc-400 max-w-4xl my-10 mx-auto" />
      </div>

      {/* Views (Server Component) */}
      <View id={id} />
    </>
  );
};

export default page;
