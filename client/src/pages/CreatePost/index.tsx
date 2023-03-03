import React from 'react';
import FormField from '~/components/FormField';

const CreatePost = () => {
  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>Create</h1>
        <p className='mt-2 text-[#666e75] text-[14px] max-w-[500px]'>
          Generate an imaginative image through DALL-E AI and share it with the community
        </p>
      </div>

      <form className='mt-16 max-w-3xl'>
        <div className='flex flex-col gap-5 '>
          <FormField />

          <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full lg:w-2/4 p-3 h-64 flex justify-center items-center'>
            <img src='' alt='preview' className='w-9/12 h-9/12 object-contain opacity-40' />
          </div>
        </div>

        <div className='mt-5 flex gap-5'>
          <button
            type='button'
            className=' text-white bg-green-700 font-medium rounded-md text-l w-full sm:w-full lg:w-1/4 px-10 py-2.5 text-center'
          >
            Generate
          </button>
        </div>

        <div className='mt-10'>
          <p className='mt-2 text-[#666e75] text-[14px]'>
            ** Once you have created the image you want, you can share it with others in the
            community **
          </p>
          <button
            type='submit'
            className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-l w-full sm:w-auto px-5 py-2.5 text-center'
          >
            Share with the Community
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
