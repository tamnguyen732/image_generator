import React from 'react';
import { getRandomPrompt } from '~/util/general/getRandomPrompt';

interface Props {
  onChange: React.ChangeEventHandler;
  value: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const FormField = ({ onChange, setInput, value }: Props) => {
  const handlePrompts = () => {
    const randomPrompt = getRandomPrompt();

    setInput(randomPrompt);
  };
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label htmlFor='' className='block text-sm font-medium text-gray-900'>
          Prompt
        </label>
        <button
          type='button'
          onClick={handlePrompts}
          className='font-semibold text-sm bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black'
        >
          Surprise me
        </button>
      </div>
      <input
        value={value}
        onChange={onChange}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-l rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full lg:w-2/4 p-3'
      />
    </div>
  );
};
export default FormField;
