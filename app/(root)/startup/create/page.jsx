'use client';

import React, { useState } from 'react';
import { useActionState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import MDEditor from '@uiw/react-md-editor';
import { formSchema } from '@/lib/validation';
import { Toaster, toast } from 'sonner';
import { createStartup } from '@/lib/actions';


const handleSubmit = async (prevState, formData) => {

 
  const formValues = {
    title: formData.get("title"),
    description: formData.get("description"),
    category: formData.get("category"),
    link: formData.get("link"),
    pitch: formData.get("pitch"),
  };

  try {
    await formSchema.parseAsync(formValues);
    console.log('Form submitted:', formValues);

    const result = await createStartup(prevState,formData,pitch)
    toast.success("Form submitted successfully");
    navigate.push(`/startup/${result._id}`)
  } 
  
  
  
  catch (err) {
    const formattedErrors = err?.format?.();
    toast.error("Please fix the form errors");
    return { status: "ERROR", error: formattedErrors };
  }
};

export default function Page() {
  const [pitch, setPitch] = useState('');
  const [state, formAction, isPending] = useActionState(handleSubmit, {
    status: "INITIAL",
    error: null,
  });

  return (
    <>
      <Toaster />

      <div className='w-full bg-pink-400 !min-h-[300px] pattern flex justify-center items-center flex-col py-10 px-6'>
        <h1 className='uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5 rounded-md'>
          Submit your startup
        </h1>
      </div>

      <form action={formAction} className='max-w-2xl mx-auto bg-white my-10 space-y-8 px-6'>

        {/* Title */}
        <div>
          <label htmlFor="title" className='font-bold text-[18px] text-black uppercase'>Title</label>
          <Input
            name='title'
            id='title'
            required
            placeholder='Enter your startup title'
            className='border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-5 placeholder:text-black-300'
          />
          {state?.error?.title && <p className='text-red-500 mt-2 ml-5'>{state.error.title._errors[0]}</p>}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className='font-bold text-[18px] text-black uppercase'>Description</label>
          <Textarea
            name='description'
            id='description'
            required
            placeholder='Describe your startup'
            className='border-[3px] border-black px-5 py-5 text-[16px] text-black font-semibold rounded-2xl mt-5 placeholder:text-black-300 resize-none'
          />
          {state?.error?.description && <p className='text-red-500 mt-2 ml-5'>{state.error.description._errors[0]}</p>}
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className='font-bold text-[18px] text-black uppercase'>Category</label>
          <Input
            name='category'
            id='category'
            required
            placeholder='e.g. AI, EdTech, Finance'
            className='border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-5 placeholder:text-black-300'
          />
          {state?.error?.category && <p className='text-red-500 mt-2 ml-5'>{state.error.category._errors[0]}</p>}
        </div>

        {/* Image Link */}
        <div>
          <label htmlFor="link" className='font-bold text-[18px] text-black uppercase'>Image</label>
          <Input
            type='url'
            name='link'
            id='link'
            required
            placeholder='Enter your startup image URL'
            className='border-[3px] border-black px-5 py-7 text-[16px] text-black font-semibold rounded-full mt-5 bg-white'
          />
          {state?.error?.link && <p className='text-red-500 mt-2 ml-5'>{state.error.link._errors[0]}</p>}
        </div>

        {/* Pitch */}
        <div data-color-mode="light">
          <label htmlFor="pitch" className='font-bold text-[18px] text-black uppercase'>Pitch</label>
          <MDEditor
            value={pitch}
            onChange={setPitch}
            preview='edit'
            textareaProps={{
              name: 'pitch',
              placeholder: "Briefly describe your pitch and what problem it solves",
            }}
            height={300}
            previewOptions={{ disallowedElements: ['style'] }}
            style={{ borderRadius: 20, overflow: 'hidden', border: '3px solid black' }}
          />
          {state?.error?.pitch && <p className='text-red-500 mt-2 ml-5'>{state.error.pitch._errors[0]}</p>}
        </div>

        <button
          type='submit'
          disabled={isPending}
          className='bg-pink-400 border-[4px] cursor-pointer transition-transform hover:scale-95 duration-300 border-black rounded-full p-5 min-h-[70px] w-full font-bold text-[18px] text-white'>
          {isPending ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </>
  );
}
