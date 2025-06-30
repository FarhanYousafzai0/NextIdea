import { client } from '@/sanity/lib/client';
import { sanityFetch } from '@/sanity/lib/live';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';

const page = async ({ params }) => {
  const data = await client.fetch(STARTUP_BY_ID_QUERY, { id: params.id });

  return (
    <div>
      <h2>This is the startup id: {data._id}</h2>
      <p>{data.title}</p>
    </div>
  );
};

export default page;
