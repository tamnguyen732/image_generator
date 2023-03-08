import React from 'react';
interface Props {
  photo: string;
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
}

const Card = ({ photo, prompt, setPrompt }: Props) => {
  const handleClickPrompt = (prompt: string) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    setPrompt(prompt);
  };
  return (
    <div className='rounded-xl lg:w-50 lg:h-50 group relative shadow-card hover:shadow-cardhover card'>
      <img className='w-full h-auto object-cover rounded-xl' src={photo} alt={prompt} />
      <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md'>
        <p className='text-white text-sm overflow-y-auto prompt'>Try this ideal</p>

        <div className='cursor-pointer mt-5 flex justify-between items-center gap-2'>
          <div className='flex items-center gap-2'>
            <div
              onClick={() => handleClickPrompt(prompt)}
              className='w-full h-50  p-5 rounded-2xl object-cover bg-green-700 flex justify-center items-center text-white text-lg font-bold'
            >
              {prompt}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
