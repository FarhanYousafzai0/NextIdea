import React from 'react'
import SearchForm from './SearchForm'

const Hero = async ({ searchParams }) => {
  const query = searchParams?.query || ''

  return (
    <div className='w-full bg-pink-400 min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6'>
      <button className='font-bold md:px-7 md:py-5 p-4 bg-yellow-500 rounded-md'>
        PITCH, GROW, VOTE
      </button>

      <div className='uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5'>
        Pitch Your Startup, <br />
        Connect With Entrepreneurs
      </div>

      <p className='font-medium text-[20px] text-white !max-w-3xl text-center break-words'>
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
      </p>

      <SearchForm query={query} />
    </div>




  )
}

export default Hero
