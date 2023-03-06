import React, { useState } from 'react';
import FormField from '~/components/FormField';
import useFetch from '~/hooks/fetchPost';
import preview from '~/assets/preview.png';
import Loading from '~/components/Loading';
import downloadImage from '~/util/general/downloadImage';
import getAllImages from '~/util/common/getAllImages';
const CreatePost = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [image, setImage] = useState<string>('');
  const generate_post_url = import.meta.env.VITE_CREATE_POST_URL;
  const get_post_url = import.meta.env.VITE_POST_URL;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };
  const { handleDownload } = downloadImage({ imageUrl: image });

  const { images } = getAllImages();

  console.log(images);
  const generateImage = async () => {
    setLoading(true);
    const { photo } = await useFetch({ url: generate_post_url, prompt });

    setLoading(false);
    if (photo) {
      setImage(photo);
      await useFetch({ url: get_post_url, prompt, photo: prompt });
    }

    setImage('');
  };

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
          <FormField value={prompt} onChange={onChange} setInput={setPrompt} />
          <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full lg:w-2/4 p-3 h-64 flex justify-center items-center'>
            {loading ? (
              <Loading />
            ) : (
              <>
                {image ? (
                  <img src={image} alt='preview' className='w-full h-full object-cover' />
                ) : (
                  <img
                    src={preview}
                    alt='preview'
                    className='absolute w-9/12 h-9/12 md:w-72  object-contain opacity-40'
                  />
                )}
              </>
            )}
          </div>
        </div>

        <div className='mt-5 flex gap-5'>
          <button
            type='button'
            disabled={!prompt && true}
            onClick={generateImage}
            className=' text-white bg-green-700 hover:bg-green-600 font-medium rounded-md text-l w-full sm:w-full lg:w-1/4 px-10 py-2.5 text-center'
          >
            {loading ? 'Generating...' : 'Generate'}
          </button>
          {image && !loading ? (
            <button
              type='button'
              onClick={handleDownload}
              className=' text-white bg-blue-700 hover:bg-blue-600 font-medium rounded-md text-l w-full sm:w-full lg:w-1/4 px-10 py-2.5 text-center'
            >
              Open Image
            </button>
          ) : null}
        </div>

        <div className='mt-10'>
          <p className='mt-2 text-[#666e75] text-[14px]'>
            ** Once you have created the image you want, you can share it with others in the
            community **
          </p>
          <button className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-l w-full sm:w-auto px-5 py-2.5 text-center'>
            Share with the Community
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
