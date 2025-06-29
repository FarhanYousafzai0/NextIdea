import { formatDate } from '@/lib/utils'
import { Avatar } from '@mui/material'
import { Eye } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StartCard = ({_id,title,views,createdAt,description, category,image,author}) => {
  return (
    <div className='bg-white hover:bg-pink-100 hover:border-pink-500 border-[5px] border-r-[10px] border-b-[10px] border-black py-6 px-5 rounded-[22px] shadow-200 transition-all duration-300 hover:shadow-2xl'>
      <div className='flex items-center justify-between'>
<p className='font-medium text-2xl'>{formatDate(createdAt)}</p>

<div className="flex items-center gap-2">
<Eye className='text-pink-500 ' size={30}/>
<p className='font-medium text-[1.3rem]'>50</p>
</div>





      </div>


      <div className="flex items-center justify-between">
<div className="flex flex-col gap-2 mt-6">

    <Link href={`/user/${author?._id}`}><p className=' font-medium text-[1.2rem]'>{`${author?.name}`}</p></Link>
    <Link href={`/startup/${_id}`}><p className='font-semibold text-3xl line-clamp-1'>{title}</p></Link>

</div>

<Avatar
  alt="Remy Sharp"
  src={`https://videos.openai.com/vg-assets/assets%2Ftask_01jywnaemxf45r7nmt4qatf6ms%2F1751161088_img_1.webp?st=2025-06-29T15%3A03%3A30Z&se=2025-07-05T16%3A03%3A30Z&sks=b&skt=2025-06-29T15%3A03%3A30Z&ske=2025-07-05T16%3A03%3A30Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=p7s9lHWBznJqTPOLiyAvC92MCbaZ%2F6zA%2B2hnqDjjR2U%3D&az=oaivgprodscus`}
  sx={{ width: 56, height: 56 }}
/>


      </div>


      {/* Descripotn and Image */}

<Link href={``} className="flex flex-col gap-4 mt-5">

<p className='font-normal text-[1.3rem] line-clamp-2 break-all my-3'>{description}</p>

<img src={`${image}`} alt="placeholder" className="w-full h-[170px] rounded-[10px] object-cover" />

</Link>



<div className="flex items-center justify-between mt-5">
<Link href={``} className='font-semibold capitalize'>{category}</Link>
<Link href={``} className=''><button className='bg-black px-10 py-4 rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer text-white'>Details</button></Link>


</div>
    </div>
  )
}

export default StartCard
