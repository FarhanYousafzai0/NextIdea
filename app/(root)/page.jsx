import React from 'react'
import Aurora from '../utils/Backgrounds/Aurora/Aurora'

import SearchForm from '@/components/SearchForm'
import StartCard from '@/components/StartCard';

const page = async({ searchParams }) => {
  const posts = [
    {
      id: 1,
      title: "AI Startup Revolutionizing Healthcare",
      createdAt: new Date("2025-06-28T10:30:00Z"),
      views: 1234,
      author: {
        id: "u1",
        name: "Farhan Yousafza"
      },
      image: "https://via.placeholder.com/40", // avatar or user image
      category: "HealthTech",
      description: "Innovating healthcare using AI-driven diagnostics and patient analytics."
    },
    {
      id: 2,
      title: "Green Energy for Smart Cities",
      createdAt: new Date("2025-06-27T09:15:00Z"),
      views: 890,
      author: {
        id: "u2",
        name: "Sara Khan"
      },
      image: "https://via.placeholder.com/40",
      category: "CleanTech",
      description: "Providing scalable solar and wind energy solutions for sustainable urban growth."
    }
  ];
  const query = searchParams?.query || ''
  return (
    <>
 <section className='bg-pink-400 min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6 text-center'>
  <button className='font-bold md:px-7 md:py-5 p-4 bg-yellow-500 rounded-md'>
    PITCH, GROW, VOTE
  </button>

  <div className='uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl my-5 w-full'>
    Pitch Your Startup, <br />
    Connect With Entrepreneurs
  </div>

  <p className='font-medium text-[20px] text-white max-w-3xl break-words mx-auto'>
    Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
  </p>

  <SearchForm query={query} />
</section>


    <section className="px-6 py-10 max-w-7xl mx-auto">
        <p className="font-semibold text-[30px] text-black">
          {query ? `Search result for "${query}"` : "All Startups"}
        </p>


        <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
          {posts?.length > 0 ? (
            posts.map((index,post) => (
              <StartCard key={index} posts={posts} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
      
    





    </>
  )
}

export default page
