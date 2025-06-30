'use client'

import { Search } from 'lucide-react'
import SearchReset from './SearchReset'


const SearchForm = ({ query }) => {
  return (
    <form
      action="/"
      className="search-form max-w-3xl w-full min-h-[80px] bg-white border-[5px] border-black rounded-[80px] text-[24px] mt-8 px-5 flex items-center gap-4"
    >
      <input
        name="query"
        defaultValue={query}
        className="flex-1 font-bold placeholder:font-semibold placeholder:text-gray-500 w-full h-auto outline-none"
        placeholder="Search Startups"
      />

      <div className="flex items-center gap-2">
        {query && <SearchReset />}

        <button
          type="submit"
          className="size-[55px] rounded-full cursor-pointer bg-black text-white flex justify-center items-center hover:bg-gray-900 transition"
        >
          <Search className="size-6" />
        </button>
      </div>
    </form>
  )
}

export default SearchForm
