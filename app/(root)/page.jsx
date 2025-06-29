import React from 'react'
import Aurora from '../utils/Backgrounds/Aurora/Aurora'

import SearchForm from '@/components/SearchForm'
import StartCard from '@/components/StartCard';
import Footer from '@/components/Footer';

const page = async({ searchParams }) => {
  const posts = [
    {
      id: 1,
      title: "AI Startup Revolutionizing Healthcare",
      createdAt: new Date("2025-06-28T10:30:00Z"),
      views: 1234,
      author: {
        id: "1",
        name: "Farhan Yousafza"
      },
      image: "https://videos.openai.com/vg-assets/assets%2Ftask_01jyvbvtgvf0es6z4gt8ahrx9q%2F1751117663_img_1.webp?st=2025-06-29T15%3A58%3A30Z&se=2025-07-05T16%3A58%3A30Z&sks=b&skt=2025-06-29T15%3A58%3A30Z&ske=2025-07-05T16%3A58%3A30Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=b%2FiE5LAb71aJsqZqeZN5XMcy0Q3cpuZLSg4RuGhldb0%3D&az=oaivgprodscus", // avatar or user image
      category: "HealthTech",
      description: "Innovating healthcare using AI-driven diagnostics and patient analytics."
    },
    {
      id: 2,
      title: "Green Energy for Smart Cities",
      createdAt: new Date("2025-06-27T09:15:00Z"),
      views: 890,
      author: {
        id: "2",
        name: "Sara Khan"
      },
      image: "https://videos.openai.com/vg-assets/assets%2Ftask_01jyvbvtgvf0es6z4gt8ahrx9q%2F1751117663_img_1.webp?st=2025-06-29T15%3A58%3A30Z&se=2025-07-05T16%3A58%3A30Z&sks=b&skt=2025-06-29T15%3A58%3A30Z&ske=2025-07-05T16%3A58%3A30Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=b%2FiE5LAb71aJsqZqeZN5XMcy0Q3cpuZLSg4RuGhldb0%3D&az=oaivgprodscus",
      category: "CleanTech",
      description: "Providing scalable solar and wind energy solutions for sustainable urban growth."
    }
  ];
  const query = searchParams?.query || ''
  return (
    <>

    {/* Hero-Sections */}
 <div className='bg-pink-400 min-h-[530px] w-screen pattern flex items-center justify-center flex-col py-10 px-6 text-center'>
  
  <div className='uppercase bg-black rounded-md px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl my-5 w-full'>
    Pitch Your Startup, <br />
    Connect With Entrepreneurs
  </div>

  <p className='font-medium text-[20px] text-white max-w-3xl break-words mx-auto'>
    Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
  </p>

  <SearchForm query={query} />
</div>


{/* All-Start-ups */}

    <section className="md:px-10 px-4 py-10 max-w-8xl mx-auto ">
        <p className="font-semibold text-4xl text-black">
          {query ? `Search result for "${query}"` : "All Startups"}
        </p>


        <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
          {posts?.length > 0 ? (
            posts.map((post) => (
              <StartCard key={post?.id} {...post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
      
<Footer/>

      {/*  */}
    





    </>
  )
}

export default page
